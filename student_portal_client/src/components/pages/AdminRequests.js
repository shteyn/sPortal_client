import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table, Button } from "semantic-ui-react";
// import group from '../img/group.svg';
import { approveUser, deleteUser } from "../../actions/user";

class AdminRequests extends Component {
    render() {
        const { allUsers } = this.props.allUsers;
        return (

        <div className="AdminRequests">
                <br/>
            <h2 className="top"><b>Approved Students</b></h2>
                <br/>
        <div className="top-table">
        <Table celled className="main-table">
                    <Table.Header className="table" >
                        <Table.Row>
                            <Table.HeaderCell className="input">Location</Table.HeaderCell>
                            <Table.HeaderCell className="input">Class</Table.HeaderCell>
                            <Table.HeaderCell className="input">First Name</Table.HeaderCell>
                            <Table.HeaderCell className="input">Last Name</Table.HeaderCell>
                            <Table.HeaderCell className="input">Email</Table.HeaderCell>
                            <Table.HeaderCell className="input"></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

            <Table.Body>
            {allUsers.map(oneUser => {
                if (oneUser.confirmed) {
                return (
                    <Table.Row key={oneUser._id}>
                    <Table.Cell>{oneUser.location}</Table.Cell>
                    <Table.Cell>{oneUser.studentClass}</Table.Cell>
                    <Table.Cell>{oneUser.firstName}</Table.Cell>
                    <Table.Cell>{oneUser.lastName}</Table.Cell>
                    <Table.Cell>{oneUser.email}</Table.Cell>
                    <Table.Cell>
                        <Button
                        color="red"
                        onClick={(deleteUser) => {if(window.confirm("Are you sure?")) this.deleteUserHandler(oneUser._id, deleteUser)}}
                        >
                        Delete User
                        </Button>
                    </Table.Cell>
                    </Table.Row>
                );
                } else {
                return null;
                }
            })}
            </Table.Body>
        </Table>

        </div>
        </div>
        );
    }
}

AdminRequests.propTypes = {
    allUsers: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired
  };
  
  function mapStateToProps(state) {
    return {
      allUsers: state.allUsers
    };
  }
  
  export default connect(
    mapStateToProps,
    { deleteUser }
  )(AdminRequests);

// import React, {Component} from 'react';
// import {NavLink} from "react-router-dom";
// import group from '../img/group.svg';

// class AdminRequests extends Component {
//     render() {
//         return (

//             <div className="AdminRequests">
//                 <div className="app-navigationBar">
//                     <NavLink to="/" className="label">
//                         <span className="labelD">D</span>
//                         <span className="labelC">C</span>
//                         <span className="labelI">I</span>
//                     </NavLink>
//                     <ul>
//                         <li className="nav">
//                             <NavLink to="/admin-approved">
//                                 <img title="Approved Students" className="cgroup-icon" src={group} alt="group" />
//                             </NavLink>
//                             </li>
//                             <li className="nav">
//                             <NavLink to="/admin-requests">
//                                 <img title="Requests" className="dgroup-icon" src={group} alt="group" />
//                             </NavLink>
//                         </li>
//                     </ul>
//                     </div>
//             <h2 className="top"><b>Requests</b></h2>

//             <div className="top-table">
//                 <table className="main-table">
//                     <thead className="table" >
//                         <tr>
//                         </tr>

//                         <tr>
//                             <td className="input">Stan Man</td>
//                             <td className="input">Stan@Man.de</td>
//                             <td className="input">24</td>
//                             <td className="input">March 8 2019</td>
//                             <td className="input">Hamburg</td>
//                             <td className="input">B. Business</td>
//                             <button className="button"><span className="accept">&#10007;</span></button>
//                         </tr>
//                     </thead>
//                 </table>

//             </div>
//             </div>
//         );
//     }
// }

// export default AdminRequests;

