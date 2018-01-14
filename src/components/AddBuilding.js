import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import CircleIcon from "./svg/CircleIcon";
import AddBuildingForm from "./AddBuildingForm";

const BuildingFormWrapper = styled.section`
  margin: 100px 10% 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.h3`
  font-size: 1.9em;
  text-align: center;
  margin-bottom: 3px;
  font-family: "Playfair Display", serif;
  color: ${props => props.theme.colorMain};
  font-weight: lighter;
  font-style: italic;
`;

const Title = styled.h2`
  font-size: 3em;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  margin: 8px 0 12px 0;
  color: ${props => props.theme.colorMain};
  font-weight: 800;
`;

class AddBuilding extends Component {
  constructor() {
    super();
    this.postBuildingCard = this.postBuildingCard.bind(this);
  }

  postBuildingCard(building) {
    axios
      .post("http://localhost:8000/api/buildings/", building)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.props.setNavigationBackgroundColor(true);
  }

  render() {
    return (
      <BuildingFormWrapper>
        <TextWrapper>
          <SubTitle>Buildings of Rotterdam</SubTitle>
          <Title>Add more buildings to the city</Title>
          <CircleIcon primary/>
        </TextWrapper>
        <AddBuildingForm postBuilding={this.postBuildingCard} />
      </BuildingFormWrapper>
    );
  }
}

export default AddBuilding;
