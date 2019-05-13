import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  Form,
  Col,
  InputGroup,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import {
  locationsArray,
  devFocusArray,
  marketingFocusArray
} from "../../helpers";
import "react-datepicker/dist/react-datepicker.css";

class UpdateUserProfileForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    // this.emailRef = React.createRef();
    // this.locationRef = React.createRef();
    this.aboutMeSectionRef = React.createRef();
    this.studentClassRef = React.createRef();
    this.linkedInLinkRef = React.createRef();
    this.githubLinkRef = React.createRef();
    this.xingLinkRef = React.createRef();
    this.portfolioLinkRef = React.createRef();
    this.availabilityRef = React.createRef();
    this.mainFocusRef = React.createRef();
  }

  state = {
    show: false,
    startDate: this.props.user.availability
      ? new Date(this.props.user.availability)
      : null,
    id: this.props.user._id,
    firstName: "",
    lastName: "",
    aboutMeSection: "",
    location: this.props.user.location,
    studentClass: "",
    userImage: this.props.user.userImage,
    githubLink: "",
    linkedInLink: "",
    portfolioLink: "",
    xingLink: "",
    availability: this.props.user.availability,
    mainFocus: this.props.user.mainFocus
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user._id !== prevState.id) {
      return {
        startDate: nextProps.user.availability
          ? new Date(nextProps.user.availability)
          : null,
        id: nextProps.user._id,
        firstName: nextProps.user.firstName,
        lastName: nextProps.user.lastName,
        aboutMeSection: nextProps.user.aboutMeSection,
        location: nextProps.user.location,
        studentClass: nextProps.user.studentClass,
        userImage: nextProps.user.userImage,
        githubLink: nextProps.user.githubLink,
        linkedInLink: nextProps.user.linkedInLink,
        portfolioLink: nextProps.user.portfolioLink,
        xingLink: nextProps.user.xingLink,
        availability: nextProps.user.availability,
        mainFocus: nextProps.user.mainFocus
      };
    } else return null;
  }

  //types = ["Berlin", "Düsseldorf", "Leipzig", "Hamburg"];
  //focus = ["Front-End", "Back-End", "Full-Stack"];

  onChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  static defaultProps = {
    initialValue: 0
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const updatedUser = {
      id: this.state.id,
      availability: this.state.startDate,
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
      aboutMeSection: this.aboutMeSectionRef.current.value,
      githubLink: this.githubLinkRef.current.value,
      linkedInLink: this.linkedInLinkRef.current.value,
      location: this.state.location,
      portfolioLink: this.portfolioLinkRef.current.value,
      studentClass: this.studentClassRef.current.value,
      xingLink: this.xingLinkRef.current.value,
      mainFocus: this.state.mainFocus
    };
    this.props.updateProfile(updatedUser);
    this.handleClose();
  };

  render() {
    const { studentCourse } = this.props.user;

    return (
      <div>
        <div variant="primary" onClick={this.handleShow}>
          {/*<img src={require("../../img/edit-icon.svg")} alt="" />*/}
          UPDATE PROFILE
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Your Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row className="mb-3">
                <Form.Group as={Col} controlId="formBasicEmail">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>First Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="studentInfoInput"
                      aria-describedby="basic-addon3"
                      ref={this.firstNameRef}
                      type="text"
                      name="firstName"
                      defaultValue={this.props.user.firstName}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicEmail">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Last Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="studentInfoInput"
                      aria-describedby="basic-addon3"
                      ref={this.lastNameRef}
                      type="text"
                      name="lastName"
                      defaultValue={this.props.user.lastName}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formBasicEmail">
                <InputGroup className="mb-5">
                  <InputGroup.Prepend>
                    <InputGroup.Text>About Me</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    placeholder="Tell about yourself..."
                    maxLength="200"
                    as="textarea"
                    aria-label="With textarea"
                    className="studentInfoInput"
                    ref={this.aboutMeSectionRef}
                    type="text"
                    name="aboutMeSection"
                    defaultValue={this.props.user.aboutMeSection}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Row className="mb-5">
                <Form.Group as={Col} controlId="formBasicEmail">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>Class</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="studentClassInput"
                      aria-describedby="basic-addon3"
                      ref={this.studentClassRef}
                      type="number"
                      name="studentClass"
                      defaultValue={this.props.user.studentClass}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicEmail">
                  <InputGroup style={{ flexWrap: "nowrap" }}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>Availability</InputGroup.Text>
                    </InputGroup.Prepend>
                    <DatePicker
                      ref={this.availabilityRef}
                      className="datepicker"
                      popperClassName="drv-datepicker-popper"
                      autoComplete="off"
                      type="text"
                      name="availability"
                      dateFormat="MMMM d, yyyy"
                      showYearDropdown
                      dateFormatCalendar="MMMM YYYY"
                      scrollableYearDropdown
                      yearDropdownItemNumber={10}
                      onChange={this.handleChange}
                      placeholderText="Select your availability..."
                      selected={this.state.startDate}
                      showDisabledMonthNavigation
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row className="mb-5">
                {/*Main Focus*/}
                <Form.Group as={Col} controlId="formBasicEmail">
                  <InputGroup style={{ flexWrap: "nowrap" }}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>Main Focus</InputGroup.Text>
                    </InputGroup.Prepend>
                    <select
                      className="DropDownSelectUpdateForm"
                      name="mainFocus"
                      onChange={this.onChange}
                    >
                      {this.state.mainFocus === "" ? (
                        <option>Not updated</option>
                      ) : (
                        <option defaultValue>{this.state.mainFocus}</option>
                      )}
                      {studentCourse === "Web Development"
                        ? devFocusArray.map((item, i) => {
                            if (item !== this.state.mainFocus) {
                              return <option key={i}>{item}</option>;
                            } else {
                              return null;
                            }
                          })
                        : marketingFocusArray.map((item, i) => {
                            if (item !== this.state.mainFocus) {
                              return <option key={i}>{item}</option>;
                            } else {
                              return null;
                            }
                          })}
                    </select>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicEmail">
                  <InputGroup style={{ flexWrap: "nowrap" }}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>Location</InputGroup.Text>
                    </InputGroup.Prepend>
                    <select
                      className="DropDownSelectUpdateForm"
                      name="location"
                      onChange={this.onChange}
                    >
                      <option defaultValue>{this.state.location}</option>
                      {locationsArray.map((item, i) => {
                        if (item !== this.state.location) {
                          return <option key={i}>{item}</option>;
                        } else {
                          return null;
                        }
                      })}
                    </select>
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formBasicEmail">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>LinkedIn URL</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="studentInfoInput"
                      aria-describedby="basic-addon3"
                      ref={this.linkedInLinkRef}
                      type="url"
                      name="linkedInLink"
                      pattern="https://.*"
                      defaultValue={this.props.user.linkedInLink}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicEmail">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Github URL</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="studentInfoInput"
                      aria-describedby="basic-addon3"
                      ref={this.githubLinkRef}
                      type="url"
                      name="githubLink"
                      pattern="https://.*"
                      defaultValue={this.props.user.githubLink}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formBasicEmail">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Xing URL</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="studentInfoInput"
                      aria-describedby="basic-addon3"
                      ref={this.xingLinkRef}
                      type="url"
                      name="xingLink"
                      pattern="https://.*"
                      defaultValue={this.props.user.xingLink}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicEmail">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Portfolio URL</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="studentInfoInput"
                      aria-describedby="basic-addon3"
                      ref={this.portfolioLinkRef}
                      type="url"
                      name="portfolioLink"
                      pattern="https://.*"
                      defaultValue={this.props.user.portfolioLink}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <p style={{ color: "#da9446" }}>
                Please use only the https format(https://www.somewebsite.com)
              </p>
              <div
                style={{
                  textAlign: "right"
                }}
              >
                <Button
                  variant="secondary"
                  style={{
                    backgroundColor: "rgba(150, 150, 150, 0.62)",
                    border: "none"
                  }}
                  onClick={this.handleClose}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#da9446",
                    border: "none",
                    marginLeft: "20px"
                  }}
                  type="submit"
                >
                  Save Changes
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

UpdateUserProfileForm.propTypes = {
  updateProfile: PropTypes.func.isRequired
};

export default UpdateUserProfileForm;
