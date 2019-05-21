import React, { Component } from "react";
import PropTypes from "prop-types";
import Validator from "validator";
import { locationsArray, courseTypesArray } from "../../helpers";
import InlineError from "../messages/InlineError";

class RegistrationForm extends Component {
  state = {
    data: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      location: "",
      studentClass: "",
      studentCourse: ""
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
    console.log("data.password", data.password);
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    if (data.password.length < 6)
      errors.password = "Password should be at least 6 characters";
    if (data.password.length > 50)
      errors.password = "Password should no more then 20 characters";
    if (data.password.search(/\d/) === -1)
      errors.password = "Password should contain numbers ";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    //const isEnabled = data.email.length > 0 && data.password.length > 0;
    return (
      <div className="loginForm">
        <form onSubmit={this.onSubmit} loading={loading.toString()}>
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name..."
            value={data.firstName}
            onChange={this.onChange}
            required
          />

          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name..."
            value={data.lastName}
            onChange={this.onChange}
            required
          />
          <input
            type="number"
            min="0"
            id="studentClass"
            name="studentClass"
            placeholder="Class Number..."
            value={data.studentClass}
            onChange={this.onChange}
            required
          />
          <input
            autoComplete="off"
            type="email"
            id="email"
            name="email"
            placeholder="Email..."
            value={data.email}
            onChange={this.onChange}
            required
          />
          <br />
          {/* InlineError server side validation */}
          {errors.email && <InlineError text={errors.email} />}

          <input
            autoComplete="off"
            type="password"
            id="password"
            name="password"
            placeholder="Password..."
            value={data.password}
            onChange={this.onChange}
            required
          />
          <br />
          {errors.password && <InlineError text={errors.password} />}

          <br />
          <select
            name="location"
            onChange={this.onChange}
            className="DropDownSelect"
            required
          >
            <option value="">Choose Location</option>
            {locationsArray.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
          <select
            name="studentCourse"
            onChange={this.onChange}
            className="DropDownSelect"
            required
          >
            <option value="">Choose Course</option>
            {courseTypesArray.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
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
