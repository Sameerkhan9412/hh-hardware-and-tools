import nodemailer from 'nodemailer';
export async function queryResponseMail (formData) {
  try {
    let transporter = await nodemailer.createTransport ({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_MAIL,
        pass: process.env.GOOGLE_PASS,
      },
    });
    const {name,email,mobile,product,location,message}=formData;
    const emailHtml = `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            background: #ffffff;
            margin: 20px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333;
        }
        p {
            font-size: 16px;
            color: #555;
            line-height: 1.6;
        }
        .details {
            background: #f9f9f9;
            padding: 10px;
            border-left: 4px solid #28a745;
            margin: 10px 0;
            border-radius: 5px;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #777;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out to <strong>HH-Hardware & Tools</strong>. We have received your inquiry and will get back to you as soon as possible.</p>

        <div class="details">
            <p><strong>Your Inquiry Details:</strong></p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Product:</strong> ${product}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>

        <p>Our team will review your request and respond shortly. If you need urgent assistance, feel free to contact us directly.</p>

        <p>Best regards,</p>
        <p><strong>HH-Hardware Team</strong></p>

        <div class="footer">
            <p>&copy; 2025 HH-Hardware & Tools. All rights reserved.</p>
        </div>
    </div>
</body>
</html>


    `;
    const ownEmail=process.env.GOOGLE_MAIL;
    let response = await transporter.sendMail ({
      from:ownEmail,
      to: email,
      subject: 'Thank You for Contacting HH-Hardware & Tools',
      html: emailHtml,
    });

    return {success: true, message: 'Verification email reponse sent'};
  } catch (error) {
    console.log ('Error sending verification email', error);
    return {success: false, message: 'Failed to send verification email'};
  }
}
