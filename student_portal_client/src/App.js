import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import HomePage from "./components/pages/Homepage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import LoginPage from "./components/pages/LoginPage";
import RegistrationPage from "./components/pages/RegistrationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import Dashboard from "./components/pages/Dashboard";
import UserRoutes from "./components/routes/UserRoutes";
import GuestRoutes from "./components/routes/GuestRoutes";

const App = ({ location }) => (
  <div>
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
  }).isRequired
};
export default App;
