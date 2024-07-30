import React from 'react';
import { DetailText, GlobalWrapper, ShortInput, SmallText } from '../../styles/GlobalStyle';
import { AddButton, AddMemberContainer, ClubWrapper, MemberContainer } from './ClubStyle';

export default function ClubBoard() {
  return (
    <GlobalWrapper>
      <ClubWrapper>
        <AddMemberContainer>
          <DetailText>동아리명</DetailText>
          <DetailText>동아리원을 추가해주세요.</DetailText>
          <SmallText>이름을 입력하세요.</SmallText>
          <ShortInput />
          <SmallText>세션을 선택하세요.</SmallText>
          <SmallText>동아리원의 수준을 선택하세요.</SmallText>
          <AddButton>멤버 등록하기</AddButton>
        </AddMemberContainer>
        <MemberContainer>
          <DetailText>동아리원을 원하는 팀으로 드래그해주세요.</DetailText>
        </MemberContainer>
      </ClubWrapper>
    </GlobalWrapper>
  );
}
