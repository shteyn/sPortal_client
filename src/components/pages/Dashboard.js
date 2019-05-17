import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import UserCanLoginMessage from "../messages/UserCanLoginMessage";
import UserDashboardPage from "./UserDashboardPage";
import AdminDashboardPage from "./AdminDashboardPage";
import { getUserData } from "../../actions/user";
import TopNavigation from "../navigation/TopNavigation";

class Dashboard extends Component {
  componentDidMount() {
    const { email } = this.props.user;
    this.props.getUserData(email);
  }

  render() {
    const {
      isConfirmed,
      isAdmin,
      user,
      oneUser,
      isConfirmationEmailConfirmed
    } = this.props;
    return (
      <div>
        <div className="dashboardNavigationBar"
        style={{position: 'fixed'}}>
          <TopNavigation />
        </div>
        {!isAdmin && isConfirmed ? <UserDashboardPage /> : null}
        {isAdmin ? <AdminDashboardPage /> : null}
        {!isConfirmationEmailConfirmed && !isConfirmed ? (
          <ConfirmEmailMessage user={user} />
        ) : null}
        {isConfirmationEmailConfirmed && !isConfirmed ? (
          <UserCanLoginMessage oneUser={oneUser} />
        ) : null}
      </div>
    );
  }
}

Dashboard.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  getUserData: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    oneUser: state.oneUser,
    isConfirmed: !!state.oneUser.confirmed,
    isConfirmationEmailConfirmed: !!state.oneUser.confirmationEmailSend,
    isAdmin: !!state.user.isAdmin
  };
}

export default connect(
  mapStateToProps,
  { getUserData }
)(Dashboard);
