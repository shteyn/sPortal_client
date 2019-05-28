import React, { Component } from "react";
import { Modal } from "reactstrap";
import { Form } from "react-bootstrap";
import moment from "moment";
import ContactStudentForm from "./ContactStudentForm";

class UserCardModalForm extends Component {
  toggle = () => {
    this.props.hide();
  };

  render() {
    let placeholderUrl = require("../../img/placeholderUser.jpeg");
    let { user } = this.props;

    let currentDate = new Date();
    let date = new Date(user.availability);
    const newDate = moment(date).format("MMMM D, YYYY");
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
                    <img
                      alt="placeholder"
                      id="profileImgModal"
                      src={placeholderUrl}
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
                    />
                  </div>
                )}
              </div>

              <div className="contentDiv">
                <div>
                  <div className="header">
                    {/*<div className="headerTitle">
                      <span>{user.firstName}</span> &nbsp;
                      <span>{user.lastName}</span>
                    </div>
                    <div>
                      <button onClick={this.toggle} className="fa fa-times" />
                    </div>*/}
                    <Form.Row>
                      <Form.Group>
                        <p className="headerTitle">
                          {user.firstName} {user.lastName}
                        </p>
                      </Form.Group>
                    </Form.Row>
                    <button onClick={this.toggle} className="fa fa-times" />
                  </div>
                  <Form.Row>
                    <Form.Group>
                      <p className="smallTitles">Availability:&nbsp;&nbsp;</p>
                    </Form.Group>
                    <Form.Group>
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
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <p className="smallTitles">Location: &nbsp;&nbsp;</p>
                    </Form.Group>
                    <Form.Group>
                      <p>{user.location}</p>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <p className="smallTitles">Course: &nbsp;&nbsp;</p>
                    </Form.Group>
                    <Form.Group>
                      <p>{user.studentCourse}</p>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <p className="smallTitles">Main Focus: &nbsp;&nbsp;</p>
                    </Form.Group>
                    <Form.Group>
                      {user.mainFocus ? (
                        <p>{user.mainFocus}</p>
                      ) : (
                        <p>No information yet</p>
                      )}
                    </Form.Group>
                  </Form.Row>
                  <Form.Row style={{ marginTop: "15px" }}>
                    <Form.Group>
                      <p className="smallTitleAboutMe">About Me:&nbsp;&nbsp;</p>
                    </Form.Group>
                    <Form.Group>
                      {user.aboutMeSection ? (
                        <p>{user.aboutMeSection}</p>
                      ) : (
                        <p>No information about the student yet</p>
                      )}
                    </Form.Group>
                  </Form.Row>
                </div>
                <div>
                  <div className="CardLinks">
                    <button className="buttonContactUsFromUserCardModalForm">
                      <ContactStudentForm user={user} />
                    </button>
                    <div>
                      <Form.Group>
                        {user.linkedInLink !== "" ? (
                          <div>
                            <a
                              title="Linked In"
                              rel="noopener noreferrer"
                              target="_blank"
                              href={`${user.linkedInLink}`}
                            >
                              <i className="fab fa-linkedin" />
                            </a>
                          </div>
                        ) : null}
                      </Form.Group>
                      <Form.Group>
                        {user.githubLink !== "" ? (
                          <div>
                            <a
                              title="GitHub"
                              rel="noopener noreferrer"
                              target="_blank"
                              href={`${user.githubLink}`}
                            >
                              <i class="fab fa-github-square" />
                            </a>
                          </div>
                        ) : null}
                      </Form.Group>
                      <Form.Group>
                        {user.xingLink !== "" ? (
                          <div>
                            <a
                              title="Xing"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`${user.xingLink}`}
                            >
                              <i class="fab fa-xing-square" />
                            </a>
                          </div>
                        ) : null}
                      </Form.Group>
                      <Form.Group>
                        {user.portfolioLink !== "" ? (
                          <div>
                            <a
                              title="Portfolio"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`${user.portfolioLink}`}
                            >
                              <i class="fas fa-suitcase" />
                            </a>
                          </div>
                        ) : null}
                      </Form.Group>
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
