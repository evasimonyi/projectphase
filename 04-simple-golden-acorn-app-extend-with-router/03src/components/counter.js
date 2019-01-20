import React, { Component } from "react";
import { connect } from "react-redux";
import Display from "./display";
import Button from "./button";

class Counter extends Component {
  handleIncrement = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  handleDecreasement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <Button clickEvent={this.handleIncrement} name="get one 🌰 " />
        <Display count={this.props.count} />
        <Button clickEvent={this.handleDecreasement} name="eat one 🌰 " />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
