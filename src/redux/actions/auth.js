import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { setAlert } from "./alert";
import {
  AUTH_ERROR,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_PROFILE,
} from "./type";
import { getBaseUrl } from "../../utils/helper";

export const registerUser =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post(`${getBaseUrl()}/api/users`, body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (error) {
      const errors = error.response.data.errors;
      if (!!errors.length) {
        errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
      }
      dispatch({
        type: REGISTER_FAILURE,
      });
    }
  };

//Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`${getBaseUrl()}/api/auth`);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(`${getBaseUrl()}/api/auth`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    if (!!errors.length) {
      errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};

export const logOut = (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
};
