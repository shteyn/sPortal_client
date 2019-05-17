import React, {Component} from 'react';
import { FormCheck, Button, Modal, Form } from "react-bootstrap";

class ContactForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    console.log( "from contact", this.props.user);
    return (
        <div>
          <div variant="primary" onClick={this.handleShow}>
            {/*Contact {this.props.user.firstName}*/}
            contact
          </div>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <h1>Contact</h1>
            </Modal.Header>
            <Modal.Body>
              <h5>Let’s connect! Our admissions team will call you soon to chat about our courses and your goals.</h5>
              <Form>
                <div className="ContactFormPersonalInfo">
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="Email"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicNumber">
                    <Form.Label>Your Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="Number"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCity">
                    <Form.Label>Your City</Form.Label>
                    <Form.Control
                      type="text"
                      name="City"
                    />
                  </Form.Group>
                </div>
                <Form.Group>
                  <Form.Label>Your Question</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form>
              <Form.Group>
                <div className="checkboxContainerItems">
                  <div className="checkboxContainerItem">
                    <FormCheck/><p>I have read and agree to the <a href="">Data Privacy</a></p>
                  </div>
                  <div className="checkboxContainerItem">
                    <FormCheck/><p>I agree to my data being stored and used to receive the newsletter.</p>
                  </div>
                  <div className="checkboxContainerItem">
                    <FormCheck/><p>I agree to receive information and commercial offers.</p>
                  </div>
                </div>
              </Form.Group>
              <Button>Contact our Team</Button>
            </Modal.Body>
          </Modal>
        </div>
    );
  }
}

export default ContactForm;