import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components'; 

import BuildingCard from './BuildingCard';

const CardsWrapper = styled.div`
  background: red;
  width: 80%;
`

const ContentWrapper = styled.section`
  background: yellow;
  display: flex;
  justify-content: center;
`

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
      .get("http://45.77.98.181:8000/api/buildings")
      .then(({ data }) => {
        this.setState({ buildings: data.items });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderBuildings() {
      return this.state.buildings.map(building => <BuildingCard key={building.id} building={building}/>)
  }

  render() {
    return (
        <ContentWrapper>
          <CardsWrapper>
              {this.renderBuildings()}
          </CardsWrapper>
        </ContentWrapper>
    )
  }
}

export default CardsHolder;
