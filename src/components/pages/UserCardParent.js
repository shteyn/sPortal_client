import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsers, filterLocation } from "../../actions/user";
import TopNavigation from "../navigation/TopNavigation";
import UsersCards from "../forms/UsersCards";

class UserCardParent extends Component {
  _isMounted = false;

  state = {
    loading: true,
    success: false
  };

  componentDidMount() {
    this._isMounted = true;
    this.props
      .getAllUsers()
      .then(() => {
        if (this._isMounted) {
          this.setState({ loading: false, success: true });
        }
      })
      .catch(() => this.setState({ loading: false, success: false }));
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    //let { isAuthenticated } = this.props;
    const { allUsers } = this.props.allUsers;

    return (
      <div className="UserCardsCont">
        <TopNavigation />
        <div className="UserCardsListCont">
          <h1>OUR STUDENTS</h1>
          <UsersCards allUsers={allUsers} />
        </div>
      </div>
    );
  }
}

UserCardParent.propTypes = {
  allUsers: PropTypes.object.isRequired,
  getAllUsers: PropTypes.func.isRequired
  //isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers
    //isAuthenticated: !!state.user.token
  };
}

export default connect(
  mapStateToProps,
  { getAllUsers, filterLocation }
)(UserCardParent);
