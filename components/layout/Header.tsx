import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #eee;
`;

const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: 'Open Sans';
  background: none;
  left: initial;
  top: initial;
`;

interface StyledLinkProps {
  readonly isActive?: boolean;
}

// MenuAlt inherit all the styles from Menu, and can override them.
const StyledLink = styled.a<StyledLinkProps>`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <HeaderWrapper>
      <Menu>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/login" passHref>
          <StyledLink isActive>Login</StyledLink>
        </Link>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
