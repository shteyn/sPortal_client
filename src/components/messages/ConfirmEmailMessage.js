import React, { Component } from "react";

class ConfirmEmailMessage extends Component {
  render() {
    return (
      <div className="ConfirmEmailMessageCont">
        <div className="ConfirmEmailMessage">
          <div>
            <h1 style={{ color: "#1d3b8b", marginBottom: "50px" }}>
              Dear {this.props.user.firstName}
            </h1>
            <p>Thank you for taking time to register with DCI Students Book.</p>
            <p>
              Please confirm your email, so the administration team can receive
              and review your request.
            </p>
            <p style={{ marginTop: "50px" }}>Best regards,</p>
            <p style={{ color: "#1d3b8b" }}>DCI-Team</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmEmailMessage;
