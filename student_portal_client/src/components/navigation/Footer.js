import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ContactForm from '../footer_pages/ContactForm'

class Footer extends Component {
  render() {
    return (
        <div className="FooterCont">
            <div className="FooterContentBox">
              <div className="FooterContentItemOne">
                <ul>
                  <li><h3>COMPANY</h3></li>
                  <li><Link to="/about-us" >About Us</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><a><ContactForm/></a></li>
                </ul>
              </div>
              <div className="FooterContentItemTwo">
                <ul>
                  <li><h3>COMMUNITY</h3></li>
                  <li><Link to="/stories" target="_blank">Stories</Link></li>
                </ul>
              </div>
              <div className="FooterContentItemFour">
                <ul>
                  <li><h3>FOLLOW</h3></li>
                  <li><a href="https://www.facebook.com/devugees">Facebook</a></li>
                  <li><a href="https://twitter.com/DevugeesOrg">Twitter</a></li>
                  <li><a href="https://medium.com/devugees">Medium</a></li>
                  <li><a href="https://www.youtube.com/channel/UCSM_3ldxjcclGTcXaJRBYTw">YouTube</a></li>
                </ul>
              </div>
            </div>
        </div>
    );
  }
}

export default Footer;
