import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { firstName, lastName, mobile, email, message } = await request.json();

        // Validation
        if (!firstName || !lastName || !mobile || !email || !message) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Send to admin
            replyTo: email, // Allow reply to sender
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Mobile: ${mobile}
Email: ${email}

Message:
${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E5E1EC; border-radius: 10px;">
          <h2 style="color: #3E2A4F; border-bottom: 3px solid #F2C14E; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background-color: #F1EDF7; font-weight: bold; width: 120px; border-radius: 5px 0 0 5px;">Name</td>
              <td style="padding: 10px; background-color: #FAF8F5; border-radius: 0 5px 5px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr><td colspan="2" style="height: 10px;"></td></tr>
            <tr>
              <td style="padding: 10px; background-color: #F1EDF7; font-weight: bold; border-radius: 5px 0 0 5px;">Mobile</td>
              <td style="padding: 10px; background-color: #FAF8F5; border-radius: 0 5px 5px 0;"><a href="tel:${mobile}" style="color: #3E2A4F;">${mobile}</a></td>
            </tr>
            <tr><td colspan="2" style="height: 10px;"></td></tr>
            <tr>
              <td style="padding: 10px; background-color: #F1EDF7; font-weight: bold; border-radius: 5px 0 0 5px;">Email</td>
              <td style="padding: 10px; background-color: #FAF8F5; border-radius: 0 5px 5px 0;"><a href="mailto:${email}" style="color: #3E2A4F;">${email}</a></td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #FAF8F5; border-left: 4px solid #F2C14E; border-radius: 0 10px 10px 0;">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #3E2A4F;">Message:</p>
            <p style="margin: 0; color: #4A4A4A; line-height: 1.6;">${message}</p>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #7A7A7A; text-align: center;">
            This email was sent from The Veda Toddlers website contact form.
          </p>
        </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending contact email:', error);
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
