import axios from "axios";

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
        .then(res => res.data.user),
    confirm: token =>
      axios
        .post("http://localhost:8080/api/auth/confirmation", {
          token
        })
        .then(res => res.data.user)
  }
};
