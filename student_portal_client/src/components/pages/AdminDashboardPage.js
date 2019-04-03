import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";

import WaitingUsersForm from "../forms/WaitingUsersForm";
import ConfirmedUsersForm from "../forms/ConfirmedUsersForm";
import { getWaitingUsers } from "../../actions/user";

const panes = [
  {
    menuItem: "Waiting Users",
    render: () => (
      <Tab.Pane attached={false}>
        <WaitingUsersForm />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Confirmed Users",
    render: () => (
      <Tab.Pane attached={false}>
        <ConfirmedUsersForm />
      </Tab.Pane>
    )
  }
];

class AdminDashboardPage extends Component {
  componentDidMount() {
    this.props.getWaitingUsers();
  }
  render() {
    const AdminTabs = () => <Tab menu={{ pointing: true }} panes={panes} />;

    return <AdminTabs />;
  }
}

AdminDashboardPage.propTypes = {
  allUsers: PropTypes.object.isRequired,
  getWaitingUsers: PropTypes.func.isRequired,
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  console.log("ADMIN PAGE", state.allUsers);
  return {
    allUsers: state.allUsers,
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(
  mapStateToProps,
  { getWaitingUsers }
)(AdminDashboardPage);
