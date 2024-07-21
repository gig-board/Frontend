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
