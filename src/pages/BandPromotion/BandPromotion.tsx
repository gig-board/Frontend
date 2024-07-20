import React from 'react';
import { GlobalContainer, GlobalWrapper, SubTitleText } from '../../styles/GlobalStyle';
import ClassifyTap from '../../components/utils/ClassifyTap';
import { PromotionWrapper, TapContainer, TapText, TopContainer } from './PromotionStyle';
import PromotionPoster from '../../components/band/promotion/PromotionPoster';
import useToggleTabs from '../../hooks/useToggleTabs';

export default function BandPromotion() {
  const [activeTab, handleToggleTab] = useToggleTabs();

  const FilterChange = (index: string) => {
    handleToggleTab(index);
  };

  return (
    <GlobalWrapper>
      <GlobalContainer>
        <TopContainer>
          <SubTitleText>SHOW SCHEDULE</SubTitleText>
          <ClassifyTap />
        </TopContainer>
        <TapContainer>
          <TapText active={activeTab === 'Tab1'} onClick={() => FilterChange('Tab1')}>
            전체 공연
          </TapText>
          <TapText active={activeTab === 'Tab2'} onClick={() => FilterChange('Tab2')}>
            동아리 공연
          </TapText>
        </TapContainer>
        <PromotionWrapper>
          <PromotionPoster />
        </PromotionWrapper>
      </GlobalContainer>
    </GlobalWrapper>
  );
}
