import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { MdTextsms } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Footer() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '+91', // Assuming this is the default value
        country: '',
        message: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch('/api/emailsend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitting(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '+91',
                    country: '', 
                    message: ''
                });
                document.querySelector(".footeremailsuccess").classList.add('opensuc');
                setMessage('✅️ Email sent successfully');
                setTimeout(() => {
                    setMessage(null);
                    document.querySelector(".footeremailsuccess").classList.remove('opensuc');
                }, 5000);
                setSubmitting(false);
            } else {
                document.querySelector(".footeremailsuccess").classList.add('opensuc');
                setMessage('❌ Failed to send email, Please Try again...');
                setSubmitting(false);
                
                setTimeout(() => {
                    setMessage(null);
                    document.querySelector(".footeremailsuccess").classList.remove('opensuc');
                }, 5000);
            }
        } catch (error) {
            setMessage('Error occurred:', error.message);
        }
    };
    return <>
        <div className="footeremailsuccess">
            {message && <h4><p>{message}</p></h4>}
        </div>
        <footer className="footer">
            <div className="footer_sec">
                <div className='footer_info'>
                    <div className="f_logo_info">
                        <img src="/img/blacklogo.png" alt="Ecobust" />
                        <ul >
                            <li><IoLocationSharp />Jodhpur, Rajasthan</li>
                            <li><FaPhoneVolume />(+91)-9929031735, (+91)-9929711198</li>
                            <li><IoMailOpen />info@ecobust.in</li>
                            <li><MdTextsms />GST NO. : 08DLJPK8771H1ZI</li>
                        </ul>
                        <h4>Follow Us:</h4>
                        <div className="f_icons" >
                            <div className="f_icon">
                                <Link href='/'><FaFacebookF /></Link>
                            </div>
                            <div className="f_icon">
                                <Link href='/'><FaXTwitter /></Link>
                            </div>
                            <div className="f_icon">
                                <Link href='/'><FaInstagram /></Link>
                            </div>
                            <div className="f_icon">
                                <Link href='/'><FaLinkedinIn /></Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="contact_form" >
                    <h2><span>Quick</span> Enquiry</h2>
                    {/* {message && <h4><p>{message}</p></h4>} */}
                    <form className="contact_f" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label htmlFor="name" className="name">1. Name:</label>
                            <input placeholder="Enter your name" type="text" className="input" name="name" value={formData.name} onChange={handleChange} required />
                            <div className="underline"></div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="email" className="name">2. Email:</label>
                            <input placeholder="Enter Email" type="email" className="input" name="email" value={formData.email} onChange={handleChange} required />
                            <div className="underline"></div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="name" className="name">3. Phone:</label>
                            <input placeholder="Enter Phone No" type="text" className="input" name="phone" value={formData.phone} onChange={handleChange} required />
                            <div className="underline"></div>
                        </div>
                        <div className="cn_in">
                            <label htmlFor="">4. Your Message:</label>
                            <textarea placeholder='Your Message' name="message" cols="100" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send Now'}</button>
                    </form>

                </div>
            </div>
            <div className="copyright_sec flex flex-sb flex-wrap">
                <p>All Rights Reserved. Manveer Group of Industries (Terms of Use)</p>
                <p>Developed & Managed By <Link href={'/'}>Ecobust.In</Link> Pvt. Ltd.</p>
            </div>
        </footer>
    </>
}