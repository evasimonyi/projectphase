import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/navigation";
import AppWithRedux from "./components/withredux";
import AppWithStates from "./components/withstates";
import Home from "./components/home";

class RouterApp extends Component {
  render = () => (
    <BrowserRouter>
      <div>
        <Nav />
        <Route path="/" component={Home} />
        <Route path="/simple/states" component={AppWithStates} />
        <Route path="/simple/redux" component={AppWithRedux} />
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
