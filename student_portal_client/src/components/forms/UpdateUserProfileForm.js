import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class UpdateUserProfileForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.locationRef = React.createRef();
    this.studentClassRef = React.createRef();
    this.linkedInLinkRef = React.createRef();
    this.githubLinkRef = React.createRef();
    this.xingLinkRef = React.createRef();
    this.portfolioLinkRef = React.createRef();
    this.availabilityRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    show: false,
    startDate: new Date()
  };
  static defaultProps = {
    initialValue: 0
  };
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
    console.log("from handleSubmit", date);
  }
  handleSubmit = event => {
    event.preventDefault();
    const updatedUser = {
      id: this.props.oneUser._id,
      availability: this.state.startDate,
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
      email: this.emailRef.current.value,
      githubLink: this.githubLinkRef.current.value,
      linkedInLink: this.linkedInLinkRef.current.value,
      location: this.locationRef.current.value,
      portfolioLink: this.portfolioLinkRef.current.value,
      studentClass: this.studentClassRef.current.value,
      xingLink: this.xingLinkRef.current.value
    };
    this.props.updateProfile(updatedUser);
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      studentClass,
      location,
      githubLink,
      linkedInLink,
      portfolioLink,
      xingLink,
      availability
    } = this.props.oneUser;

    return (
      <div>
        <div variant="primary" onClick={this.handleShow}>
          <img src={require("../../img/edit-icon.svg")} alt="" />
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Your Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  ref={this.firstNameRef}
                  type="text"
                  name="firstName"
                  defaultValue={firstName}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  ref={this.lastNameRef}
                  type="text"
                  name="lastName"
                  defaultValue={lastName}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  ref={this.emailRef}
                  type="email"
                  name="email"
                  defaultValue={email}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Class</Form.Label>
                <Form.Control
                  ref={this.studentClassRef}
                  type="text"
                  name="studentClass"
                  defaultValue={studentClass}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  ref={this.locationRef}
                  type="text"
                  name="location"
                  defaultValue={location}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Availability</Form.Label>
                <br />
                <DatePicker
                  ref={this.availabilityRef}
                  type="text"
                  name="availability"
                  dateFormat="MM/yyyy"
                  showYearDropdown
                  dateFormatCalendar="MMMM YYYY"
                  scrollableYearDropdown
                  yearDropdownItemNumber={10}
                  selected={this.state.startDate}
                  defaultValue={availability}
                  onChange={this.handleChange}
                  dropdownMode={"select"}
                  todayButton={"Today"}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control
                  ref={this.linkedInLinkRef}
                  type="text"
                  name="linkedInLink"
                  // pattern="https://.*"
                  defaultValue={linkedInLink}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Xing</Form.Label>
                <Form.Control
                  ref={this.xingLinkRef}
                  type="text"
                  name="xingLink"
                  // pattern="https://.*"
                  defaultValue={xingLink}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Github</Form.Label>
                <Form.Control
                  ref={this.githubLinkRef}
                  type="text"
                  name="githubLink"
                  // pattern="https://.*"
                  defaultValue={githubLink}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Portfolio</Form.Label>
                <Form.Control
                  ref={this.portfolioLinkRef}
                  type="text"
                  name="portfolioLink"
                  // pattern="https://.*"
                  defaultValue={portfolioLink}
                />
              </Form.Group>

              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={this.handleClose}
              >
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

UpdateUserProfileForm.propTypes = {
  oneUser: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  //console.log("state profile form", state.oneUser);
  return {
    oneUser: state.oneUser
  };
}

export default connect(mapStateToProps)(UpdateUserProfileForm);
