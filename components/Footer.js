import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return <>
        <footer className="footer">
            <div className="footer_sec">
                <div className="f_logo_info">
                    <img src="/img/blacklogo.png" alt="img" />
                    <p>ECO BUST is Particularly used for breaking-cutting of stones in quarries or demolishing stones, concrete and reinforced concrete.</p>
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
        </footer>

    </>
}