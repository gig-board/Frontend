import styled from 'styled-components';

//텍스트
export const TitleText = styled.h1`
  font-size: 48px;
  font-weight: 700;
`;

export const SubTitleText = styled.h2`
  font-size: 26px;
  font-weight: 800;
`;
export const PlainText = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;
export const DetailText = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
export const SmallText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
export const LinkText = styled.p`
  font-size: 16px;
  color: #a9b5bc;
  cursor: pointer;
`;
export const NoticeText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #ff7417;
  cursor: default;
`;
export const EditText = styled.p`
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

//인풋 스타일
export const ShortInput = styled.input`
  width: 100%;
  height: 1vh;
`;
export const MultiInput = styled.input`
  width: 100%;
  height: 10vh;
`;

//버튼 스타일
export const SubmmitButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #ff9045;
  cursor: pointer;
  padding: 10px 20px;
`;

//오버레이 스타일
export const PictureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;
