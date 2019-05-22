import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ContactForm from '../footer_pages/ContactForm'

class Footer extends Component {
  render() {
    return (
      <div className="FooterCont">
        <div className="FooterContentBox">
          <div className="FooterContentItemTwo">
            <h5><b>DCI Digitale Career Institute</b></h5>
            <p>The Digital Career Institute was born as an initiative to integrate refugees into digital jobs.
              Today it is committed to train anyone who wants to pursue a tech career.</p>
            <ul>
              <li><a href="https://www.facebook.com/devugees">
                <i className="fab fa-facebook-square"
                   style={{fontSize:"28px", color:"#ec7f37"}}/>
              </a></li>
              <li><a href="https://twitter.com/DevugeesOrg">
                <i className="fab fa-twitter-square"
                   style={{fontSize:"28px", color:"#ec7f37"}}/>
              </a></li>
              <li><a href="https://medium.com/devugees">
                <i className="fab fa-medium"
                   style={{fontSize:"28px", color:"#ec7f37"}}/>
              </a></li>
              <li><a href="https://www.youtube.com/channel/UCSM_3ldxjcclGTcXaJRBYTw">
                <i className="fab fa-youtube-square"
                   style={{fontSize:"28px", color:"#ec7f37"}}/>
              </a></li>
            </ul>
          </div>
          <div className="FooterContentItemOne">
            <ul>
              <li><Link to="/about-us" >About Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><a><ContactForm/></a></li>
              <li><Link to="/stories" target="_blank">Stories</Link></li>
            </ul>
          </div>

        </div>
        <div className="mainLegalContainerFooter">
          <div className="legalContainerFooter">
            <h5>DCI Digitale Career Institute</h5>

            <div>
              <h5>Disclaimer</h5>
              <h5>Imprint</h5>
              <h5>Datenschutz</h5>
              <h5>Data Privacy</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;