import React, { Component } from "react";
import Nav from "./components/navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppWithStates from "./components/withstates";
import AppWithRedux from "./components/withredux";

class RouterApp extends Component {
  render = () => (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/simple/states" component={AppWithStates} />
          <Route path="/simple/redux" component={AppWithRedux} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
