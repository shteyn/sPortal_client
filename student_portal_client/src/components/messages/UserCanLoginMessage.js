import React, { Component } from "react";

class UserCanLoginMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ConfirmEmailMessageCont">
        <div className="ConfirmEmailMessage">
          <div>
            <h1 style={{ color: "#da9446", marginBottom: "50px" }}>
              Dear {this.props.oneUser.firstName},
            </h1>

            <p>Your profile is still not verified. </p>
            <p>
              You will get a notification via email as soon as your profile will
              be verified.
            </p>
            <p style={{ marginTop: "50px" }}>Best regards,</p>
            <p style={{ color: "#da9446" }}>DCI-Team</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCanLoginMessage;
