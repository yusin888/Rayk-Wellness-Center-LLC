// app/actions/sendEmail.ts
'use server'

import { Resend } from 'resend';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: EmailData) {
  const { name, email, subject, message } = data;

  if (!process.env.RECIPIENT_EMAIL) {
    console.error('RECIPIENT_EMAIL is not set');
    return { success: false, error: 'Recipient email is not configured' };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return { success: false, error: 'Resend API key is not configured' };
  }

  try {
    console.log('Attempting to send email...');
    const { data: resData, error } = await resend.emails.send({
      from: 'Your App <onboarding@resend.dev>', // Use your verified domain here once set up
      to: [process.env.RECIPIENT_EMAIL],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    }

    console.log('Email sent successfully:', resData);
    return { success: true };
  } catch (error) {
    console.error('Caught error in sendEmail function:', error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'An unexpected error occurred' };
  }
}