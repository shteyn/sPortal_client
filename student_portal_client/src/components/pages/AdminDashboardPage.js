import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";

import WaitingUsersForm from "../forms/WaitingUsersForm";
import ConfirmedUsersForm from "../forms/ConfirmedUsersForm";
import { getAllUsers } from "../../actions/user";
import TopNavigation from "../navigation/TopNavigation";

class AdminDashboardPage extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    return (
      <div className="container-app">
        <div className="adminDashboardNav">
          <TopNavigation />
        </div>
        <div className="aaaa">
        <Tabs defaultActiveKey="waitingStudents" id="uncontrolled-tab-example">
          <Tab eventKey="waitingStudents" title="Waiting Students">
            <WaitingUsersForm />
          </Tab>
          <Tab eventKey="confirmedStudents" title="Confirmed Students">
            <ConfirmedUsersForm />
          </Tab>
        </Tabs>
      </div>
      </div>
    );
  }
}

AdminDashboardPage.propTypes = {
  getAllUsers: PropTypes.func.isRequired
};

export default connect(
  null,
  { getAllUsers }
)(AdminDashboardPage);
