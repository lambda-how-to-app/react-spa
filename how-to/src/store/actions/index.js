import { axiosWithAuth } from "../../utilities/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("https://", creds)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
