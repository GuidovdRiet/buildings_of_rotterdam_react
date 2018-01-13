import React, { Component } from "react";
import axios from "axios";

class ShowBuilding extends Component {
  constructor() {
    super();
    this.state = {
      building: null
    };
  }

  componentDidMount() {
    this.props.setBackgroundColor(true);
    axios
      .get(`http://localhost:8000/api/buildings/${this.props.building}`)
      .then(res => {
        this.setState({ building: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>test</h1>
        <h2>test</h2>
      </div>
    );
  }
}

export default ShowBuilding;
