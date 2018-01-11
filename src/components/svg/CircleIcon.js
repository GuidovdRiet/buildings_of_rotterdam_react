import React from "react";
import styled from 'styled-components';

const Icon = styled.svg`
  width: 10px;
  fill: ${props => props.primary ? props.theme.colorMain : props.theme.colorWhite};
`

const Circle = () => {
  return (
    <Icon viewBox="0 0 9.61 9.61">
      <path d="M4.8,9.61a4.8,4.8,0,1,1,4.8-4.8A4.81,4.81,0,0,1,4.8,9.61ZM4.8,1a3.8,3.8,0,1,0,3.8,3.8A3.81,3.81,0,0,0,4.8,1Z" />
    </Icon>
  );
};

export default Circle;
