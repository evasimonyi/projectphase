import { connect } from "react-redux";
import { buyAcorn } from "../actions/actions";
import Button from "../components/button";

const mapStateToProps = state => {
  return {
    name: "Buy one"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickEvent: () => {
      dispatch(buyAcorn());
    }
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default BuyAcorn;
