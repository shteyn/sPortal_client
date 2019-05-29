import React, { Component } from "react";
import PropTypes from "prop-types";
import InlineError from "../messages/InlineError";
import { Collapse } from "react-bootstrap";

class ResetPasswordForm extends Component {
  state = {
    data: {
      token: this.props.token,
      password: "",
      passwordConfirmation: ""
    },
    loading: false,
    open: false,
    errors: {}
  };
  onChange = event =>
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value
      }
    });
  onSubmit = event => {
    event.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch(error =>
        this.setState({
          errors: error.response.data.errors,
          loading: false
        })
      );
    }
  };
  validate = data => {
    console.log("password", data);
    const errors = {};
    if (!data.password) errors.password = "Passwords can't be blank";
    if (data.password.length < 8)
      errors.password = "Password should be at least 6 characters";
    if (data.password.length > 50)
      errors.password = "Password should no more then 20 characters";
    if (data.password.search(/\d/) === -1)
      errors.password = "Password should contain numbers ";
    if (data.password.search(/[a-z]/i) === -1)
      errors.password =
        "Password must contain at least 1 small alphabetical character.";
    if (data.password.search(/[A-Z]/) === -1)
      errors.password =
        "Password must contain at least 1 capital alphabetical character.";
    if (data.password.search(/[ !@#$%^&*()_+\-=\]{};':"\\|,.<>?]/) === -1)
      errors.password = "Password must contain at least 1 special character.";
    if (data.password !== data.passwordConfirmation)
      errors.password = "Passwords must match";
    return errors;
  };
  render() {
    const { data, errors, loading, open } = this.state;
    return (
      <div className="ResetModel">
        {errors.global && <p id="globalError">{errors.global}</p>}
        <div className="resetform">
          <form onSubmit={this.onSubmit} loading={loading.toString()}>
            <div className="Reset-Password">Reset Password</div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Insert new password..."
                value={data.password}
                onChange={this.onChange}
                onClick={() => this.setState({ open: !open })}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              />
              <div className="passwordRequirements">
                <div className="collapsedRequirements">
                  <Collapse in={this.state.open}>
                    <div id="example-collapse-text">
                      <li> At least 6 characters</li>
                      <li> No more then 20 characters</li>
                      <li> At least 1 letter (a, b, c...)</li>
                      <li> At least 1 capital letter (A, B, C...)</li>
                      <li> At least 1 number (1, 2, 3...)</li>
                      <li> At least 1 special character (@, #, $...)</li>
                    </div>
                  </Collapse>
                </div>
              </div>
              {errors.password && <InlineError text={errors.password} />}
              <br />

              <input
                type="password"
                id="passwordConfirmation"
                name="passwordConfirmation"
                placeholder="Confirm new password..."
                autoComplete="current-password"
                value={data.passwordConfirmation}
                onChange={this.onChange}
              />
              {errors.passwordConfirmation && (
                <InlineError text={errors.passwordConfirmation} />
              )}
            </div>
            <br />
            <button>Reset</button>
          </form>
        </div>
      </div>
    );
  }
}
ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
};
export default ResetPasswordForm;
