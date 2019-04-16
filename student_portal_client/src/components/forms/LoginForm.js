import React, { Component } from "react";
import PropTypes from "prop-types";
import Validator from "validator";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import InlineError from "../messages/InlineError";
import RegistrationForm from "./RegistrationForm";

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
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
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <div className="loginForm">
      <Tabs className="LoginModel">
        <TabList className="TabsList">
            <Tab className="tab-form-log"><button><b>Login</b></button></Tab>
            <Tab className="tab-form-reg"><button><b>Registration</b></button></Tab>
        </TabList>
        <TabPanel>
        <form onSubmit={this.onSubmit} loading={loading.toString()}>
          {errors.global && <p id="globalError">{alert(errors.global)}</p>}
          
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email..."
            autoComplete="email"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            autoComplete="current-password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
          <br />
          <button>Submit</button>
        </form>
        </TabPanel>

            <TabPanel>
              <RegistrationForm />
            </TabPanel>
          </Tabs>

      </div>
    );
  }
}
LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
