import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import HeroSlide from "./HeroSlide";
import Pagination from "./Pagination";
import ScrollIndicator from "./ScrollIndicator";

// Import Swiper styles
import "swiper/css";

const HeroSlider = ({
  sliderData,
  sliderImages,
  partnerImages,
  setHeroSlider,
}) => {
  const totalSlides = sliderData.length;
  return (
    <Swiper
      className="hero-slider"
      modules={[EffectFade]}
      effect="fade"
      loop={false}
      speed={600}
      allowTouchMove={false}
      simulateTouch={false}
      grabCursor={false}
      mousewheel={false}
      slideToClickedSlide={false}
      preventClicks={true}
      preventClicksPropagation={true}
      keyboard={{ enabled: false }}
      onSlideChange={(swiper) => {
        const current = swiper.realIndex + 1;
        document.querySelector(".hero-pagination__current").textContent =
          current < 10 ? `0${current}` : current;
      }}
      onSwiper={(swiper) => setHeroSlider(swiper)}
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index} className="hero-slide">
          <HeroSlide
            slide={slide}
            index={index}
            image={sliderImages}
            partnerImages={partnerImages}
          />
        </SwiperSlide>
      ))}
      <ScrollIndicator />
      <Pagination totalSlides={totalSlides} />
    </Swiper>
  );
};

export default HeroSlider;
