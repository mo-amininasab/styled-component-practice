import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import * as FiIcons from 'react-icons/fi';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: #fdd54f solid 3px;
`;

const Menu = styled.nav<{ open: boolean }>`
  /* // * Mobile first */
  display: ${({ open }) => (open ? 'block' : 'none')};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: #fdd54f solid 3px;
  background: white;

  /* // * Desktop second */
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    background: none;
    left: initial;
    top: initial;
  }
`;

interface StyledLinkProps {
  readonly isActive?: boolean;
}

// * MenuAlt inherit all the styles from Menu, and can override them.
const StyledLink = styled.a<StyledLinkProps>`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: black;
`;

const MobileMenuIcon = styled.div`
  width: 25px;
  height: 25px;
  color: black;
  margin: auto 0 auto auto;
  padding: 5px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

interface Props {}

const Header: React.FC<Props> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useRouter();

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((prevState) => !prevState)}>
        <FiIcons.FiMenu size={25} />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <Link href="/" passHref>
          <StyledLink isActive={pathname === '/'}>Home</StyledLink>
        </Link>
        <Link href="/login" passHref>
          <StyledLink isActive={pathname === '/login'}>Login</StyledLink>
        </Link>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
