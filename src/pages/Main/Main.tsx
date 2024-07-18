import React from 'react';
import { BandContainer, BandWrapper, MainContainer, MainWrapper, MapWrapper, TitleWrapper } from './MainStyle';
import { LinkText, SubTitleText } from '../../styles/GlobalStyle';
import Banner from '../../components/main/Banner';
import RecruitBand from '../../components/main/RecruitBand';
import KakaoMap from '../../components/utils/KakaoMap';

export default function Main() {
  return (
    <MainWrapper>
      <MainContainer>
        <Banner />
        <TitleWrapper>
          <SubTitleText>모집 중인 밴드</SubTitleText>
          <LinkText>더 알아보기</LinkText>
        </TitleWrapper>
      </MainContainer>
      <BandWrapper>
        <BandContainer>
          <RecruitBand />
        </BandContainer>
      </BandWrapper>
      <MainContainer>
        <TitleWrapper>
          <SubTitleText>주변 공연장 & 합주실을 찾아보세요</SubTitleText>
          <LinkText>나의 장소 등록하기</LinkText>
        </TitleWrapper>
        <MapWrapper>
          <KakaoMap />
        </MapWrapper>
      </MainContainer>
    </MainWrapper>
  );
}
