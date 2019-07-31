import { axiosWithAuth } from "../../utilities/axiosWithAuth";

import { guides } from "../../dummy-data";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/api/v1/auth/login", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.body.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.body });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err.data.message });
    });
};

export const LOGOUT = "LOGOUT";

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem("token");
};

export const GET_GUIDES_START = "GET_GUIDES_START";
export const GET_GUIDES_SUCCESS = "GET_GUIDES_SUCCESS";
export const GET_GUIDES_FAILURE = "GET_GUIDES_FAILURE";

export const getGuides = () => dispatch => {
  dispatch({ type: GET_GUIDES_START });
  dispatch({ type: GET_GUIDES_SUCCESS, payload: guides });

  // return axiosWithAuth()
  //   .get("/api/v1/guides/profile")
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
};

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = credentials => dispatch => {
  dispatch({ type: SIGN_UP_START });
  return axiosWithAuth()
    .post("/api/v1/auth/signup", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.body.token);
      dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.body });
      return true;
    })
    .catch(err => {
      console.log(err);
    });
};

export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_START });
  return axiosWithAuth()
    .get("/api/v1/guides/profile")
    .then(res => {
      console.log(res);
      // dispatch({ type: GET_USERS_SUCCESS, payload: res.data.body });
      // return true;
    })
    .catch(err => {
      console.log(err);
    });
};
