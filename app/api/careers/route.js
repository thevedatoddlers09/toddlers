import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';

// Disable body parsing for file uploads
export const config = {
    api: {
        bodyParser: false,
    },
};

// Initialize Google Drive API
const getDriveClient = () => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    return google.drive({ version: 'v3', auth });
};

// Convert buffer to readable stream
const bufferToStream = (buffer) => {
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
};

export async function POST(request) {
    try {
        const formData = await request.formData();

        // Extract form fields
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const position = formData.get('position');
        const message = formData.get('message') || '';
        const resumeFile = formData.get('resume');

        // Validate required fields
        if (!name || !email || !phone || !position) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (!resumeFile) {
            return NextResponse.json(
                { error: 'Resume file is required' },
                { status: 400 }
            );
        }

        // Validate file type
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        if (!allowedTypes.includes(resumeFile.type)) {
            return NextResponse.json(
                { error: 'Invalid file type. Please upload PDF or DOC/DOCX' },
                { status: 400 }
            );
        }

        // Check file size (5MB limit)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (resumeFile.size > maxSize) {
            return NextResponse.json(
                { error: 'File size exceeds 5MB limit' },
                { status: 400 }
            );
        }

        // Check if Google Drive is configured
        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_DRIVE_FOLDER_ID) {
            console.error('Google Drive not configured. Saving application details locally.');

            // For now, just log the application (you can implement email notification here)
            console.log('New Application Received:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            console.log('Position:', position);
            console.log('Message:', message);
            console.log('Resume:', resumeFile.name);

            return NextResponse.json({
                success: true,
                message: 'Application submitted successfully! We will contact you soon.',
                note: 'Google Drive not configured - application logged to server.'
            });
        }

        // Get Google Drive client
        const drive = getDriveClient();

        // Convert file to buffer
        const bytes = await resumeFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create filename with applicant info and timestamp
        const timestamp = new Date().toISOString().split('T')[0];
        const sanitizedName = name.replace(/[^a-zA-Z0-9]/g, '_');
        const sanitizedPosition = position.replace(/[^a-zA-Z0-9]/g, '_');
        const fileExtension = resumeFile.name.split('.').pop();
        const fileName = `${timestamp}_${sanitizedName}_${sanitizedPosition}.${fileExtension}`;

        // Upload to Google Drive
        const fileMetadata = {
            name: fileName,
            parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
            description: `
Application Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Position: ${position}
- Message: ${message || 'N/A'}
- Original File: ${resumeFile.name}
- Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            `.trim()
        };

        const media = {
            mimeType: resumeFile.type,
            body: bufferToStream(buffer),
        };

        const response = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: 'id, name, webViewLink',
        });

        console.log('Resume uploaded to Google Drive:', response.data);

        // Create info file with applicant details
        const infoContent = `
APPLICATION DETAILS
==================
Name: ${name}
Email: ${email}
Phone: ${phone}
Position Applied: ${position}
Message: ${message || 'N/A'}
Resume File: ${fileName}
Submitted On: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
Google Drive Link: ${response.data.webViewLink || 'N/A'}
        `.trim();

        const infoFileName = `${timestamp}_${sanitizedName}_${sanitizedPosition}_INFO.txt`;

        await drive.files.create({
            requestBody: {
                name: infoFileName,
                parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
                mimeType: 'text/plain',
            },
            media: {
                mimeType: 'text/plain',
                body: Readable.from([infoContent]),
            },
            fields: 'id',
        });

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully! We will review your resume and contact you soon.',
            fileId: response.data.id,
        });

    } catch (error) {
        console.error('Error processing application:', error);
        return NextResponse.json(
            { error: 'Failed to process application. Please try again.' },
            { status: 500 }
        );
    }
}
