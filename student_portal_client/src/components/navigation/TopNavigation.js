import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import { logout } from "../../actions/auth";

import { getUserData } from "../../actions/user";
class TopNavigation extends Component {
  componentDidMount() {
    const { email } = this.props.user;
    this.props.getUserData(email);
  }

  render() {
    const { oneUser, logout, isAdmin } = this.props;
    let placeholderUrl = require("../../img/placeholderUser.png");

    return (
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
              <Link to="/dashboard" key="0">
                <Image
                  id="gravatar-img"
                  src={require("../../img/admin.png")}
                  alt="avatar"
                />
              </Link>
            )}
            {!isAdmin && [
              oneUser.userImage === "" ? (
                <Link to="/dashboard" key="1">
                  <div
                    id="gravatar-img"
                    style={{
                      backgroundImage: "url(" + placeholderUrl + ")"
                    }}
                  />
                </Link>
              ) : (
                <Link to="/dashboard" key="1">
                  <div
                    id="gravatar-img"
                    style={{
                      backgroundImage:
                        "url(" +
                        `http://localhost:8080/uploads/${oneUser.userImage}` +
                        ")"
                    }}
                  />
                </Link>
              )
            ]}
          </li>
        </ul>
      </div>
    );
  }
}

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    oneUser: state.oneUser,
    user: state.user,
    isAdmin: !!state.user.isAdmin
  };
}

export default connect(
  mapStateToProps,
  { logout, getUserData }
)(TopNavigation);
