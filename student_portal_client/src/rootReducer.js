import { combineReducers } from "redux";

import user from "./reducers/user";
import profileCard from "./reducers/profileCard";


export default combineReducers({
  user,
  profileCard
});
