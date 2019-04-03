import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import UserDashboardPage from "./UserDashboardPage";
import AdminDashboardPage from "./AdminDashboardPage";

const Dashboard = ({ isConfirmed, isAdmin }) => (
  //ADD SUBMIT FUNCTION TO CHANGE DATA
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
    {!isAdmin ? <UserDashboardPage /> : <AdminDashboardPage />}
  </div>
);

Dashboard.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    isAdmin: !!state.user.isAdmin
  };
}

export default connect(mapStateToProps)(Dashboard);
