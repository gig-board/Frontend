import React from 'react';
import { BandContainer, BandWrapper, MapWrapper, TitleWrapper } from './MainStyle';
import { GlobalContainer, GlobalWrapper, LinkText, SubTitleText } from '../../styles/GlobalStyle';
import Banner from '../../components/main/Banner';
import RecruitBand from '../../components/main/RecruitBand';
import KakaoMap from '../../components/utils/KakaoMap';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <GlobalWrapper>
      <GlobalContainer>
        <Banner />
        <TitleWrapper>
          <SubTitleText>모집 중인 밴드</SubTitleText>
          <Link to="/recruitband">
            <LinkText>더 알아보기</LinkText>
          </Link>
        </TitleWrapper>
      </GlobalContainer>
      <BandWrapper>
        <BandContainer>
          <RecruitBand />
        </BandContainer>
      </BandWrapper>
      <GlobalContainer>
        <TitleWrapper>
          <SubTitleText>주변 공연장 & 합주실을 찾아보세요</SubTitleText>
          <Link to="/map">
            <LinkText>나의 장소 등록하기</LinkText>
          </Link>
        </TitleWrapper>
        <MapWrapper>
          <KakaoMap />
        </MapWrapper>
      </GlobalContainer>
    </GlobalWrapper>
  );
}
