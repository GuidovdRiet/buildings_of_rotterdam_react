import React, { Component } from "react";
import styled from "styled-components";

// svg
import Logo from "./svg/Logo";
import CircleIcon from "./svg/CircleIcon";
import background from "../images/background-stripes.svg";

const Quote = styled.h1`
  color: ${props => props.theme.colorWhite};
  text-align: center;
  width: 60%;
`;

const QuoteAuthor = styled.h2`
  text-align: center;
  color: ${props => props.theme.colorWhite};
`;

const Wrapper = styled.header`
  background-image: url(${background}),
    linear-gradient(
      ${props => props.theme.colorMain},
      ${props => props.theme.colorMain}
    );
  background-size: cover;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Header extends Component {
  
  componentDidMount() {
    this.props.getHeight(this.wrapper.clientHeight);
  }

  render() {
    return (
      <Wrapper innerRef={wrap => (this.wrapper = wrap)}>
        <ContentWrapper>
          <Logo />
          <Quote>
            Good buildings come from good people, and all problems are solved by
            good design.
          </Quote>
          <CircleIcon />
          <QuoteAuthor>Stephen Gardiner</QuoteAuthor>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default Header;
