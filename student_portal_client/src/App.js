import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import TopNavigation from './components/navigation/TopNavigation';
import HomePage from "./components/pages/Homepage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import LoginPage from "./components/pages/LoginPage";
import RegistrationPage from "./components/pages/RegistrationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import Dashboard from "./components/pages/Dashboard";
import UserRoutes from "./components/routes/UserRoutes";
import GuestRoutes from "./components/routes/GuestRoutes";

const App = ({ location, isAuthenticated }) => (
  <div className="container">

    {isAuthenticated && <TopNavigation />}
    
    <Route location={location} path="/" exact component={HomePage} />
    <Route
      location={location}
      path="/confirmation/:token"
      exact
      component={ConfirmationPage}
    />
    <GuestRoutes
      location={location}
      path="/login"
      exact
      component={LoginPage}
    />
    <GuestRoutes
      location={location}
      path="/registration"
      exact
      component={RegistrationPage}
    />
    <GuestRoutes
      location={location}
      path="/forgot_password"
      exact
      component={ForgotPasswordPage}
    />
    <GuestRoutes
      location={location}
      path="/reset_password/:token"
      exact
      component={ResetPasswordPage}
    />
    <UserRoutes
      location={location}
      path="/dashboard"
      exact
      component={Dashboard}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  console.log('STATE FROM App.js', state);
  return {
    isAuthenticated: !!state.user.email
  };
}


export default connect(mapStateToProps)(App);
