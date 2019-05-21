import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { getUserData } from "../../actions/user";
import ToggleMenu from "./ToggleMenu";

class TopNavigation extends Component {
  componentDidMount() {
    const { email } = this.props.user;
    this.props.getUserData(email);
  }
  render() {
    const { oneUser, logout, isAdmin } = this.props;
    let placeholderUrl = require("../../img/placeholderUser.jpeg");
    let adminImg = require("../../img/admin2.png");
    let logoDCI = require("../../img/newDCILogo.png");

    return (
      <div>
        <ToggleMenu />
        <div className="navigationBar">
          <div className="navigationBarSubCont">
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
                <Link to="/user-card" onClick={() => logout()}>
                  Logout
                </Link>
              </li>
              <li>
                {isAdmin && (
                  <Link to="/dashboard" key="1">
                    <div
                      id="gravatar-img"
                      style={{
                        backgroundImage: "url(" + adminImg + ")"
                      }}
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
                      <img
                        id="gravatar-img"
                        alt="example"
                        src={`${process.env.REACT_APP_API_HOST}/uploads/${
                          oneUser.userImage
                        }`}
                        onError={e => {
                          e.target.onerror = null;
                          e.target.src = `${placeholderUrl}`;
                        }}
                      />
                    </Link>
                  )
                ]}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

TopNavigation.propTypes = {
  logout: PropTypes.func.isRequired,
  getUserData: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    oneUser: state.oneUser,
    isAdmin: !!state.user.isAdmin
  };
}

export default connect(
  mapStateToProps,
  { logout, getUserData }
)(TopNavigation);
