import React, { Component } from "react";
import Display from "./display";
import Button from "./button";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecreasement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <Button clickEvent={this.handleIncrement} name="get one 🌰 " />
        <Display count={this.state.count} />
        <Button clickEvent={this.handleDecreasement} name="eat one 🌰 " />
      </div>
    );
  }
}

export default Counter;
