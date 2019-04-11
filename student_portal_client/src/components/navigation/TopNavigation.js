import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import gravatarUrl from "gravatar-url";
import { Link } from "react-router-dom";
// import { Image } from "semantic-ui-react";
import { logout } from "../../actions/auth";

const TopNavigation = ({ user, logout, isAdmin }) => (
  <div className="navigationBar">
    <Link to="/">
      <div className="label">
        <span>DCI</span>
      </div>
    </Link>
    <ul>
      <li>
        <Link to="" onClick={() => logout()}>
          Logout
        </Link>
      </li>
      <li>
        { isAdmin && <Link to="/dashboard"></Link> }
        { !isAdmin && <Link to="/dashboard"></Link> }
        {/* <Link to="#">Contact Us</Link> */}
      </li>
      <li>
        <Link to="/dashboard">
          <img
            id="gravatar-img"
            src={gravatarUrl(user.email)}
            width="50"
            alt="avatar"
          />
        </Link>
      </li>
    </ul>
  </div>
);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    isAdmin: !!state.user.isAdmin
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(TopNavigation);
