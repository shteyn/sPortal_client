import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios
        .post(`${process.env.REACT_APP_API_HOST}/api/auth`, {
          credentials
        })
        .then(res => res.data.user),

    contactUs: contactUsData =>
      axios.post(`${process.env.REACT_APP_API_HOST}/api/users/contact-us`, {
        contactUsData
      }),
    contactStudent: contactStudentData =>
      axios.post(
        `${process.env.REACT_APP_API_HOST}/api/users/contact-student`,
        {
          contactStudentData
        }
      ),
    registration: user =>
      axios
        .post(`${process.env.REACT_APP_API_HOST}/api/users/registration`, {
          user
        })
        .then(res => res.data.user),
    confirm: token =>
      axios
        .post(`${process.env.REACT_APP_API_HOST}/api/auth/confirmation`, {
          token
        })
        .then(res => res.data.user),

    resetPasswordRequest: email =>
      axios.post(
        `${process.env.REACT_APP_API_HOST}/api/auth/reset_password_request`,
        {
          email
        }
      ),

    validateToken: token =>
      axios
        .post(`${process.env.REACT_APP_API_HOST}/api/auth/validate_token`, {
          token
        })
        .then(res => console.log("validation")),

    resetPassword: data =>
      axios.post(`${process.env.REACT_APP_API_HOST}/api/auth/reset_password`, {
        data
      }),
    getAllUsers: () =>
      axios
        .get(`${process.env.REACT_APP_API_HOST}/api/users`)
        .then(res => res.data),

    filterLocation: location =>
      axios
        .post(`${process.env.REACT_APP_API_HOST}/api/users`, { location })
        .then(res => res.data),

    getUserData: email =>
      axios
        .post(`${process.env.REACT_APP_API_HOST}/api/users/dashboard`, {
          email
        })
        .then(res => res.data),

    approveUser: id =>
      axios.post(
        `${process.env.REACT_APP_API_HOST}/api/users/waiting-users/${id}`
      ),

    deleteUser: id =>
      axios.delete(
        `${process.env.REACT_APP_API_HOST}/api/users/delete-users/${id}`
      ),

    deleteUserByUser: id =>
      axios.delete(
        `${process.env.REACT_APP_API_HOST}/api/users/delete-user/${id}`
      ),

    updateImage: user =>
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_HOST}/api/users/update-img/${user.get(
          "id"
        )}`,
        data: user,
        headers: {
          "content-type": `multipart/form-data; boundary=${user._boundary}`
        }
      }).then(res => res.data),
    updateProfile: user =>
      axios
        .put(
          `${process.env.REACT_APP_API_HOST}/api/users/update-user/${user.id}`,
          {
            user
          }
        )
        .then(res => res.data)
  }
};
