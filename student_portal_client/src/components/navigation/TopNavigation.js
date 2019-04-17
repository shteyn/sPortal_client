import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import { logout } from "../../actions/auth";
// import gravatarUrl from "gravatar-url";

const TopNavigation = ({ user, logout, isAdmin }) => (
  console.log("user top nav", user.userImage),
  (
    <div className="navigationBar">
      <Link to="/">
        <div className="label">
          <span>DCI</span>
        </div>
      </Link>
      <ul>
        <li>
          <Link style={{ color: "black" }} to="" onClick={() => logout()}>
            Logout
          </Link>
        </li>
        <li>
          {isAdmin && (
            <Link to="/dashboard">
              <Image
                id="gravatar-img"
                src={require("../../img/admin.png")}
                // alt="avatar"
              />
            </Link>
          )}
          {!isAdmin && (
            <Link to="/dashboard">
              <Image
                id="gravatar-img"
                src={`http://localhost:8080/uploads/${user.userImage}`}
                // alt="avatar"
              />
            </Link>
          )}
        </li>
      </ul>
    </div>
  )
);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  //console.log("user top nav", state.oneUser);
  return {
    user: state.oneUser,
    isAdmin: !!state.user.isAdmin
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(TopNavigation);
