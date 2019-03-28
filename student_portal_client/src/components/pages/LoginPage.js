import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

class LoginPage extends Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));
    

  render() {
    return (
      <div className="LoginCont">
        <div className="navigation">
          <div>
            <Link to="/" className="labelUserPage">
              <span className="labelD">D</span>
              <span className="labelC">C</span>
              <span className="labelI">I</span>
            </Link>
          </div>
        </div>
        <div className="LoginModel">
          <LoginForm submit={this.submit} />
          <br />
          <Link to="/forgot_password">Forgot Password</Link>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect( null, { login })(LoginPage);
