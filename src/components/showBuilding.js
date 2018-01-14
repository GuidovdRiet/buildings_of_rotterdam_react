import React, { Component } from "react";
import styled from 'styled-components'
import axios from "axios";

const BuildingWrapper = styled.section`
  margin-top: 100px;
`

class ShowBuilding extends Component {
  constructor() {
    super();
    this.state = {
      building: null
    };
  }

  componentDidMount() {
    this.props.setNavigationBackgroundColor(true);
    axios
      .get(`http://localhost:8000/api/buildings/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ building: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <BuildingWrapper>
        <h1>{this.state.building ? this.state.building.name : ''}</h1>
        <h2>{this.state.building ? this.state.building.architect : ''}</h2>
      </BuildingWrapper>
    );
  }
}

export default ShowBuilding;
