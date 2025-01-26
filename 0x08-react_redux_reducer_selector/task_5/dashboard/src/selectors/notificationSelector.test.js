import { Map } from "immutable";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";

describe("Notification Selectors", () => {
  const state = Map({
    notifications: Map({
      notifications: Map({
        1: Map({ id: 1, message: "Notification 1", isRead: false }),
        2: Map({ id: 2, message: "Notification 2", isRead: true }),
        3: Map({ id: 3, message: "Notification 3", isRead: false }),
      }),
      filter: "DEFAULT",
    }),
  });

  it("should return the correct filter type", () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual("DEFAULT");
  });

  it("should return all notifications", () => {
    const notifications = getNotifications(state);
    expect(notifications.get("1").get("message")).toEqual("Notification 1");
    expect(notifications.get("2").get("message")).toEqual("Notification 2");
    expect(notifications.get("3").get("message")).toEqual("Notification 3");
  });

  it("should return unread notifications", () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.size).toEqual(2); // Only Notification 1 and 3 are unread
    expect(unreadNotifications.get("1").get("message")).toEqual(
      "Notification 1"
    );
    expect(unreadNotifications.get("3").get("message")).toEqual(
      "Notification 3"
    );
  });
});
