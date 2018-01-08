import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./Home";
import AddBuilding from "./AddBuilding";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home getHeaderHeight={this.props.headerHeight} />} />
          <Route path="/buildings/add" component={AddBuilding} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
