import { combineReducers } from "redux";

import user from "./reducers/user";
import allUsers from "./reducers/userData";

export default combineReducers({
  user,
  allUsers
});
