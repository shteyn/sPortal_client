import React, { Component } from "react";
import { Modal, FormGroup } from "reactstrap";

import moment from "moment";
import ContactForm from "../forms/ContactForm";

class UserCardModalForm extends Component {
  toggle = () => {
    this.props.hide();
  };

  render() {
    let placeholderUrl = require("../../img/placeholderUser.jpeg");
    let trans = require("../../img/transparent.png");
    let { user } = this.props;

    let currentDate = new Date();
    let date = new Date(user.availability);
    const newDate = moment(date).format("MMMM D, YYYY");

    console.log("user modal", user.userImage);

    return (
      <div className="UserCardsModalFormCont">
        <Modal
          isOpen={this.props.show}
          toggle={this.toggle}
          id="ModalUserCardForm"
        >
          <div className="parentContentContainer">
            <div className="secondDivModal">
              <div className="imgDiv">
                {user.userImage === "" ? (

                    <div>
                      <div
                        className="profileImgModal"
                        style={{
                          backgroundImage: "url(" + placeholderUrl + ")"
                        }}
                        />
                    </div>

                ) : (
                 <div>
                   <img
                     id="profileImgModal"
                     alt="example"
                     src={`${process.env.REACT_APP_API_HOST}/uploads/${
                       user.userImage
                       }`}
                     onError={e => {
                       e.target.onerror = null;
                       e.target.src = `${placeholderUrl}`;
                     }}
                     // style={{maxWidth: "400px"}}
                   />
                 </div>
                )}
              </div>

              <div className="contentDiv">
                <div>
                  <div className="header">
                    <div className="headerTitle">
                      <span>{user.firstName}</span> &nbsp;{" "}
                      <span>{user.lastName}</span>
                    </div>
                    <div>
                      <button onClick={this.toggle} className="fa fa-times" />
                    </div>
                  </div>

                  <FormGroup>
                    {user.availability === null ? (
                      <p key="0" style={{ color: "grey" }}>
                        No info yet
                      </p>
                    ) : (
                      [
                        date > currentDate ? (
                          <p key="1" style={{ color: "#5c5c5c" }}>
                            {newDate}
                          </p>
                        ) : (
                          <p key="2" style={{ color: "green" }}>
                            Available for offers
                          </p>
                        )
                      ]
                    )}
                  </FormGroup>
                  <FormGroup>
                    <p>{user.location}</p>
                  </FormGroup>
                  <FormGroup>
                    <p>{user.studentClass}</p>
                  </FormGroup>
                  <div className="classEndMainFocusContainer">
                    <span>{user.studentCourse}:</span>
                    <p>{user.mainFocus}</p>
                  </div>
                  <div>
                    <h3 id="aboutMe">About Me:</h3>
                    <p>{user.aboutMeSection}</p>
                  </div>
                </div>
                <div>
                  <div className="CardLinks">
                    <button className="buttonContactUsFromUserCardModalForm">
                      <ContactForm user={user} />
                    </button>
                    <div>
                      <FormGroup>
                        {user.linkedInLink !== "" ? (
                          <div>
                            <a
                              title="Linked In"
                              rel="noopener noreferrer"
                              target="_blank"
                              href={`${user.linkedInLink}`}
                            >
                              <img
                                src={require("../../img/linkedin.png")}
                                alt=""
                              />
                            </a>
                          </div>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        {user.githubLink !== "" ? (
                          <div>
                            <a
                              title="GitHub"
                              rel="noopener noreferrer"
                              target="_blank"
                              href={`${user.githubLink}`}
                            >
                              <img
                                src={require("../../img/github.png")}
                                alt=""
                              />
                            </a>
                          </div>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        {user.xingLink !== "" ? (
                          <div>
                            <a
                              title="Xing"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`${user.xingLink}`}
                            >
                              <img src={require("../../img/xing.png")} alt="" />
                            </a>
                          </div>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        {user.portfolioLink !== "" ? (
                          <div>
                            <a
                              title="Portfolio"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`${user.portfolioLink}`}
                            >
                              <img
                                src={require("../../img/briefcase.png")}
                                alt=""
                              />
                            </a>
                          </div>
                        ) : null}
                      </FormGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default UserCardModalForm;
