import React, { useRef } from 'react';
import Header from './../component/Header';
import './../css/portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay} from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import Kiffy from './../component/Portfolio/Kiffy/Kiffy';
import './../css/header.css';
import SubHeader from './../component/SubHeader';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import MarketKurly from './../component/Portfolio/MarketKurly/MarketKurly';
import BaeMin from './../component/Portfolio/BaeMin/BaeMin';
import Youtube from './../component/Portfolio/Twitch/Youtube';
import Explore from './../component/Portfolio/Twitch/Explore';
import Channel from './../component/Portfolio/Twitch/Channel';
import Twitch from './../component/Portfolio/Youtube/Twitch';

const Portfolio = () => {
  SwiperCore.use([Navigation, Pagination]);

  const prevRef = useRef(null);
	const nextRef = useRef(null);

  const settings = {
    navigation: {
        prevEl: prevRef.current, // 이전 버튼
        nextEl: nextRef.current, // 다음 버튼
    },
    onBeforeInit: (swiper) => { // 초기 설정
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.update();
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    loop: true,
    speed: 1000,
    parallax: true,
    
    watchSlidesProgress: true,
    on: {
      progress: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * 0.5;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
        };
      }
    },

    touchStart: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },

    setTransition: function(speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
            speed + "ms";
        }
    },

    effect : 'fade', 
    fadeEffect: { 
      crossFade: true 
    },
  }

  return (
    <div id='Portfolio'>
      <div className='body'>
        <div id='body'>
          <div className='body-camera'><div className='body-camera-lens'></div></div>
            <div className='content'>
              <Header />
              <SubHeader />
              <div className='swiper-wrap'>
                <button type='button' className='slide-prev-btn' ref={prevRef}><GrFormPrevious /></button>
                <button type='button' className='slide-next-btn' ref={nextRef}><GrFormNext /></button>
                <Swiper
                {...settings}
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0} // 슬라이더 사이 마진
                slidesPerView={1} // 한 번에 보여지는 슬라이더
                loop={true} // 반복
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                }}
                pagination={{ clickable: true  }}
                onSlideChange={() => console.log('slide change')} // 슬라이더를 넘길때 마다 호출
                onSwiper={(swiper) => console.log(swiper)}
                className="mySwiper">
                  <SwiperSlide className='portfolio-slide'>
                    <div id='portfolioLogo'>
                      <img src="/img/common/portfolio_logo_size.jpg" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='portfolio-slide'><Kiffy /></SwiperSlide>
                  <SwiperSlide className='portfolio-slide'><MarketKurly /></SwiperSlide>
                  <SwiperSlide className='portfolio-slide'><Twitch /></SwiperSlide>
                  <SwiperSlide className='portfolio-slide'><Youtube /></SwiperSlide>
                  <SwiperSlide className='portfolio-slide'><Explore /></SwiperSlide>
                  <SwiperSlide className='portfolio-slide'><Channel /></SwiperSlide>
                  <SwiperSlide className='portfolio-slide'><BaeMin /></SwiperSlide>
                </Swiper>
              </div>
          </div>
        </div>
          <div id='bottom'>
            <div className='bottom-logo'><img src="/img/icon/apple.svg" alt="" /></div>
          </div>
      </div>
    </div>
  );
};

export default Portfolio;