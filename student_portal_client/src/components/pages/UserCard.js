import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class UserCard extends Component {
    render() {
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
                </div>

                <div className="UserCardsListCont">
                    <h1>OUR STUDENTS</h1>
                    <h3>GRADUATED</h3>
                    <h4>ALL LOCATIONS</h4>
                    <div className="UserCardsItems">
                        <div className="CardItem">
                            <img src={require('../img/user.png')} alt=""/>
                            <p className="userName">Alex Starr</p>
                            <div className="locationAndAvailability">
                                <p className="location">Berlin</p>
                                <div className="Availability">
                                    <p>Availability</p>
                                    <p style={{color: 'white'}}>Available for offers</p>
                                </div>
                            </div>
                            <div className="CardLinks">
                                <NavLink title="Linked In" to="#"><img src={require('../img/linkedin.png')} alt=""/></NavLink>
                                <NavLink title="GitHub" to="#"><img src={require('../img/github.png')} alt=""/></NavLink>
                                <NavLink title="Xing" to="#"><img src={require('../img/xing.png')} alt=""/></NavLink>
                                <NavLink title="Portfolio" to="#"><img src={require('../img/briefcase.png')} alt=""/></NavLink>
                            </div>
                        </div>
                        <div className="CardItem">
                            <img src={require('../img/user.png')} alt=""/>
                            <p className="userName">Alex Starr</p>
                            <div className="locationAndAvailability">
                                <p className="location">Düsseldorf</p>
                                <div className="Availability">
                                    <p>Availability</p>
                                    <p style={{color: 'white'}}>Available for offers</p>
                                </div>
                            </div>
                            <div className="CardLinks">
                                <NavLink title="Linked In" to="#"><img src={require('../img/linkedin.png')} alt=""/></NavLink>
                                <NavLink title="GitHub" to="#"><img src={require('../img/github.png')} alt=""/></NavLink>
                                <NavLink title="Xing" to="#"><img src={require('../img/xing.png')} alt=""/></NavLink>
                                <NavLink title="Portfolio" to="#"><img src={require('../img/briefcase.png')} alt=""/></NavLink>
                            </div>
                        </div>
                        <div className="CardItem">
                            <img src={require('../img/user.png')} alt=""/>
                            <p className="userName">Alex Starr</p>
                            <div className="locationAndAvailability">
                                <p className="location">Köln</p>
                                <div className="Availability">
                                    <p>Availability</p>
                                    <p style={{color: 'white'}}>Starting May 21</p>
                                </div>
                            </div>
                            <div className="CardLinks">
                                <NavLink title="Linked In" to="#"><img src={require('../img/linkedin.png')} alt=""/></NavLink>
                                <NavLink title="GitHub" to="#"><img src={require('../img/github.png')} alt=""/></NavLink>
                                <NavLink title="Xing" to="#"><img src={require('../img/xing.png')} alt=""/></NavLink>
                                <NavLink title="Portfolio" to="#"><img src={require('../img/briefcase.png')} alt=""/></NavLink>
                            </div>
                        </div>
                        <div className="CardItem">
                            <img src={require('../img/user.png')} alt=""/>
                            <p className="userName">Alex Starr</p>
                            <div className="locationAndAvailability">
                                <p className="location">Hamburg</p>
                                <div className="Availability">
                                    <p>Availability</p>
                                    <p style={{color: 'white'}}>Available for offers</p>
                                </div>
                            </div>
                            <div className="CardLinks">
                                <NavLink title="Linked In" to="#"><img src={require('../img/linkedin.png')} alt=""/></NavLink>
                                <NavLink title="GitHub" to="#"><img src={require('../img/github.png')} alt=""/></NavLink>
                                <NavLink title="Xing" to="#"><img src={require('../img/xing.png')} alt=""/></NavLink>
                                <NavLink title="Portfolio" to="#"><img src={require('../img/briefcase.png')} alt=""/></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;