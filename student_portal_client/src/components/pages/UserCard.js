import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsers, filterLocation } from "../../actions/user";
import TopNavigation from "../navigation/TopNavigation";
import UserLocationFilter from "../forms/UserLocationFilter";
import Search from "../forms/Search";

class UserCard extends Component {
  constructor() {
    super();

    this.state = {
      query: ""
    };
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  searchChanged = query => {
    console.log("query", query);

    this.setState({ query: query });
  };

  /*filterLocation = e => {
    console.log("filterLocation", e.target.value);
    this.props.filterLocation(e.target.value);
  };*/
  render() {
    let { isAuthenticated } = this.props;
    const { allUsers } = this.props.allUsers;

    return (
      <div className="UserCardsCont">
        <div className="navigationBarUserCardPage">
          {isAuthenticated && <TopNavigation />}
          {!isAuthenticated && (
            <div className="navigationBar">
              <Link to="/" className="label">
                <span>DCI</span>
              </Link>
              <ul>
                <li>
                  <Link to="/login">
                    <span>Login</span>
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
          <Search allUsers={allUsers} searchChanged={this.searchChanged} />
          <UserLocationFilter query={this.state.query} />
        </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  allUsers: PropTypes.object.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers,
    isAuthenticated: !!state.user.token
  };
}

export default connect(
  mapStateToProps,
  { getAllUsers, filterLocation }
)(UserCard);
