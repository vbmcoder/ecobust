// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, country, message } = req.body;

      // Create a nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Configure your email service provider here
        // Example for Gmail:
        service: 'Gmail',
        auth: {
          user: 'cp566997@gmail.com',
          pass: 'redminote8pro'
        }
      });

      // Send mail with defined transport object
      await transporter.sendMail({
        from: 'Your Name <your-email@gmail.com>',
        to: 'vaibhav111abc@gmail.com', // Change this to the recipient's email
        subject: 'New Enquiry',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCountry: ${country}\nMessage: ${message}`
      });

      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
