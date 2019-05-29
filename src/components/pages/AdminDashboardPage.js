import React, { Component } from "react";

import { Tabs, Tab } from "react-bootstrap";

import WaitingUsersForm from "../forms/WaitingUsersForm";
import ConfirmedUsersForm from "../forms/ConfirmedUsersForm";

class AdminDashboardPage extends Component {
  render() {
    const { allUsers } = this.props;
    return (
      <div className="admindashboard-cont">
        <div>
          <Tabs
            style={{ marginTop: "150px" }}
            defaultActiveKey="waitingStudents"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="waitingStudents" title="Waiting Students">
              <WaitingUsersForm allUsers={allUsers} />
            </Tab>
            <Tab eventKey="confirmedStudents" title="Confirmed Students">
              <ConfirmedUsersForm />
            </Tab>
          </Tabs>
        </div>
        <div id="adminInfo">You: {this.props.oneUser.email}</div>
      </div>
    );
  }
}

export default AdminDashboardPage;
