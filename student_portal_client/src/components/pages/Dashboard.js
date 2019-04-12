import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import UserDashboardPage from "./UserDashboardPage";
import AdminDashboardPage from "./AdminDashboardPage";


class Dashboard extends Component {
  render() {
    const { isConfirmed, isAdmin } = this.props;
    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}
        {!isAdmin && isConfirmed ? <UserDashboardPage /> : null}
        {isAdmin ? <AdminDashboardPage /> : null}
      </div>
    );
  }
}


Dashboard.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    isAdmin: !!state.user.isAdmin,
    user: state.user
  };
}

export default connect(mapStateToProps)(Dashboard);