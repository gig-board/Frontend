import React from 'react';
import { styled } from 'styled-components';

const TapContainer = styled.div`
  background-color: #ff7417;
  height: 5vh;
  width: 16vw;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

interface OrderButtonProps {
  active: boolean;
}

const OrderButton = styled.button<OrderButtonProps>`
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  height: 80%;
  background-color: ${props => (props.active ? 'white' : '#ff7417')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  font-size: 18px;
  font-weight: 600;
`;

const ClassifyTap = () => {
  const [activeButton, setActiveButton] = React.useState('최신순');

  const FilterChange = async (newFilter: number, buttonLabel: string) => {
    setActiveButton(buttonLabel);
    try {
      //api호출
    } catch (error) {
      console.error('프로젝트 데이터 가져오기 실패:', error);
    }
  };
  return (
    <TapContainer>
      <OrderButton active={activeButton === '최신순'} onClick={() => FilterChange(0, '최신순')}>
        최신순
      </OrderButton>
      <OrderButton active={activeButton === '인기순'} onClick={() => FilterChange(1, '인기순')}>
        인기순
      </OrderButton>
      <OrderButton active={activeButton === '좋아요'} onClick={() => FilterChange(2, '좋아요')}>
        좋아요
      </OrderButton>
    </TapContainer>
  );
};

export default ClassifyTap;
