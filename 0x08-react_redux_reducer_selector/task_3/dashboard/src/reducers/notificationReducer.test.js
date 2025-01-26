import notificationReducer from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "../actions/notificationActionTypes";

describe("notificationReducer", () => {
  const initialState = {
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT,
  };

  it("should return the initial state when no action is passed", () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("should handle FETCH_NOTIFICATIONS_SUCCESS and populate notifications", () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, message: "Notification 1" },
        { id: 2, message: "Notification 2" },
      ],
    };
    const state = notificationReducer(initialState, action);
    expect(state.notifications).toEqual([
      { id: 1, message: "Notification 1", isRead: false },
      { id: 2, message: "Notification 2", isRead: false },
    ]);
  });

  it("should handle MARK_AS_READ and mark the specified notification as read", () => {
    const stateWithNotifications = {
      ...initialState,
      notifications: [
        { id: 1, message: "Notification 1", isRead: false },
        { id: 2, message: "Notification 2", isRead: false },
      ],
    };
    const action = { type: MARK_AS_READ, index: 1 };
    const state = notificationReducer(stateWithNotifications, action);
    expect(state.notifications).toEqual([
      { id: 1, message: "Notification 1", isRead: true },
      { id: 2, message: "Notification 2", isRead: false },
    ]);
  });

  it("should handle SET_TYPE_FILTER and update the filter", () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    const state = notificationReducer(initialState, action);
    expect(state.filter).toBe(NotificationTypeFilters.URGENT);
  });
});
