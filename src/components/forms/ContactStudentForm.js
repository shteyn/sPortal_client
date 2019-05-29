import React, { Component } from "react";
import { FormCheck, Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import { contactStudent } from "../../actions/user";
import { inContactStudent } from "../../helpers";
import LegalPrivacy from "../footer_pages/LegalPrivacy";

class ContactStudentForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      loading: false,
      errors: {},

      data: {
        studentName: this.props.user.firstName,
        studentEmail: this.props.user.email,
        name: "",
        email: "",
        question: "",
        inContactStudent: "",
        legalPrivacy: true
      }
    };
  }

  onChange = event => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.contactStudent(this.state.data);
    }
  };

  contactStudent = data =>
    this.props.contactStudent(data).then(this.handleClose());

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.name) errors.name = "Name section can't be blank";
    if (!data.name) errors.question = "Question section can't be blank";
    return errors;
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    const { data, errors, loading } = this.state;
    const { user } = this.props;
    return (
      <div>
        <div variant="primary" onClick={this.handleShow}>
          Contact
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <div>
              <h1>
                Contact{" "}
                <span style={{ color: "#ec7f37" }}>{user.firstName}</span>
              </h1>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit} loading={loading.toString()}>
              <div className="ContactFormPersonalInfo">
                <Form.Group>
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="text"
                    value={data.name}
                    name="name"
                    min="3"
                    required
                  />
                  <br />
                  {errors.name && <InlineError text={errors.name} />}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="text"
                    value={data.email}
                    name="email"
                    required
                  />
                  <br />
                  {errors.email && <InlineError text={errors.email} />}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Who Are you</Form.Label>
                  <select
                    className="selectContactForm"
                    name="inContactStudent"
                    onChange={this.onChange}
                    required
                  >
                    <option value="">Select your option...</option>
                    {inContactStudent.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </Form.Group>
              </div>
              <Form.Group>
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  as="textarea"
                  maxLength="140"
                  rows={6}
                  value={data.question}
                  name="question"
                  required
                />

                <br />
                {errors.question && <InlineError text={errors.question} />}
              </Form.Group>
              <Form.Group>
                <div className="checkboxContainerItems" id="checkboxContainerItems">
                    <FormCheck
                      name="legalPrivacy"
                      required
                      onChange={this.onChange}
                      value={true}
                    />
                    <div className="legalLink">
                      I have read and agree to the
                      <button>
                        <LegalPrivacy />
                      </button>
                    </div>
                </div>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { contactStudent }
)(ContactStudentForm);
