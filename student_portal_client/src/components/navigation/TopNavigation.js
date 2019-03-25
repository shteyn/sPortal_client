import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import gravatarUrl from 'gravatar-url';
import { Link } from "react-router-dom";
import { Image } from 'semantic-ui-react';
import { logout } from '../../actions/auth'

const TopNavigation = ({user, logout}) => (
    <nav>
        <Link to="/">Home</Link>
        <Image avatar src={gravatarUrl(user.email)} as={Link} to='/dashboard'/>
        <button onClick={() => logout()}>Logout</button>
      
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
