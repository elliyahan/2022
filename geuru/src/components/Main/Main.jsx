import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import './main.css';

SwiperCore.use([Navigation, Pagination]);

const Main = () => {
  return (
    <div id='Main'>
      <section className='main-left'></section>
      <section className='main-right'>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          navigation
          pagination={{ clickable: true }}
          className='main-swiper'>
          <SwiperSlide><img src="/img/mainSlide/mainSlide1.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/mainSlide/mainSlide2.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/mainSlide/mainSlide3.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/mainSlide/mainSlide4.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Main;