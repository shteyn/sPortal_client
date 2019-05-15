import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { getUserData } from "../../actions/user";
import { Link } from "react-router-dom";

class ToggleMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openToggle: false
    };
  }

  toggleHandler = () => {
    this.setState({
      openToggle: !this.state.openToggle
    });
  };

  componentDidMount() {
    const { email } = this.props.user;
    this.props.getUserData(email);
  }

  render() {
    let logoDCI = require("../../img/newDCILogo.png");
    const clsMenu = ["ToggleMenu", "fa"];

    const clsDrawer = ["DrawerNavigationBar"];

    const { oneUser, logout, isAdmin } = this.props;
    let placeholderUrl = require("../../img/placeholderUser.png");
    let adminImg = require("../../img/admin2.png");

    if (this.state.openToggle) {
      clsMenu.push("fa-times");
      clsMenu.push("open");
    } else {
      clsMenu.push("fa-bars");
    }

    if (this.state.openToggle) {
      clsDrawer.push("close");
    }
    return (
      <div className="ToggleMenuCont">
        <div className="HeaderToggleMenuCont">
          <Link to="/user-card" key="1">
            <div
              className="logoToggleMenu"
              onClick={this.toggleHandler}
              style={{
                backgroundImage: "url(" + logoDCI + ")"
              }}
            />
          </Link>
          <i className={clsMenu.join(" ")} onClick={this.toggleHandler} />
        </div>
        <div className={clsDrawer.join(" ")} style={{ opacity: "1" }}>
          <div>
            <div className="DrawerItem">
              {isAdmin && (
                <Link to="/dashboard" key="1">
                  <div
                    onClick={this.toggleHandler}
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
                      onClick={this.toggleHandler}
                      id="gravatar-img"
                      style={{
                        backgroundImage: "url(" + placeholderUrl + ")"
                      }}
                    />
                  </Link>
                ) : (
                  <Link to="/dashboard" key="1">
                    <div
                      onClick={this.toggleHandler}
                      id="gravatar-img"
                      style={{
                        backgroundImage:
                          "url(" +
                          `${process.env.REACT_APP_API_HOST}/${
                            oneUser.userImage
                          }` +
                          ")"
                      }}
                    />
                  </Link>
                )
              ]}
              <Link to="/user-card" onClick={() => logout()}>
                Logout
              </Link>
            </div>
          </div>
          <ul>
            <li>
              <Link to="/user-card" onClick={this.toggleHandler}>
                Alumni book
              </Link>
            </li>
            <div className="DrawerItemLine" />
            <li>
              <a
                href="https://digitalcareerinstitute.org/en/about-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
            </li>
            <div className="DrawerItemLine" />
            <li>
              <a
                href="https://digitalcareerinstitute.org/en/press/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Press
              </a>
            </li>
            <div className="DrawerItemLine" />
            <li>
              <a
                href="https://digitalcareerinstitute.org/contact/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
            <div className="DrawerItemLine" />
            <li>
              <a href="https://dci-jobs.personio.de/">Jobs at DCI</a>
            </li>
            <div className="DrawerItemLine" />
            <li>
              <a
                href="https://digitalcareerinstitute.org/en/courses/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Courses
              </a>
            </li>
            <div className="DrawerItemLine" />
            <li>
              <div>
                <a
                  href="https://www.facebook.com/devugees"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../../img/facebook.png")}
                    alt="twitter"
                    title="Facebook"
                    style={{ width: "40px" }}
                  />
                </a>
                <a
                  href="https://twitter.com/DevugeesOrg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../../img/twitter.png")}
                    alt="twitter"
                    title="Twitter"
                    style={{ width: "40px" }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCSM_3ldxjcclGTcXaJRBYTw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../../img/youtube.png")}
                    alt="twitter"
                    title="You-Tube"
                    style={{ width: "40px" }}
                  />
                </a>
              </div>
            </li>
            <div className="DrawerItemLine" />
          </ul>
        </div>
      </div>
    );
  }
}

ToggleMenu.propTypes = {
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
)(ToggleMenu);
