import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import styles from "../styles/Contactus.module.css"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contactus() {
    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i5akxh8', 'template_5oskses', form.current, {
            publicKey: 'RxmiQYaA5K8SX0Ipw',
        }).then(
            () => {
                console.log('SUCCESS!');
                // Reset form fields after successful submission
                form.current.reset();
                document.querySelector(".emailsuccess").classList.add('opensuc');
                setMessage('✅️ Email sent successfully');
                setTimeout(() => {
                    setMessage(null);
                    document.querySelector(".emailsuccess").classList.remove('opensuc');
                }, 5000);
            },
            (error) => {
                console.log('FAILED...', error.text);
                document.querySelector(".emailsuccess").classList.add('opensuc');
                setMessage('❌ Failed to send email, Please Try again...');
                setTimeout(() => {
                    setMessage(null);
                    document.querySelector(".emailsuccess").classList.remove('opensuc');
                }, 5000);
            },
        );
    };
    const sendThankYouEmail = () => {
        // Replace these placeholders with your own EmailJS service ID, template ID, and user ID
        emailjs
            .send('service_i5akxh8', 'template_52x7h8o', {
                to_email: form.current.user_email.value,
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
    return <>
        <div className="emailsuccess">
            {message && <h4><p>{message}</p></h4>}
        </div>
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
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="user_name">Name</label>
                                <input type="text" name="user_name" placeholder="Your name" required />
                            </div>
                            <div>
                                <label htmlFor="user_email">Email</label>
                                <input type="email" name="user_email" placeholder="Your Email" required />
                            </div>
                            <div>
                                <label htmlFor="user_phone">Phone</label>
                                <input type="text" name="user_phone" defaultValue="+91" placeholder="Your Phone" required />
                            </div>
                            <div>
                                <label htmlFor="country">Subject</label>
                                <input type="text" name="user_country" placeholder="Subject" required />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea type="text" name="message" placeholder="Describe your requirements" cols="30" rows="10" required ></textarea>
                            </div>
                            <button type="submit" value="Send">Send Now</button>
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