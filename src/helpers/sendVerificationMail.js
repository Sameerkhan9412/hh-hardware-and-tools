import nodemailer from "nodemailer";
export async function sendVerificationMail(email, username, verifyCode) {
  try {
    let transporter = await nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_MAIL,
        pass: process.env.GOOGLE_PASS,
      },
    });
    const emailHtml = `
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Verification</title>
        </head>
        <body>
          <h2>Hello ${username},</h2>
          <p>Thank you for registering on HH-hardware & tools. Your email verification code is:</p>
          <h3>${verifyCode}</h3>
          <p>This code is valid for one hour.</p>
          <p>Best regards,</p>
          <p>HH-HardWare Team</p>
        </body>
      </html>
    `;

    let response = await transporter.sendMail({
      from: `${process.env.MY_MAIL}`,
      to: email,
      subject: "hh hardware & tools account verification code",
      html: emailHtml,
    });
    return { success: true, message: "Verification email reponse sent" };
  } catch (error) {
    console.log("Error sending verification email", error);
    return { success: false, message: "Failed to send verification email" };
  }
}
