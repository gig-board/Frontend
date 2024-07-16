import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { Swiper as SwiperType } from 'swiper/types';
import { Autoplay, Pagination } from 'swiper/modules';

import { EditText, PlainText, SubTitleText, TitleText } from '../../styles/GlobalStyle';
import { styled } from 'styled-components';

const GreetingContainer = styled.div`
  width: 100%;
  height: 10vw;
  background-color: #fc8d43;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;
const PromotionContainer = styled.div`
  width: 100%;
  height: 10vw;
  padding: 0;
  display: flex;
`;
const PromotionTextContainer = styled.div`
  min-width: 40%;
  max-widht: 40%;
  height: 10vw;
  background-color: black;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 2rem;
`;
const PromotionImgContainer = styled.div`
  min-width: 60%;
  max-widht: 60%;
  height: 10vw;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export default function Banner() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: true }}
      speed={1000}
      navigation={true}
      effect="flip"
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: SwiperType) => console.log(swiper)}
    >
      <SwiperSlide>
        <GreetingContainer>
          <span>
            <SubTitleText className="mb-5">반갑습니다 {}님</SubTitleText>
            <EditText>나의 공연 홍보하기</EditText>
          </span>
          <span>
            <TitleText className="text-end">GATHER YOUR BAND</TitleText>
            <TitleText className="text-end">GIGBOARD</TitleText>
          </span>
        </GreetingContainer>
      </SwiperSlide>
      <SwiperSlide>
        <PromotionContainer>
          <PromotionTextContainer>
            <span>
              <PlainText className="text-white">날짜{}</PlainText>
              <PlainText className="text-white">장소{}</PlainText>
            </span>
            <PlainText className="text-[#ff7417]">TEAM : {}팀</PlainText>
          </PromotionTextContainer>
          <PromotionImgContainer>
            <TitleText className="text-[#ff7417] text-end">공연 제목{}</TitleText>
          </PromotionImgContainer>
        </PromotionContainer>
      </SwiperSlide>
    </Swiper>
  );
}
