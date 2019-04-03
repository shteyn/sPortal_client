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
export const approveUser = id => dispatch => api.user.approveUser(id);

export const deleteUser = id => dispatch => api.user.deleteUser(id);

export const getAllUsers = () => dispatch =>
  api.user.getAllUsers().then(allUsers => {
    dispatch(allUsersList(allUsers));
  });

export const getOneUser = () => console.log("getOneUser func actions");
