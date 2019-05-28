import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { validateToken, resetPassword } from "../../actions/auth";
import ResetPasswordForm from "../forms/ResetPasswordForm";
import TopNavigation from "../navigation/TopNavigation";

class ResetPasswordPage extends Component {
  _isMounted = false;

  state = {
    success: false,
    loading: true
  };

  componentDidMount() {
    this._isMounted = true;
    this.props
      .validateToken(this.props.match.params.token)
      .then(() => {
        if (this._isMounted) {
          this.setState({ loading: false, success: true });
        }
      })
      .catch(() => this.setState({ loading: false, success: false }));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  submit = data =>
    this.props
      .resetPassword(data)
      .then(() => this.props.history.push("/login"));

  render() {
    const { loading, success } = this.state;
    const token = this.props.match.params.token;
    return (
      <div>
        <TopNavigation />
        <div className="ResetCont">
          {loading && <p>Loading...</p>}
          {!loading && success && (
            <ResetPasswordForm submit={this.submit} token={token} />
          )}
          {!loading && !success && <p>Invalid Token</p>}
        </div>
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

export default connect(
  null,
  { validateToken, resetPassword }
)(ResetPasswordPage);
