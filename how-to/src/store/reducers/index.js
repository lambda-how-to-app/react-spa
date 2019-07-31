import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  GET_GUIDES_START,
  GET_GUIDES_SUCCESS,
  GET_GUIDES_FAILURE
} from "../actions";

const initialState = {
  user: null,
  users: {},
  guides: null,
  error: "",
  isLoggedIn: false,
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
        guides: null,
        user: action.payload,
        error: "",
        isLoading: false,
        isLoggedIn: true,
        isLoggingIn: false,
        fetchingData: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: "Login failed, please try again",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false,
        isLoggedIn: false
      };
    case LOGOUT:
      return {
        ...state,
        guides: null,
        user: null,
        error: "",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false,
        isLoggedIn: false
      };
    case GET_GUIDES_START:
      return {
        ...state,
        guides: null,
        error: "",
        isLoading: true,
        isLoggingIn: false,
        fetchingData: true
      };
    case GET_GUIDES_SUCCESS:
      return {
        ...state,
        guides: action.payload,
        error: "",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false
      };
    default:
      return state;
  }
};
