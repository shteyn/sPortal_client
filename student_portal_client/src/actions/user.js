import api from "../api";
import { userLoggedIn } from "./auth";
import { GET_ALL_USERS, GET_ONE_USER, UPDATE_USER } from "../types";
import axios from "axios";

export const allUsersList = allUsers => ({
  type: GET_ALL_USERS,
  allUsers
});

export const oneUser = oneUserData => ({
  type: GET_ONE_USER,
  oneUserData
});

export const registration = data => dispatch =>
  api.user.registration(data).then(user => {
    localStorage.userJWT = user.token;
    dispatch(userLoggedIn(user));
  });

//export const approveUser = () => dispatch => api.user.approveUser();
export const approveUser = id => dispatch =>
  api.user.approveUser(id).then(response => {
    if (response.data && response.data.success) {
      api.user.getAllUsers().then(allUsers => {
        dispatch(allUsersList(allUsers));
      });
    } else {
      api.user.getAllUsers().then(allUsers => {
        dispatch(allUsersList(allUsers));
      });
    }
  });

export const deleteUser = id => dispatch =>
  api.user
    .deleteUser(id)
    .then(response => {
      if (response.data && response.data.success) {
        api.user.getAllUsers().then(allUsers => {
          dispatch(allUsersList(allUsers));
        });
      } else {
        api.user.getAllUsers().then(allUsers => {
          dispatch(allUsersList(allUsers));
        });
      }
    })
    .catch(err => {
      console.log(err);
    });

export const getAllUsers = () => dispatch =>
  api.user.getAllUsers().then(allUsers => {
    dispatch(allUsersList(allUsers));
  });

export const getUserData = email => dispatch =>
  api.user
    .getUserData(email)
    .then(user => {
      console.log("response from Axios getUserData", user);
      dispatch(oneUser(user));
    })
    .catch(err => {
      console.log("Error from action axios", err);
    });

export const updateUserData = user => dispatch => {
  axios.put(`http://localhost:8080/api/users/update-users/${user.id}`, user)
    .then(res => {
      dispatch({
        type: UPDATE_USER,
        payload: res.data
      })
    })
}
