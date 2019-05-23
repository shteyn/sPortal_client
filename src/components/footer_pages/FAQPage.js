import React, { Component } from "react";
import TopNavigation from "../navigation/TopNavigation";

class FAQPage extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <div className="FaqPageContainer">
          <div>
            <h1>FAQ</h1>

            <div className="textContFaqPage">
              <h4>
                <b>Q: Costs of the training – Am I eligible for funding?</b>
              </h4>
              <p>
                A: The course is divided into different modules which you can
                put together individually. According to the combination results
                the price. Important for you to know is that the training, also
                every module as such, will be eligible. This means that you can
                achieve an education voucher under certain circumstances which
                pays your training.
              </p>
              <h4>
                <b>Q: Do I get an employment for sure?</b>
              </h4>
              <p>
                A: We can guarantee you an employment as probation period after
                your Devugees-graduation which is conditional to a definite
                success rate in your exams. And of course we help you in terms
                of applications etcetera. We stand by your side on every step to
                your first job.
              </p>
              <p>Still have questions? write us here</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQPage;
