import React, { Component } from "react";
import styled from "styled-components";

import PlusIcon from "./svg/PlusIcon";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  transition: all .2s ease-in;
  background: ${props => props.background ? 'rgba(26, 90, 241, 0.95)' : ''};
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
`;

const Logo = styled.h3`
  font-size: 1.7em;
  color: ${props => props.theme.colorWhite};
  width: 140px;
  text-align: center;
  text-transform: uppercase;
  margin-left: 8px;
`;

class Navigation extends Component {
  componentDidMount() {
    this.props.getHeight(this.navigation.clientHeight);
  }

  render() {
    return (
      <Nav innerRef={nav => (this.navigation = nav)} background={this.props.background}>
        <Logo>Buildings of Rotterdam</Logo>
        <PlusIcon />
      </Nav>
    );
  }
}

export default Navigation;
