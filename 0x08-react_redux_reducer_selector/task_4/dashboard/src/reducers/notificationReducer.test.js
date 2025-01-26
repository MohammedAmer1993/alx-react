import { Map } from "immutable";
import notificationReducer from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

describe("notificationReducer", () => {
  const initialState = Map({
    notifications: Map(),
    filter: "DEFAULT",
  });

  it("should return the initial state when no action is passed", () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("should handle FETCH_NOTIFICATIONS_SUCCESS and normalize notifications data", () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, message: "Notification 1" },
        { id: 2, message: "Notification 2" },
      ],
    };
    const state = notificationReducer(initialState, action);
    expect(state.getIn(["notifications", "1", "message"])).toEqual(
      "Notification 1"
    );
    expect(state.getIn(["notifications", "2", "message"])).toEqual(
      "Notification 2"
    );
  });

  it("should handle MARK_AS_READ and update isRead", () => {
    const stateWithNotifications = Map({
      notifications: Map({
        1: Map({ id: 1, message: "Notification 1", isRead: false }),
        2: Map({ id: 2, message: "Notification 2", isRead: false }),
      }),
    });
    const action = { type: MARK_AS_READ, index: 1 };
    const state = notificationReducer(stateWithNotifications, action);
    expect(state.getIn(["notifications", "1", "isRead"])).toBe(true);
  });

  it("should handle SET_TYPE_FILTER and update the filter", () => {
    const action = { type: SET_TYPE_FILTER, filter: "URGENT" };
    const state = notificationReducer(initialState, action);
    expect(state.get("filter")).toEqual("URGENT");
  });
});
