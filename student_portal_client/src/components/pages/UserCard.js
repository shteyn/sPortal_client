import React, { Component } from "react";
import {Link, NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAllUsers} from "../../actions/user";

class UserCard extends Component {
  componentDidMount() {
    this.props.getAllUsers();
    console.log("")
  }
  render() {
    let  { allUsers } = this.props.allUsers;



    return (
      <div className="UserCardsCont">
        <div className="navigationBarUserCardPage">
          <div>
            <NavLink to="/" className="labelUserPage">
              <span className="labelD">D</span>
              <span className="labelC">C</span>
              <span className="labelI">I</span>
            </NavLink>
          </div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </div>

        <div className="UserCardsListCont">
          <h1>OUR STUDENTS</h1>
          <h3>GRADUATED</h3>
          <h4>ALL LOCATIONS</h4>
          <div className="UserCardsItems">
            {allUsers.map((oneUser)=>{
              return (
                  <div className="CardItem">
                    <img src={require("../../img/user.png")} alt="" />
                    <p className="userName">{oneUser.firstName} {oneUser.lastName}</p>
                    <div className="locationAndAvailability">
                      <p className="location">{oneUser.location}</p>
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
              )
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
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  console.log("ADMIN PAGE", state.allUsers);
  return {
    allUsers: state.allUsers,
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(
    mapStateToProps,
    { getAllUsers }
)(UserCard);
