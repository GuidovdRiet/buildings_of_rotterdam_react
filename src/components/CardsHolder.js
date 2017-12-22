import React, { Component } from "react";
import axios from "axios";

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
      return this.state.buildings.map(building => <li>{building.name}</li>)
  }

  render() {
    return (
        <ul>
            {this.renderBuildings()}
        </ul>
    )
  }
}

export default CardsHolder;