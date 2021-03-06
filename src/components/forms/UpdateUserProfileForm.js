import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, Col, InputGroup } from "react-bootstrap";
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
    mainFocus: this.props.user.mainFocus,
    chars_left: null
  };

  componentDidMount() {
    const initialValue = this.props.user.aboutMeSection.length;
    if (initialValue > 0) {
      const remainChar = 500 - initialValue;
      this.setState({
        chars_left: remainChar
      });
    } else {
      this.setState({
        chars_left: 500
      });
    }
  }

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const charLeft = 500 - charCount;
    this.setState({
      chars_left: charLeft
    });
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
          Update Profile
        </div>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          id="ModalUpdateUserForm"
        >
          <Modal.Header closeButton id="headerFromUpdate">
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
              <Form.Group
                controlId="formBasicEmail"
                id="inputGroup"
                className="mb-5"
              >
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>About Me</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    placeholder="Tell about yourself... ( Max 500 Characters )"
                    maxLength="500"
                    as="textarea"
                    aria-label="With textarea"
                    className="studentInfoInput"
                    ref={this.aboutMeSectionRef}
                    type="text"
                    name="aboutMeSection"
                    defaultValue={this.props.user.aboutMeSection}
                    onChange={this.handleWordCount}
                  />
                </InputGroup>
                <p>
                  {this.state.chars_left} <span>characters left</span>
                </p>
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

              <p style={{ color: "#1d3b8b" }}>
                Please use only the https format(https://www.somewebsite.com)
              </p>
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
              <div
                style={{
                  textAlign: "center",
                  marginTop: "50px"
                }}
              >
                <Button
                  variant="primary"
                  className="saveChangesBtn"
                  style={{
                    backgroundColor: "#1d3b8b",
                    border: "none",
                    borderRadius: "5px",
                    width: "150px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    height: "50px"
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
