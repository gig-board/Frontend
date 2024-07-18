import React from 'react';
import { styled } from 'styled-components';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';

interface SidebarProps {
  sideBarOpen: boolean;
  toggleSideBar: (open: boolean) => void;
}
const SideBarWrpper = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-20vw')};
  background: rgba(0, 0, 0, 0.8);
  width: 20vw;
  height: 100%;
  z-index: 10;
  transition: left 0.3s ease;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1vw;
`;
const MenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vw;
`;
const MenuItems = styled.p`
  color: white;
  border: none;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  &:hover {
    color: #ff7417;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
  }
`;
const MenuItem = [
  { text: '공연 홍보', path: '/bandpromotion' },
  { text: '밴드 모집', path: '/recruitband' },
  { text: '나의 팀짜기', path: '/map' },
  { text: '연습실 찾기', path: '/map' },
  { text: 'MYPAGE', path: '/mypage' },
];
export default function Sidebar({ sideBarOpen, toggleSideBar }: SidebarProps) {
  const toggleDropMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation(); // 이벤트 캡쳐링 방지
  };

  return (
    <div className="" onClick={() => toggleSideBar(false)}>
      <SideBarWrpper open={sideBarOpen} onClick={() => toggleDropMenu}>
        <IconContainer>
          <CloseRoundedIcon style={{ color: 'white' }} onClick={() => toggleSideBar(false)} />
          <p className="text-[#ff7417] font-bold text-base">GIGBOARD</p>
        </IconContainer>
        <MenuListContainer>
          {MenuItem.map((menu, index) => (
            <MenuItems key={index} onClick={() => toggleSideBar(false)}>
              <Link to={menu.path}>{menu.text}</Link>
            </MenuItems>
          ))}
        </MenuListContainer>
      </SideBarWrpper>
    </div>
  );
}
