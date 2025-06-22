import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ImageSlider.css'; // your custom styles for backgrounds etc.

const Articles = () => {
  return (
    <div className="slider-part">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-1"></SwiperSlide>
        <SwiperSlide className="swiper-2"></SwiperSlide>
        <SwiperSlide className="swiper-3"></SwiperSlide>
        <SwiperSlide className="swiper-4"></SwiperSlide>
        <SwiperSlide className="swiper-5"></SwiperSlide>
        <SwiperSlide className="swiper-6"></SwiperSlide>
      </Swiper>
    </div>
  )
}
export default Articles;