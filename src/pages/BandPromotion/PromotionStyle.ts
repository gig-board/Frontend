import styled from 'styled-components';
import { PlainText } from '../../styles/GlobalStyle';

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
export const TapContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  justify-content: space-between;
`;
export const TapText = styled(PlainText)<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 1vw;
  cursor: pointer;
  color: ${props => (props.active ? 'black' : '#A9B5BC')};
`;
export const PromotionWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;
  margin-top: 2vw;
  cursor: pointer;
`;
export const BasicInputContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2vw;
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const InputWrapper = styled.div`
  margin: 2% 20%;
`;
export const ImgInputContainer = styled.div`
  width: 60vw;
  height: 40vh;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PromotionImgInput = styled.div`
  width: 50vw;
  height: 55vh;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MapContainer = styled.div`
  width: 100%;
  height: 50vh;
  border: 1px solid #ff7417;
  border-radius: 10px;
`;
