import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";

class UpdateUserProfileForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  state = {
    show: false,
    firstName: this.props.oneUser.oneUser.firstName
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

  handleChange = event => {
    event.preventDefault();
    console.log();
  };

  handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      firstName: this.props.oneUser.oneUser
    };
    this.props.updateProfile(newUser);
  };

  render() {
    const { firstName, lastName } = this.props.oneUser.oneUser;
    console.log("firstName", this.state);

    return (
      <div>
        <div variant="primary" onClick={this.handleShow}>
          Launch demo modal
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
                  onChange={this.handleChange}
                  type="text"
                  name="firstName"
                  value={firstName}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="firstName"
                  value={lastName}
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
  console.log("UpdateUserProfileForm", state.oneUser);
  return {
    oneUser: state.oneUser
  };
}

export default connect(mapStateToProps)(UpdateUserProfileForm);
