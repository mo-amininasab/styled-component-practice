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
`;

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <HeaderWrapper>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
    </HeaderWrapper>
  );
};

export default Header;
