// import React from 'react'
import styled from 'styled-components';

interface ButtonProps {
  readonly secondary?: boolean;
}

const Button = styled.button<ButtonProps>`
  color: wheat;
  background: ${({secondary}) => secondary ? 'black' : '#f8049c'} ;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1rem;
  border: none;
  width: 100%;
  display: block;
  word-spacing: none;

  &::disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
