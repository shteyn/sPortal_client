import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.userJWT = user.token;
    dispatch(userLoggedIn(user));
    //console.log("AUTH.JS USER userLoggedIn(user) ", user);
  });

export const logout = () => dispatch => {
  localStorage.removeItem("userJWT");
  dispatch(userLoggedOut());
};

export const confirm = token => dispatch =>
  api.user.confirm(token).then(user => {
    localStorage.userJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const resetPasswordRequest = ({ email }) => () => {
  //console.log("ACTION", email);
  api.user.resetPasswordRequest(email);
};
