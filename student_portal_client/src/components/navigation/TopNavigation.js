import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";

class TopNavigation extends Component {
  componentDidMount() {
    const { email } = this.props.user;
  }

  render() {
    const { oneUser, logout, isAdmin } = this.props;
    let placeholderUrl = require("../../img/placeholderUser.png");
    //console.log("oneUser image", oneUser);

    return (
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
            {isAdmin && <Link to="/dashboard" key="0" />}
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
  //console.log("state from Navigation", state);

  return {
    oneUser: state.oneUser,
    user: state.user,
    isAdmin: !!state.user.isAdmin
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(TopNavigation);
