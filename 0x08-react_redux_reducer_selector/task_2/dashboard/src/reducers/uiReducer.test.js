import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";
import { Map } from "immutable";

describe("uiReducer", () => {
  // Initial state using Immutable.js
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it("should return the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("should return the initial state when an unrelated action (e.g., SELECT_COURSE) is passed", () => {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("should handle DISPLAY_NOTIFICATION_DRAWER correctly", () => {
    const state = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(state.get("isNotificationDrawerVisible")).toBe(true);
  });

  it("should handle HIDE_NOTIFICATION_DRAWER correctly", () => {
    const state = uiReducer(
      initialState.set("isNotificationDrawerVisible", true),
      { type: HIDE_NOTIFICATION_DRAWER }
    );
    expect(state.get("isNotificationDrawerVisible")).toBe(false);
  });

  it("should handle LOGIN_SUCCESS correctly", () => {
    const user = { email: "user@example.com" };
    const state = uiReducer(initialState, {
      type: LOGIN_SUCCESS,
      user,
    });
    expect(state.get("isUserLoggedIn")).toBe(true);
    expect(state.get("user")).toEqual(user);
  });

  it("should handle LOGIN_FAILURE correctly", () => {
    const state = uiReducer(
      initialState
        .set("isUserLoggedIn", true)
        .set("user", { email: "user@example.com" }),
      { type: LOGIN_FAILURE }
    );
    expect(state.get("isUserLoggedIn")).toBe(false);
    expect(state.get("user")).toEqual({});
  });

  it("should handle LOGOUT correctly", () => {
    const state = uiReducer(
      initialState
        .set("isUserLoggedIn", true)
        .set("user", { email: "user@example.com" }),
      { type: LOGOUT }
    );
    expect(state.get("isUserLoggedIn")).toBe(false);
    expect(state.get("user")).toEqual({});
  });
});
