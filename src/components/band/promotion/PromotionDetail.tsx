import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import { Swiper as SwiperType } from 'swiper/types';
import { Pagination, Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import { DetailText, ModalOverlay, TitleText } from '../../../styles/GlobalStyle';
import { styled } from 'styled-components';

import sample from '../../../assets/sampleimage.png';

const DetailWrapper = styled.div<{ backgroundImageUrl: string }>`
  width: 25vw;
  height: 30vw;
  border-radius: 5px;
  background-image: url(${props => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const PosterOverlay = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  height: 70%;
  border: none;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1.5rem;
  gap: 1rem;
`;
const PictureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
`;
const PaginationWrapper = styled.div`
  margin-top: 1rem;

  .swiper-pagination {
    position: relative;
    width: auto;
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.8);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #ff7417;
  }
`;

interface PromotionDetailProps {
  onClose: () => void;
}
const PromotionDetail: React.FC<PromotionDetailProps> = ({ onClose }) => {
  return (
    <>
      (
      <ModalOverlay onClick={onClose} className="flex-col items-center justify-center">
        <Swiper
          modules={[Pagination, Navigation, Keyboard, Mousewheel]}
          speed={700}
          slidesPerView={1}
          navigation={true}
          grabCursor={true}
          effect="flip"
          pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          loop={false}
          resistance={true}
          resistanceRatio={0}
          onSwiper={(swiper: SwiperType) => console.log(swiper)}
          style={{ width: '25vw' }}
        >
          <SwiperSlide>
            <DetailWrapper backgroundImageUrl={sample}>
              <PosterOverlay>
                <TitleText className="text-[#ff7417]">공연 제목</TitleText>
                <DetailText className="text-white self-end">SUMMIT</DetailText>
                <span>
                  <DetailText className="text-white">날짜</DetailText>
                  <DetailText className="text-white">장소</DetailText>
                </span>
              </PosterOverlay>
            </DetailWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <DetailWrapper backgroundImageUrl={sample}>
              <PictureOverlay></PictureOverlay>
            </DetailWrapper>
          </SwiperSlide>
        </Swiper>
        <PaginationWrapper>
          <div className="swiper-pagination"></div>
        </PaginationWrapper>
      </ModalOverlay>
      )
    </>
  );
};

export default PromotionDetail;
