import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const Dashboard = ({ isConfirmed }) => (
  //ADD SUBMIT FUNCTION TO CHANGE DATA
  <div>
    <p> Dashboard</p>
    {!isConfirmed && <ConfirmEmailMessage />}
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
