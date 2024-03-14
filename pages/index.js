import Head from "next/head";
import { useEffect, useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import { FaRegClock } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import Link from "next/link";
import Whatsapp from "@/components/Whatsapp";


export default function Home() {


  const [openside, setOpenside] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleClick = (src) => {
    setFullScreenImage(src);
  };

  const handleClose = () => {
    setFullScreenImage(null);
  };


  return (
    <>
      <Head>
        <title>Eco Bust</title>
        <meta name="description" content="Eco Bust" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className="top_headernav">
          <div className="lefttopbar">
            <h4>Jodhpur, Rajasthan</h4>
            <h4>GST NO. : 08DLJPK8771H1ZI</h4>
          </div>
          <div className="righttopbar">
            <h4><FiPhone /> +91-9929031735, +91-9929711198</h4>
            <h4><GrMail /> infoecobust@gmail.com</h4>
          </div>
          {/* <div className='flex gap-2'>More Info: <GrMail /> <FiPhone /></div> */}
        </div>
        <div className="center_headernav">
          <a href="/">Privacy Policy</a>
          <a href="/">Contact</a>
          <a href="/">Us English</a>
        </div>
        <div className={`main_nav ${isSticky ? 'sticky' : ''}`}>
          <div className="logo flex">
            <img src="/img/greenlogo.png" alt="" />
            <ul className="nav_items">
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/about">ABOUT US</Link></li>
              <li><Link href="/product">PRODUCTS</Link></li>
              <li><Link href="/flipbook">FLIPBOOK</Link></li>
              <li><Link href="/">USER GUIDE</Link></li>
            </ul>
          </div>
          <div className="hamburger flex gap-2">
            Call Us:
            <h4 className="flex flex-col">
              <span>+91-9929031735</span>
              <span>+91-9929711198</span>
            </h4>
            <div >
              <FaBarsStaggered onClick={toggleSidebar} />
              <FaBarsStaggered onClick={OpenNavbar} />
            </div>
          </div>
        </div>
        <aside className={`navright ${openNav ? 'open' : ''}`}>
          <div className="asidetop">
            <div className="flex flex-sb">
              <img src="/img/greenlogo.png" alt="" />
              <button onClick={closeNavbar} className="fa_xmark"><HiMiniXMark /></button>
            </div>
          </div>
          <ul className="rnav_items">
            <li><Link className='active' href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT US</Link></li>
            <li><Link href="/product">PRODUCTS</Link></li>
            <li><Link href="/flipbook">FLIPBOOK</Link></li>
            <li><Link href="/">USER GUIDE</Link></li>
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
                <a href="#" className="text-lowercase">infoecobust@gmail.com</a>
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


        <div className="topheaderdata">
          <div className="leftheaderdata">
            <h1>Ecobust Non Explosive</h1>
            <h1>Demolition Powder</h1>
            <h2>We are one of the leading Manufacturer and Suppliers of Non-explosive demolition agent in India</h2>
            <button className="hbtn">
              <span>Contact Us</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="rightheaderdata">
            <img src="/img/products.png" alt="image" />
            <img src="/img/product.png" alt="image" />
          </div>
        </div>
      </nav>
      <div className="marq">
        <span>We are one of the leading Manufacturer and Suppliers of Non-explosive
          demolition agent in India, we are engaged in providing reliable solutions related to concrete structures
          demolition, rock excavation and boulders demolition, etc. we have successfully promoted our products to
          worldwide Customers with our specialization in the domain of Chemical Demolition Technology. ECO BUST is
          used in an almost unlimited range of applications. It's Particularly used for breaking-cutting of stones
          in quarries or demolishing stones, concrete and reinforced concrete. Endless Benefits of ECOBUST can be
          listed against explosives and other methods of breaking, cutting or demolishing. Silent
          Non-ExplosiveDemolition Agent is a non-toxic and cementation powder, which consists of calcined oxides
          of calcium, silicon and aluminum, Non-explosive demolition agent becomes a highly powered amazing
          expansive pressure of 11200 T / m2 when mixed with water. Granite,sandstone, marble, limestone, plain
          concrete, reinforced concrete,boulders, and ledges are fractured within 2 to 12 hours without
          noise,vibration, or fly rock. Especially, used as environment constraints</span>
      </div>
      <div className="company_details">
        <div className="oftitle">
          <hr />
          <h2>Company Details</h2>
        </div>
        <div className="company_data">
          <div className="com_left">
            <h1>Welcome To <strong>Manveer Group Of Industries</strong> </h1>
            <p>We are one of the leading Manufacturer and Suppliers of Non-explosive demolition agent in India, we are engaged in providing reliable solutions related to concrete structures demolition, rock excavation and boulders demolition, etc. we have successfully promoted our products to worldwide Customers with our specialization in the domain of Chemical Demolition Technology. ECO BUST is used in an almost unlimited range of applications. It's Particularly used for breaking-cutting of stones in quarries or demolishing stones, concrete and reinforced concrete. Endless Benefits of ECOBUST can be listed against explosives and other methods of breaking, cutting or demolishing. Silent Non-ExplosiveDemolition Agent is a non-toxic and cementation powder, which consists of calcined oxides of calcium, silicon and aluminum, Non-explosive demolition agent becomes a highly powered amazing expansive pressure of 11200 T / m2 when mixed with water. Granite,sandstone, marble, limestone, plain concrete, reinforced concrete,boulders, and ledges are fractured within 2 to 12 hours without noise,vibration, or fly rock. Especially, used as environment constraints</p>
            <Link href='/about'>Read More</Link>
          </div>
          <div className="com_right">
            <h1>Our Certifications</h1>
            <div className='flex gap-3 flex-center'>
              <div className="crimgbox">
                <img
                  src="/img/cert.jpg"
                  alt="img"
                  onClick={() => handleClick("/img/cert.jpg")}
                  style={{ cursor: 'pointer' }} // Add cursor pointer for indication
                />
              </div>
              <div className="crimgbox">
                <img
                  src="/img/974421.jpg"
                  alt="img"
                  onClick={() => handleClick("/img/974421.jpg")}
                  style={{ cursor: 'pointer' }} // Add cursor pointer for indication
                />
              </div>
              {fullScreenImage && (
                <div
                  className="fullscreen-overlay"
                  onClick={handleClose}
                >
                  <img
                    src={fullScreenImage}
                    alt="Fullscreen Image"
                    className="fullscreen-image"
                  />
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
      <div className="ourfounders">
        <div className="oftitle">
          <hr />
          <h2>About Us</h2>
        </div>
        <div className="founderscards">
          <div className="ofounder">
            <img src="/img/vision.png" alt="" />
            <h2>Our Founders</h2>
            <p>With the able guidance and supervision of our founders, 'Mr. Divyang Gehlot & Mr. Virendra
              Gehlot', we have gained a formidable position for ourselves in the national and international
              markets.</p>
          </div>
          <div className="ofounder">
            <img src="/img/mission.png" alt="" />
            <h2>Our USP</h2>
            <p>ECO BUST is used in an almost unlimited range of applications. It's Particularly used for
              breaking-cutting of stones in quarries or demolishing stones, concrete and reinforced concrete.
            </p>
          </div>
          <div className="ofounder">
            <img src="/img/values.png" alt="" />
            <h2>Why Us?</h2>
            <p>Owing to our expertise, we have been able to offer our customers with a quality-assured range of
              products in varied specifications.</p>
          </div>
        </div>
      </div>
      <div className="welcometitle">

        <h1>MANVEER GROUP OF INDUSTRIES</h1>
        <div>
          <p>ECO BUST is used in an almost unlimited range of applications. It's Particularly used for breaking-cutting of stones in quarries or demolishing stones, concrete and reinforced concrete. Endless Benefits of ECOBUST can be listed against explosives and other methods of breaking, cutting or demolishing. Silent Non-ExplosiveDemolition Agent is a non-toxic and cementation powder, which consists of calcined oxides of calcium, silicon and aluminum, Non-explosive demolition agent becomes a highly powered amazing expansive pressure of 11200 T / m2 when mixed with water. Granite,sandstone, marble, limestone, plain concrete, reinforced concrete,boulders, and ledges are fractured within 2 to 12 hours without noise,vibration, or fly rock. Especially, used as environment constraints orwhen explosive is nct permitted for use.</p>
        </div>

      </div>
      <div className="demoimg">
        <img src="/img/PhotoRoom-20240311_122223.png" alt="" />
      </div>
      <div className="comcontainer">
        <p className="container-title">Here are the features<br />we're proud of</p>

        <div className="gradient-cards">
          <div className="comcard">
            <div className="container-card bg-green-box">
              <img src="/img/organic.png" alt="" />

              <p className="card-title">Nature of Business</p>
              <p className="card-description">Manufacturers, Exporters, Wholesaler</p>
            </div>
          </div>

          <div className="comcard">
            <div className="container-card bg-white-box">
              <img src="/img/employees.png" alt="" />
              <p className="card-title">Number of Employees</p>
              <p className="card-description">Below 20</p>
            </div>
          </div>

          <div className="comcard">
            <div className="container-card bg-yellow-box">
              <img src="/img/establishment.png" alt="" />
              <p className="card-title">Year of Establishment</p>
              <p className="card-description">2017</p>
            </div>
          </div>

          <div className="comcard">
            <div className="container-card bg-blue-box">
              <img src="/img/market.png" alt="" />
              <p className="card-title">Market Covered</p>
              <p className="card-description">Worldwide</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_contact">
        <div className="f_c">
          <img src="https://demo.rstheme.com/html/techzen/assets/images/footer/info-3.png" alt="" />
          <div className="f_cinfo">
            <h3>Contact Us</h3>
            <h2>( +91 )-992 - 903 -1735</h2>
          </div>
        </div>
        <div className="f_c">
          <img src="https://demo.rstheme.com/html/techzen/assets/images/footer/info-1.png" alt="" />
          <div className="f_cinfo">
            <h3>Email Us</h3>
            <h2>info@ecobust.in</h2>
          </div>
        </div>
        <div className="f_c">
          <img src="https://demo.rstheme.com/html/techzen/assets/images/footer/info-2.png" alt="" />
          <div className="f_cinfo">
            <h3>Address</h3>
            <h2>Jodhpur, Rajasthan</h2>
          </div>
        </div>
      </div>
      <div className="googlemap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666281.4917903985!2d72.32935968167409!3d26.185177772147473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1710248742010!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <img src="https://cdn-icons-png.flaticon.com/128/684/684908.png" alt="" />
      </div>

      <Whatsapp />
    </>
  );
}
