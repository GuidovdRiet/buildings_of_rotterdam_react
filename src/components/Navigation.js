import React, { Component } from 'react';
import styled from 'styled-components';

import PlusIcon from './svg/PlusIcon';

const Nav = styled.nav`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
`

const Logo = styled.h3`
    font-size: 1.7em;
    color: ${props => props.theme.colorWhite};
    width: 140px;
    text-align: center;
    text-transform: uppercase;
`

class Navigation extends Component {
    render() {
        return(
            <Nav>
                <Logo>Buildings of Rotterdam</Logo>
                <PlusIcon />
            </Nav>
        )
    }
}

export default Navigation;