import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gif from '../../assets/Loading.json';
import Lottie from './LottieComponent';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  z-index: 50;
`;
const LogoText = styled.h1`
  color: #ff7417;
  letter-spacing: 1rem;
`;
export const Loading = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      (
      <Container>
        <Lottie animationData={gif} loop={true} autoplay={true} style={{ width: '30%' }} />
        <LogoText>G I G B O A R D</LogoText>
      </Container>
      )
    </>
  );
};
