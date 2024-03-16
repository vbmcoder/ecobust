import { HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";
import { GoArrowDownRight } from "react-icons/go";
import styles from '../styles/Gallary.module.css'
import { useEffect, useState } from 'react';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation ,Autoplay } from 'swiper/modules';
import Head from "next/head";

export default function Gallery() {

    const [openside, setOpenside] = useState(false);

    const toggleSidebar = () => {
        setOpenside(!openside);
    };

    // Function to close sidebar
    const closeSidebar = () => {
        setOpenside(false);
    };
    const alldata = [
        { _id: 1, images: "/img/ecobust/ecobust_img1.jpg", title: "image1" },
        { _id: 2, images: "/img/ecobust/ecobust_img2.jpg", title: "image2" },
        { _id: 3, images: "/img/ecobust/ecobust_img3.jpg", title: "image3" },
        { _id: 4, images: "/img/ecobust/ecobust_img4.jpg", title: "image4" },
        { _id: 5, images: "/img/ecobust/ecobust_img5.jpg", title: "image5" },
        { _id: 6, images: "/img/ecobust/ecobust_img6.jpg", title: "image6" },
        { _id: 7, images: "/img/ecobust/ecobust_img7.jpg", title: "image7" },
        { _id: 8, images: "/img/ecobust/ecobust_img8.jpg", title: "image8" },
        { _id: 9, images: "/img/ecobust/ecobust_img9.jpg", title: "image9" },
        { _id: 10, images: "/img/ecobust/ecobust_img10.jpg", title: "image10" },
        { _id: 11, images: "/img/ecobust/ecobust_img11.jpg", title: "image11" },
        { _id: 12, images: "/img/ecobust/ecobust_img12.jpg", title: "image12" },
        { _id: 13, images: "/img/ecobust/ecobust_img13.jpg", title: "image13" },
        { _id: 14, images: "/img/ecobust/ecobust_img14.jpg", title: "image14" },
        { _id: 15, images: "/img/ecobust/ecobust_img15.jpg", title: "image15" },
        { _id: 16, images: "/img/ecobust/ecobust_img16.jpg", title: "image16" },
        { _id: 17, images: "/img/ecobust/ecobust_img17.jpg", title: "image17" },
    ]
    return <>
    <Head>
    <title>Gallery Photographes | EcoBust</title>
    </Head>
        <div className={styles.gallarynavbar}>
           <Link href='/'><img src="/img/blacklogo.png" alt="" /></Link> 
            <h1>ECOBUST</h1>
            <HiBars3BottomRight onClick={toggleSidebar} />
            <aside className={`asideright ${openside ? 'open' : ''}`}>
                <div className="asidetop">
                    <div className="flex flex-sb">
                        <Link href='/'><img src="/img/greenlogo.png" alt="" /></Link>
                        <button onClick={closeSidebar} className="fa_xmark"><HiMiniXMark /></button>
                    </div>
                </div>
                <ul className={styles.gallary_items}>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/about">ABOUT US</Link></li>
                    <li><Link href="/product">PRODUCTS</Link></li>
                    <li><Link href="/flipbook">FLIPBOOK</Link></li>
                    <li><Link href="/userguide" >USER GUIDE</Link></li>
                    <li><Link href="/gallery" className={styles.active}>GALLARY</Link></li>
                </ul>

            </aside>
        </div>
        <div className={styles.topphonesec}>
            <div className={styles.lefttitlesec}>
                <h4>ECOBUST GALLARY PHOTOS</h4>
                <h1>Ecobust <br /> Photographes</h1>
                <Link href='#images'><button>VIEW MORE</button></Link>
            </div>
            <div className={styles.rightimgsec}>
                <img src="/img/ecobust/ecobust_img2.jpg" alt="" />
                <div className={styles.r_img_top}>
                    <img src="/img/ecobust/ecobust_img3.jpg" alt="" />
                    <img src="/img/ecobust/ecobust_img11.jpg" alt="" />
                </div>
            </div>
        </div>
        <h1 className={styles.ecobus_gallery}>EcoBust Image Gallery <GoArrowDownRight/></h1>
        <div className={styles.imagegallaryslider} id="images">
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                navigation={true}
                Autoplay={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="gallaryslider"
            >
                {alldata.map((pro) => (
                    <SwiperSlide key={pro._id}>
                        <img src={pro.images} alt="Product Image" loading="lazy" />
                        <h3>{pro.title}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
}