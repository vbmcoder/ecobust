import Head from "next/head";
import styles from "../styles/about.module.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
import Link from "next/link";

export default function About() {

    const alldata = [
        { _id: 1, images: "/img/Godrej-Boyce.jpg" },
        { _id: 2, images: "/img/IAF-1.jpg" },
        { _id: 4, images: "/img/Indian-ARMY.jpg" },
        { _id: 5, images: "/img/JDA-Jodhpur-Development.jpg" },
        { _id: 6, images: "/img/LT.jpg" },
        { _id: 7, images: "/img/NHAI-2.jpg" },
        { _id: 8, images: "/img/NKC.jpg" },
        { _id: 9, images: "/img/Northern-Railway.jpg" },
        { _id: 10, images: "/img/TATA.jpg" },
    ]

    const [fullScreenImage, setFullScreenImage] = useState(null);

    const handleClick = (src) => {
        setFullScreenImage(src);
    };

    const handleClose = () => {
        setFullScreenImage(null);
    };

    return <>
        <Head>
            <title>Manveer Group Of Industries - Manufacturer, Exporter & Supplier from Jodhpur India</title>
            <meta name="description" content="At Ecobust, we are committed to providing eco-friendly demolition solutions with our non-explosive powder. Learn more about our dedication to sustainability and safety" />
        </Head>
        <div className={styles.about_sec}>
            <div className={styles.about_top}>
                <div className={styles.about_top_cont}>
                    <div className={styles.about_left} data-aos="fade-right">
                        <h1>We are one of the leading <span>Manufacturer and Suppliers</span> of Non-explosive demolition agent in India</h1>
                        <h3>ECO BUST is used in an almost unlimited range of applications. It's Particularly used for breaking-cutting of stones in quarries or demolishing stones, concrete and reinforced concrete.</h3>
                    </div>
                    <div className={styles.about_right} data-aos="fade-left">
                        <img src="/img/974421.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.about_center}>
                <div className={styles.about_cont}>
                    <div className={styles.abc_img} data-aos="fade-right">
                        <img src="/img/974421.jpg" alt="" />
                    </div>
                    <div className={styles.abc_right} data-aos="fade-left">
                        <h3>ABOUT US</h3>
                        <h1>Endless Benefits of ECOBUST can be listed against explosives and other methods of breaking, cutting or demolishing.</h1>
                        <div className={styles.line}></div>
                        <p data-aos="fade-up">We are one of the leading Manufacturer and Suppliers of Non-explosive demolition agent in India, we are engaged in providing reliable solutions related to concrete structures demolition, rock excavation and boulders demolition, etc. we have successfully promoted our products to worldwide Customers with our specialization in the domain of Chemical Demolition Technology.</p>
                        <p data-aos="fade-up">ECO BUST is used in an almost unlimited range of applications. It's Particularly used for breaking-cutting of stones in quarries or demolishing stones, concrete and reinforced concrete. Endless Benefits of ECOBUST can be listed against explosives and other methods of breaking, cutting or demolishing. Silent Non-ExplosiveDemolition Agent is a non-toxic and cementation powder, which consists of calcined oxides of calcium, silicon and aluminum, Non-explosive demolition agent becomes a highly powered amazing expansive pressure of 11200 T / m2 when mixed with water. Granite,sandstone, marble, limestone, plain concrete, reinforced concrete,boulders, and ledges are fractured within 2 to 12 hours without noise,vibration, or fly rock. Especially, used as environment constraints orwhen explosive is nct permitted for use.</p>
                        <p data-aos="fade-up">With the able guidance and supervision of our founders, 'Mr. Divyang Gehlot & Mr. Virendra Gehlot', we have gained a formidable position for ourselves in the national and international markets. Owing to his vast industry experience and expertise, we are able to bring forth a qualitative range of products. We export our product all over the world.</p>
                    </div>
                </div>
            </div>
            <div className="company_details">
                <div className="company_data">
                    <div className="com_right" data-aos="fade-left" data-aos-duration="1500">
                        <h1>Our Certifications</h1>
                        <div className='flex gap-3 flex-center'>
                            <div className="crimgbox" >
                                <img
                                    src="/img/1.png"
                                    alt="Ecobust Certification"
                                    onClick={() => handleClick("/img/1.png")}
                                    style={{ cursor: 'pointer' }} // Add cursor pointer for indication
                                />
                            </div>
                            <div className="crimgbox">
                                <img
                                    src="/img/1 (1).png"
                                    alt="Ecobust Certification"
                                    onClick={() => handleClick("/img/1 (1).png")}
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
            <div className={styles.whychoose_sec}>
                <div className={styles.why_cont}>
                    <div className={styles.left_why} data-aos="zoom-out">
                        <h3 data-aos="fade-up">WHY US?</h3>
                        <h1 data-aos="fade-up">Why choose <br /> <span>EcoBust.</span></h1>
                        <h2 data-aos="fade-up">We helping our client to fullfill their needs with our expert.</h2>
                        <img src="/img/shape_179.svg" alt="" />
                    </div>
                    <div className={styles.right_why}>
                        <div className={styles.right_card} data-aos="fade-left">
                            <img src="/img/icon_152.svg" alt="" />
                            <h2>Quality Service</h2>
                            <h4>High-quality products, Customized packaging</h4>
                        </div>
                        <div className={styles.right_card} data-aos="fade-right">
                            <img src="/img/icon_153.svg" alt="" />
                            <h2>24x7 Support</h2>
                            <h4>Skilled team of professionals</h4>
                        </div>
                        <div className={styles.right_card} data-aos="fade-left">
                            <img src="/img/icon_154.svg" alt="" />
                            <h2>Great Pricing</h2>
                            <h4>Easy payment modes, Transparent dealings</h4>
                        </div>
                        <div className={styles.right_card} data-aos="fade-right">
                            <img src="/img/icon_155.svg" alt="" />
                            <h2>100% Trusted</h2>
                            <h4>Wide distribution network, Skilled team of professionals</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our_clients">
                <h2>Our Clients</h2>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
                    }}
                    className="ourclient_swiper"
                >
                    {alldata.map((pro) => (
                        <SwiperSlide key={pro._id}>
                            <img src={pro.images} alt="Product Image" loading="lazy" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.wheretouse}>
                <h4>Services</h4>
                <h2>Where <strong>ECOBUST</strong> Chemical can be used?</h2>
                <div className={styles.useecobustcards}>
                    <div className={styles.ecousecard}>
                        <img src="/img/black-granite-blocks.jpg" alt="" />
                        <h3>Black Galaxy/Granite Stone Cracking</h3>
                    </div>
                    <div className={styles.ecousecard}>
                        <img src="/img/marble.jpg" alt="" />
                        <h3>Black Galaxy/Granite Stone Cracking</h3>
                    </div>
                    <div className={styles.ecousecard}>
                        <img src="/img/masonrystonecracking.jpg" alt="" />
                        <h3>Black Galaxy/Granite Stone Cracking</h3>
                    </div>
                    <div className={styles.ecousecard}>
                        <img src="/img/riverstone.jpg" alt="" />
                        <h3>Black Galaxy/Granite Stone Cracking</h3>
                    </div>
                    <div className={styles.ecousecard}>
                        <img src="/img/concrete.jpg" alt="" />
                        <h3>Black Galaxy/Granite Stone Cracking</h3>
                    </div>
                    <div className={styles.ecousecard}>
                        <img src="/img/masonrystonecracking2.jpg" alt="" />
                        <h3>Black Galaxy/Granite Stone Cracking</h3>
                    </div>
                </div>
            </div>
            <div className={styles.company_table}>
                <h1 data-aos="fade-right">Company Details: </h1>
                <div className={styles.company_tc}>
                    <table className={styles.formTable}>
                        <tbody data-aos="fade-right">
                            <tr data-aos="fade-up">
                                <td>Nature of Business</td>
                                <td>Manufacturers, Exporters, Wholesaler</td>
                            </tr>
                            <tr data-aos="fade-up">
                                <td>Number of Employees</td>
                                <td>Below 20</td>
                            </tr>
                            <tr data-aos="fade-up">
                                <td>Year of Establishment</td>
                                <td>2017</td>
                            </tr>
                            <tr data-aos="fade-up">
                                <td>Market Covered</td>
                                <td>Worldwide</td>
                            </tr>
                            <tr data-aos="fade-up">
                                <td>Name of CEO</td>
                                <td>Mr. Divyang Gehlot &amp; Mr. Virendra Gehlot</td>
                            </tr>
                            <tr data-aos="fade-up">
                                <td>Annual Turnover</td>
                                <td>Rs. 2.5 to 5 Crore Approx.</td>
                            </tr>
                            <tr data-aos="fade-up">
                                <td>Legal Status of Firm</td>
                                <td>Individual (Sole Propriterhsip)</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={styles.com_de} data-aos="fade-left">
                        <h3 data-aos="fade-down-right">--- Owing to our expertise, we have been able to offer our customers with a quality-assured range of products in varied specifications. Owing to following reasons, we have been able to outshine others in this highly competitive market :</h3>
                        <h4>--- Why Us?</h4>
                        <ul>
                            <li data-aos="fade-up">High-quality products</li>
                            <li data-aos="fade-up">Skilled team of professionals</li>
                            <li data-aos="fade-up">Ethical business policies</li>
                            <li data-aos="fade-up">Easy payment modes</li>
                            <li data-aos="fade-up">Transparent dealings</li>
                            <li data-aos="fade-up">Wide distribution network</li>
                            <li data-aos="fade-up">ustomized packaging</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </>
}