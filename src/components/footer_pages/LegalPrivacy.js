import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class LegalPrivacy extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div>
        <div variant="primary" onClick={this.handleShow}>
          Contact
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Data Privacy</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Responsible Entity: DCI Digital Career Institute gGmbH</p>
            <p>
              Contact for data privacy:
              datenschutzauskunft@digitalcareerinstitute.org
            </p>
            <p>
              Purpose of Collection of data: Execution of our service which
              might require the collection of personal data
            </p>
            <p>Legal basis: Art. 6 Abs. 1 lit. b DS-GVO</p>
            <p>Recipient of data: DCI Digital Career Institute gGmbH</p>
            <p>
              Duration of storage of data: At revocation of consent, latest
              twelve months after collecting consent.
            </p>
            <p>Rights of affected persons:</p>
            <p>
              Right to request information (Art. 15 DS-GVO) Right to have one’s
              stored information corrected (Art. 16 DS-GVO) Right to have
              information deleted (Art. 17 par. 1 DS-GVO) Right to restrict the
              processing of data (Art. 18 DS-GVO) Right to object (Art. 21
              DS-GVO) Transfer of data (Art. 20 DS-GVO)
            </p>
            <p>
              Furthermore affected persons have the right to appeal to the
              responsible data protection agency (e.g. Landesbeauftragten für
              den Datenschutz und die Informationsfreiheit Berlin) Affected
              persons have the right to withdraw the consent at any time. If you
              have questions pertaining to one of these points please refer to:
              datenschutzauskunft@digitalcareerinstitute.org
            </p>
          </Modal.Body>

          <Modal.Footer />
        </Modal>
      </div>
    );
  }
}

export default LegalPrivacy;
