import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const InlineError = ({ text }) => (
  <span style={{ color: "#ec7f37" }}>{text}</span>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;
