import React, { Component } from "react";
import { themeProvider, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./Home";

import Header from "./Header";
import CardsHolder from "./CardsHolder";
import AddBuilding from "./AddBuilding";

import Navigation from "./Navigation";

const theme = {
  colorMain: "#1054F5",
  colorWhite: "#fff"
};

class App extends Component {
  constructor() {
    super();
    this.addBackgroundOnScroll = this.addBackgroundOnScroll.bind(this);
    this.getHeaderHeight = this.getHeaderHeight.bind(this);
    this.getNavigationHeight = this.getNavigationHeight.bind(this);

    this.state = {
      headerHeight: {},
      navigationHeight: {},
      navBackground: false
    };
  }

  getHeaderHeight(height) {
    this.setState({ headerHeight: height });
  }

  getNavigationHeight(height) {
    this.setState({ navigationHeight: height });
  }

  addBackgroundOnScroll() {
    const scrollTop = window.pageYOffset;
    const headerHeight = this.state.headerHeight;
    const navigationHeight = this.state.navigationHeight;
    if (scrollTop > headerHeight - navigationHeight) {
      this.setState({ navBackground: true });
    } else {
      this.setState({ navBackground: false });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.addBackgroundOnScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.addBackgroundOnScroll);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Navigation
              getHeight={this.getNavigationHeight}
              background={this.state.navBackground}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home getHeaderHeight={this.getHeaderHeight} />}
              />
              <Route path="/buildings/add" component={AddBuilding} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
