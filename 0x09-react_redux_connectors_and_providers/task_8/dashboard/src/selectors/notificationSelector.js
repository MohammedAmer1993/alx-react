// Selector to get the current filter type
export const filterTypeSelected = (state) =>
  state.getIn(["notifications", "filter"]);

// Selector to get all notifications
export const getNotifications = (state) =>
  state.getIn(["notifications", "notifications"]);

// Selector to get unread notifications
export const getUnreadNotifications = (state) =>
  state
    .getIn(["notifications", "notifications"])
    .filter((notification) => !notification.get("isRead"));
