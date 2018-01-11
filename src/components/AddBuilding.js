import React, { Component } from "react";
import axios from "axios";

import AddBuildingForm from "./AddBuildingForm";

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
    this.props.setBackgroundColor(true);
  }

  render() {
    return <AddBuildingForm postBuilding={this.postBuildingCard} />;
  }
}

export default AddBuilding;
