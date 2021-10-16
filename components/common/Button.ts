// import React from 'react'
import styled, { css } from 'styled-components';

interface ButtonProps {
  readonly secondary?: boolean;
  readonly disabled?: boolean;
  readonly large?: boolean;
}

const Button = styled.button<ButtonProps>`
  color: wheat;
  background: ${({ secondary }) => (secondary ? 'black' : '#f8049c')};
  font-weight: bold;
  ${({ large }) =>
    large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
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
