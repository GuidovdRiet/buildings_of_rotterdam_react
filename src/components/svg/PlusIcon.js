import React from "react";
import styled from 'styled-components';

const Icon = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${props => props.theme.colorWhite};
  margin-right: 15px;
`

const PlusIcon = () => 
    <Icon viewBox="0 0 24.66 24.66">
      <path d="M22.1,10.11H15V2.56a2.5,2.5,0,1,0-5,0v7.55H2.56a2.5,2.5,0,1,0,0,5H10v7a2.5,2.5,0,1,0,5,0v-7h7.1A2.5,2.5,0,1,0,22.1,10.11Z" />
    </Icon>

export default PlusIcon;
