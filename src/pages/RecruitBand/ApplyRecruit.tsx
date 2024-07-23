import React from 'react';
import {
  DetailText,
  GlobalContainer,
  GlobalWrapper,
  MultiInput,
  NoticeText,
  PlainText,
  SubmitButton,
} from '../../styles/GlobalStyle';
import { InputWrapper } from '../BandPromotion/PromotionStyle';
import SessionIcon from '../../const/SelectSession';

export default function ApplyRecruit() {
  return (
    <GlobalWrapper>
      <GlobalContainer>
        <InputWrapper>
          <PlainText className="text-[#ff7417] mb-2">모집 밴드 지원하기</PlainText>
          <DetailText>지원 세션</DetailText>
          <SessionIcon />
          <DetailText>나를 소개해주세요</DetailText>
          <MultiInput />
          <span>
            <DetailText>경력을 작성해주세요</DetailText>
            <NoticeText className="text-end">관련 경력 사항을 작성해주세요.</NoticeText>
          </span>
          <MultiInput />
          <span className="w-full flex justify-end">
            <SubmitButton>지원하기</SubmitButton>
          </span>
        </InputWrapper>
      </GlobalContainer>
    </GlobalWrapper>
  );
}
