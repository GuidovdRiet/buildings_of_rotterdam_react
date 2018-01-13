import React, { Component } from 'react';

import Header from './Header';
import CardsHolder from './CardsHolder';

class Home extends Component {
    
    componentDidMount() {
        this.props.setBackgroundColor(false)
    }
    
    render() {
        return(
            <div>
                <Header getHeight={this.props.getHeaderHeight} />
                <CardsHolder getBuildingId={this.props.getBuildingId}/>
            </div>
        )
    }
}

export default Home;