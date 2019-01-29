import { connect } from "react-redux";
import { eatAcorn } from "../actions/actions";
import Button from "../components/button";

const mapStateToProps = state => {
  return {
    name: "Eat one"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickEvent: () => {
      dispatch(eatAcorn());
    }
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default EatAcorn;
