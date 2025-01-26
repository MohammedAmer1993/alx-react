import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

describe("uiReducer", () => {
  // Initial state
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it("should return the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("should return the initial state when an unrelated action (e.g., SELECT_COURSE) is passed", () => {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });
    expect(state).toEqual(initialState);
  });

  it("should handle DISPLAY_NOTIFICATION_DRAWER correctly", () => {
    const state = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(state.isNotificationDrawerVisible).toBe(true);
  });

  it("should handle HIDE_NOTIFICATION_DRAWER correctly", () => {
    const state = uiReducer(
      { ...initialState, isNotificationDrawerVisible: true },
      { type: HIDE_NOTIFICATION_DRAWER }
    );
    expect(state.isNotificationDrawerVisible).toBe(false);
  });

  it("should handle LOGIN_SUCCESS correctly", () => {
    const user = { email: "user@example.com" };
    const state = uiReducer(initialState, {
      type: LOGIN_SUCCESS,
      user,
    });
    expect(state.isUserLoggedIn).toBe(true);
    expect(state.user).toEqual(user);
  });

  it("should handle LOGIN_FAILURE correctly", () => {
    const state = uiReducer(
      {
        ...initialState,
        isUserLoggedIn: true,
        user: { email: "user@example.com" },
      },
      { type: LOGIN_FAILURE }
    );
    expect(state.isUserLoggedIn).toBe(false);
    expect(state.user).toEqual({});
  });

  it("should handle LOGOUT correctly", () => {
    const state = uiReducer(
      {
        ...initialState,
        isUserLoggedIn: true,
        user: { email: "user@example.com" },
      },
      { type: LOGOUT }
    );
    expect(state.isUserLoggedIn).toBe(false);
    expect(state.user).toEqual({});
  });
});
