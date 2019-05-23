import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";
import TopNavigation from "../navigation/TopNavigation";
//import ToggleMenuNonLogin from "../navigation/ToggleMenuNonLogin";

class ForgotPasswordPage extends Component {
  state = {
    success: false
  };

  submit = data =>
    this.props
      .resetPasswordRequest(data)
      .then(() => this.setState({ success: true }));

  render() {
    return (
      <div>
        <TopNavigation />
        <div className="ForgotPasswordFormCont">
          <div className="forgotForm">
            {this.state.success ? (
              <div className="forgotMessage">
                <p>Check Your Mailbox</p>
                <div id="anim-wrapper">
                  <div id="anim-bg">
                    <div id="env-wrapper">
                      <div className="speedline line1" />
                      <div className="speedline line2" />
                      <div className="speedline line3" />
                      <i id="env" className="fas fa-envelope" />
                    </div>
                  </div>

                  <div id="check-container">
                    <div className="check-stroke1" />
                    <div className="check-stroke2" />
                  </div>
                </div>
              </div>
            ) : (
              <ForgotPasswordForm submit={this.submit} />
            )}
          </div>
        </div>
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
