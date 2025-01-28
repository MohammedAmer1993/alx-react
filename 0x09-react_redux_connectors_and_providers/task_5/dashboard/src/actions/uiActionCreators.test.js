import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

describe("UI Action Creators", () => {
  it("login should create the correct action", () => {
    const email = "test@example.com";
    const password = "password123";
    const result = login(email, password);
    expect(result).toEqual({
      type: LOGIN,
      user: { email, password },
    });
  });

  it("logout should create the correct action", () => {
    const result = logout();
    expect(result).toEqual({
      type: LOGOUT,
    });
  });

  it("displayNotificationDrawer should create the correct action", () => {
    const result = displayNotificationDrawer();
    expect(result).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("hideNotificationDrawer should create the correct action", () => {
    const result = hideNotificationDrawer();
    expect(result).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
