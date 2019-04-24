import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TopNavigation from "../navigation/TopNavigation";
import Footer from "../navigation/Footer";
import * as actions from "../../actions/auth";

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <div className="container-app">
      {isAuthenticated && <TopNavigation />}
      {!isAuthenticated && (
          <div className="navigationBar">
            <Link to="/" className="label">
              <span>DCI</span>
            </Link>
            <ul>
              <li>
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>
      )}
      <div className="centerWelcomeCont">
        <div className="textCont">
          <h1>WELCOME TO DCI.</h1>
          <h1>SEE OUR STUDENTS</h1>
        </div>
        <button>
          <Link to="/user-card">
            <h3>See Our Students</h3>
          </Link>
        </button>
      </div>
    </div>
    <div className="HomePageFooter">
      <Footer />
    </div>
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}
export default connect(
  mapStateToProps,
  { logout: actions.logout }
)(HomePage);
