import React from 'react';
import { styled } from 'styled-components';
import { KAKAO_AUTH_URL } from '../../const/LoginApi';

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 2.5rem;
  font-weight: 700;
  cursor: default;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 65%;
`;
const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-end;
  width: 30%;
  gap: 2rem;
  margin-bottom: 6.5rem;
`;
const Span = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ff7417;
  color: #0d0d0d;
  clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
  transform-origin: center;
  transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Greeting = styled.h1`
  font-size: 10vw;
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;
  width: 100%;
  color: #abfe00;
  background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
  border-bottom: 1px solid #2f2b28;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  &:hover ${Span} {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
`;
const IntroText = styled.p`
  font-size: 1.8vw;
  color: white;
`;
const LoginButton = styled.button`
  text-align: center;
  color: black;
  border: none;
  border-radius: 12px;
  width: 70%;
  background-color: #fee500;
  padding: 10px;
  font-size: 1.5vw;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ffd400;
  }
`;

function Login() {
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <div className="bg-black m-0 p-0 overflow-hidden">
      <LoginWrapper>
        <TextContainer>
          <Greeting>
            GIGBOARD<Span>GATHER</Span>
          </Greeting>
          <Greeting>
            GIG<Span>YOUR</Span>
          </Greeting>
          <Greeting>
            BOARD<Span>BAND</Span>
          </Greeting>
          <Greeting>
            LET&apos;S START<Span>NOW</Span>
          </Greeting>
        </TextContainer>
        <IntroContainer>
          <IntroText>
            GIGBOARD는 여러분을<br></br>기다리고 있습니다.
          </IntroText>
          <LoginButton onClick={handleKakaoLogin}>카카오톡으로 시작하기</LoginButton>
        </IntroContainer>
      </LoginWrapper>
    </div>
  );
}

export default Login;
