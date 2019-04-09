import { GET_ONE_USER } from "../types";

const initialState = {
  oneUser: [],
  loading: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ONE_USER:
      return {
        oneUser: action.oneUserData
      };
    default:
      return state;
  }
}
