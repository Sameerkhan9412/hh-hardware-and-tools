import nodemailer from 'nodemailer';

export async function sendContactDetails(formData) {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_MAIL,
        pass: process.env.GOOGLE_PASS,
      },
    });

    const { name, email, mobile, product, location, message } = formData;
    const ownEmail = process.env.GOOGLE_MAIL; // Your email address


    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
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
                  border-left: 4px solid #ff4d4d;
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
              <h2>New Contact Form Submission</h2>
              <p>You have received a new message from the contact form on your website.</p>
              
              <div class="details">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Mobile:</strong> ${mobile}</p>
                  <p><strong>Product:</strong> ${product}</p>
                  <p><strong>Location:</strong> ${location}</p>
                  <p><strong>Message:</strong></p>
                  <p>${message}</p>
              </div>

              <p>Please respond to this inquiry as soon as possible.</p>

              <div class="footer">
                  <p>Best regards,</p>
                  <p>HH-Hardware Team</p>
              </div>
          </div>
      </body>
      </html>
    `;

    let response = await transporter.sendMail({
      from: `"HH-Hardware & Tools" <${process.env.GOOGLE_MAIL}>`,
      to: ownEmail, // Send email to yourself
      subject: 'New Contact Form Submission from HH-Hardware & Tools',
      html: emailHtml,
    });

    console.log("Contact details sent successfully:", response.messageId);

    return { success: true, message: 'Contact form details sent successfully' };
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return { success: false, message: 'Failed to send contact form email' };
  }
}
