import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TopNavigation from '../navigation/TopNavigation'

import UpdateUserProfileForm from "../forms/UpdateUserProfileForm";
import { getUserData, updateProfile, updateImage } from "../../actions/user";

class UserDashboardPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.userImageRef = React.createRef();
  }
  updateProfile = data => this.props.updateProfile(data);

  componentDidMount() {
    const { email } = this.props.user;
    this.props.getUserData(email);
  }

  submitUploadImage = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.set("id", this.props.oneUser._id);
    formData.append("userImage", this.userImageRef.current.files[0]);
    this.props.updateImage(formData);
  };

  render() {
    const {
      firstName,
      lastName,
      // email,
      location,
      studentClass,
      // availability,
      // githubLink,
      // linkedInLink,
      // portfolioLink,
      // xingLink
    } = this.props.oneUser;
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
                <div className="SubBoxItem">
                  <h2>Class</h2>
                  <p>{studentClass}</p>
                </div>
                <div className="SubBoxItem">
                  <h2>Available from</h2>
                  <p>September 21, 2019</p>
                </div>
                <div>
                  <form>
                    <h1>File Upload</h1>

                    <label
                      htmlFor="imgupload"
                      style={{
                        width: "100px",
                        height: "100px",
                        border: "solid 1px red"
                      }}
                    >
                      upload
                    </label>
                    <input
                      id="imgupload"
                      ref={this.userImageRef}
                      type="file"
                      name="userImageRef"
                      onChange={this.submitUploadImage}
                      style={{ display: "none" }}
                    />
                  </form>
                </div>
                <div className="ImageUploadCont">
                  <h3>Image</h3>
                  <img src={userImage} style={{ width: "200px" }} />
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
            </div>
          </div>
          <hr/>
        </div>
        <div className="profileInfoCont">
          <div className="profileInfoItem">
            <h2>First Name</h2>
            <p>{firstName}</p>
          </div>
          <div className="profileInfoItem">
            <h2>Lats Name</h2>
            <p>{lastName}</p>
          </div>
          <div className="profileInfoItem">
            <h2>Location</h2>
            <p>{location}</p>
          </div>
          <button className="updateButton">
            <UpdateUserProfileForm updateProfile={this.updateProfile} />
          </button>
        </div>
      </div>
    );
  }
}

UserDashboardPage.propTypes = {
  getUserData: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  oneUser: PropTypes.object.isRequired,
  updateImage: PropTypes.func.isRequired
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
  { getUserData, updateProfile, updateImage }
)(UserDashboardPage);
