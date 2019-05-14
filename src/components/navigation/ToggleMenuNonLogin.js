import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ToggleMenuNonLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openToggle: false
    }
  }

  toggleHandler = () => {
    this.setState({
      openToggle: !this.state.openToggle
    })
  };


  render() {
    let logoDCI = require("../../img/newDCILogo.png");
    const clsMenu = [
      'ToggleMenuNonLogin',
      'fa'
    ];

    const clsDrawer = [
      'DrawerNavigationBar'
    ];


    if (this.state.openToggle) {
      clsMenu.push('fa-times');
      clsMenu.push('open')
    } else {
      clsMenu.push('fa-bars')
    }


    if (this.state.openToggle) {
      clsDrawer.push('close')
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
          <i
            className={clsMenu.join(' ')}
            onClick={this.toggleHandler}
          />
        </div>
        <div className={clsDrawer.join(' ')} style={{opacity: '1'}}>
          <div>
            <div className="DrawerItemNoneLogin">
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
          </div>
          <ul>
            <li>
              <Link to="/user-card" key="1">
                  <span onClick={this.toggleHandler}>
                    Alumni book
                  </span>
              </Link>
            </li>
            <div className="DrawerItemLine"/>
            <li>
              <a
                href="https://digitalcareerinstitute.org/en/about-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
            </li>
            <div className="DrawerItemLine"/>
            <li>
              <a
                href="https://digitalcareerinstitute.org/en/press/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Press
              </a>
            </li>
            <div className="DrawerItemLine"/>
            <li>
              <a
                href="https://digitalcareerinstitute.org/contact/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
            <div className="DrawerItemLine"/>
            <li><a
              href="https://dci-jobs.personio.de/"
            >
              Jobs at DCI
            </a>
            </li>
            <div className="DrawerItemLine"/>
            <li>
              <a
                href="https://digitalcareerinstitute.org/en/courses/one-year-program/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Development Course
              </a>
            </li>
            <div className="DrawerItemLine"/>
            <li>
              <div>
                <a href="https://www.facebook.com/devugees"
                   target="_blank"
                   rel="noopener noreferrer">
                  <img
                    src={require('../../img/facebook.png')}
                    alt="twitter"
                    title="Facebook"
                    style={{width: '40px'}}/>
                </a>
                <a href="https://twitter.com/DevugeesOrg"
                   target="_blank"
                   rel="noopener noreferrer">
                  <img
                    src={require('../../img/twitter.png')}
                    alt="twitter"
                    title="Twitter"
                    style={{width: '40px'}}/>
                </a>
                <a href="https://www.youtube.com/channel/UCSM_3ldxjcclGTcXaJRBYTw"
                   target="_blank"
                   rel="noopener noreferrer">
                  <img
                    src={require('../../img/youtube.png')}
                    alt="twitter"
                    title="You-Tube"
                    style={{width: '40px'}}/>
                </a>
              </div>
            </li>
            <div className="DrawerItemLine"/>
          </ul>
        </div>
      </div>
    );
  }
}


export default ToggleMenuNonLogin;