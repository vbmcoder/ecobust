
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import { FaRegClock } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router';

export default function Header() {

  const [openside, setOpenside] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setClicked(false);
    setOpenNav(false);
  };

  const toggleSidebar = () => {
    setOpenside(!openside);
  };

  // Function to close sidebar
  const closeSidebar = () => {
    setOpenside(false);
  };

  // navbar
  const OpenNavbar = () => {
    setOpenNav(!openNav);
  };
  const closeNavbar = () => {
    setOpenNav(false);
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Attach the scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update active link state when the page is reloaded
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return <>
    <header className={`${styles.main_nav} ${isSticky ? `${styles.sticky}` : ''}`}>
      <div className="logo flex">
        <Link href='/'><img src="/img/greenlogo.png" alt="" /></Link>
        <ul className="nav_items">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about" className={activeLink === '/about' ? 'active' : ''} onClick={() => handleLinkClick('/about')}>ABOUT US</Link></li>
          <li><Link href="/product" className={activeLink === '/product' ? 'active' : ''} onClick={() => handleLinkClick('/product')}>PRODUCTS</Link></li>
          <li><Link href="/flipbook" className={activeLink === '/flipbook' ? 'active' : ''} onClick={() => handleLinkClick('/flipbook')}>FLIPBOOK</Link></li>
          <li><Link href="/userguide" className={activeLink === '/userguide' ? 'active' : ''} onClick={() => handleLinkClick('/userguide')} >USER GUIDE</Link></li>
        </ul>
      </div>
      <div className="hamburger flex gap-2">
        Call Us:
        <h4 className="flex flex-col">
          <span>+91-9929031735</span>
          <span>+91-9929711198</span>
        </h4>
        <div>
          <FaBarsStaggered onClick={toggleSidebar} />
          <FaBarsStaggered onClick={OpenNavbar} />
        </div>
      </div>
    </header>
    <aside className={`navright ${openNav ? 'open' : ''}`}>
      <div className="asidetop">
        <div className="flex flex-sb">
          <Link href='/'><img src="/img/greenlogo.png" alt="" /></Link>
          <button onClick={closeNavbar} className="fa_xmark"><HiMiniXMark /></button>
        </div>
      </div>
      <ul className="rnav_items">
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/about" className={activeLink === '/about' ? 'active' : ''} onClick={() => handleLinkClick('/about')}>ABOUT US</Link></li>
        <li><Link href="/product" className={activeLink === '/product' ? 'active' : ''} onClick={() => handleLinkClick('/product')}>PRODUCTS</Link></li>
        <li><Link href="/flipbook" className={activeLink === '/flipbook' ? 'active' : ''} onClick={() => handleLinkClick('/flipbook')}>FLIPBOOK</Link></li>
        <li><Link href="/userguide" className={activeLink === '/userguide' ? 'active' : ''} onClick={() => handleLinkClick('/userguide')} >USER GUIDE</Link></li>
      </ul>
    </aside>
    <aside className={`asideright ${openside ? 'open' : ''}`}>
      <div className="asidetop">
        <div className="flex flex-sb">

          <img src="/img/greenlogo.png" alt="" />
          <button onClick={closeSidebar} className="fa_xmark"><HiMiniXMark /></button>

        </div>

        <p>ECO BUST is used in an almost unlimited range of applications. It's Particularly used for breaking-cutting of stones in quarries or demolishing stones, concrete and reinforced concrete.</p>

        <button href="/" data-label="Register" className="rainbow-hover">
          <span className="sp">About Us</span>
        </button>

      </div>
      <div className="asidecenter">
        <h4>Contact Details:</h4>
        <ul className="flex">
          <li>
            <a href="#"> <GrMail /></a>
            <a href="#" className="text-lowercase">info@ecobust.in</a>
          </li>
          <li>
            <a href="#"><FiPhone /></a>
            <a href="#">+91-9929031735</a>
          </li>
          <li>
            <a href="#"> <FaRegClock /></a>
            <a href="#">Office Hours: 8AM - 11PM Sunday -
              Weekend Day</a>
          </li>
        </ul>
        <span className="flex">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        </span>
      </div>

    </aside>
  </>
}