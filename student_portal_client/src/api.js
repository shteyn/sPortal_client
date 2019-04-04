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
                .then(res => res.data.user), //call users.js routes backend

        confirm: token =>
            axios
                .post("http://localhost:8080/api/auth/confirmation", {
                    token
                })
                .then(res => res.data.user),

        resetPasswordRequest: email =>
            axios.post("http://localhost:8080/api/auth/reset_password_request", {
                email
            }),

        validateToken: token =>
            axios.post("http://localhost:8080/api/auth/validate_token", {token}),

        resetPassword: data =>
            axios.post("http://localhost:8080/api/auth/reset_password", {data}),

        getAllUsers: () =>
            axios.get("http://localhost:8080/api/users").then(res => res.data),

        approveUser: id =>
            axios
                .post(`http://localhost:8080/api/users/${id}`)
                .then(console.log("user posted")),

        deleteUser: id =>
            axios
                .delete(`http://localhost:8080/api/users/${id}`)
    }
};
