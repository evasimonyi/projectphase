import React from "react";
import PropTypes from "prop-types";

const Display = ({ count }) => <div> {count} </div>;

Display.propTypes = {
  count: PropTypes.number.isRequired
};

export default Display;
