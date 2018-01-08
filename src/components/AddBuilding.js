import React, { Component } from 'react';

import AddBuildingForm from './AddBuildingForm';

class AddBuilding extends Component {
    
    componentDidMount() {
        this.props.setBackgroundColor(true);
    }

    render() {
        return(
            <AddBuildingForm/>
        )
    }
}

export default AddBuilding;