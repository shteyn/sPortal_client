import React, { Component } from "react";
import PropTypes from "prop-types";
import Validator from "validator";

import InlineError from "../messages/InlineError";

class RegistrationForm extends Component {
  state = {
    data: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      location: "",
      studentClass: ""
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

  //making syntax validation onSubmit();
  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
<<<<<<< HEAD
      <div  className="loginForm">
        <form onSubmit={this.onSubmit} loading={loading}>
=======
      <div>
        <form onSubmit={this.onSubmit} loading={loading.toString()}>
>>>>>>> fa74473acc976ed100b6c38518a317f42c22432d
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            autoComplete="email"
            value={data.email}
            onChange={this.onChange}
          />
          {/* InlineError server side validation */}
          {errors.email && <InlineError text={errors.email} />}
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="inserts password"
            autoComplete="current-password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="insert your first name..."
            value={data.firstName}
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="insert your last name..."
            value={data.lastName}
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            id="location"
            name="location"
            placeholder="insert your location..."
            value={data.location}
            onChange={this.onChange}
          />
          <br />
          <input
            type="number"
            id="studentClass"
            name="studentClass"
            placeholder="insert your class number..."
            value={data.studentClass}
            onChange={this.onChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
RegistrationForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default RegistrationForm;
