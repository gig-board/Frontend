import React from 'react';
import { styled } from 'styled-components';

import sample from '../../../assets/sampleimage.png';
import { PlainText, SmallText } from '../../../styles/GlobalStyle';

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImgContainer = styled.div<{ backgroundImageUrl: string }>`
  width: 100%;
  height: 18vw;
  border-radius: 10px;
  background-image: url(${props => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export default function AllRecruit() {
  return (
    <>
      <AllContainer>
        <ImgContainer backgroundImageUrl={sample}></ImgContainer>
        <PlainText>실리카겔 모집</PlainText>
        <SmallText>날짜</SmallText>
      </AllContainer>
    </>
  );
}
