import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";

class ForgotPasswordPage extends Component {
  state = {
    success: false
  };

  submit = data =>
  this.props
    .resetPasswordRequest(data).then(() => this.setState({ success: true }));


  render() {
    return (
      <div>
        ForgotPasswordPage Parent Component
        {this.state.success ? (
          <p>Email has been sent</p>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )}
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { resetPasswordRequest }
)(ForgotPasswordPage);
