import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, country, message } = req.body;

    // Nodemailer transporter
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
      // Send the inquiry email
      const info = await transporter.sendMail({
        from: 'cp566997@gmail.com', 
        to: 'infoecobust@gmail.com', // Receiver's email
        subject: 'Ecobust Enquiry',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCountry: ${country}\n\n${message}`,
      });

      console.log('Inquiry message sent: %s', info.messageId);

      // Send the thank you email
      const thankYouInfo = await transporter.sendMail({
        from: 'cp566997@gmail.com',
        to: email, // Sending thank you email to the user who submitted the inquiry
        subject: 'Thank you for your inquiry',
        text: `Dear ${name},\n\nThank you for contacting us. We have received your inquiry and will get back to you as soon as possible.\n\nBest Regards,\nYour Company Name`,
      });

      console.log('Thank you message sent: %s', thankYouInfo.messageId);

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
