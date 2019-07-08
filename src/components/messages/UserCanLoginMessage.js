import React, { Component } from "react";

class UserCanLoginMessage extends Component {
  render() {
    return (
      <div className="ConfirmEmailMessageCont">
        <div className="ConfirmEmailMessage">
          <div>
            <h1 style={{ color: "#1d3b8b", marginBottom: "50px" }}>
              Dear {this.props.oneUser.firstName}
            </h1>

            <p>Your profile is still not verified. </p>
            <p>
              You will get a notification via email as soon as your profile will
              be verified.
            </p>
            <p style={{ marginTop: "50px" }}>Best regards,</p>
            <p style={{ color: "#1d3b8b" }}>DCI-Team</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCanLoginMessage;
