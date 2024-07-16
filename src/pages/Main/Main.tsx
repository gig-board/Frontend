import React from 'react';
import { BandWrapper, MainContainer, MainWrapper, TitleWrapper } from './MainStyle';
import { LinkText, SubTitleText } from '../../styles/GlobalStyle';
import Banner from '../../components/main/Banner';

export default function Main() {
  return (
    <MainWrapper>
      <MainContainer>
        <Banner />
        <TitleWrapper>
          <SubTitleText>모집 중인 밴드</SubTitleText>
          <LinkText>더 알아보기</LinkText>
        </TitleWrapper>
        <BandWrapper></BandWrapper>
        <TitleWrapper>
          <SubTitleText>주변 공연장 & 합주실을 찾아보세요</SubTitleText>
          <LinkText>나의 장소 등록하기</LinkText>
        </TitleWrapper>
      </MainContainer>
    </MainWrapper>
  );
}
