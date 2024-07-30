import React from 'react';
import {
  DetailText,
  GlobalWrapper,
  PictureOverlay,
  PlainText,
  SmallText,
  SubmitButton,
  SubTitleText,
} from '../../styles/GlobalStyle';
import {
  BandDetailContainer,
  BandImg,
  BandImgContainer,
  BandTitleContainer,
  ButtonWrapper,
  DetailContainer,
} from './RecruitStyle';

import sample from '../../assets/sampleimage.png';
import { Link } from 'react-router-dom';

export default function DetailRecruit() {
  return (
    <GlobalWrapper>
      <DetailContainer>
        <BandImgContainer backgroundImageUrl={sample}>
          <PictureOverlay>
            <BandTitleContainer>
              <PlainText className="text-white text-end">날짜</PlainText>
              <ButtonWrapper>
                <span>
                  <SubTitleText className="text-[#ff7417]">모집 제목</SubTitleText>
                  <DetailText className="text-white">공연 설명</DetailText>
                </span>
                <span className="text-center">
                  <SmallText className="text-[#FE4D3E]">오늘까지 {} 명 지원</SmallText>
                  <Link to={`/applyrecruit/1`}>
                    <SubmitButton>지원하기</SubmitButton>
                  </Link>
                </span>
              </ButtonWrapper>
            </BandTitleContainer>
            <BandDetailContainer>
              <BandImg backgroundImageUrl={sample} />
              <div className="flex-col gap-2 h-full">
                <PlainText>모집 중인 세션</PlainText>
                <DetailText>모집 수준 : {}</DetailText>
                <DetailText>모집 세션 : {}</DetailText>
                <DetailText>모집 인원 : {}</DetailText>
                <DetailText>기타 공지 사항 : {}</DetailText>
              </div>
            </BandDetailContainer>
          </PictureOverlay>
        </BandImgContainer>
      </DetailContainer>
    </GlobalWrapper>
  );
}
