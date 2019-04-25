import React, { Component } from "react";
import { connect } from "react-redux";

class UserCards extends Component {
  constructor(props, context) {
    super(props, context);
    this.locationsRef = React.createRef();
    this.availabilityRef = React.createRef();
    this.mainFocusRef = React.createRef();
    this.state = {
      location: "",
      availability: "",
      mainFocus: ""
    };
  }

  updateSearch = selectedOption => {
    this.setState({
      location: this.locationsRef.current.value,
      availability: this.availabilityRef.current.value
    });
    //this.props.searchChanged(selectedOption.target.value);
    //console.log("availabilityRef current value", this.availabilityRef.current.value);
    //console.log("locations current value", this.locationsRef.current.value);
  };
  render() {
    const { allUsers } = this.props.allUsers;
    console.log("mainFocus", allUsers);
    const locations = [];
    const mainFocus = [];

    const filteredLocations = allUsers.filter(user => {
      //console.log("availabilityRef current value", this.state.availability);
      console.log(
        "user.location.indexOf(this.state.location)",
        user.location.indexOf(this.state.location)
      );
      if (this.state.availability !== "" && this.state.location !== "") {
        if (user.location.indexOf(this.state.location) !== -1) {
          return true;
        }
      } else if (this.state.availability !== "") {
        return true;
      } else if (this.state.location !== "") {
        return user.location.indexOf(this.state.location) !== -1;
      } else {
        return true;
      }
      //user.location.indexOf(this.props.query) !== -1;
    });

    allUsers.map(user => {
      if (locations.indexOf(user.location) < 0) {
        locations.push(user.location);
      }
      return null;
    });

    allUsers.map(user => {
      if (mainFocus.indexOf(user.mainFocus) < 0 && user.mainFocus !== "") {
        console.log("main focus", mainFocus.indexOf(user.mainFocus));
        mainFocus.push(user.mainFocus);
      }
      return null;
    });
    let placeholderUrl = require("../../img/placeholderUser.png");

    return (
      <div>
        <div>
          <select
            className="DropDownSelect"
            name="location"
            onChange={this.updateSearch}
            ref={this.locationsRef}
          >
            <option value="">All Locations</option>
            {locations.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            className="DropDownSelect"
            name="mainFocus"
            onChange={this.updateSearch}
            ref={this.mainFocusRef}
          >
            <option value="">All Focus</option>
            {mainFocus.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            className="DropDownSelect"
            name="availability"
            onChange={this.updateSearch}
            ref={this.availabilityRef}
          >
            <option value="">All Availabilities</option>
            <option value="current">Currently Available</option>
            <option value="future">Future Available</option>
          </select>
        </div>
        <div className="UserCardsItems">
          {filteredLocations.map(oneUser => {
            let currentDate = new Date().toLocaleString();
            let date = new Date(oneUser.availability);
            let newUserDate = date.toLocaleString();
            const availability = date.toDateString();

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
                          `http://localhost:8080/uploads/${oneUser.userImage}` +
                          ")"
                      }}
                    />
                  )}

                  <div className="userName">
                    <p>{oneUser.firstName}</p>
                    <p> {oneUser.lastName}</p>
                    <div className="mainFocusCont">
                      {<p className="mainFocusItem">{oneUser.mainFocus}</p>}
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
                          newUserDate > currentDate ? (
                            <p key="1" style={{ color: "white" }}>
                              {availability}
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
                      <a
                        title="Linked In"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`${oneUser.linkedInLink}`}
                      >
                        <img
                          src={require("../../img/linkedin-icon.png")}
                          alt=""
                        />
                      </a>
                    ) : null}
                    {oneUser.githubLink !== "" ? (
                      <a
                        title="GitHub"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`${oneUser.githubLink}`}
                      >
                        <img
                          src={require("../../img/github-icon.png")}
                          alt=""
                        />
                      </a>
                    ) : null}
                    {oneUser.xingLink !== "" ? (
                      <a
                        title="Xing"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`${oneUser.xingLink}`}
                      >
                        <img src={require("../../img/xing-icon.png")} alt="" />
                      </a>
                    ) : null}
                    {oneUser.portfolioLink !== "" ? (
                      <a
                        title="Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`${oneUser.portfolioLink}`}
                      >
                        <img
                          src={require("../../img/briefcase-icon.png")}
                          alt=""
                        />
                      </a>
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
