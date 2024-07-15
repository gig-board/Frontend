import React from 'react';
import styled from 'styled-components';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ReactComponent as Logo } from '../../assets/Logo-Header.svg';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar';

const HeaderWrapper = styled.nav`
  width: 100vw;
  height: 64px;
  background: black;
  position: relative;
  display: flex;
  align-items: center;
`;
const SidebarIcon = styled(MoreVertIcon)`
  color: #ff7417;
  height: 100%;
  cursor: pointer;
  margin-left: 1vw;
`;
const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-left: 8%;
  margin-right: 10%;
`;
const HeaderLogo = styled(Logo)`
  &:hover {
    cursor: pointer;
  }
  height: 100%;
  width: 8vw;
  margin-top: 3px;
`;
const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ff7417;
`;
export default function Header() {
  const [sideBarOpen, setSideBarOpen] = React.useState(false);

  const toggleSideBar = (open: boolean) => {
    setSideBarOpen(open);
  };

  return (
    <>
      <HeaderWrapper>
        <SidebarIcon onClick={() => toggleSideBar(!sideBarOpen)} />
        <LogoWrapper>
          <Link to="/main">
            <HeaderLogo />
          </Link>
          <Link to="/mypage">
            <ProfileImg />
          </Link>
        </LogoWrapper>
      </HeaderWrapper>
      <SideBar sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar} />
    </>
  );
}
