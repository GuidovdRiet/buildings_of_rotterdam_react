import React, { Component } from "react";
import { themeProvider, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./Home";
import AddBuilding from "./AddBuilding";
import Navigation from "./Navigation";
import ShowBuilding from "./showBuilding";

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
    this.setNavigationBackground = this.setNavigationBackground.bind(this);

    this.state = {
      headerHeight: {},
      navigationHeight: {},
      building: {},
      navBackground: false
    };
  }

  getHeaderHeight(height) {
    this.setState({ headerHeight: height });
  }

  getNavigationHeight(height) {
    this.setState({ navigationHeight: height });
  }

  setNavigationBackground(visibility) {
    this.setState({ navBackground: visibility });
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
                render={() => (
                  <Home
                    getHeaderHeight={this.getHeaderHeight}
                    setNavigationBackgroundColor={this.setNavigationBackground}
                  />
                )}
              />
              <Route
                path="/buildings/add"
                render={() => (
                  <AddBuilding
                    setNavigationBackgroundColor={this.setNavigationBackground}
                  />
                )}
              />
              <Route
                path="/buildings/show/:id"
                render={props => (
                  <ShowBuilding
                    setNavigationBackgroundColor={this.setNavigationBackground}
                    building={this.state.building}
                    {...props}
                  />
                )}
              />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
