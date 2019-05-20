import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";
import TopNavigation from "../navigation/TopNavigation";
import WaitingUsersForm from "../forms/WaitingUsersForm";
import ConfirmedUsersForm from "../forms/ConfirmedUsersForm";
import { getAllUsers } from "../../actions/user";

class AdminDashboardPage extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    console.log("admin page props", this.props.oneUser);
    return (
      <div className="admindashboard-cont">
        {/*<TopNavigation />*/}
        <div>
          <Tabs
            style={{ marginTop: "150px" }}
            defaultActiveKey="waitingStudents"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="waitingStudents" title="Waiting Students">
              <WaitingUsersForm />
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

AdminDashboardPage.propTypes = {
  getAllUsers: PropTypes.func.isRequired
};

export default connect(
  null,
  { getAllUsers }
)(AdminDashboardPage);
