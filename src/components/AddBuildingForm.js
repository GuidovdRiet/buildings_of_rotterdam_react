import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form``

const Input = styled.input`
    
`

const Button = styled.button``

class AddBuildingForm extends Component {
    render() {
        return(
            <Form>
                <Input placeholder="name" type="text"/>
                <Input placeholder="architect" type="text"/>
                <Input placeholder="height" type="text"/>
                <Input placeholder="info" type="text"/>
                <Input placeholder="image" type="text"/>
                <Button type="submit">Add Building → </Button>
            </Form>
        )
    }
}

export default AddBuildingForm;