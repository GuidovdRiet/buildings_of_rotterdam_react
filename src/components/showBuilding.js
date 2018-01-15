import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const BuildingContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: URL(${props => props.building ? props.building.image : ''});
  filter: grayscale(100%);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
`;

const BuildingInfoWrapper = styled.div`
  width: 20%;
  max-width: 300px;
  padding: 40px;
  margin-top: 100px;
  background: red;
  z-index: 10;
`

const BuildingName = styled.h1`
  font-size: 4.5em;
  color: white;
  margin-top: 10px;
`;

const Architect = styled.h2`
  color: gray;
`;

const BuildingInfo = styled.p`
  line-height: 23px;
`;

class ShowBuilding extends Component {
  constructor() {
    super();
    this.state = {
      building: null
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/buildings/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ building: res.data });
        this.props.setNavigationBackgroundColor(false);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <BuildingContainer {...this.state}>
        <BuildingInfoWrapper>
          <BuildingName>
            {this.state.building ? this.state.building.name : ""}
          </BuildingName>
          <Architect>
            {this.state.building ? this.state.building.architect : ""}
          </Architect>
          <BuildingInfo>
            {this.state.building ? this.state.building.info : ""}
          </BuildingInfo>
        </BuildingInfoWrapper>
      </BuildingContainer>
    );
  }
}

export default ShowBuilding;
