import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { Table, Button } from "semantic-ui-react";
import { deleteUser } from "../../actions/user";
import {
  courseTypesArray,
  devFocusArray,
  marketingFocusArray
} from "../../helpers";
class ConfirmedUsersForm extends Component {
  constructor(props) {
    super(props);
    this.deleteUserHandler.bind(this);
    this.locationsRef = React.createRef();
    this.availabilityRef = React.createRef();
    this.mainFocusRef = React.createRef();
    this.studentCourseRef = React.createRef();
    this.state = {
      location: "",
      availability: "",
      mainFocus: "",
      studentCourse: ""
    };
  }

  updateSearch = () => {
    this.setState({
      location: this.locationsRef.current.value,
      availability: this.availabilityRef.current.value,
      mainFocus: this.mainFocusRef.current.value,
      studentCourse: this.studentCourseRef.current.value
    });
  };
  clearAllFilters = () => {
    this.setState({
      location: (this.locationsRef.current.value = ""),
      availability: (this.availabilityRef.current.value = ""),
      mainFocus: (this.mainFocusRef.current.value = ""),
      studentCourse: (this.studentCourseRef.current.value = "")
    });
  };

  deleteUserHandler = id => {
    this.props.deleteUser(id);
  };

  render() {
    const { allUsers } = this.props.allUsers;

    const locations = [];
    const mainFocus = [];

    const studentCourse = courseTypesArray;

    allUsers.map(user => {
      if (locations.indexOf(user.location) < 0 && user.confirmed !== false) {
        locations.push(user.location);
      }
      return null;
    });

    allUsers.map(user => {
      if (mainFocus.indexOf(user.mainFocus) < 0 && user.mainFocus !== "") {
        mainFocus.push(user.mainFocus);
      } else if (this.state.studentCourse === "Web Development") {
        let compareArray = mainFocus.filter(
          i => devFocusArray.indexOf(i) !== -1
        );
        mainFocus.length = 0;
        compareArray.map(devFocus => {
          return mainFocus.push(devFocus);
        });
      } else if (
        this.state.studentCourse === "Digital Marketing / E-Commerce"
      ) {
        let compareArray = mainFocus.filter(
          i => marketingFocusArray.indexOf(i) !== -1
        );
        mainFocus.length = 0;
        compareArray.map(marketingFocus => {
          return mainFocus.push(marketingFocus);
        });
      }
      return null;
    });

    const filteredLocations = allUsers.filter(user => {
      let validLocation = true;
      let validAvailability = true;
      let validMainFocus = true;
      let validStudentCourse = true;

      if (this.state.location !== "") {
        validLocation = user.location.indexOf(this.state.location) !== -1;
      }

      if (this.state.studentCourse !== "") {
        validStudentCourse =
          user.studentCourse.indexOf(this.state.studentCourse) !== -1;
      }

      if (this.state.mainFocus !== "") {
        validMainFocus = user.mainFocus.indexOf(this.state.mainFocus) !== -1;
      }

      if (this.state.availability !== "") {
        if (typeof user.availability == "string") {
          let currentDate = new Date();
          let userDate = new Date(user.availability);
          if (this.state.availability === "current") {
            validAvailability = currentDate >= userDate;
          } else {
            validAvailability = userDate > currentDate;
          }
        } else {
          validAvailability = false;
        }
      }
      return (
        validLocation &&
        validAvailability &&
        validMainFocus &&
        validStudentCourse
      );
    });
    return (
      <div>
        <div className="adminFilter">
          <div className="SelectCont">
            <select
              className="DropDownSelect"
              name="location"
              onChange={this.updateSearch}
              ref={this.locationsRef}
            >
              <option value="">Location</option>
              {locations.map(item => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              className="DropDownSelect"
              name="studentCourse"
              onChange={this.updateSearch}
              ref={this.studentCourseRef}
            >
              <option value="">Course</option>
              {studentCourse.map(item => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <select
              className="DropDownSelect"
              name="mainFocus"
              onChange={this.updateSearch}
              ref={this.mainFocusRef}
            >
              <option value="">Main Focus</option>
              {mainFocus.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              className="DropDownSelect"
              name="availability"
              onChange={this.updateSearch}
              ref={this.availabilityRef}
            >
              <option value="">Availability</option>
              <option value="current">Currently Available</option>
              <option value="future">Future Available</option>
            </select>
          </div>
          <button className="ResetBnt" onClick={this.clearAllFilters}>
            Clear Filters
          </button>
        </div>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Course</Table.HeaderCell>
              <Table.HeaderCell>Main Focus</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Class</Table.HeaderCell>
              <Table.HeaderCell>E-Mail</Table.HeaderCell>
              <Table.HeaderCell>Availability</Table.HeaderCell>
              <Table.HeaderCell>Delete Student</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body className="adminTable">
            {filteredLocations.map(oneUser => {
              let currentDate = new Date();
              let date = new Date(oneUser.availability);
              const newDate = moment(date).format("MMMM D, YYYY");
              if (oneUser.confirmed) {
                return (
                  <Table.Row key={oneUser._id}>
                    <Table.Cell>{oneUser.studentCourse}</Table.Cell>
                    <Table.Cell>{oneUser.mainFocus}</Table.Cell>
                    <Table.Cell>{oneUser.location}</Table.Cell>
                    <Table.Cell>
                      {oneUser.firstName} {oneUser.lastName}
                    </Table.Cell>
                    <Table.Cell>{oneUser.studentClass}</Table.Cell>
                    <Table.Cell>{oneUser.email}</Table.Cell>
                    <Table.Cell>
                      {oneUser.availability === null ? (
                        <p key="0" style={{ color: "grey" }}>
                          No info yet
                        </p>
                      ) : (
                        [
                          date > currentDate ? (
                            <p key="1" style={{ color: "#1d3b8b" }}>
                              {newDate}
                            </p>
                          ) : (
                            <p key="2" style={{ color: "green" }}>
                              Available for offers
                            </p>
                          )
                        ]
                      )}
                    </Table.Cell>
                    <Table.Cell className="adminTableBtn">
                      <Button
                        style={{
                          backgroundColor: "#1d3b8b",
                          color: "white"
                        }}
                        onClick={deleteUser => {
                          if (window.confirm("Are you sure?"))
                            this.deleteUserHandler(oneUser._id, deleteUser);
                        }}
                      >
                        Delete Student
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              } else {
                return null;
              }
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

ConfirmedUsersForm.propTypes = {
  allUsers: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers
  };
}

export default connect(
  mapStateToProps,
  { deleteUser }
)(ConfirmedUsersForm);
