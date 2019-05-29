import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { getUserData } from "../../actions/user";
import ToggleMenu from "./ToggleMenu";

class TopNavigation extends Component {
  _isMounted = false;

  state = {
    loading: true,
    success: false
  };

  componentDidMount() {
    const { email } = this.props.user;
    this.props
      .getUserData(email)
      .then(() => {
        if (this._isMounted) {
          this.setState({ loading: false, success: true });
        }
      })
      .catch(() => this.setState({ loading: false, success: false }));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { oneUser, logout, isAdmin, isAuthenticated } = this.props;
    let placeholderUrl = require("../../img/placeholderUser.jpeg");
    let adminImg = require("../../img/admin2.png");
    let logoDCI = require("../../img/newDCILogo.png");

    return (
      <div>
        <ToggleMenu
          oneUser={oneUser}
          isAdmin={isAdmin}
          logout={logout}
          isAuthenticated={isAuthenticated}
        />
        {isAuthenticated ? (
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
                <li style={{ marginRight: "20px" }}>
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
        ) : (
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
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
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
    isAdmin: !!state.user.isAdmin,
    isAuthenticated: !!state.user.email
  };
}

export default connect(
  mapStateToProps,
  { logout, getUserData }
)(TopNavigation);
