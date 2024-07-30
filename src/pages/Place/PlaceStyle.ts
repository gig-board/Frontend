import styled from 'styled-components';
import { DetailText, SubmitButton } from '../../styles/GlobalStyle';

export const MapWrapper = styled.div`
  margin: 0 10%;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
`;

export const MapFloatContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: none;
  padding: 1rem;
`;
export const ShareButton = styled(SubmitButton)`
  pointer-events: auto;
`;
export const AddPlaceWrpper = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-35vw')};
  background: rgba(0, 0, 0, 0.8);
  width: 35vw;
  height: 100%;
  z-index: 10;
  transition: left 0.3s ease;
  padding: 2rem 1rem;
  pointer-events: auto;
`;

export const TitleText = styled(DetailText)`
  color: #ff7417;
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
`;
