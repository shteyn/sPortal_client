import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import RegistrationForm from "../forms/RegistrationForm";
import { registration } from "../../actions/user";

class RegistrationPage extends Component {
  submit = data =>
    this.props
      .registration(data)
      .then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div>
        <h1>RegistrationPage</h1>
        <RegistrationForm submit={this.submit} />
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  registration: PropTypes.func.isRequired
};

export default connect(
  null,
  { registration }
)(RegistrationPage);
