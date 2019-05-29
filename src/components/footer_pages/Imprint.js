import React, { Component } from "react";
import TopNavigation from "../navigation/TopNavigation";

class Imprint extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <div className="FaqPageContainer">
          <div>
            <h1>Imprint</h1>

            <div className="textContFaqPage">
              <p>DCI Digital Career Institute gGmbH</p>
              <p>
                <span id="inlineSpan">Adresse:</span>
                Grünberger Str. 54, 10245 Berlin
              </p>
              <p>
                <span id="inlineSpan">E-Mail-Kontakt:</span>
                <span style={{ color: "#ec7f37" }}>info@devugees.org</span>
              </p>
              <p>
                <span id="inlineSpan">Internet:</span>
                <a href="https://www.devugees.org">https://www.devugees.org</a>
              </p>
              <p>
                <span id="inlineSpan">Internet: </span>
                <a href=" https://www.digitalcareerinstitute.org">
                  https://www.digitalcareerinstitute.org
                </a>
              </p>
              <p>
                <span id="inlineSpan">Telefon: </span>0049 30 – 36 42 86 19 0
              </p>
              <p>
                <span id="inlineSpan">Geschäftsführer:</span> Steffen Zoller
              </p>
              <p>
                <span id="inlineSpan"> Eingetragen: </span>Amtsgericht Berlin
                Charlottenburg, HRB 177854 B
              </p>
              <p>
                <span id="inlineSpan">Inhaltlich verantwortlich: </span>Steffen
                Zoller
              </p>
              <p>(V.i.S.d. § 55 RStV)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Imprint;
