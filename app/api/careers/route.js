import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

        // 1. Upload Resume to Supabase Storage ('resumes' bucket)
        const timestamp = Date.now();
        const sanitizedName = name.replace(/[^a-zA-Z0-9]/g, '_');
        const fileExtension = resumeFile.name.split('.').pop();
        const fileName = `${timestamp}_${sanitizedName}.${fileExtension}`;

        const { data: storageData, error: storageError } = await supabase
            .storage
            .from('resumes')
            .upload(fileName, resumeFile, {
                cacheControl: '3600',
                upsert: false
            });

        if (storageError) {
            console.error('Supabase Storage Error:', storageError);
            return NextResponse.json(
                { error: 'Failed to upload resume file.' },
                { status: 500 }
            );
        }

        // 2. Get the public URL for the uploaded resume
        const { data: publicUrlData } = supabase
            .storage
            .from('resumes')
            .getPublicUrl(fileName);

        const resumeUrl = publicUrlData.publicUrl;

        // 3. Insert Application Record into Supabase Database
        const { data: dbData, error: dbError } = await supabase
            .from('career_applications')
            .insert([
                {
                    name,
                    email,
                    phone,
                    position,
                    message,
                    resume_url: resumeUrl
                }
            ]);

        if (dbError) {
            console.error('Supabase Database Error:', dbError);
            // Even if DB fails, the file uploaded, but we return an error to user
            return NextResponse.json(
                { error: 'Failed to save application details.' },
                { status: 500 }
            );
        }

        // 4. Send Email Notification to Admin
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_APP_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });

            const mailOptions = {
                from: process.env.GMAIL_USER,
                to: process.env.GMAIL_USER, // Send to admin
                replyTo: email, // Allow admin to hit "Reply" and email the applicant directly
                subject: `New Career Application: ${name} - ${position}`,
                text: `
New Career Application Received!

Applicant Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Position: ${position}

Message / Cover Letter:
${message || 'No additional message provided.'}

Resume Link:
${resumeUrl}
                `,
                html: `
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E5E1EC; border-radius: 10px;">
                    <h2 style="color: #3E2A4F; border-bottom: 3px solid #6C5CE7; padding-bottom: 10px;">New Job Application Received</h2>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                      <tr>
                        <td style="padding: 10px; background-color: #F8F9FA; font-weight: bold; width: 120px; border-radius: 5px 0 0 5px;">Position</td>
                        <td style="padding: 10px; background-color: #FFFFFF; border-radius: 0 5px 5px 0; color: #6C5CE7; font-weight: bold;">${position}</td>
                      </tr>
                      <tr><td colspan="2" style="height: 10px;"></td></tr>
                      <tr>
                        <td style="padding: 10px; background-color: #F8F9FA; font-weight: bold; border-radius: 5px 0 0 5px;">Applicant</td>
                        <td style="padding: 10px; background-color: #FFFFFF; border-radius: 0 5px 5px 0;">${name}</td>
                      </tr>
                      <tr><td colspan="2" style="height: 10px;"></td></tr>
                      <tr>
                        <td style="padding: 10px; background-color: #F8F9FA; font-weight: bold; border-radius: 5px 0 0 5px;">Email</td>
                        <td style="padding: 10px; background-color: #FFFFFF; border-radius: 0 5px 5px 0;"><a href="mailto:${email}" style="color: #3E2A4F;">${email}</a></td>
                      </tr>
                      <tr><td colspan="2" style="height: 10px;"></td></tr>
                      <tr>
                        <td style="padding: 10px; background-color: #F8F9FA; font-weight: bold; border-radius: 5px 0 0 5px;">Phone</td>
                        <td style="padding: 10px; background-color: #FFFFFF; border-radius: 0 5px 5px 0;"><a href="tel:${phone}" style="color: #3E2A4F;">${phone}</a></td>
                      </tr>
                    </table>
                    
                    <div style="text-align: center; margin: 30px 0;">
                      <a href="${resumeUrl}" style="background-color: #6C5CE7; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">View Resume (PDF)</a>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #F8F9FA; border-left: 4px solid #6C5CE7; border-radius: 0 10px 10px 0;">
                      <p style="margin: 0 0 10px 0; font-weight: bold; color: #3E2A4F;">Message / Cover Letter:</p>
                      <p style="margin: 0; color: #4A4A4A; line-height: 1.6; white-space: pre-wrap;">${message || '<span style="color: #999; font-style: italic;">No additional message provided.</span>'}</p>
                    </div>
                    
                    <p style="margin-top: 30px; font-size: 12px; color: #7A7A7A; text-align: center;">
                      This notification was sent from The Veda Toddlers careers page.
                    </p>
                  </div>
                `,
            };

            await transporter.sendMail(mailOptions);
            console.log('Admin notification email sent successfully.');
        } catch (emailError) {
            console.error('Failed to send admin email notification:', emailError.message);
            // We do not fail the request if the email fails, since the data IS in Supabase
        }

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully! We will review your resume and contact you soon.',
            resumeUrl: resumeUrl
        });

    } catch (error) {
        console.error('Error processing application:', error);
        return NextResponse.json(
            { error: 'Failed to process application. Please try again.' },
            { status: 500 }
        );
    }
}
