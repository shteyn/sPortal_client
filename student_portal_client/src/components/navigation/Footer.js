import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AboutUsPage from '../footer_pages/AboutUsPage'

class Footer extends Component {
  render() {
    return (
        <div className="FooterCont">
            <div className="FooterContentBox">
              <div className="FooterContentItemOne">
                <ul>
                  <li><h3>COMPANY</h3></li>
                  <li><a><AboutUsPage/></a></li>
                  <li><Link to="/faq" target="_blank">FAQ</Link></li>
                  <li><Link to="/press" target="_blank">Press</Link></li>
                  <li><Link to="/contact" target="_blank">Contact</Link></li>
                  <li><Link to="/jobs-dci" target="_blank">Jobs at DCI</Link></li>
                </ul>
              </div>
              <div className="FooterContentItemTwo">
                <ul>
                  <li><h3>COMMUNITY</h3></li>
                  <li><Link to="/scholarship" target="_blank">Scholarship</Link></li>
                  <li><Link to="/hire-digital-talents" target="_blank">Hire your digital talents with DCI</Link></li>
                  <li><Link to="/stories" target="_blank">Stories</Link></li>
                </ul>
              </div>
              <div className="FooterContentItemThree">
                <ul>
                  <li><h3>COURSES</h3></li>
                  <li><Link to="/coaching" target="_blank">One to One Coaching</Link></li>
                  <li><Link to="/orientation-course" target="_blank">Orientation Course</Link></li>
                  <li><Link to="/web-development-course" target="_blank">Web Development Course</Link></li>
                  <li><Link to="/digital-marketing" target="_blank">Digital Marketing / E-Commerce</Link></li>
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


{/*<Route location={location} path="/coaching" exact component={CoachingPage} />*/}
{/*<Route location={location} path="/digital-marketing" exact component={DigitalMarketingPage} />*/}
{/*<Route location={location} path="/hire-digital-talents" exact component={HireDigitalTalentsPage} />*/}
{/*<Route location={location} path="/orientation-course" exact component={OrientationCoursePage} />*/}
{/*<Route location={location} path="/scholarship" exact component={ScholarshipPage} />*/}
{/*<Route location={location} path="/stories" exact component={StoriesPage} />*/}
{/*<Route location={location} path="/web-development-course" exact component={WebDevelopmentCoursePage} />*/}