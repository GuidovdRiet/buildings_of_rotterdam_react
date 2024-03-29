import React, { Component } from "react";
import styled from "styled-components";
import PlusIcon from "../images/plus-icon.svg";

import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  transition: all 0.2s ease-in;
  background: ${props =>
    props.backgroundColor ? "rgba(26, 90, 241, 0.95)" : ""};
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  top: 0;
  left: 0;
`;

const styledLink = styled(Link)`
  background: red;
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
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

class Navigation extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getHeight(this.navigation.clientHeight);
  }

  render() {
    return (
      <Nav
        innerRef={nav => (this.navigation = nav)}
        backgroundColor={this.props.background}
      >
        <Link to={"/"}>
          <Logo>Buildings of Rotterdam</Logo>
        </Link>
        <Link to={"/buildings/add"}>
          <Add />
        </Link>
      </Nav>
    );
  }
}

export default Navigation;
