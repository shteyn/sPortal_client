import React, { Component } from "react";
import { FormCheck, Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import { contactUs } from "../../actions/user";
import { inContact } from "../../helpers";
import LegalPrivacy from "./LegalPrivacy";

class ContactForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      loading: false,
      errors: {},
      data: {
        name: "",
        email: "",
        phoneNumber: "",
        location: "",
        question: "",
        inContact: "",
        legalPrivacy: true
      }
    };
  }

  onChange = event =>
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value
      }
    });

  handleSubmit = event => {
    event.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.contactUs(this.state.data);
    }
  };

  contactUs = data => this.props.contactUs(data).then(this.handleClose());

  //making syntax validation onSubmit();
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
    console.log("contact form props", this.props);
    return (
      <div>
        <div variant="primary" onClick={this.handleShow}>
          Contact
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <div>
              <h1>Contact</h1>
            </div>
          </Modal.Header>
          <Modal.Body>
            <h5>
              Let’s connect! Our admissions team will call you soon to chat
              about our courses and your goals.
            </h5>

            <Form onSubmit={this.handleSubmit} loading={loading.toString()}>
              <div className="ContactFormPersonalInfo">
                <Form.Group controlId="formBasicName">
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
                <Form.Group controlId="formBasicEmail">
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
                <Form.Group controlId="formBasicNumber">
                  <Form.Label>Your Phone Number</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    min="0"
                    type="number"
                    value={data.phoneNumber}
                    name="phoneNumber"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCity">
                  <Form.Label>Your City</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="text"
                    value={data.location}
                    name="location"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Who Are you</Form.Label>
                  <select
                    className="selectContactForm"
                    name="inContact"
                    onChange={this.onChange}
                    required
                  >
                    <option value="">Select your option...</option>
                    {inContact.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </Form.Group>
              </div>
              <Form.Group>
                <Form.Label>Your Question</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  as="textarea"
                  rows="3"
                  value={data.question}
                  name="question"
                  required
                />
                <br />
                {errors.question && <InlineError text={errors.question} />}
              </Form.Group>
              <Form.Group>
                <div className="checkboxContainerItems">
                  <div className="checkboxContainerItem">
                    <FormCheck
                      name="legalPrivacy"
                      required
                      onChange={this.onChange}
                      value={true}
                    />
                    <div className="legalLink">
                      I have read and agree to the
                      <a>
                        <LegalPrivacy />
                      </a>
                    </div>
                  </div>
                </div>
              </Form.Group>
              <Button type="submit">Contact our Team</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { contactUs }
)(ContactForm);
