import api from "../api";
import { userLoggedIn } from "./auth";
import { GET_ALL_USERS } from "../types";

export const allUsersList = allUsers => ({
  type: GET_ALL_USERS,
  allUsers
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

export const getOneUser = () => console.log("getOneUser func actions");
