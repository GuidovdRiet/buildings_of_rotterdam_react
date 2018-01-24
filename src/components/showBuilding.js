import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from 'react-router-dom';

import CircleIcon from './svg/CircleIcon';

const BuildingContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${props => (props.building ? props.building.image : "")});
  filter: grayscale(100%);
  background-size: cover;
  background-repeat: no-repeat;
`;

const Edit = styled.button`

`

const BuildingInfoWrapper = styled.div`
  width: 300px;
  padding: 40px;
  margin-top: 30px;
  background: white;
`;

const BuildingName = styled.h1`
  font-size: 8em;
  max-width: 400px;
  text-shadow: 0px -1px 6px rgba(0, 0, 0, 0.2);
  color: white;
  margin-top: 10px;
`;

const Architect = styled.h2`
  color: #5e5e5e;
`;

const BuildingInfo = styled.p`
  line-height: 23px;
`;

const AdditionalInfo = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  bottom: 15px;
  padding: 0 40px;
`;

const Height = styled.p`
  margin: 32px 0 0 0;
  text-transform: uppercase;
  background: white;
  width: 77px;
  text-align: center;
  font-weight: 800;
  color: #454545;
`;

const BuildYear = styled.p`
  margin: 32px 0 0 0;
  text-transform: uppercase;
  background: white;
  width: 150px;
  text-align: center;
  font-weight: 800;
  color: #454545;
`;

const BuildingInfoNumber = styled.h1`
  font-size: 7em;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  color: ${props => props.theme.colorMain};
`;

const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <div>
        <BuildingContainer {...this.state}>
          <BuildingName>
            {this.state.building ? this.state.building.name : ""}
          </BuildingName>
          <BuildingInfoWrapper>
            <Architect>
              {this.state.building ? this.state.building.architect : ""}
            </Architect>
            <BuildingInfo>
              {this.state.building ? this.state.building.info : ""}
            </BuildingInfo>
          </BuildingInfoWrapper>
        </BuildingContainer>
        <AdditionalInfo>
          <BlockInfo>
            <CircleIcon primary/>
            <BuildYear>Build in Year</BuildYear>
            <BuildingInfoNumber>1973</BuildingInfoNumber>
          </BlockInfo>
          <BlockInfo>
            <Link to={`/buildings/edit/${this.props.match.params.id}`}>
              <Edit>Edit</Edit>
            </Link>
            <CircleIcon primary/>
            <Height>Meters</Height>
            <BuildingInfoNumber>
              {this.state.building ? this.state.building.height : ""}
            </BuildingInfoNumber>
          </BlockInfo>
        </AdditionalInfo>
      </div>
    );
  }
}

export default ShowBuilding;
