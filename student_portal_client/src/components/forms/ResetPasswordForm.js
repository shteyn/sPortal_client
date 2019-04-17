import React, { Component } from "react";
import PropTypes from "prop-types";

import InlineError from "../messages/InlineError";

class ResetPasswordForm extends Component {
  state = {
    data: {
      token: this.props.token,
      password: "",
      passwordConfirmation: ""
    },
    loading: false,
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
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    if (data.password !== data.passwordConfirmation)
      errors.password = "Passwords must match";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <div className="ResetPasswordPageForm">
        {errors.global && <p id="globalError">{errors.global}</p>}
        <form onSubmit={this.onSubmit} loading={loading.toString()}>
          <div error={!!errors.password}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="your new password..."
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </div>
          <br />
          <div error={!!errors.passwordConfirmation}>
            <input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="confirm new password..."
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
    );
  }
}
ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
};

export default ResetPasswordForm;
