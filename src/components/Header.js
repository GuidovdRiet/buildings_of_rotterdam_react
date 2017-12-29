import React, { Component } from "react";
import styled from "styled-components";

// svg
import Logo from "./svg/Logo";
import CircleIcon from "./svg/CircleIcon";
import background from "../images/background-stripes.svg";

const Quote = styled.h1`
  font-size: 3.2em;
  text-align: center;
  font-family: "Playfair Display", serif;
  color: ${props => props.theme.colorWhite};
  font-weight: lighter;
  margin-bottom: 10px;
  width: 60%;
`;

const QuoteAuthor = styled.h2`
  font-size: 2.2em;
  text-align: center;
  margin-top: 8px;
  font-family: "Playfair Display", serif;
  color: ${props => props.theme.colorWhite};
  font-weight: lighter;
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
  constructor() {
    super();
  }

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
