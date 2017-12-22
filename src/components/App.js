import React, { Component } from 'react';
import { themeProvider, ThemeProvider } from 'styled-components';

import Header from './Header';
import CardsHolder from './CardsHolder';

const theme = {
  colorMain: '#1054F5',
  colorWhite: '#fff',
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header/>
          <CardsHolder/>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;
