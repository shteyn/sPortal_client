import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../forms/ContactForm";

class Footer extends Component {
  render() {
    return (
      <div className="FooterCont">
        <div className="FooterContentBox">
          <div className="FooterContentItemTwo">
            <h5>
              <b>DCI Digital Career Institute</b>
            </h5>
            <p>
              The Digital Career Institute was born as an initiative to
              integrate refugees into digital jobs. Today it is committed to
              train anyone who wants to pursue a tech career.
            </p>
            <ul>
              <li>
                <a href="https://www.facebook.com/devugees">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/DevugeesOrg">
                  <i className="fab fa-twitter-square" />
                </a>
              </li>
              <li>
                <a href="https://medium.com/devugees">
                  <i className="fab fa-medium" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCSM_3ldxjcclGTcXaJRBYTw">
                  <i className="fab fa-youtube-square" />
                </a>
              </li>
            </ul>
          </div>
          <div className="FooterContentItemOne">
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li id="contactFormLink">
                <ContactForm />
              </li>
              <li>
                <a
                  href="https://digitalcareerinstitute.org/en/stories/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stories
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mainLegalContainerFooter">
          <div className="legalContainerFooter">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://digitalcareerinstitute.org"
            >
              DCI Digital Career Institute
            </a>
            <div>
              <Link to="/disclaimer">Disclaimer</Link>
              <Link to="/imprint">Imprint</Link>
              <Link to="/datenschutz">Datenschutz</Link>
              <Link to="/dataprivacy">Data Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
