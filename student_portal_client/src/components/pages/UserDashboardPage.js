import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UserDashboardPage extends Component {
  render() {
    const { email } = this.props.user;

    return (
      <div>
        <div>{email}</div>
      </div>
    );
  }
}

UserDashboardPage.propTypes = {
  user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("mapStateToProps", state.user);
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(UserDashboardPage);
