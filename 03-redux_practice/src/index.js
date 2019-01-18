import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counter";
import { createStore } from "redux";
import { render } from "react-dom";
import { Provider } from "react-redux";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      if (state.count > 0) {
        return {
          count: state.count - 1
        };
      }

    default:
      return state;
  }
};
const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
