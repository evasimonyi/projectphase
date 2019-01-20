import React from "react";
import ReactDOM from "react-dom";
import RouterApp from "./router_app";
import { Provider } from "react-redux";
import store from "../03src/index";

ReactDOM.render(
  <Provider store={store}>
    <RouterApp />
  </Provider>,
  document.getElementById("root")
);
