import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";
import {
  fetchNotificationsSuccess,
  markAsAread,
  setNotificationFilter,
} from "./notificationActionCreators";

describe("Notification Action Creators", () => {
  it("markAsAread should create the correct action", () => {
    const index = 1;
    const result = markAsAread(index);
    expect(result).toEqual({
      type: MARK_AS_READ,
      index: 1,
    });
  });

  it("setNotificationFilter should create the correct action", () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const result = setNotificationFilter(filter);
    expect(result).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    });
  });

  it("should create an action to fetch notifications", () => {
    const data = [{ id: 1, message: "Notification 1" }];
    const expectedAction = { type: FETCH_NOTIFICATIONS_SUCCESS, data };
    expect(fetchNotificationsSuccess(data)).toEqual(expectedAction);
  });
});
