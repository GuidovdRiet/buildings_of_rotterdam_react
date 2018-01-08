import React, { Component } from 'react';

import Header from './Header';
import CardsHolder from './CardsHolder';

class Home extends Component {
    render() {
        return(
            <div>
                <Header getHeight={this.props.getHeaderHeight} />
                <CardsHolder/>
            </div>
        )
    }
}

export default Home;