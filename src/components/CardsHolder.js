import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import BuildingCard from "./BuildingCard";

const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: -40px;
`;

const CardsWrapper = styled.div`
  width: 90%;
  max-width: 1130px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;

class CardsHolder extends Component {
  constructor() {
    super();
    this.renderBuildings = this.renderBuildings.bind(this);
    this.state = {
      buildings: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/buildings')
      .then(({ data }) => {
        this.setState({ buildings: data.items });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderBuildings() {
    return this.state.buildings.map(building => (
      <BuildingCard key={building.id} building={building} getBuildingId={this.props.getBuildingId}/>
    ));
  }

  render() {
    return (
      <ContentWrapper>
        <CardsWrapper>{this.renderBuildings()}</CardsWrapper>
      </ContentWrapper>
    );
  }
}

export default CardsHolder;
