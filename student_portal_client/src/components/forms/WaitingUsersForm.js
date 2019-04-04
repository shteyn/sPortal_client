import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table, Button } from "semantic-ui-react";

import { approveUser, deleteUser } from "../../actions/user";

class WaitingUsersForm extends Component {
  constructor(props) {
    super(props);
  }

  approveUser = id => {
    this.props.approveUser(id);
  };

  deleteUser = id => {
    console.log("deleteUser user CALLED", id);
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
              confirmed
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
                      <Button
                        secondary
                        onClick={this.approveUser.bind(this, _id)}
                      >
                        Approve
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
  // allUsers: PropTypes.object.isRequired,
  approveUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  console.log("WAITING USERS", state.allUsers.allUsers);

  return {
    allUsers: state.allUsers
  };
}

export default connect(
  mapStateToProps,
  { approveUser, deleteUser }
)(WaitingUsersForm);
