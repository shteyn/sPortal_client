import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";

import LoginForm from "../forms/LoginForm";
import RegistrationForm from "../forms/RegistrationForm";
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
              <span className="labelD">DCI</span>
            </Link>
          </div>
        </div>
        <div className="LoginModel">
          <Tabs defaultActiveKey="loginStudent" id="uncontrolled-tab-example">
            <Tab eventKey="loginStudent" title="Sign In">
              <LoginForm submit={this.submit} />
            </Tab>
            <Tab eventKey="registrationUser" title="Sign Up">
              <RegistrationForm submit={this.submit}/>
            </Tab>
          </Tabs>
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

export default connect(
  null,
  { login }
)(LoginPage);
