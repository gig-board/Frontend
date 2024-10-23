import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper as SwiperType } from 'swiper/types';
import { Autoplay, Pagination, Navigation, EffectCoverflow, Keyboard, Mousewheel } from 'swiper/modules';
import { styled } from 'styled-components';
import { DetailText, PictureOverlay, SmallText } from '../../styles/GlobalStyle';

import sample from '../../assets/sampleimage.png';
import sample2 from '../../assets/sample2.png';
import sample3 from '../../assets/sample3.png';
import sample4 from '../../assets/sample4.png';
import sample5 from '../../assets/sample5.png';
import sample6 from '../../assets/sample6.png';

const RecruitContents = styled.div<{ backgroundImageUrl: string }>`
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: visible;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const RecruitContainer = styled.div<{ backgroundImageUrl: string }>`
  width: 12vw;
  height: 12vw;
  border-radius: 10px;
  overflow: visible;
  position: relative;
  z-index: 1;
  background-image: url(${props => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover ${RecruitContents} {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s, visibility 0.5s;
  }
`;
const RecruitText = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
export default function RecruitBand() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow, Keyboard, Mousewheel]}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      speed={700}
      navigation={true}
      grabCursor={true}
      effect="coverflow"
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: false,
      }}
      keyboard={{ enabled: true }}
      mousewheel={{ forceToAxis: true }}
      loop={true}
      autoHeight={true}
      breakpoints={{
        640: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 70,
        },
        1560: {
          slidesPerView: 7,
          spaceBetween: 70,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: SwiperType) => console.log(swiper)}
    >
      <SwiperSlide>
        <RecruitContainer backgroundImageUrl={sample}>
          <RecruitContents backgroundImageUrl={sample}>
            <PictureOverlay className="rounded-lg">
              <RecruitText>
                <DetailText className="text-white">SUMMIT 모집</DetailText>
                <SmallText className="text-[#ff7417]">2024.12.25</SmallText>
                <SmallText className="text-white">베이스, 피아노..</SmallText>
              </RecruitText>
            </PictureOverlay>
          </RecruitContents>
        </RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer backgroundImageUrl={sample2}>
          <RecruitContents backgroundImageUrl={sample2}>
            <PictureOverlay className="rounded-lg">
              <RecruitText>
                <DetailText className="text-white">모집 제목</DetailText>
                <SmallText className="text-[#ff7417]">날짜</SmallText>
                <SmallText className="text-white">모집 상세</SmallText>
              </RecruitText>
            </PictureOverlay>
          </RecruitContents>
        </RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer backgroundImageUrl={sample3}>
          <RecruitContents backgroundImageUrl={sample3}>
            <PictureOverlay className="rounded-lg">
              <RecruitText>
                <DetailText className="text-white">모집 제목</DetailText>
                <SmallText className="text-[#ff7417]">날짜</SmallText>
                <SmallText className="text-white">모집 상세</SmallText>
              </RecruitText>
            </PictureOverlay>
          </RecruitContents>
        </RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer backgroundImageUrl={sample4}></RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer backgroundImageUrl={sample5}></RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer backgroundImageUrl={sample6}></RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer backgroundImageUrl={sample2}></RecruitContainer>
      </SwiperSlide>
      <SwiperSlide>
        <RecruitContainer backgroundImageUrl={sample3}></RecruitContainer>
      </SwiperSlide>
    </Swiper>
  );
}
