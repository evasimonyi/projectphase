import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, clickEvent }) => (
  <button onClick={clickEvent}>{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired
};

export default Button;
