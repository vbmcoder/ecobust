
import Link from "next/link";
import styles from "../styles/product.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Head from "next/head";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Product() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    const form = useRef();
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_webgljn', 'template_l05swu9', form.current, {
            publicKey: 'vWf6b2mF5gEYcEBlb',
        }).then(
            () => {
                console.log('SUCCESS!');
                // Reset form fields after successful submission
                // Send thank you email to the sender
                sendThankYouEmail();
                form.current.reset();
                document.querySelector(".emailsuccess").classList.add('opensuc');
                setMessage('✅️ Email sent successfully');
                setTimeout(() => {
                    setMessage(null);
                    document.querySelector(".emailsuccess").classList.remove('opensuc');
                }, 5000);
                setIsSubmitting(false);


            },
            (error) => {
                console.log('FAILED...', error.text);
                document.querySelector(".emailsuccess").classList.add('opensuc');
                setMessage('❌ Failed to send email, Please Try again...');
                setTimeout(() => {
                    setMessage(null);
                    document.querySelector(".emailsuccess").classList.remove('opensuc');
                }, 5000);
                setIsSubmitting(false);
            },
        );
        const sendThankYouEmail = () => {
            // Replace these placeholders with your own EmailJS service ID, template ID, and user ID
            emailjs.send('service_webgljn', 'template_8iwk7n3', {
                user_email: form.current.user_email.value,
            }).then(
                (response) => {
                    console.log('Thank you email sent successfully:', response);
                },
                (error) => {
                    console.error('Thank you email could not be sent:', error.text);
                }
            );
        };
    };


    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    const handleClick = () => {
        // If showPhoneNumber is false, toggle it to true to display the phone number
        if (!showPhoneNumber) {
            setShowPhoneNumber(true);
        } else {
            // If showPhoneNumber is true, initiate the phone call
            window.location.href = 'tel:+919929031735';
        }
    };

    const [mainImage, setMainImage] = useState("/img/product.png"); // Initial main image

    // Function to handle click on product list image
    const handleImageClick = (imageSrc) => {
        setMainImage(imageSrc);
    };
    const alldata = [
        { _id: 5, images: "/img/ecobust/ecobust_img5.jpg" },
        { _id: 6, images: "/img/ecobust/ecobust_img6.jpg" },
        { _id: 7, images: "/img/ecobust/ecobust_img7.jpg" },
        { _id: 10, images: "/img/ecobust/ecobust_img10.jpg" },
        { _id: 13, images: "/img/ecobust/ecobust_img13.jpg" },
        { _id: 15, images: "/img/ecobust/ecobust_img15.jpg" },
        { _id: 17, images: "/img/ecobust/ecobust_img17.jpg" },
    ]
    return <>
        <Head>
            {/* <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Ecobust Non-Explosive Demolition Powder - Safe and Effective Solution | ECOBUST</title>
            <meta name="description" content="Ecobust offers a non-explosive demolition powder that provides a safe and effective solution for breaking concrete and rock without compromising the environment. Our eco-friendly product is revolutionizing the industry with its powerful yet safe formula." /> */}
        </Head>
        <div className="prodemailsuccess">
            {message && <h4><p>{message}</p></h4>}
        </div>
        <div className={styles.container}>
            <div className={styles.titleofproduct}>
                <h1 data-aos="fade-right">Ecobust Non Explosive Demolition Powder</h1>
            </div>
            <p className={styles.breadcrumb} data-aos="fade-left">
                <Link href="/" title="Home">Home</Link>
                <b>›</b>
                <Link href="/product" title="Products">Products</Link>
                <b>›</b> Ecobust Non Explosive Demolition Powder
            </p>
            <div className={styles.productsection}>
                <div className={styles.leftproimg}>
                    <img className={styles.mainimage} src={mainImage} alt="Ecobust: Eco-Friendly Alternative for Rock and Concrete Breaking" />
                    <div className={styles.proimglist} data-aos="fade-up">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            grabCursor={true}
                            modules={[FreeMode]}
                            className={styles.mySwiper}
                        >
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/product.png")} src="/img/product.png" alt="Safe and Eco-Friendly Concrete Breaking with Ecobust" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/ecobust/ecobust_img5.jpg")} src="/img/ecobust/ecobust_img5.jpg" alt="Environmentally Conscious Rock Demolition Solution - Ecobust" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/ecobust/ecobust_img6.jpg")} src="/img/ecobust/ecobust_img6.jpg" alt="Safe and Eco-Friendly Concrete Breaking with Ecobust" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/ecobust/ecobust_img7.jpg")} src="/img/ecobust/ecobust_img7.jpg" alt="Safe and Eco-Friendly Concrete Breaking with Ecobust" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/ecobust/ecobust_img10.jpg")} src="/img/ecobust/ecobust_img10.jpg" alt="Safe and Eco-Friendly Concrete Breaking with Ecobust" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/ecobust/ecobust_img13.jpg")} src="/img/ecobust/ecobust_img13.jpg" alt="Safe and Eco-Friendly Concrete Breaking with Ecobust" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className={styles.rightproinfo} data-aos="fade-left">
                    <div className={styles.r_protitles}>
                        <h1>Ecobust Non Explosive Demolition Powder</h1>
                        <p>Price: <strong>₹12.50 - ₹15.50 / Kilogram</strong> <button onClick={toggleFormVisibility}>Get Best Price</button></p>
                        <p>MOQ: <strong>8 Ton</strong></p>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Business Type</td>
                                <td>Manufacturer, Exporter, Supplier</td>
                            </tr>
                            <tr>
                                <td>Brand Name</td>
                                <td>EcoBust</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>20 Kg</td>
                            </tr>
                            <tr>
                                <td>Country of Origin</td>
                                <td >India</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.prefertobuy}>
                        <p>Preferred Buyer From</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Location</td>
                                    <td>Anywhere in India</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.reqinqbtns}>
                        <button onClick={handleClick}>{!showPhoneNumber ? "REQUEST TO CALL" : <Link target="_blank" href={"+919929031735"}>Call On: +91-9929031735</Link>}</button>
                        <button onClick={toggleFormVisibility}>SEND ENQUIRY</button>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles.container}>
            <div className={styles.prodetailssec} >
                <h2 data-aos="fade-right">Product Details</h2>
                <table>
                    <tbody data-aos="fade-left">
                        <tr>
                            <td>Pack Size</td>
                            <td>20kg</td>
                        </tr>
                        <tr>
                            <td>Material</td>
                            <td>Silent Stone Cracking Powder</td>
                        </tr>
                        <tr>
                            <td>Port</td>
                            <td>Jodhpur</td>
                        </tr>
                        <tr>
                            <td>Payment Terms</td>
                            <td >Other</td>
                        </tr>
                    </tbody>
                </table>
                <p data-aos="fade-up">We are one of the leading manufacturer and suppliers of non-explosive demolition agent in india, we are engaged in providing reliable solutions related to concrete structures demolition, rock excavation and boulders demolition, etc. we have successfully promoted our products to world wide customers with our specialization in the domain of chemical demolition technology.</p>
                <h5 data-aos="fade-right">EcoBust</h5>
                <ul>
                    <li data-aos="fade-up">Easy to use, reduces costs & saves time</li>
                    <li data-aos="fade-up">Environmentally safe</li>
                    <li data-aos="fade-up">Requires no special licenses or permits</li>
                    <li data-aos="fade-up">No dust, no noise, no vibrations</li>
                    <li data-aos="fade-up">No flying rocks, no toxic vapors</li>
                </ul>
                <div data-aos="fade-up"><button onClick={toggleFormVisibility} >Yes! I am interested</button></div>
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
                            <input type="text" name="user_country" placeholder="Your Subject"  required />
                            <textarea name="message" placeholder="Describe your requirement in details:" cols="30" rows="10" required></textarea>
                            {isSubmitting ? (
                            <button type="button" disabled>Submitting...</button>
                        ) : (
                            <button type="submit" value="Send">Send Now</button>
                        )}
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.productimges}>
                <h2 data-aos="fade-right">Product Images</h2>
                <div className={styles.product_imges} data-aos="fade-left">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className={styles.btSwiper}
                    >
                        {alldata.map((pro) => (
                            <SwiperSlide key={pro._id}>
                                <img src={pro.images} alt="Ecobust: Eco-Friendly Alternative for Rock and Concrete Breaking" loading="lazy" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </>
}