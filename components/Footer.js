import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { MdTextsms } from "react-icons/md";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer() {



    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i5akxh8', 'template_5oskses', form.current, {
            publicKey: 'RxmiQYaA5K8SX0Ipw',
        }).then(
            () => {
                console.log('SUCCESS!');
                // Send thank you email to the sender
                sendThankYouEmail();
                // Reset form fields after successful submission
                form.current.reset();
                document.querySelector(".footeremailsuccess").classList.add('opensuc');
                setMessage('✅️ Email sent successfully');
                setTimeout(() => {
                    setMessage(null);
                    document.querySelector(".footeremailsuccess").classList.remove('opensuc');
                }, 5000);
                setIsSubmitting(false);
            },
            (error) => {
                console.log('FAILED...', error.text);
                document.querySelector(".footeremailsuccess").classList.add('opensuc');
                setMessage('❌ Failed to send email, Please Try again...');
                setTimeout(() => {
                    setMessage(null);
                    document.querySelector(".footeremailsuccess").classList.remove('opensuc');
                }, 5000);
                setIsSubmitting(false);
            },
        );

        const sendThankYouEmail = () => {
            // Replace these placeholders with your own EmailJS service ID, template ID, and user ID
            emailjs
                .send('service_i5akxh8', 'template_52x7h8o', {
                    user_email: form.current.user_email.value,
                })
                .then(
                    (response) => {
                        console.log('Thank you email sent successfully:', response);
                    },
                    (error) => {
                        console.error('Thank you email could not be sent:', error.text);
                    }
                );
        };
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
                    <form className="contact_f" ref={form} onSubmit={sendEmail}>
                        <div className="input-container">
                            <label htmlFor="user_name" className="name">1. Name:</label>
                            <input placeholder="Enter your name" type="text" className="input" name="user_name" required />
                            <div className="underline"></div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="user_email" className="name">2. Email:</label>
                            <input placeholder="Enter Email" type="email" className="input" name="user_email" required />
                            <div className="underline"></div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="user_phone" className="name">3. Phone:</label>
                            <input placeholder="Enter Phone No" type="text" className="input" name="user_phone" required />
                            <div className="underline"></div>
                        </div>
                        <div className="cn_in">
                            <label htmlFor="">4. Your Message:</label>
                            <textarea placeholder='Your Message' name="message" cols="100" rows="5" required></textarea>
                        </div>
                        {isSubmitting ? (
                            <button type="button" disabled>Submitting...</button>
                        ) : (
                            <button type="submit" value="Send">Send Now</button>
                        )}
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