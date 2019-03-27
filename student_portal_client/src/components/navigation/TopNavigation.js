import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import gravatarUrl from 'gravatar-url';
import { NavLink } from "react-router-dom";
import { logout } from '../../actions/auth';

const TopNavigation = ({user, logout}) => (
    <nav className="navigationBar">
        <NavLink to="/" className="label">
          <span className="labelD">D</span>
          <span className="labelC">C</span>
          <span className="labelI">I</span>
        </NavLink>
      <ul>
        <li>
          <NavLink onClick={() => logout()}>Logout</NavLink>
        </li>
        <li>
          <NavLink to="#">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'><img src={gravatarUrl(user.email)}/></NavLink>
        </li>
      </ul>
    </nav>

);


TopNavigation.propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
  };

  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }

export default connect(mapStateToProps, {logout})(TopNavigation);
