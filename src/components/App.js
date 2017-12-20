import React, { Component } from 'react';
import { themeProvider, ThemeProvider } from 'styled-components';

import Header from './Header';

const theme = {
  colorMain: '#1054F5',
  colorWhite: '#fff',
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>
    )
  }
}

export default App;
