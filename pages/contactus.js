import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import styles from "../styles/Contactus.module.css"
import { useState } from "react";

export default function Contactus() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '+91', // Assuming this is the default value
        country: '', // Assuming this is the default value
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
                setMessage('✅️ Email sent successfully');
                setSubmitting(false);

                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            } else {
                setMessage('❌ Failed to send email, Please Try again...');
                setSubmitting(false);

                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            }
        } catch (error) {
            setMessage('Error occurred:', error.message);
        }
    };
    return <>
        <div className={styles.contact_cont}>
            <div className={styles.bg_contact}>
                <h1>Contact Us</h1>
            </div>
            <div className={styles.get_intouch}>
                <h4>GET IN TOUCH</h4>
                <h1>ASK ANYTHING</h1>
                <p>We are here to answer all of your questions. Feel free to ask... We will answer it shortly...</p>
            </div>
            <div className={styles.contact_container}>


                <div className={styles.contact_submit_form}>
                    <div className={styles.contact_from}>
                        <h3>Contact Us</h3>
                        {message && <h4><p>{message}</p></h4>}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="country">Subject</label>
                                <input type="text" name="country" placeholder="Subject" value={formData.country} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea type="text" name="message" placeholder="Describe your requirements" cols="30" rows="10" value={formData.message} onChange={handleChange} required ></textarea>
                            </div>
                            <button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send Now'}</button>
                        </form>
                    </div>
                    <img src="https://www.poornima.org/img/contact-img.png" alt="" />
                </div>
                <div className={styles.top_cont_nav}>
                    <div className={styles.top_cont_icon}>
                        <IoLocationSharp />
                        <p><span>Address:</span> Jodhpur, Rajasthan</p>
                    </div>
                    <div className={styles.top_cont_icon}>
                        <FiPhoneCall />
                        <p><span>Phone:</span> <a href="tel://+9929031735">+ 992 903 1735</a></p>
                    </div>
                    <div className={styles.top_cont_icon}>
                        <FaTelegramPlane />
                        <p><span>Email:</span> <a href="mailto:infoecobust@gmail.com">infoecobust@gmail.com</a></p>
                    </div>
                    <div className={styles.top_cont_icon}>
                        <IoEarth />
                        <p><span>Website</span> <Link href="/">Ecobust.in</Link></p>
                    </div>
                </div>
            </div>
        </div>

    </>
}