import { HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";
import { GoArrowDownRight } from "react-icons/go";
import styles from '../styles/Gallary.module.css'
import { useEffect, useState } from 'react';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoClose } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";
import { AiOutlineZoomIn , AiOutlineZoomOut} from "react-icons/ai";
// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
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
        { _id: 4, images: "/img/ecobust/ecobust_img3.jpg", title: "image4" },
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

    const [fullScreenImage, setFullScreenImage] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    const handleClick = (src) => {
        setFullScreenImage(src);
    };

    const handleClose = () => {
        setFullScreenImage(null);
    };
    const handleZoomIn = () => {
        setZoomLevel(prevZoom => prevZoom + 1);
    };

    const handleZoomOut = () => {
        if (zoomLevel > 0.2) {
            setZoomLevel(prevZoom => prevZoom - 1);
        }
    };

   

    // const openFullScreen = (imageUrl) => {
    //     setFullScreenImage(imageUrl);
    //     if (document.documentElement.requestFullscreen) {
    //         document.documentElement.requestFullscreen();
    //     } else if (document.documentElement.webkitRequestFullscreen) {
    //         // Safari
    //         document.documentElement.webkitRequestFullscreen();
    //     }
    // };

    // const closeFullScreen = () => {
    //     setFullScreenImage(null);
    //     if (document.exitFullscreen) {
    //         document.exitFullscreen();
    //     } else if (document.webkitExitFullscreen) {
    //         // Safari
    //         document.webkitExitFullscreen();
    //     }
    // };

    return <>
        <Head>
            {/* <title>Gallery Photographes of Ecobust Non Explosive Demolition Powder | EcoBust</title>
            <meta name="description" content="Explore the impressive gallery showcasing Ecobust in action, the leading non-explosive demolition powder. Witness the eco-friendly and effective solution breaking concrete and rock with ease. Browse our gallery for inspiration on sustainable demolition practices." /> */}
        </Head>

        <div className={styles.topphonesec}>
            <div className={styles.lefttitlesec}>
                <h4>ECOBUST GALLARY PHOTOS</h4>
                <h1>Ecobust <br /> Photographes</h1>
                <Link href='#images'><button>VIEW MORE</button></Link>
            </div>
            <div className={styles.rightimgsec}>
                <img src="/img/ecobust/ecobust_img2.jpg" alt="Ecobust: Revolutionizing Demolition Practices with Green Technology" />
                <div className={styles.r_img_top}>
                    <img src="/img/ecobust/ecobust_img3.jpg" alt="Non-Toxic Concrete Demolition Made Easy with Ecobust" />
                    <img src="/img/ecobust/ecobust_img11.jpg" alt="Ecobust: Eco-Friendly Alternative for Rock and Concrete Breaking" />
                </div>
            </div>
        </div>
        <h1 className={styles.ecobus_gallery}>EcoBust Image Gallery <GoArrowDownRight /></h1>
        <div className={styles.imagegallaryslider} id="images">
            <div class="row">
                <div class="column">
                    <img src="/img/ecobust/ecobust_img10.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img10.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img4.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img4.jpg")}  loading="lazy" />
                    <img src="/img/ecobust/ecobust_img6.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img6.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img4.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img4.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img17.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img17.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img3.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img3.jpg")} loading="lazy" />
                </div>
                <div class="column">
                    <img src="/img/ecobust/ecobust_img8.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img8.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img6.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img6.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img16.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img16.jpg")} loading="lazy" />
                </div>
                <div class="column">
                    <img src="/img/ecobust/ecobust_img1.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img1.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img9.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img9.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img12.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img12.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img5.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img5.jpg")} loading="lazy" />
                </div>
                <div class="column">
                    <img src="/img/ecobust/ecobust_img11.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img11.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img13.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img13.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img12.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img12.jpg")} loading="lazy" />
                    <img src="/img/ecobust/ecobust_img2.jpg" onClick={() => handleClick("/img/ecobust/ecobust_img2.jpg")} loading="lazy" />
                </div>
            </div>
             {fullScreenImage && (
                <div className="fullscreen-overlay">
                    <div className="image-container">
                        <img
                            src={fullScreenImage}
                            alt="Ecobust Stone Cracking Powder"
                            className="fullscreen-image"
                            style={{ transform: `scale(${zoomLevel})` } }
                        />
                        <div className="controls">
                            {zoomLevel === 1 ? <AiOutlineZoomIn  onClick={handleZoomIn} /> : <AiOutlineZoomOut  onClick={handleZoomOut} />}
                            {/* <button onClick={openFullScreen}><MdFullscreen/></button> */}
                            <button onClick={handleClose}><IoClose/></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
}