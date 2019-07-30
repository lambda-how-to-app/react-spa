import { users, guides } from "../../dummy-data";

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
  user: {},
  users: users,
  guides: guides,
  error: "",
  isLoading: false,
  isLoggingIn: false,
  fetchingData: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        isLoading: true,
        isLoggingIn: true,
        fetchingData: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: "",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: "Login failed, please try again",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false
      };
    default:
      return state;
  }
};
