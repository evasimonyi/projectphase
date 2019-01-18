import { combineReducers } from "redux";

const reducer = (
  state = {
    count: 0
  },
  action
) => {
  switch (action.type) {
    case "BUY_CORN":
      return {
        ...state,
        count: state.count + 1
      };
    case "EAT_CORN":
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1
        };
      }

    default:
      return state;
  }
};

const AcornApp = combineReducers({
  reducer
});

export default AcornApp;
