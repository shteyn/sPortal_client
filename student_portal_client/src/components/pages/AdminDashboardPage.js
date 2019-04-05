import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";

import WaitingUsersForm from "../forms/WaitingUsersForm";
import ConfirmedUsersForm from "../forms/ConfirmedUsersForm";
import { getAllUsers } from "../../actions/user";



// const panes = [
//   {
//     menuItem: "Waiting Users",
//     render: () => {
//       if(this.props && this.props.allUsers) {
//         const {allUsers} = this.props.allUsers;
//         console.log(allUsers)
//       }
//
//       return (
//           <Tab.Pane attached={false}>
//             <WaitingUsersForm/>
//           </Tab.Pane>
//       )
//     }
//   },
//   {
//     menuItem: "Confirmed Users",
//     render: () => (
//       <Tab.Pane attached={false}>
//         <ConfirmedUsersForm />
//       </Tab.Pane>
//     )
//   }
// ];

class AdminDashboardPage extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    return (
      <Tabs defaultActiveKey="waitingStudents" id="uncontrolled-tab-example">
        <Tab eventKey="waitingStudents" title="Waiting Students">
          <WaitingUsersForm />
        </Tab>
        <Tab eventKey="confirmedStudents" title="Confirmed Students">
          <ConfirmedUsersForm />
        </Tab>
      </Tabs>
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
