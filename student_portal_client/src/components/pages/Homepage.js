import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions/auth";

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
      {!isAuthenticated &&
      <div className="navigationBar">
        <NavLink className="label">
          <span className="labelD">D</span>
          <span className="labelC">C</span>
          <span className="labelI">I</span>
        </NavLink>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </div>
      }
    <div className="centerWelcomeCont">
      <div className="textCont">
        <h1>WELCOME TO DCI.</h1>
        <h1>SEE OUR STUDENTS</h1>
      </div>
      <button>
        <NavLink to="/user-card">
          <h3 className="letterLeft">C</h3>
          <h3 className="letterV">v</h3>
          <h3 className="letterRight">C</h3>
        </NavLink>
      </button>
    </div>
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
