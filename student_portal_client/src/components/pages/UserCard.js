import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsers, filterLocation } from "../../actions/user";

import TopNavigation from "../navigation/TopNavigation";
class UserCard extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  filterLocation = e => {
    console.log("event", e.target.value);
    this.props.filterLocation(e.target.value);
  };
  render() {
    let { allUsers } = this.props.allUsers;
    let { isConfirmedUser } = this.props.isConfirmed;
    let placeholderUrl = require("../../img/placeholderUser.png");

    return (
      <div className="UserCardsCont">
        <div className="navigationBarUserCardPage">
          {!isConfirmedUser && <TopNavigation />}
          {isConfirmedUser && (
            <div className="navigationBar">
              <Link to="/" className="label">
                <span>DCI</span>
              </Link>
              <ul>
                <li>
                  <Link to="/login">
                    <span>Sign In</span> | <span>Sign Up</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="UserCardsListCont">
          <h1>OUR STUDENTS</h1>
          <h3>GRADUATED</h3>
          <h4>ALL LOCATIONS</h4>
          <button onClick={this.filterLocation} value="Berlin">
            Berlin
          </button>

          <div className="UserCardsItems">
            {allUsers.map(oneUser => {
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
                            `http://localhost:8080/uploads/${
                              oneUser.userImage
                            }` +
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
                        <p style={{ color: "white" }}>Available for offers</p>
                      </div>
                    </div>

                    <div className="CardLinks">
                      <NavLink title="Linked In" to="#">
                        <img src={require("../../img/linkedin.png")} alt="" />
                      </NavLink>
                      <NavLink title="GitHub" to="#">
                        <img src={require("../../img/github.png")} alt="" />
                      </NavLink>
                      <NavLink title="Xing" to="#">
                        <img src={require("../../img/xing.png")} alt="" />
                      </NavLink>
                      <NavLink title="Portfolio" to="#">
                        <img src={require("../../img/briefcase.png")} alt="" />
                      </NavLink>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  allUsers: PropTypes.object.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  filterLocation: PropTypes.func.isRequired,
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  //console.log("state", state.allUsers);

  return {
    allUsers: state.allUsers,
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(
  mapStateToProps,
  { getAllUsers, filterLocation }
)(UserCard);
