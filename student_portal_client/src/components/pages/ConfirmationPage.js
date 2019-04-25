import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TopNavigation from "../navigation/TopNavigation";
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
      <div className="ConfirmationPageCont">
        <div className="ConfirmationNavigationBar">
          <TopNavigation />
        </div>
        <div className="ConfirmationPageCont">
          <div className="ValidatingAndVerifiedCont">
            {loading && (
              <div className="ValidatingCont">
                <p>Validating your email</p>
              </div>
            )}
            {!loading && success && (
              <div className="verifiedCont">
                Your account is verified
                <br />
                <p>
                  <Link to="/dashboard"> Go to your dashboard</Link>
                </p>
              </div>
            )}

            {!loading && !success && (
              <div className="invalidToken">
                <h1>Oops. Invalid Token</h1>
              </div>
            )}
          </div>
        </div>
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
