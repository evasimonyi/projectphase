import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import RouterApp from "./router_app";
import store from "../../03-simple-golden-acorn-app-extend-with-redux/src/index";

ReactDOM.render(
  <Provider store={store}>
    <RouterApp />
  </Provider>,
  document.getElementById("root")
);
