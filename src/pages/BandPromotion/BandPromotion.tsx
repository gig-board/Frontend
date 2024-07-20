import React from 'react';
import { GlobalContainer, GlobalWrapper, SubTitleText } from '../../styles/GlobalStyle';
import ClassifyTap from '../../components/utils/ClassifyTap';
import { PromotionWrapper, TopContainer } from './PromotionStyle';
import PromotionPoster from '../../components/band/promotion/PromotionPoster';

export default function BandPromotion() {
  return (
    <GlobalWrapper>
      <GlobalContainer>
        <TopContainer>
          <SubTitleText>SHOW SCHEDULE</SubTitleText>
          <ClassifyTap />
        </TopContainer>
        <PromotionWrapper>
          <PromotionPoster />
        </PromotionWrapper>
      </GlobalContainer>
    </GlobalWrapper>
  );
}
