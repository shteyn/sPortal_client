import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TopNavigation from "../navigation/TopNavigation";
import { confirm } from "../../actions/auth";
import { ReactComponent as LoadinSvg } from "../../img/loading.svg";

class ConfirmationPage extends Component {
  _isMounted = false;
  state = {
    loading: true,
    success: false
  };

  componentDidMount() {
    this._isMounted = true;
    this.props
      .confirm(this.props.match.params.token)
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

  render() {
    const { loading, success } = this.state;
    const { firstName } = this.props.user;

    return (
      <div className="ConfirmationPageCont">
        <div>
          <TopNavigation />
        </div>
        <div className="ValidatingAndVerifiedCont">
          {loading && (
            <div className="ValidatingCont">
              <p>Validating your email</p>
              <LoadinSvg loading={loading.toString()} />
            </div>
          )}
          {!loading && success && (
            <div className="verifiedCont">
              <h1>Dear {firstName},</h1>
              <br />
              <p>
                Your profile will been verified as soon as possible by our
                administration team and you will get an email to have an access
                to you profile.
              </p>
              <p style={{ marginTop: "50px" }}>Best regards,</p>
              <p style={{ color: "#da9446" }}>DCI-Team</p>
            </div>
          )}

          {!loading && !success && (
            <div className="invalidToken">
              <h1>Oops. Invalid Token.</h1>
              <p>Probably the token is expired.</p>
            </div>
          )}
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

function mapStateToProps(state) {
  console.log("Confirmation page state", state);

  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { confirm }
)(ConfirmationPage);
