import { users, guides } from "../../dummy-data";

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../reducers";

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
    default:
      return state;
  }
};
