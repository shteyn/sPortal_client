import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
        <div className="FooterCont">
            <div className="FooterContentBox">
              <div>
                <ul>
                  <li><h3>COMPANY</h3></li>
                  <li><a href="">About Us</a></li>
                  <li><a href="">FAQ</a></li>
                  <li><a href="">Press</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Jobs at DCI</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><h3>COMMUNITY</h3></li>
                  <li><a href="">Scholarship</a></li>
                  <li><a href="">Hire your digital talents with DCI</a></li>
                  <li><a href="">Stories</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><h3>COURSES</h3></li>
                  <li><a href="">One to One Coaching</a></li>
                  <li><a href="">Orientation Course</a></li>
                  <li><a href="">Web Development Course</a></li>
                  <li><a href="">Digital Marketing / E-Commerce</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><h3>FOLLOW</h3></li>
                  <li><a href="">Facebook</a></li>
                  <li><a href="">Twitter</a></li>
                  <li><a href="">Medium</a></li>
                  <li><a href="">YouTube</a></li>
                </ul>
              </div>
            </div>
        </div>
    );
  }
}

export default Footer;