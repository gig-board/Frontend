import React from 'react';
import { DetailText, GlobalContainer, GlobalWrapper, ShortInput, SubTitleText } from '../../styles/GlobalStyle';
import { AllRecruitContainer, FloatContainer, TopRankContainer } from './RecruitStyle';
import TopRankRecruit from '../../components/band/recruit/TopRankRecruit';
import AllRecruit from '../../components/band/recruit/AllRecruit';
import ClassifyTap from '../../components/utils/ClassifyTap';
import { Link } from 'react-router-dom';

export default function RecruitBand() {
  return (
    <GlobalWrapper>
      <GlobalContainer>
        <FloatContainer>
          <Link to="/createrecruit">
            <DetailText className="text-[#ff7417] cursor-pointer">나의 밴드 등록하기</DetailText>
          </Link>
          <span className="w-[18vw]">
            <ShortInput></ShortInput>
          </span>
        </FloatContainer>
        <SubTitleText className="text-center my-[2vh]">RANKING</SubTitleText>
        <TopRankContainer>
          <TopRankRecruit />
        </TopRankContainer>
        <ClassifyTap />
        <AllRecruitContainer>
          <AllRecruit />
        </AllRecruitContainer>
      </GlobalContainer>
    </GlobalWrapper>
  );
}
