import React from 'react';
import { styled } from 'styled-components';

import sample from '../../../assets/sampleimage.png';
import { PlainText, SmallText } from '../../../styles/GlobalStyle';
import { useNavigate } from 'react-router-dom';

const TopRankContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const ImgContainer = styled.div<{ backgroundImageUrl: string }>`
  width: 100%;
  height: 17vw;
  border-radius: 10px;
  background-image: url(${props => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;
const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RecruitImgContainer = styled.div<{ backgroundImageUrl: string }>`
  width: 80%;
  height: 13vw;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-image: url(${props => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export default function TopRankRecruit() {
  const navigate = useNavigate();
  const LinkDetail = (id: number) => {
    navigate(`/detailrecruit/${id}`);
  };
  return (
    <TopRankContainer onClick={() => LinkDetail(1)}>
      <ImgContainer backgroundImageUrl={sample}>
        <ImgOverlay>
          <RecruitImgContainer backgroundImageUrl={sample}></RecruitImgContainer>
        </ImgOverlay>
      </ImgContainer>
      <PlainText>실리카겔 모집</PlainText>
      <SmallText>날짜</SmallText>
    </TopRankContainer>
  );
}
