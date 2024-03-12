import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { MdTextsms } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";
import { SlCallOut } from "react-icons/sl";
import { useState, useEffect } from 'react';

export default function Footer() {



    return <>
        <footer className="footer">
            <div className="footer_sec">
                <div className='footer_info'>
                    <div className="f_logo_info">
                        <img src="/img/blacklogo.png" alt="img" />
                        <ul>
                            <li><IoLocationSharp />Jodhpur, Rajasthan</li>
                            <li><FaPhoneVolume />(+91)-9929031735, (+91)-9929711198</li>
                            <li><IoMailOpen />info@ecobust.in</li>
                            <li><MdTextsms />GST NO. : 08DLJPK8771H1ZI</li>
                        </ul>
                        <h4>Follow Us:</h4>
                        <div className="f_icons">
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

                <div className="contact_form">
                    <h2><span>Quick</span> Enquiry</h2>
                    <form className="contact_f">
                        <div>
                            <FaRegUser />
                            <input type="name" id="name" placeholder='Name' />
                        </div>
                        <div>
                            <SlCallOut />
                            <input type="phone" id="phone" placeholder='Phone' />
                        </div>
                        <div>
                            <LuMailPlus />
                            <input type="email" placeholder='Email' />
                        </div>
                        <textarea placeholder='Message' name="message" cols="10" rows="5"></textarea>
                        <button>Send mail</button>
                    </form>
                </div>
            </div>
        </footer>

    </>
}