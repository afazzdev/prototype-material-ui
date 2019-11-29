import { LOGIN } from "../type";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state;
    default:
      return state;
  }
};
