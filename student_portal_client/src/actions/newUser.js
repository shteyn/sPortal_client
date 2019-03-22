import api from "../api";
import { userLoggedIn } from "./auth";

export const registration = data => dispatch =>
  api.user.registration(data).then(user => {
    localStorage.userJWT = user.token;
    dispatch(userLoggedIn(user));
  });
