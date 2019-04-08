import axios from "axios";
import {UPDATE_USER} from "./types";

export default {
  user: {
    login: credentials =>
      axios
        .post("http://localhost:8080/api/auth", {
          credentials
        })
        .then(res => res.data.user),

    registration: user =>
      axios
        .post("http://localhost:8080/api/users", {
          user
        })
        .then(res => res.data.user), //call users.js routes backend

    confirm: token =>
      axios
        .post("http://localhost:8080/api/auth/confirmation", {
          token
        })
        .then(res => res.data.user),

    resetPasswordRequest: email =>
      axios.post(
        "http://localhost:8080/api/auth/reset_password_request",
        {
          email
        },
        console.log("reset Password api", email)
      ),

    validateToken: token =>
      axios.post("http://localhost:8080/api/auth/validate_token", { token }),

    resetPassword: data =>
      axios.post("http://localhost:8080/api/auth/reset_password", { data }),

    getAllUsers: () =>
      axios.get("http://localhost:8080/api/users").then(res => res.data),

    getUserData: email =>
      axios
        .post(
          "http://localhost:8080/api/users/dashboard",
          { email },
          console.log("email from axios call", email)
        )
        .then(res => res.data),

    approveUser: id =>
      axios.post(`http://localhost:8080/api/users/waiting-users/${id}`),

    deleteUser: id =>
      axios.delete(`http://localhost:8080/api/users/delete-users/${id}`),

    updateUserData: user => dispatch => {
      axios.put(`http://localhost:8080/api/users/update-users/${user.id}`, user)
        .then(res => {
          dispatch({
            type: UPDATE_USER,
            payload: res.data
          })
        })
    }

  }

};
