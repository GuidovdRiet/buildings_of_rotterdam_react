import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background: URL(${props => props.image});
    width: 200px;
    height: 100px;
`

class BuildingCard extends Component {
    render() {
        return(
            <Card {...this.props.building}/>
        )
    }
}

export default BuildingCard;