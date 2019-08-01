import { axiosWithAuth } from "../../utilities/axiosWithAuth";

import { guides, users } from "../../dummy-data";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/api/v1/auth/login", credentials)
    .then(res => {
      console.log(res);
      if (res.data.body.guide) {
        localStorage.setItem("userType", "creator");
      } else {
        localStorage.setItem("userType", "user");
      }
      localStorage.setItem("token", res.data.body.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.body });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
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

  return axiosWithAuth()
    .get("/api/v1/lifehack")
    .then(res => {
      console.log(res);
      dispatch({ type: GET_GUIDES_SUCCESS, payload: res.data.body });
    })
    .catch(err => {
      console.log(err);
    });
};

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = credentials => dispatch => {
  console.log(credentials);
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
    .get("/api/v1/users")
    .then(res => {
      console.log(res);
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data.body });
      return true;
    })
    .catch(err => {
      console.log(err);
    });
};

export const FETCHING_ITEM_BY_ID_START = "FETCHING_ITEM_BY_ID_START";
export const FETCHING_ITEM_BY_ID_SUCCESS = "FETCHING_ITEM_BY_ID_SUCCESS";
export const FETCHING_ITEM_BY_ID_FAILURE = "FETCHING_ITEM_BY_ID_FAILURE";

export const getGuideById = id => dispatch => {
  dispatch({ type: FETCHING_ITEM_BY_ID_START });
  return axiosWithAuth()
    .get(`/api/v1/lifehack/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHING_ITEM_BY_ID_SUCCESS, payload: res.data.body });
    })
    .catch(err => {
      console.log(err);
    });
};
