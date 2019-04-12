import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import TopNavigation from '../navigation/TopNavigation'

import UpdateUserProfileForm from "../forms/UpdateUserProfileForm";
import {getUserData, updateProfile, updateImage} from "../../actions/user";

class UserDashboardPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.userImageRef = React.createRef();
  }

  updateProfile = data => this.props.updateProfile(data);

  componentDidMount() {
    const {email} = this.props.user;
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
      userImage,
      availability,
      githubLink,
      linkedInLink,
      portfolioLink,
      xingLink
    } = this.props.oneUser;
    return (
        <div className="UserPage">
          <div className="navigationBarUserPage">
            <TopNavigation/>
          </div>
          <div className="UserPageCont">
            <div className="InfoCont">
              <div className="infoBoxCont">
                <h3>Info Box</h3>
                <div className="SubBoxCont">
                  <div className="SubBoxItem">
                    <div className="userImageUploadCont"
                         style={{
                           position: 'relative',
                           width: '150px',
                           height: '240px'
                         }}>
                      {!userImage ? (
                          <img
                              src={require("../../img/empty-profile.png")}
                              alt=""
                              style={{
                                width: '150px',
                                height: '150px'}}/>
                      ) : (
                          <img
                              src={`http://localhost:8080/uploads/${userImage}`}
                              alt=""
                              style={{
                                width: '150px',
                                height: '240px'}}/>
                      )}
                      <form style={{
                        position: 'absolute',
                        right: '0',
                        bottom: '0',
                        cursor: 'pointer'
                      }}>
                        <label
                            htmlFor="imgupload"
                            style={{
                              cursor: 'pointer'
                            }}
                        >
                          <img src={require('../../img/edit.svg')} alt="" style={{width: '25px'}}/>
                        </label>
                        <input
                            id="imgupload"
                            ref={this.userImageRef}
                            type="file"
                            name="userImageRef"
                            onChange={this.submitUploadImage}
                            style={{display: "none"}}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="profileInfoCont">
                    <div className="profileInfoItem">
                      <h2>Class</h2>
                      <p>{studentClass}</p>
                    </div>
                    <div className="profileInfoItem">
                      <h2>Available from</h2>
                      <p>September 21, 2019</p>
                    </div>
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
                  </div>
                </div>
              </div>
              <div className="linksBoxCont">
                <div>
                <span>
                  <h3>LinkedIn</h3>
                </span>
                  <input type="text"/>
                </div>
                <div>
                <span>
                  <h3>XING</h3>
                </span>
                  <input type="text"/>
                </div>
                <div>
                <span>
                  <h3>GitHub</h3>
                </span>
                  <input type="text"/>
                </div>
                <div>
                <span>
                  <h3>Portfolio</h3>
                </span>
                  <input type="text"/>
                </div>
              </div>
            </div>
            <button className="updateButton" style={{position: 'absolute', right: '0', bottom: '0'}}>
              <UpdateUserProfileForm updateProfile={this.updateProfile}/>
            </button>
            <hr/>
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
    {getUserData, updateProfile, updateImage}
)(UserDashboardPage);
