import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TopNavigation from "../navigation/TopNavigation";

import { getUserData } from "../../actions/user";

class UserDashboardPage extends Component {
  componentDidMount() {
    const { email } = this.props.user;
    console.log("Component email", email);
    this.props.getUserData(email);
  }
  render() {
    const { firstName, lastName, email } = this.props.user;
    const { location, studentClass } = this.props.oneUser.oneUser;
    return (
      <div className="UserPage">
        <div className="navigationBarUserPage">
          <TopNavigation />
        </div>
        <div className="profileInfoCont">
          <h3>First Name: {firstName}</h3>
          <h3>Last Name: {lastName}</h3>
          <h3>Email: {email}</h3>
          <h3>Location: {location}</h3>
          <h3>Student Class: {studentClass}</h3>
        </div>
      </div>
    );
  }
}

UserDashboardPage.propTypes = {
  getUserData: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
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
