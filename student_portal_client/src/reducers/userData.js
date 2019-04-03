import { GET_ALL_USERS } from "../types";

const initialState = {
  allUsers: [],
  loading: false
};

export default function(state = initialState, action = {}) {
  if (action.type === GET_ALL_USERS) {
    return { allUsers: action.allUsers };
  } else {
    return state;
  }
}
