import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import { bindActionCreators } from "redux";

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const boundUIActionCreators = (dispatch) =>
  bindActionCreators(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer,
    },
    dispatch
  );

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login()); // Dispatch LOGIN action

    try {
      const response = await fetch("/dist/login-success.json");
      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      dispatch(loginSuccess(data)); // Dispatch LOGIN_SUCCESS action with user data
    } catch (error) {
      dispatch(loginFailure()); // Dispatch LOGIN_FAILURE action
    }
  };
};
