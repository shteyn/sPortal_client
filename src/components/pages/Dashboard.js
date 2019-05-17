import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import UserCanLoginMessage from "../messages/UserCanLoginMessage";
import UserDashboardPage from "./UserDashboardPage";
import AdminDashboardPage from "./AdminDashboardPage";
import { getUserData } from "../../actions/user";
import { ReactComponent as LoadinSvg } from "../../img/loading.svg";

import TopNavigation from "../navigation/TopNavigation";


class Dashboard extends Component {
  state = {
    loading: true,
    success: false
  };

  componentDidMount() {
    const { email } = this.props.user;
    this.props
      .getUserData(email)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  render() {
    const {
      isConfirmed,
      isAdmin,
      user,
      oneUser,
      isConfirmationEmailConfirmed
    } = this.props;
    const { loading, success } = this.state;

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
        {loading && !isAdmin && isConfirmed ? (
          <LoadinSvg loading />
        ) : !loading && !isAdmin && isConfirmed ? (
          <UserDashboardPage />
        ) : null}

        {isAdmin ? <AdminDashboardPage /> : null}
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
