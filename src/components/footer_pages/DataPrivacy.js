import React, { Component } from "react";
import TopNavigation from "../navigation/TopNavigation";

class DataPrivacy extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <div className="FaqPageContainer">
          <div>
            <h1>Data Privacy</h1>

            <div className="textContFaqPage">
              <h4>
                <b>Additional information about Data Privacy</b>
              </h4>
              <p>
                <span id="inlineSpan">Responsible Entity:</span>
                DCI Digital Career Institute gGmbH
              </p>
              <p>
                <span id="inlineSpan">Contact for data privacy:</span>
                <span style={{ color: "#1d3b8b" }}>
                  datenschutzauskunft@digitalcareerinstitute.org
                </span>
              </p>
              <p>
                <span id="inlineSpan">Purpose of Collection of data:</span>
                Execution of our service which might require the collection of
                personal data
              </p>
              <p>
                <span id="inlineSpan">Legal basis:</span>
                Art. 6 Abs. 1 lit. b DS-GVO
              </p>
              <p>
                <span id="inlineSpan">Recipient of data:</span>
                DCI Digital Career Institute gGmbH
              </p>
              <p>
                <span id="inlineSpan">Duration of storage of data:</span>
                At revocation of consent, latest twelve months after collecting
                consent.
              </p>
              <div>
                <p id="inlineSpan">Rights of affected persons:</p>
                <p>
                  <span id="inlineSpan">1.</span>
                  Right to request information (Art. 15 DS-GVO)
                </p>
                <p>
                  <span id="inlineSpan">2.</span>
                  Right to have one’s stored information corrected (Art. 16
                  DS-GVO)
                </p>
                <p>
                  <span id="inlineSpan">3.</span>
                  Right to have information deleted (Art. 17 par. 1 DS-GVO)
                </p>
                <p>
                  <span id="inlineSpan">4.</span>
                  Right to restrict the processing of data (Art. 18 DS-GVO)
                </p>
                <p>
                  <span id="inlineSpan">5.</span>
                  Right to object (Art. 21 DS-GVO)
                </p>
                <p>
                  <span id="inlineSpan">6.</span>
                  Transfer of data (Art. 20 DS-GVO)
                </p>
                <p>
                  Furthermore affected persons have the right to appeal to the
                  responsible data protection agency (e.g. Landesbeauftragten
                  für den Datenschutz und die Informationsfreiheit Berlin)
                </p>
                <p>
                  Affected persons have the right to withdraw the consent at any
                  time.
                </p>
                <p>
                  <span id="inlineSpan">
                    If you have questions pertaining to one of these points
                    please refer to:
                  </span>
                  <span style={{ color: "#1d3b8b" }}>
                    datenschutzauskunft@digitalcareerinstitute.org
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataPrivacy;
