import React, { Component } from "react";
import { Redirect } from 'react-router'
import styled from "styled-components";

const Card = styled.div`
  background: URL(${props => props.image});
  background-size: cover;
  flex-grow: 1;
  min-width: 25%;
  height: 400px;
  margin: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

class BuildingCard extends Component {
  constructor() {
    super();
    this.state = {
      cardId: null
    };
  }

  getBuilding() {
    this.setState({ cardId: this.props.building.id });
  }

  render() {
    const { cardId } = this.state;

    if (cardId) {
      return <Redirect to={'/buildings/show/' + cardId} />
    }

    return <Card onClick={() => this.getBuilding()} {...this.props.building} />
  }
}

export default BuildingCard;
