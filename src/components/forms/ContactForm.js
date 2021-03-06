import React, { Component } from "react";
import { FormCheck, Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import { contactUs } from "../../actions/user";
import { inContact } from "../../helpers";
import LegalPrivacy from "../footer_pages/LegalPrivacy";

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
        question: "",
        inContact: "",
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
      this.contactUs(this.state.data);
    }
  };

  contactUs = data => this.props.contactUs(data).then(this.handleClose());

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
    return (
      <div>
        <p variant="primary" onClick={this.handleShow}>
          Contact DCI Team
        </p>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          id="ContactFormModal"
        >
          <Modal.Header closeButton>
            <div>
              <h1 style={{ color: "#5c5c5c" }}>
                Contact <span style={{ color: "#1d3b8b" }}>DCI Team</span>
              </h1>
            </div>
          </Modal.Header>
          <Modal.Body>
            <h5
              style={{
                fontSize: "22px",
                color: "#1d3b8b",
                textAlign: "center",
                marginTop: "50px",
                marginBottom: "50px"
              }}
            >
              Let’s connect! Our admissions team will call you soon to chat
              about our courses and your goals.
            </h5>

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
                  <Form.Label>Your Phone Number</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    min="0"
                    type="number"
                    value={data.phoneNumber || ""}
                    name="phoneNumber"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Your City</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="text"
                    value={data.location || ""}
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
                <Form.Label style={{ color: "#495057" }}>
                  Your Question
                </Form.Label>
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
                <div
                  className="checkboxContainerItems"
                  id="checkboxContainerItems"
                >
                  <FormCheck
                    name="legalPrivacy"
                    required
                    onChange={this.onChange}
                    value={true}
                  />
                  <div className="legalLink" style={{ color: "#495057" }}>
                    I have read and agree to the
                    <button>
                      <LegalPrivacy />
                    </button>
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
