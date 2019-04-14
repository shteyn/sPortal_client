import React from "react";
import TopNavigation from '../navigation/TopNavigation'

const ConfirmEmailMessage = () => {
  return (
    <div className="ConfirmEmailMessageCont">
      <div className="ConfirmationNavigationBar">
        <TopNavigation/>
      </div>
        <div className="ConfirmEmailMessage">
            <h1>
                Your profile is still locked. Please check your email to verify your
                email address
            </h1>
        </div>
    </div>
  )
};

export default ConfirmEmailMessage;
