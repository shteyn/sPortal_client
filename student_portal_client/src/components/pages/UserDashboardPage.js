import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import TopNavigation from "../navigation/TopNavigation";
import UpdateUserProfileForm from "../forms/UpdateUserProfileForm";
import { getUserData } from "../../actions/user";

class UserDashboardPage extends Component {
  updateProfile = data => console.log("User Page called", data);

  componentDidMount() {
    const { email } = this.props.user;
    this.props.getUserData(email);
  }
  render() {
    const { firstName, lastName, email } = this.props.user;
    //const { oneUser } = this.props.oneUser;
    const { location, studentClass } = this.props.oneUser.oneUser;
    return (
      <div className="UserPage">
        <div className="navigationBarUserPage">
          <TopNavigation />
        </div>
        <div className="UserPageCont">
          <div className="InfoCont">
            <div className="infoBoxCont">
              <h3>Info Box</h3>
              <div className="SubBoxCont">
                <div className="classBox">
                  <h2>Class</h2>
                  <p>{studentClass}</p>
                </div>
                <div className="AvailableBox">
                  <h2>Available from</h2>
                  <p>September 21, 2019</p>
                </div>
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
                <div className="buttonGroupCont">
                  <button>
                    <span>&#10003;</span>
                  </button>
                  <button>
                    <span>&#10007;</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="linksBoxCont">
              <h1>Add link to additional websites</h1>
              <div>
                <span>
                  <h3>LinkedIn</h3>
                </span>
                <input type="text" />
                <div className="buttonGroupCont">
                  <button>
                    <span>&#10003;</span>
                  </button>
                  <button>
                    <span>&#10007;</span>
                  </button>
                </div>
              </div>
              <div>
                <span>
                  <h3>XING</h3>
                </span>
                <input type="text" />
                <div className="buttonGroupCont">
                  <button>
                    <span>&#10003;</span>
                  </button>
                  <button>
                    <span>&#10007;</span>
                  </button>
                </div>
              </div>
              <div>
                <span>
                  <h3>GitHub</h3>
                </span>
                <input type="text" />
                <div className="buttonGroupCont">
                  <button>
                    <span>&#10003;</span>
                  </button>
                  <button>
                    <span>&#10007;</span>
                  </button>
                </div>
              </div>
              <div>
                <span>
                  <h3>Portfolio</h3>
                </span>
                <input type="text" />
                <div className="buttonGroupCont">
                  <button>
                    <span>&#10003;</span>
                  </button>
                  <button>
                    <span>&#10007;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="profileInfoCont">
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Location: {location}</h3>
            <h3>Student Class: {studentClass}</h3>
          </div>
          <Button variant="primary">
            <UpdateUserProfileForm updateProfile={this.updateProfile} />
          </Button>
        </div>
      </div>
    );
  }
}

UserDashboardPage.propTypes = {
  getUserData: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  oneUser: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("UserDashboardPage", state.oneUser);
  return {
    user: state.user,
    oneUser: state.oneUser
  };
}

export default connect(
  mapStateToProps,
  { getUserData }
)(UserDashboardPage);
