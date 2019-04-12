import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table, Button } from "semantic-ui-react";
// import group from '../img/group.svg';
import { approveUser, deleteUser } from "../../actions/user";

class AdminApproved extends Component {
    constructor(props) {
        super(props);
        this.deleteUserHandler.bind(this)
    }
    approveUser = id => {
        this.props.approveUser(id).then(this.setState({}));
    };

    deleteUserHandler = id => {
        this.props.deleteUser(id);
    };
    render() {
        const { allUsers } = this.props.allUsers;
        return (
            <div className="AdminApproved">
            <br/>
                <h2 className="top"><b>Students Requests</b></h2>
            <br/>
                <Table celled className="top-table">
                    <Table.Header className="main-table">
                        <Table.Row className="main-table">
                            <Table.HeaderCell>Location</Table.HeaderCell>
                            <Table.HeaderCell>Class</Table.HeaderCell>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>E-Mail</Table.HeaderCell>
                            <Table.HeaderCell>User Status</Table.HeaderCell>
                            <Table.HeaderCell />
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {allUsers.map(
                            (
                                oneUser
                            ) => {
                    if (!oneUser.confirmed) {
                        return (
                            <Table.Row key={oneUser._id}>
                                <Table.Cell>{oneUser.location}</Table.Cell>
                                <Table.Cell>{oneUser.studentClass}</Table.Cell>
                                <Table.Cell>{oneUser.firstName}</Table.Cell>
                                <Table.Cell>{oneUser.lastName}</Table.Cell>
                                <Table.Cell>{oneUser.email}</Table.Cell>
                                <Table.Cell>
                                    {oneUser.confirmationEmailSend ? "Approved" : "Not Approved"}
                                </Table.Cell>
                                <Table.Cell>
                                    <Button
                                        secondary
                                        onClick={this.approveUser.bind(this, oneUser._id)}
                                        style={{
                                            color: oneUser.confirmationEmailSend ? "green" : "white"
                                        }}
                                    >
                                        {oneUser.confirmationEmailSend ? "Resend Email" : "Approve"}
                                    </Button>
                                    <Button
                                        color="red"
                                        onClick={(deleteUser) => { if (window.confirm("Are you sure?")) this.deleteUserHandler(oneUser._id, deleteUser) }}
                                    >
                                        Reject
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                                    );
                                } else {
                                    return null;
                                }
                            }
                        )}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}
AdminApproved.propTypes = {
    approveUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired
  };
  
  function mapStateToProps(state) {
    return {
      allUsers: state.allUsers
    };
  }
  
  export default connect(
    mapStateToProps,
    { approveUser, deleteUser }
  )(AdminApproved);


// import React, {Component} from 'react';
// import {NavLink} from "react-router-dom";
// // import group from '../img/group.svg';

// class AdminApproved extends Component {
//     render() {
//         return (

//             <div className="AdminApproved">
//             {/* <div className="app-navigationBar">
//                 <NavLink to="/" className="label">
//                     <span title="Home" className="labelD">D</span>
//                     <span title="Home" className="labelC">C</span>
//                     <span title="Home" className="labelI">I</span>
//                 </NavLink>
//                 <ul>
//                     <li className="nav">
//                         <NavLink to="/admin-approved">
//                             <img title="Approved Students" className="agroup-icon" src={group} alt="group" />
//                         </NavLink>
//                         </li>
//                         <li className="nav">
//                         <NavLink to="/admin-requests">
//                         <div className="ss">
//                             <img title="Requests" className="bgroup-icon" src={group} alt="group" />
//                         </div>
//                         </NavLink>
//                     </li>
//                 </ul>
//                 </div> */}
//             <h2 className="top"><b>Approved Students</b></h2> >>>>>>>ab hier<<<<<<<<

//             <div className="top-table">aaaaaaaaaa
//                 <table className="main-table">aaaaaaaaaa
//                     <thead className="table">
//                         <tr>
//                             <th className="title">Name</th>
//                             <th className="title">Email</th>
//                             <th className="title">Class</th>
//                             <th className="title">Available <br/> Form</th>
//                             <th className="title">Location</th>
//                             <th className="title">Company</th>
//                         </tr>

//                         <tr>
//                             <td className="input">Max Mustermann</td>
//                             <td className="input">Max@Mustermann.de</td>
//                             <td className="input">9</td>
//                             <td className="input">May 14 2019</td>
//                             <td className="input">Berlin</td>
//                             <td className="input">One Company</td>
//                             {/* <td className="font-border"><i class="fas fa-times"></i></td> */}
//                             <button className="button"><span className="accept">&#10007;</span></button>
//                         </tr>
//                         <br/>
//                         <tr>
//                             <td className="input">Jennifer Example</td>
//                             <td className="input">Jennifer@Example.de</td>
//                             <td className="input">12</td>
//                             <td className="input">June 25 2019</td>
//                             <td className="input">Los Angeles</td>
//                             <td className="input">L.A Corporation</td>
//                             <button className="button"><span className="accept">&#10007;</span></button>
//                         </tr>
//                         <br/>
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

// export default AdminApproved;