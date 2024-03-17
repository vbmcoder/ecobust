import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Head from 'next/head';

export default function Flipbook() {
    return <>
        <Head>
            <title>Flipbook of Ecobust Non Explosive Demolition Powder | Eco Bust</title>
            <meta name="description" content="Discover the power of Ecobust through our dynamic flipbook, showcasing its revolutionary non-explosive demolition capabilities. Dive into a visual journey of eco-friendly concrete and rock breaking, illustrating Ecobust's effectiveness and sustainability. Explore our flipbook for a captivating glimpse into safer and greener demolition solutions." />
        </Head>
        <div className='flipbooksec'>
            <Swiper
                data-aos="zoom-out"
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                navigation={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="flipbook"
            >
                <SwiperSlide>
                    <img src="/img/flipbook1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/flipbook2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/flipbook3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/flipbook4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/flipbook5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/flipbook6.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    </>
}