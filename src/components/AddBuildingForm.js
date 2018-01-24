import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin-top: 40px;
  border-top: 1px solid ${props => props.theme.colorMain};
`;

const Input = styled.input`
  padding: 10px;
  line-height: 1;
  font-size: 1.2rem;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colorMain};
  border-right: 1px solid ${props => props.theme.colorMain};
  border-left: 1px solid ${props => props.theme.colorMain};
  border-radius: 0;
  background: white;
`;

const Button = styled.button`
  width 100%;
  height: 30px;
  margin-top: 20px;
  border: 1px solid ${props => props.theme.colorMain};
  cursor: pointer;
  &:focus {
    outline: 0;
    background: ${props => props.theme.colorMain};
    color: #fff;
  }
`;

class AddBuildingForm extends Component {

  createBuildingCard(e) {
    e.preventDefault();
    const building = {
      name: this.name.value,
      architect: this.architect.value,
      height: this.height.value,
      info: this.info.value,
      image: this.image.value,
    };
    this.createBuildingForm.reset();
    this.props.postBuilding(building);
  }

  render() {
    return (
      <Form innerRef={form => this.createBuildingForm = form} onSubmit={e => this.createBuildingCard(e)}>
        <Input
          innerRef={input => (this.name = input)}
          placeholder='name'
          type="text"
        />
        <Input
          innerRef={input => (this.architect = input)}
          placeholder='architect'
          type="text"
        />
        <Input
          innerRef={input => (this.height = input)}
          placeholder='height'
          type="text"
        />
        <Input
          innerRef={input => (this.info = input)}
          placeholder='info'
          type="text"
        />
        <Input
          innerRef={input => (this.image = input)}
          placeholder='image url'
          type="text"
        />
        <Button type="submit">Add Building → </Button>
      </Form>
    );
  }
}

export default AddBuildingForm;
