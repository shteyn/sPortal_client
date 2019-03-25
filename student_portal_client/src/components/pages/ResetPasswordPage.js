import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { validateToken, resetPassword } from "../../actions/auth";
import ResetPasswordForm from "../forms/ResetPasswordForm";


class ResetPasswordPage extends Component {
  state = {
    success: false,
    loading: true
  };

  componentDidMount(){
      this.props.validateToken(this.props.match.params.token)
        .then(() => this.setState({loading: false, success: true}))
        .catch(() => this.setState({loading: false, success: false}))
  };

  submit = data =>
    this.props
        .resetPassword(data)
        .then(() => this.props.history.push("/login"));

  render() {
      const { loading, success } = this.state;
      const token = this.props.match.params.token;

    return (
      <div>
        ResetPasswordPage Parent Component
        { loading && <p>Loading...</p>} 
        { !loading && success && <ResetPasswordForm submit={this.submit} token={token}/> }
        { !loading && !success && <p>Invalid Token</p> }
      </div>
    );
  }
}

ResetPasswordPage.propTypes = {
    validateToken: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
      }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default connect(null, { validateToken, resetPassword })(ResetPasswordPage);
