import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-top: 100px;
`;

const Input = styled.input``;

const Button = styled.button``;

class AddBuildingForm extends Component {
  constructor() {
    super();
  }

  createBuildingCard(e) {
    e.preventDefault();
    const building = {
      name: this.name.value,
      architect: this.architect.value,
      height: this.height.value,
      info: this.info.value,
      image: this.image.value
    };
    this.props.postBuilding(building);
  }

  render() {
    return (
      <Form onSubmit={e => this.createBuildingCard(e)}>
        <Input
          innerRef={input => (this.name = input)}
          placeholder="name"
          type="text"
        />
        <Input
          innerRef={input => (this.architect = input)}
          placeholder="architect"
          type="text"
        />
        <Input
          innerRef={input => (this.height = input)}
          placeholder="height"
          type="text"
        />
        <Input
          innerRef={input => (this.info = input)}
          placeholder="info"
          type="text"
        />
        <Input
          innerRef={input => (this.image = input)}
          placeholder="image"
          type="text"
        />
        <Button type="submit">Add Building → </Button>
      </Form>
    );
  }
}

export default AddBuildingForm;
