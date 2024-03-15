import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { MdTextsms } from "react-icons/md";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease',
          once: true
        });
      }, []);

    return <>
        <footer className="footer">
            <div className="footer_sec">
                <div className='footer_info'>
                    <div className="f_logo_info">
                        <img data-aos="fade-right" src="/img/blacklogo.png" alt="img" />
                        <ul data-aos="fade-up">
                            <li><IoLocationSharp />Jodhpur, Rajasthan</li>
                            <li><FaPhoneVolume />(+91)-9929031735, (+91)-9929711198</li>
                            <li><IoMailOpen />info@ecobust.in</li>
                            <li><MdTextsms />GST NO. : 08DLJPK8771H1ZI</li>
                        </ul>
                        <h4>Follow Us:</h4>
                        <div className="f_icons" data-aos="fade-left" >
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

                <div className="contact_form" data-aos="fade-left">
                    <h2><span>Quick</span> Enquiry</h2>
                    <form className="contact_f">
                        <div className="input-container">
                            <label htmlFor="name" className="name">1. Name:</label>
                            <input placeholder="Enter your name" type="text" className="input" />
                            <div className="underline"></div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="email" className="name">2. Email:</label>
                            <input placeholder="Enter Email" type="email" className="input" />
                            <div className="underline"></div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="name" className="name">3. Phone:</label>
                            <input placeholder="Enter Phone No" defaultValue="+91" type="text" className="input" />
                            <div className="underline"></div>
                        </div>
                        <div className="cn_in">
                            <label htmlFor="">4. Your Message:</label>
                            <textarea placeholder='Your Message' name="message" cols="100" rows="5" required ></textarea>
                        </div>

                        <button>Send mail</button>
                    </form>
                </div>
            </div>
            <div className="copyright_sec flex flex-sb">
                <div className="left_copy flex flex-col">
                    <p>All Rights Reserved. Manveer Group of Industries (Terms of Use)</p>
                    <p>Developed & Managed By <Link href={'/'}>Ecobust.In</Link> Pvt. Ltd.</p>
                </div>
                <div className="right_copy flex gap-1">
                    <img src="/img/siteseal.gif" alt="img" />
                    <img src="/img/v-trust.png" alt="img" />
                    <img src="/img/exportersindia.png" alt="img" />
                </div>

            </div>
        </footer>

    </>
}