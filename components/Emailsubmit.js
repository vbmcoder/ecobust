import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Emailsubmit() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

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
                document.querySelector(".emailsuccesscomp").classList.add('opensuc');
                setMessage('✅️ Email sent successfully');
                setTimeout(() => {
                    setMessage(null);
                    document.querySelector(".emailsuccesscomp").classList.remove('opensuc');
                }, 5000);
            },
            (error) => {
                console.log('FAILED...', error.text);
                document.querySelector(".emailsuccesscomp").classList.add('opensuc');
                setMessage('❌ Failed to send email, Please Try again...');
                setTimeout(() => {
                    setMessage(null);
                    document.querySelector(".emailsuccesscomp").classList.remove('opensuc');
                }, 5000);
            },
        );
    };


    return <>
        <div className="emailsuccesscomp">
            {message && <h4><p>{message}</p></h4>}
        </div>
        <div className="emailsubmitsec">
            <button className="emailclickbtn" onClick={toggleFormVisibility}>
                Quick Enquiry<IoIosArrowUp />
            </button>
            {isFormVisible && (
                <div className="enquiryform">
                    <form className="form_e" ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-sb">
                            <p>Tell us what you are looking for?</p>
                            <AiOutlineCloseCircle onClick={handleCloseForm} />
                        </div>
                        <div className="form_info">
                            <input type="text" name="user_name" placeholder="Your Name" required />
                            <input type="email" name="user_email" placeholder="Your Email" required />
                            <input type="text" name="user_phone" placeholder="Your Number" defaultValue="+91"  required />
                            <input type="text" name="user_country" placeholder="Your country"  required />
                            <textarea name="message" placeholder="Describe your requirement in details:" cols="30" rows="10" required></textarea>
                            <button type="submit" value="Send" >Send now</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    </>
}