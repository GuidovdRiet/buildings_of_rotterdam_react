import React, { Component } from 'react';

class BuildingCard extends Component {
    render() {
        return(
            <h1>{this.props.building.name}</h1>
        )
    }
}

export default BuildingCard;