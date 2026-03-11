import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

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
