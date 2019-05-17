import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./components/pages/HomePage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import LoginPage from "./components/pages/LoginPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import UserCardParent from "./components/pages/UserCardParent";
import Dashboard from "./components/pages/Dashboard";
import UserRoutes from "./components/routes/UserRoutes";
import GuestRoutes from "./components/routes/GuestRoutes";
import TopNavigation from "./components/navigation/TopNavigation";
import Footer from "./components/navigation/Footer";
import AboutUsPage from "./components/footer_pages/AboutUsPage";
import ContactForm from "./components/footer_pages/ContactForm";
import FAQPage from "./components/footer_pages/FAQPage";
import StoriesPage from "./components/footer_pages/StoriesPage";

let logoDCI = require("./img/dciLogo.png");

const App = ({ location, isAdmin, isAuthenticated }) => (
  <div>
    {isAuthenticated && location.pathname !== "/" ? <TopNavigation /> : null}
    {!isAuthenticated && location.pathname !== "/" ? (
      <div>
        <div className="navigationBar">
          <Link to="/user-card">
            <div className="label">
              <div
                id="dciLogo"
                style={{
                  backgroundImage: "url(" + logoDCI + ")"
                }}
              />
            </div>
          </Link>
          <ul>
            <li>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    ) : null}
    <div>
      <Route location={location} path="/" exact component={HomePage} />
      <Route
        location={location}
        path="/about-us"
        exact
        component={AboutUsPage}
      />
      <Route
        location={location}
        path="/contact"
        exact
        component={ContactForm}
      />
      <Route location={location} path="/faq" exact component={FAQPage} />
      <Route
        location={location}
        path="/stories"
        exact
        component={StoriesPage}
      />

      <Route
        location={location}
        path="/user-card"
        exact
        component={UserCardParent}
      />
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
        path="/dashboard"
        exact
        component={props => (
          <Dashboard
            timestamp={new Date().toString()}
            {...props}
            location={location}
          />
        )}
      />
    </div>

    {!isAdmin && location.pathname !== "/" ? <Footer /> : null}
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAdmin: !!state.user.isAdmin,
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(App);
