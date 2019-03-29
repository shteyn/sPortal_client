import { GET_ALL_USERS } from "../types";

const initialState = {
  allUsers: [],
  loading: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_USERS:
      return { allUsers: action.allUsers };
    default:
      return state;
  }
}
