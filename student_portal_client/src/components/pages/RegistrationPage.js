import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import RegistrationForm from "../forms/RegistrationForm";
import { registration } from "../../actions/user";

class RegistrationPage extends Component {
  submit = data =>
    this.props
      .registration(data)
      .then(() => this.props.history.push("/dashboard"));

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
          <RegistrationForm submit={this.submit} />
        </div>
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
