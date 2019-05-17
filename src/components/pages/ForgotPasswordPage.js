import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";
import { Link } from "react-router-dom";

class ForgotPasswordPage extends Component {
  state = {
    success: false
  };

  submit = data =>
    this.props
      .resetPasswordRequest(data)
      .then(() => this.setState({ success: true }));

  render() {
    let logoDCI = require("../../img/newDCILogo.png");
    return (
      <div>
          <div className="navigationBar">
            <div className="navigationBarSubCont">
              <Link to="/user-card">
                <div className="label">
                  <div
                    id="dciLogo"
                    style={{
                      backgroundImage: "url(" + logoDCI + ")"
                    }}
                  />
                </div>
              </Link>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        <div className="ForgotPasswordFormCont">
          <div className="forgotForm">
            {this.state.success ? (
              <div className="forgotMessage">
                <p>We sent you an email to reset your password</p>
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
