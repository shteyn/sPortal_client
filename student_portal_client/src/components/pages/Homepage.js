import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions/auth";

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>HomePage</h1>
    {isAuthenticated ? (
      <button onClick={() => logout()}>Logout</button>
    ) : (
      <div>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/registration">Registration</Link>
      </div>
    )}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  //console.log("HOME PAGE MAPSTATE", state.user.token);
  return {
    isAuthenticated: !!state.user.token
  };
}
export default connect(
  mapStateToProps,
  { logout: actions.logout }
)(HomePage);
