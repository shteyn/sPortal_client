import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import {resetPasswordRequest} from "../../actions/auth";
// import TopNavigation from '../navigation/TopNavigation'
import {Link} from "react-router-dom";

class ForgotPasswordPage extends Component {
    state = {
        success: false
    };

    submit = data =>
        this.props
            .resetPasswordRequest(data).then(() => this.setState({success: true}));


    render() {
        return (
            <div className="ForgotPasswordFormCont">
                <div className="navigationBar">
                    <Link to="/" className="label">
                        <span>DCI</span>
                    </Link>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
                <div className="forgotForm">
                    {this.state.success ? (
                        <div className="forgotMessage">
                            <p>Email has been sent</p>
                        </div>
                    ) : (
                        <ForgotPasswordForm submit={this.submit}/>
                    )}
                </div>
            </div>
        );
    }
}

ForgotPasswordPage.propTypes = {
    resetPasswordRequest: PropTypes.func.isRequired
};

export default connect(
    null,
    {resetPasswordRequest}
)(ForgotPasswordPage);
