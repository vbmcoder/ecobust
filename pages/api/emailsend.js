// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, country, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service provider here
      host: 'smtp.elasticemail.com',
      port: 2525,
      secure: false, // true for 2525, false for other ports
      auth: {
        user: `${process.env.mymail}`,
        pass: `${process.env.mypass}`,
      },
    });

    try {
      // Send the email
      const info = await transporter.sendMail({
        from: 'cp566997@gmail.com',
        to: 'infoecobust@gmail.com',
        subject: 'Ecobust Enquiry',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCountry: ${country}\n\n${message}`,
      });

      console.log('Message sent: %s', info.messageId);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error occurred while sending email:', error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
