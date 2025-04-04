// app/api/send-email/route.ts

import { queryResponseMail } from '@/helpers/queryResponseMail';
import { sendContactDetails } from '@/helpers/sendContactDetails';
import { sendVerificationMail } from '@/helpers/sendVerificationMail';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const formData = body;

//   // Replace with your actual SMTP credentials
//   const transporter = nodemailer.createTransport({
//     service: 'gmail', // e.g., 'gmail' or use custom SMTP host
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     const mail = await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_TO, // the recipient (your email)
//       subject: `New message from ${name}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Mobile:</strong> ${mobile}</p>
//         <p><strong>Product:</strong> ${product}</p>
//         <p><strong>Location:</strong> ${location}</p>
//         <p><strong>Message:</strong><br/> ${message}</p>
//       `,
//     });
try{
const emailResponse = await sendContactDetails(
      formData
    );
    
  const emailfeedback = await queryResponseMail(
      formData
    );

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
