import React, {Component} from 'react';
import {Button, Modal, Form} from "react-bootstrap";

class AboutUsPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleShow =() => {
    this.setState({
      show: true
    });
  };


  render() {
    return (
        <div className="AboutUsPage">
          <div
              variant="primary"
              onClick={this.handleShow}>
            <p>About us</p>
          </div>
          <Modal
              className="ContextContainerAboutPage"
              show={this.state.show}
              onHide={this.handleClose}>
            <header>
              <h1>About Us</h1>
            </header>
            <Modal.Body>
              <p>Being able to program software offers job opportunities
                for people who are looking for employment and their own
                home in our or other countries, Software makes life easier
                for anyone who uses it and the demand for software developers
                is high with our project we want to connect both needs
                and make life easier for people.
              </p>
              <blockquote>
                <h3>
                  The Digital Career Institute was born as an initiative to
                  integrate refugees into digital jobs. Today it is committed
                  to train anyone who wants to pursue a tech career.
                </h3>
              </blockquote>
              <p>pWe are convinced that Devugees will help integrate refugees more
                effective into Germany and the German society. In our opinion education
                is the most important key for a successful life and work start.
                We don’t only say “Refugees welcome!” – we want to implement and
                live it. <b>Refugees welcome!</b>
              </p>

              <p>
                Our team consists of entrepreneurs, employees and freelancers of the
                Berlin Start-up scene. What we all have in common is our willingness to help,
                our professional networks and the opportunity to connect the tech scene with
                people who had to flee their homeland.
              </p>
            </Modal.Body>
          </Modal>
        </div>
    );
  }
}

export default AboutUsPage;