import React from 'react';
import { styled } from 'styled-components';
import useToggleTabs from '../../hooks/useToggleTabs';

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
  const [activeTab, handleToggleTab] = useToggleTabs();

  const FilterChange = (index: string) => {
    handleToggleTab(index);
  };

  return (
    <TapContainer>
      <OrderButton active={activeTab === 'Tab1'} onClick={() => FilterChange('Tab1')}>
        최신순
      </OrderButton>
      <OrderButton active={activeTab === 'Tab2'} onClick={() => FilterChange('Tab2')}>
        인기순
      </OrderButton>
      <OrderButton active={activeTab === 'Tab3'} onClick={() => FilterChange('Tab3')}>
        좋아요
      </OrderButton>
    </TapContainer>
  );
};

export default ClassifyTap;
