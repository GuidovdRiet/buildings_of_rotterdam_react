import React, { Component } from "react";
import axios from "axios";

import styled from "styled-components";

const Form = styled.form`
  margin-top: 300px;
`;

// const Input = styled.input``;

class EditBuilding extends Component {
  constructor() {
    super();
    this.state = {
      building: {},
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const { data } = await axios.get(
      `http://localhost:8000/api/buildings/${this.props.match.params.id}`
    );
    this.setState({ building: data, loading: false });
    this.props.setNavigationBackgroundColor(true);
  }

  async editBuilding(e) {
    e.preventDefault();
    const building = {
      name: e.target.name.value,
      architect: e.target.architect.value,
      height: e.target.height.value,
      image: e.target.image.value,
      info: e.target.info.value
    };
    await axios.put(
      `http://localhost:8000/api/buildings/${this.props.match.params.id}`,
      building
    );
    this.setState({ building, loading: false });
  }

  render() {
    const { loading, building } = this.state;
    return (
      <div>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Form onSubmit={e => this.editBuilding(e)}>
            <input type="text" defaultValue={building.name} name="name" />
            <input
              type="text"
              defaultValue={building.architect}
              name="architect"
            />
            <input type="text" defaultValue={building.height} name="height" />
            <input type="text" defaultValue={building.image} name="image" />
            <input type="text" defaultValue={building.info} name="info" />
            <button type="submit">submit</button>
          </Form>
        )}
      </div>
    );
  }
}

export default EditBuilding;
