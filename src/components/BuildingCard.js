import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background: URL(${props => props.image});
    background-size: cover;
    flex-grow: 1;
    min-width: 25%;
    height: 400px;
    margin: 10px;
`

class BuildingCard extends Component {
    render() {
        return(
            <Card {...this.props.building}/>
        )
    }
}

export default BuildingCard;