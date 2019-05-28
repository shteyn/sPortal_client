import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import UserCanLoginMessage from "../messages/UserCanLoginMessage";
import UserDashboardPage from "./UserDashboardPage";
import AdminDashboardPage from "./AdminDashboardPage";
import { getUserData, getAllUsers } from "../../actions/user";

import TopNavigation from "../navigation/TopNavigation";

class Dashboard extends Component {
  _isMounted = false;

  state = {
    loading: true,
    success: false
  };

  componentDidMount() {
    this._isMounted = true;
    const { email } = this.props.user;
    this.props.getUserData(email).then(() => {
      this.props
        .getAllUsers()
        .then(() => {
          if (this._isMounted) {
            this.setState({ loading: false, success: true });
          }
        })
        .catch(() => this.setState({ loading: false, success: false }));
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      isConfirmed,
      isAdmin,
      user,
      allUsers,
      oneUser,
      isConfirmationEmailConfirmed
    } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <div className="dashboardNavigationBar" style={{ position: "fixed" }}>
          <TopNavigation />
        </div>
        {!isAdmin && isConfirmed && isConfirmationEmailConfirmed && !loading ? (
          <UserDashboardPage oneUser={oneUser} user={user} />
        ) : null}
        {isAdmin && !loading ? (
          <AdminDashboardPage oneUser={user} allUsers={allUsers} />
        ) : null}
        {!isConfirmationEmailConfirmed && !isConfirmed && !loading ? (
          <ConfirmEmailMessage user={user} />
        ) : null}
        {isConfirmationEmailConfirmed && !isConfirmed && !loading ? (
          <UserCanLoginMessage oneUser={user} />
        ) : null}
      </div>
    );
  }
}

Dashboard.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  getUserData: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers,
    oneUser: state.oneUser,
    user: state.user,
    isConfirmed: !!state.oneUser.confirmed,
    isConfirmationEmailConfirmed: !!state.oneUser.confirmationEmailSend,
    isAdmin: !!state.user.isAdmin
  };
}

export default connect(
  mapStateToProps,
  { getUserData, getAllUsers }
)(Dashboard);
