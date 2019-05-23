import React, { Component } from "react";
import PropTypes from "prop-types";
//import { connect } from "react-redux";
//import { getUserData } from "../../actions/user";
import { Link } from "react-router-dom";
import ContactForm from "../forms/ContactForm";
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

  render() {
    const { oneUser, logout, isAdmin, isAuthenticated } = this.props;
    console.log("toogle menu", this.props);
    let logoDCI = require("../../img/newDCILogo.png");
    let placeholderUrl = require("../../img/placeholderUser.jpeg");
    let adminImg = require("../../img/admin2.png");

    const clsMenu = ["ToggleMenu", "fa"];
    const clsDrawer = ["DrawerNavigationBar"];

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
            {isAuthenticated ? (
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
                      <img
                        onClick={this.toggleHandler}
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
                <Link to="/user-card" onClick={() => logout()}>
                  Logout
                </Link>
              </div>
            ) : (
              <div className="DrawerItemNoneLogin">
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </div>
            )}
          </div>
          <ul>
            <li>
              <Link to="/user-card" onClick={this.toggleHandler}>
                Alumni book
              </Link>
            </li>
            <div className="DrawerItemLine" />
            <li>
              <Link to="/about-us" rel="noopener noreferrer">
                About Us
              </Link>
            </li>
            <div className="DrawerItemLine" />
            <li>
              <a
                href="https://digitalcareerinstitute.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit DCI
              </a>
            </li>
            <div className="DrawerItemLine" />
            <li>
              <ContactForm />
            </li>
            <div className="DrawerItemLine" />
            <li>
              <div>
                <a
                  href="https://www.facebook.com/devugees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="toggleMenuIcon"
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
  logout: PropTypes.func.isRequired
};

export default ToggleMenu;
