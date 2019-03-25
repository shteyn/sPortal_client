import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ReactComponent as YourSvg } from "../media/spinner.svg";
import { confirm } from "../../actions/auth";

class ConfirmationPage extends Component {
  state = {
    loading: true,
    success: false
  };

  componentDidMount() {
    this.props
      .confirm(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  render() {
    const { loading, success } = this.state;
    return (
      <div>
        {loading && (
          <div>
            <p>Validating your email</p>
            <YourSvg loading />
          </div>
        )}
        {!loading && success && (
          <div>
            Your account is verified
            <Link to="/dashboard"> Go to your dashboard</Link>
          </div>
        )}

        {!loading && !success && <div>Oops. Invalid Token</div>}
      </div>
    );
  }
}

ConfirmationPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default connect(
  null,
  { confirm }
)(ConfirmationPage);
