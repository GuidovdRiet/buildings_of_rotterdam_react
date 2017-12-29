import React, { Component } from "react";
import styled from "styled-components";

import PlusIcon from "../images/plus-icon.svg";

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

const Add = styled.button`
  background: none;
  background-image: url(${PlusIcon});
  background-size: cover;
  width: 30px;
  height: 30px;
  border: none;
  margin-right: 16px;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`

class Navigation extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getHeight(this.navigation.clientHeight);
  }

  test = (e) => {
    console.log(e)
  } 

  render() {
    return (
      <Nav innerRef={nav => (this.navigation = nav)} background={this.props.background}>
        <Logo>Buildings of Rotterdam</Logo>
        <Add onClick={this.props.toggleForm} />
      </Nav>
    );
  }
}

export default Navigation;
