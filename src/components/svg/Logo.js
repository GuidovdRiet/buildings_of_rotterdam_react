import React from "react";
import styled from 'styled-components';

const Brand = styled.svg`
    width: 40px;
    height: 40px;
    fill: white;
    border: 1px solid ${props => props.theme.colorWhite};
    padding: 10px;
    border-radius: 100%;
`

const Logo = () => 
    <Brand viewBox="0 0 36.38 43.45">
        <rect x="9.19" y="-0.04" width="2" height="43" />
        <rect x="0.19" y="11.96" width="2" height="31" />
        <rect x="17.19" y="11.96" width="2" height="31" />
        <rect x="25.19" y="-0.04" width="2" height="43" />
        <rect x="34.19" y="11.96" width="2" height="31" />
    </Brand>

export default Logo;
