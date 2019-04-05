import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table, Button } from "semantic-ui-react";

import { approveUser, deleteUser } from "../../actions/user";

class WaitingUsersForm extends Component {
  approveUser = id => {
    this.props.approveUser(id).then(this.setState({}));
  };

  deleteUser = id => {
    this.props.deleteUser(id);
  };
  render() {
    const { allUsers } = this.props.allUsers;
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell>Class</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>E-Mail</Table.HeaderCell>
            <Table.HeaderCell>User Status</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {allUsers.map(
            ({
              _id,
              firstName,
              lastName,
              email,
              location,
              studentClass,
              confirmed,
              confirmationEmailSend
            }) => {
              if (!confirmed) {
                return (
                  <Table.Row key={_id}>
                    <Table.Cell>{location}</Table.Cell>
                    <Table.Cell>{studentClass}</Table.Cell>
                    <Table.Cell>{firstName}</Table.Cell>
                    <Table.Cell>{lastName}</Table.Cell>
                    <Table.Cell>{email}</Table.Cell>
                    <Table.Cell>
                      {confirmationEmailSend ? "Approved" : "Not Approved"}
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        secondary
                        onClick={this.approveUser.bind(this, _id)}
                        style={{
                          color: confirmationEmailSend ? "green" : "white"
                        }}
                      >
                        {confirmationEmailSend ? "Resend Email" : "Approve"}
                      </Button>
                      <Button
                        color="red"
                        onClick={this.deleteUser.bind(this, _id)}
                      >
                        Reject
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              } else {
                return null;
              }
            }
          )}
        </Table.Body>
      </Table>
    );
  }
}

WaitingUsersForm.propTypes = {
  approveUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers
  };
}

export default connect(
  mapStateToProps,
  { approveUser, deleteUser }
)(WaitingUsersForm);
