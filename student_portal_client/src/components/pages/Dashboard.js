import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TopNavigation from '../navigation/TopNavigation'

import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const Dashboard = ({ isConfirmed }) => (
  //ADD SUBMIT FUNCTION TO CHANGE DATA
  <div className="UserPage">
    {!isConfirmed && <ConfirmEmailMessage />}
    <div className="navigationBarUserPage">
      <TopNavigation/>
    </div>
    <div className="UserPageCont">
      <div className="InfoCont">
        <div className="infoBoxCont">
          <h3>Info Box</h3>
          <div className="SubBoxCont">
            <div className="classBox">
              <h2>Class</h2>
              <p>09</p>
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
              <input type="file" id="imgupload" style={{ display: 'none' }}/>
            </div>
            <div className="buttonGroupCont">
              <button><span>&#10003;</span></button>
              <button><span>&#10007;</span></button>
            </div>
          </div>
        </div>
        <div className="linksBoxCont">
          <h1>Add link to additional websites</h1>
          <div>
            <span><h3>LinkedIn</h3></span>
            <input type="text"/>
            <div className="buttonGroupCont">
              <button><span>&#10003;</span></button>
              <button><span>&#10007;</span></button>
            </div>
          </div>
          <div>
            <span><h3>XING</h3></span>
            <input type="text"/>
            <div className="buttonGroupCont">
              <button><span>&#10003;</span></button>
              <button><span>&#10007;</span></button>
            </div>
          </div>
          <div>
            <span><h3>GitHub</h3></span>
            <input type="text"/>
            <div className="buttonGroupCont">
              <button><span>&#10003;</span></button>
              <button><span>&#10007;</span></button>
            </div>
          </div>
          <div>
            <span><h3>Portfolio</h3></span>
            <input type="text"/>
            <div className="buttonGroupCont">
              <button><span>&#10003;</span></button>
              <button><span>&#10007;</span></button>
            </div>
          </div>
        </div>

      </div>
      <hr/>
      <div className="profileInfoCont">
        <h3>First Name</h3>
        <h3>Last Name</h3>
        <h3>Email</h3>
        <h3>Location</h3>
      </div>
    </div>
  </div>
);

Dashboard.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(Dashboard);
