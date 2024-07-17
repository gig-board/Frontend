import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper as SwiperType } from 'swiper/types';
import { Autoplay, Pagination, Navigation, EffectCoverflow, Keyboard, Mousewheel } from 'swiper/modules';
import { styled } from 'styled-components';

const RecruitContainer = styled.div`
  width: 10vw;
  height: 10vw;
  border: 1px solid black;
  border-radius: 10px;
  &:hover {
    transform: scale(1.05);
  }
`;

export default function RecruitBand() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow, Keyboard, Mousewheel]}
      spaceBetween={50}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      speed={700}
      navigation={true}
      grabCursor={true}
      centeredSlides={true}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 2,
        slideShadows: false,
      }}
      keyboard={{ enabled: true }}
      mousewheel={{ forceToAxis: true }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 7,
        },
        1560: {
          slidesPerView: 8,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: SwiperType) => console.log(swiper)}
    >
      <SwiperSlide>
        <RecruitContainer></RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer></RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer></RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer></RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer></RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer></RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer></RecruitContainer>
      </SwiperSlide>
    </Swiper>
  );
}
