// import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  color: wheat;
  background: #f8049c;
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

// interface Props {

// }

// const Buttonn: React.FC<Props> = (props) => {
//   return (
//     <div>

//     </div>
//   )
// }

export default Button;
