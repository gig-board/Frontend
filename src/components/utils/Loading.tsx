import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import loading from '../../assets/Loading.json';
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
export const Loading = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);
    const stars = Array.from({ length: 10 });
  
    return (
      <>
        {loading && (
          <Container>
            <Lottie animationData={loading} loop={true} autoplay={true} style={{ width: '35%' }} />
          </Container>
        )}
      </>
    );
  }