import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  courseTypesArray,
  devFocusArray,
  marketingFocusArray
} from "../../helpers";

class UserCards extends Component {
  constructor(props, context) {
    super(props, context);
    this.locationsRef = React.createRef();
    this.availabilityRef = React.createRef();
    this.mainFocusRef = React.createRef();
    this.studentCourseRef = React.createRef();

    this.state = {
      location: "",
      availability: "",
      mainFocus: "",
      studentCourse: ""
    };
  }

  updateSearch = () => {
    this.setState({
      location: this.locationsRef.current.value,
      availability: this.availabilityRef.current.value,
      mainFocus: this.mainFocusRef.current.value,
      studentCourse: this.studentCourseRef.current.value
    });
  };

  clearAllFilters = () => {
    this.setState({
      location: "",
      availability: "",
      mainFocus: "",
      studentCourse: ""
    });
  };
  render() {
    const { allUsers } = this.props.allUsers;
    const locations = [];
    const mainFocus = [];

    const studentCourse = courseTypesArray;

    allUsers.map(user => {
      if (locations.indexOf(user.location) < 0) {
        locations.push(user.location);
      }
      return null;
    });

    allUsers.map(user => {
      if (mainFocus.indexOf(user.mainFocus) < 0 && user.mainFocus !== "") {
        mainFocus.push(user.mainFocus);
      } else if (this.state.studentCourse === "Web Development") {
        let compareArray = mainFocus.filter(
          i => devFocusArray.indexOf(i) !== -1
        );
        mainFocus.length = 0;
        compareArray.map(devFocus => {
          mainFocus.push(devFocus);
        });
      } else if (
        this.state.studentCourse === "Digital Marketing / E-Commerce"
      ) {
        let compareArray = mainFocus.filter(
          i => marketingFocusArray.indexOf(i) !== -1
        );
        mainFocus.length = 0;
        compareArray.map(marketingFocus => {
          mainFocus.push(marketingFocus);
        });
      }
      return null;
    });

    const filteredLocations = allUsers.filter(user => {
      let validLocation = true;
      let validAvailability = true;
      let validMainFocus = true;
      let validStudentCourse = true;

      if (this.state.location !== "") {
        validLocation = user.location.indexOf(this.state.location) !== -1;
      }

      if (this.state.studentCourse !== "") {
        validStudentCourse =
          user.studentCourse.indexOf(this.state.studentCourse) !== -1;
      }

      if (this.state.mainFocus !== "") {
        validMainFocus = user.mainFocus.indexOf(this.state.mainFocus) !== -1;
      }

      if (this.state.availability !== "") {
        if (typeof user.availability == "string") {
          let currentDate = new Date();
          let userDate = new Date(user.availability);
          if (this.state.availability === "current") {
            validAvailability = currentDate >= userDate;
          } else {
            validAvailability = userDate > currentDate;
          }
        } else {
          validAvailability = false;
        }
      }
      return (
        validLocation &&
        validAvailability &&
        validMainFocus &&
        validStudentCourse
      );
    });

    let placeholderUrl = require("../../img/placeholderUser.png");

    return (
      <div>
        <div className="SelectCont">
          <select
            className="DropDownSelect"
            name="location"
            onChange={this.updateSearch}
            ref={this.locationsRef}
          >
            <option value="">Location</option>
            {locations.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            className="DropDownSelect"
            name="studentCourse"
            onChange={this.updateSearch}
            ref={this.studentCourseRef}
          >
            <option value="">Course</option>
            {studentCourse.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select
            className="DropDownSelect"
            name="mainFocus"
            onChange={this.updateSearch}
            ref={this.mainFocusRef}
          >
            <option value="">Main Focus</option>
            {mainFocus.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            className="DropDownSelect"
            name="availability"
            onChange={this.updateSearch}
            ref={this.availabilityRef}
          >
            <option value="">Availability</option>
            <option value="current">Currently Available</option>
            <option value="future">Future Available</option>
          </select>
        </div>

        <button className="ResetBnt" onClick={this.clearAllFilters}>
          Clear Filters
        </button>
        <div className="UserCardsItems">
          {filteredLocations.map(oneUser => {
            let currentDate = new Date();
            let date = new Date(oneUser.availability);
            const newDate = moment(date).format("MMMM D, YYYY");

            if (oneUser.confirmed) {
              return (
                <div className="CardItem" key={oneUser._id}>
                  {oneUser.userImage === "" ? (
                    <div
                      className="profileImg"
                      style={{
                        backgroundImage: "url(" + placeholderUrl + ")"
                      }}
                    />
                  ) : (
                    <div
                      className="profileImg"
                      style={{
                        backgroundImage:
                          "url(" +
                          `${process.env.REACT_APP_API_HOST}/uploads/${
                            oneUser.userImage
                          }` +
                          ")"
                      }}
                    />
                  )}

                  <div className="userInfoCards">
                    <div className="userName">
                      <p>
                        {oneUser.firstName} {oneUser.lastName}
                      </p>
                    </div>
                    <div className="mainFocusCont">
                      <div className="courseItem">{oneUser.studentCourse}</div>
                      <div className="mainFocusItem">{oneUser.mainFocus}</div>
                    </div>
                  </div>
                  <div className="locationAndAvailability">
                    <div className="location">{oneUser.location}</div>
                    <div className="Availability">
                      <p>Availability</p>
                      {oneUser.availability === null ? (
                        <p key="0" style={{ color: "grey" }}>
                          No info yet
                        </p>
                      ) : (
                        [
                          date > currentDate ? (
                            <p key="1" style={{ color: "white" }}>
                              {newDate}
                            </p>
                          ) : (
                            <p key="2" style={{ color: "green" }}>
                              Available for offers
                            </p>
                          )
                        ]
                      )}
                    </div>
                  </div>
                  <div className="CardLinks">
                    {oneUser.linkedInLink !== "" ? (
                      <div>
                        <a
                          title="Linked In"
                          rel="noopener noreferrer"
                          target="_blank"
                          href={`${oneUser.linkedInLink}`}
                        >
                          <img src={require("../../img/linkedin.png")} alt="" />
                        </a>
                      </div>
                    ) : null}
                    {oneUser.githubLink !== "" ? (
                      <div>
                        <a
                          title="GitHub"
                          rel="noopener noreferrer"
                          target="_blank"
                          href={`${oneUser.githubLink}`}
                        >
                          <img src={require("../../img/github.png")} alt="" />
                        </a>
                      </div>
                    ) : null}
                    {oneUser.xingLink !== "" ? (
                      <div>
                        <a
                          title="Xing"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`${oneUser.xingLink}`}
                        >
                          <img src={require("../../img/xing.png")} alt="" />
                        </a>
                      </div>
                    ) : null}
                    {oneUser.portfolioLink !== "" ? (
                      <div>
                        <a
                          title="Portfolio"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`${oneUser.portfolioLink}`}
                        >
                          <img
                            src={require("../../img/briefcase.png")}
                            alt=""
                          />
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers
  };
}

export default connect(mapStateToProps)(UserCards);
