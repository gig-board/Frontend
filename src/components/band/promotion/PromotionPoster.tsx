import React from 'react';
import styled from 'styled-components';

import sample from '../../../assets/sampleimage.png';
import { DetailText, TitleText } from '../../../styles/GlobalStyle';
import PromotionDetail from './PromotionDetail';
import useModal from '../../../hooks/useModal';

const PromotionContents = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: visible;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
`;
const PosterOverlay = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  height: 70%;
  border: none;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1.5rem;
  gap: 1rem;
`;
const PosterWrapper = styled.div<{ backgroundImageUrl: string }>`
  width: 100%;
  height: 26vw;
  border-radius: 8px;
  background-image: url(${props => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  &:hover ${PromotionContents} {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.8s, visibility 0.8s;
  }
  &:hover ${PosterOverlay} {
    opacity: 0;
    transition: opacity 0.8s;
  }
`;

function PromotionPoster() {
  const [showModal, handleModal] = useModal();

  const handleShowDetail = () => {
    handleModal();
    //포스터 아이디와 함께 정보 요청
  };
  return (
    <>
      <PosterWrapper backgroundImageUrl={sample} onClick={() => handleShowDetail()}>
        <PosterOverlay>
          <TitleText className="text-[#ff7417]">공연 제목</TitleText>
          <DetailText className="text-white self-end">SUMMIT</DetailText>
          <span>
            <DetailText className="text-white">날짜</DetailText>
            <DetailText className="text-white">장소</DetailText>
          </span>
        </PosterOverlay>
        <PromotionContents>
          <span>
            <TitleText className="text-[#ff7417]">공연 제목</TitleText>
            <DetailText className="text-white">SUMMIT</DetailText>
          </span>
          <span>
            <DetailText className="text-white">날짜</DetailText>
            <DetailText className="text-white">장소</DetailText>
            <DetailText className="text-white underline">예매링크</DetailText>
          </span>
          <DetailText className="text-white">공연 상세</DetailText>
        </PromotionContents>
      </PosterWrapper>
      {showModal && <PromotionDetail onClose={handleModal} />}
    </>
  );
}

export default PromotionPoster;
