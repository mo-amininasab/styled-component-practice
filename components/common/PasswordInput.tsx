import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Input } from '..';

// ? attrs???
const PasswordInputStyled = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

interface Props {}

const PasswordInput: React.FC<Props> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Fragment>
      <PasswordInputStyled {...props} />
    </Fragment>
  );
};

export default PasswordInput;
