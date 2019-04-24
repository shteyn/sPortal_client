import React, { Component } from "react";
import { connect } from "react-redux";

class UserCards extends Component {
  render() {
    const { allUsers } = this.props.allUsers;
    const filteredLocations = allUsers.filter(user => {
      if (this.props.query === "") {
        return true;
      }
      return user.location.indexOf(this.props.query) !== -1;
    });

    let placeholderUrl = require("../../img/placeholderUser.png");

    return (
      <div className="UserCardsItems">
        {filteredLocations.map(oneUser => {
          let currentDate = new Date().toLocaleString();
          let date = new Date(oneUser.availability);
          let newUserDate = date.toLocaleString();
          const availability = date.toDateString();
          console.log("oneUser.availability", oneUser.availability);

          if (oneUser.confirmed) {
            return (
              <div className="CardItem" key={oneUser._id}>
                {oneUser.userImage.length === 0 ? (
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
                </div>
                <div className="locationAndAvailability">
                  <div className="location">{oneUser.location}</div>
                  <div className="Availability">
                    <p>Availability</p>
                    {oneUser.availability === null ? (
                      <p key="0" style={{ color: "grey" }}>
                        No info yeat
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
                      <img src={require("../../img/github-icon.png")} alt="" />
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
    );
  }
}

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers
  };
}

export default connect(mapStateToProps)(UserCards);
