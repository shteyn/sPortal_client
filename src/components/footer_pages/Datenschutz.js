import React, { Component } from "react";
import TopNavigation from "../navigation/TopNavigation";

class Datenschutz extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <div className="FaqPageContainer">
          <div>
            <h1>Datenschutz</h1>

            <div className="textContFaqPage">
              <h4>
                <b>Erweiterte Informationen zum Datenschutz</b>
              </h4>
              <p>
                <span id="inlineSpan">Verantwortlicher:</span>
                DCI Digital Career Institute gGmbH
              </p>
              <p>
                <span id="inlineSpan">Kontaktdaten Datenschutz:</span>
                <span style={{ color: "#ec7f37" }}>
                  datenschutzauskunft@digitalcareerinstitute.org
                </span>
              </p>
              <p>
                <span id="inlineSpan">Zweck der Verarbeitung:</span>
                Abwicklung unserer Dienstleistung für die möglicherweise
                personenbezogene Daten erforderlich sind.
              </p>
              <p>
                <span id="inlineSpan">Rechtsgrundlage der Verarbeitung:</span>
                Art. 6 Abs. 1 lit. b DS-GVO, wenn für die Erfüllung eines
                Vertrags erforderlich / Art. 6 Abs. 1 lit. A DS-GVO, wenn auf
                Grundlage einer Einwilligung, inkl. Berechtigte Interessen,
                sofern darauf gestützt.
              </p>
              <p>
                <span id="inlineSpan">Datenempfänger:</span>
                DCI Digital Career Institute gGmbH
              </p>
              <p>
                <span id="inlineSpan">Speicherdauer:</span>
                Bei Widerruf der Einwilligung, spätestens zwölf Monate nach der
                letzten auf die Einwilligung gestützten Datenverwendung.
              </p>
              <p>
                <span id="inlineSpan">Betroffenenrechte:</span>
                Es besteht ein Recht beim Verantwortlichen auf Auskunft (Art. 15
                DS-GVO), Berichtigung (Art. 16 DS-GVO) oder Löschung (Art. 17
                Abs.1 DS-GVO) oder auf Einschränkung der Verarbeitung (Art. 18
                DS-GVO), Widerspruch (Art. 21 DS-GVO) und Datenübertragbarkeit
                (Art. 20 DS-GVO). Weiterhin besteht ein Beschwerderecht bei der
                zuständigen Datenschutzaufsichtsbehörde (z.B. dem
                Landesbeauftragten für den Datenschutz und die
                Informationsfreiheit Berlin).
              </p>
              <p>
                Falls die Erhebung, Verarbeitung oder Nutzung aufgrund einer
                Einwilligung erfolgt, besteht das Recht die Einwilligung beim
                Verantwortlichen jederzeit mit Wirkung für die Zukunft zu
                widerrufen.
              </p>
              <p>
                <span id="inlineSpan">Sonstiges:</span>
                Die Bereitstellung personenbezogener Daten ist zum Teil durch
                Steuervorschriften gesetzlich vorgeschrieben oder kann sich auch
                aus vertraglichen Regelungen ergeben. Auch könnte es bei einem
                Vertragsschluss erforderlich sein, dass durch uns
                personenbezogene Daten verarbeitet werden müssen. Die
                Nichtbereitstellung der personenbezogenen Daten hätte zur Folge,
                dass der Vertrag nicht geschlossen werden kann.
              </p>
              <p>
                <span id="inlineSpan">
                  Falls Sie dazu Fragen haben, wenden Sie sich bitte an:
                </span>
                <span style={{ color: "#ec7f37" }}>
                  datenschutzauskunft@digitalcareerinstitute.org
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Datenschutz;
