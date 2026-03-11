import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { phone, parentName, childName, childAge, email, preferredLocation } = body;

        if (!phone) {
            return NextResponse.json(
                { message: 'Phone number is required' },
                { status: 400 }
            );
        }

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

        // Build detail rows dynamically (only include fields that have values)
        const details = [
            { label: "Parent's Name", value: parentName },
            { label: "Child's Name", value: childName },
            { label: "Child's Age", value: childAge },
            { label: 'Phone Number', value: phone },
            { label: 'Email', value: email },
            { label: 'Preferred Location', value: preferredLocation },
        ].filter(d => d.value);

        const textContent = details.map(d => `${d.label}: ${d.value}`).join('\n');

        const htmlRows = details.map(d => `
            <tr>
              <td style="padding: 10px 15px; background-color: #F1EDF7; font-weight: bold; width: 160px; border-radius: 5px 0 0 5px;">${d.label}</td>
              <td style="padding: 10px 15px; background-color: #FAF8F5; border-radius: 0 5px 5px 0;">${d.value}</td>
            </tr>
            <tr><td colspan="2" style="height: 8px;"></td></tr>
        `).join('');

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: `New Admissions Inquiry${parentName ? ` from ${parentName}` : ''}`,
            text: `New Admissions Inquiry\n\n${textContent}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E5E1EC; border-radius: 10px;">
          <h2 style="color: #3E2A4F; border-bottom: 3px solid #F2C14E; padding-bottom: 10px;">New Admissions Inquiry</h2>
          <p style="font-size: 14px; color: #666; margin-bottom: 20px;">A new callback request has been received from the website.</p>
          <table style="width: 100%; border-collapse: collapse;">
            ${htmlRows}
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #7A7A7A; text-align: center;">
            This email was sent from The Veda Toddlers website admissions form.
          </p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error.message);
        console.error('Full error:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
