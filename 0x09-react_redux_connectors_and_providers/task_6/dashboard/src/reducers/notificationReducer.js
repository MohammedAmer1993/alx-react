import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "../actions/notificationActionTypes";
import { Map, fromJS } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

const initialState = Map({
  notifications: Map(), // Immutable Map to hold the notifications
  filter: "DEFAULT",
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedNotifications = notificationsNormalizer(action.data);
      return state.set(
        "notifications",
        fromJS(normalizedNotifications.entities.notifications)
      );

    case MARK_AS_READ:
      return state.setIn(["notifications", action.index, "isRead"], true);

    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);

    default:
      return state;
  }
};

export default notificationReducer;
