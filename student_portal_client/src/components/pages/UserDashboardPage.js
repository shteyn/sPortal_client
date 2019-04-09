import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import UpdateUserProfileForm from "../forms/UpdateUserProfileForm";
import { getUserData, updateProfile } from "../../actions/user";

class UserDashboardPage extends Component {
  updateProfile = data => this.props.updateProfile(data);

  componentDidMount() {
    const { email } = this.props.user;
    this.props.getUserData(email);
  }
  render() {
    const {
      firstName,
      lastName,
      email,
      location,
      studentClass,
      availability,
      githubLink,
      linkedInLink,
      portfolioLink,
      xingLink
    } = this.props.oneUser;
    return (
      <div className="UserPage">
        <div className="UserPageCont">
          <div className="InfoCont">
            <div className="infoBoxCont">
              <h3>Info Box</h3>
              <div className="SubBoxCont">
                <div className="ImageUploadCont">
                  <h2>First Name</h2>
                  <p>{firstName}</p>
                </div>
                <div className="ImageUploadCont">
                  <h2>Lats Name</h2>
                  <p>{lastName}</p>
                </div>
                <div className="ImageUploadCont">
                  <h2>Location</h2>
                  <p>{location}</p>
                </div>
                <div className="ImageUploadCont">
                  <h2>Class</h2>
                  <p>{studentClass}</p>
                </div>
                <div className="ImageUploadCont">
                  <h2>Available from</h2>
                  <p>September 21, 2019</p>
                </div>
                <div className="ImageUploadCont">
                  <h3>Image</h3>
                  <div className="inputCont">
                    <label htmlFor="imgupload">upload</label>
                    <input
                      type="file"
                      id="imgupload"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="linksBoxCont">
              <div>
                <span>
                  <h3>LinkedIn</h3>
                </span>
                <input type="text" />
              </div>
              <div>
                <span>
                  <h3>XING</h3>
                </span>
                <input type="text" />
              </div>
              <div>
                <span>
                  <h3>GitHub</h3>
                </span>
                <input type="text" />
              </div>
              <div>
                <span>
                  <h3>Portfolio</h3>
                </span>
                <input type="text" />
              </div>
              <span>Update btn </span>
              <Button variant="primary">
                <UpdateUserProfileForm updateProfile={this.updateProfile} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserDashboardPage.propTypes = {
  getUserData: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  oneUser: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("UserDashboardPage", state);
  return {
    user: state.user,
    oneUser: state.oneUser
  };
}

export default connect(
  mapStateToProps,
  { getUserData, updateProfile }
)(UserDashboardPage);
