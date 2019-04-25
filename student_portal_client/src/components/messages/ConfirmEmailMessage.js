import React, { Component } from "react";
import TopNavigation from "../navigation/TopNavigation";

class ConfirmEmailMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ConfirmEmailMessageCont">
        <TopNavigation />
        <div className="ConfirmEmailMessage">
          <h1>
            Hi {this.props.user.firstName}.<p>Your profile is still locked.</p>
            <p>Please check your email to verify your email address</p>
          </h1>
        </div>
      </div>
    );
  }
}

export default ConfirmEmailMessage;
