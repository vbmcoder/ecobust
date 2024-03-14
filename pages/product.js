
import Link from "next/link";
import styles from "../styles/product.module.css";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function Product() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // Assuming this is the default value
        country: '', // Assuming this is the default value
        message: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        try {
            const response = await axios.post('/api/emailsend', formData);
            setMessage(response.data.message);
            setFormData({
                name: '',
                email: '',
                phone: '+91',
                country: 'India',
                message: ''
            });
        } catch (error) {
            setMessage('Failed to send email. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    const handleClick = () => {
        setShowPhoneNumber(prevState => !prevState);
    };

    const [mainImage, setMainImage] = useState("/img/product.png"); // Initial main image

    // Function to handle click on product list image
    const handleImageClick = (imageSrc) => {
        setMainImage(imageSrc);
    };
    const alldata = [
        { _id: 1, images: "/img/product.png" },
        { _id: 2, images: "/img/product.png" },
        { _id: 3, images: "/img/product.png" },
        { _id: 4, images: "/img/product.png" },
        { _id: 5, images: "/img/product.png" },
        { _id: 6, images: "/img/product.png" },
    ]
    return <>
        <div className={styles.container}>
            <div className={styles.titleofproduct}>
                <h1>Ecobust Non Explosive Demolition Powder</h1>
            </div>
            <p className={styles.breadcrumb}>
                <Link href="https://www.ecobust.in/" title="Home">Home</Link>
                <b>›</b>
                <Link href="/product" title="Products">Products</Link>
                <b>›</b> Ecobust Non Explosive Demolition Powder
            </p>
            <div className={styles.productsection}>
                <div className={styles.leftproimg}>
                    <img className={styles.mainimage} src={mainImage} alt="" />
                    <div className={styles.proimglist}>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            modules={[FreeMode]}
                            className={styles.mySwiper}
                        >
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/product.png")} src="/img/product.png" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/974421.jpg")} src="/img/974421.jpg" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/dimond.jpg")} src="/img/dimond.jpg" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/employees.png")} src="/img/employees.png" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/product4.png")} src="/img/product4.png" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => handleImageClick("/img/product5.png")} src="/img/product5.png" alt="img" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className={styles.rightproinfo}>
                    <div className={styles.r_protitles}>
                        <h1>Ecobust Non Explosive Demolition Powder</h1>
                        <p>Price: <strong>$14.00 - $20.00 / Kilogram</strong> <button onClick={toggleFormVisibility}>Get Best Price</button></p>
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
                        <button onClick={handleClick}>{showPhoneNumber ? "REQUEST TO CALL" : <Link target="_blank" href={"https://wa.me/+919929031735"}>Call On: +91-9929031735</Link>}</button>
                        <button onClick={toggleFormVisibility}>SEND ENQUIRY</button>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles.container} >
            <div className={styles.prodetailssec} >
                <h2>Product Details</h2>
                <table>
                    <tbody>
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
                <p>We are one of the leading manufacturer and suppliers of non-explosive demolition agent in india, we are engaged in providing reliable solutions related to concrete structures demolition, rock excavation and boulders demolition, etc. we have successfully promoted our products to world wide customers with our specialization in the domain of chemical demolition technology.</p>
                <h5>EcoBust</h5>
                <ul>
                    <li>Easy to use, reduces costs & saves time</li>
                    <li>Environmentally safe</li>
                    <li>Requires no special licenses or permits</li>
                    <li>No dust, no noise, no vibrations</li>
                    <li>No flying rocks, no toxic vapors</li>
                </ul>
                <div><button onClick={toggleFormVisibility} >Yes! I am interested</button></div>
                {isFormVisible && <div className="enquiryform">
                    <form className="form_e" onSubmit={handleSubmit}>
                        <div className="flex flex-sb">
                            <p>Tell us what you are looking for?</p>
                            <AiOutlineCloseCircle onClick={handleCloseForm} />
                        </div>
                        <div className="form_info">
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                            <input type="tel" name="phone" placeholder="Your Number" value={formData.phone} onChange={handleChange} required />
                            <input type="text" name="country" placeholder="Your country" value={formData.country} onChange={handleChange} required />
                            <textarea name="message" placeholder="Describe your requirement in details:" value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
                            <button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send Now'}</button>
                            {message && <p>{message}</p>}
                        </div>
                    </form>
                </div>}
            </div>
        </div>
        <div className={styles.container} >
            <div className={styles.productimges}>
                <h2>Product Images</h2>
                <div className={styles.product_imges}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className={styles.mySwiper}
                    >
                        {alldata.map((pro) => (
                            <SwiperSlide key={pro._id}>
                                <img src={pro.images} alt="Product Image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </>
}