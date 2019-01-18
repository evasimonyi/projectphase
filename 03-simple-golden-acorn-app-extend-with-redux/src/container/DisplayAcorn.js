import { connect } from "react-redux";
import Display from "../components/display";

const mapStateToProps = state => {
  return {
    value: state.reducer.count
  };
};

const DisplayAcorn = connect(mapStateToProps)(Display);

export default DisplayAcorn;
