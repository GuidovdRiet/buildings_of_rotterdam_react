import React, { Component } from "react";
import styled from 'styled-components';

// svg
import Logo from './svg/Logo';
import Navigation from './Navigation';

const Quote = styled.h1`
  font-size: 3.2em;
  text-align: center;
  font-family: 'Playfair Display', serif;
  color: ${props => props.theme.colorWhite};
  font-weight: lighter;
  width: 60%;
`;

const Wrapper = styled.header`
  background: ${props => props.theme.colorMain};
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Navigation />
        <ContentWrapper>
          <Logo/>
          <Quote>
            Good buildings come from good people, and all problems are solved by good design.
          </Quote>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default Header;