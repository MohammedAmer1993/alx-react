import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "../actions/notificationActionTypes";

const initialState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false, // Mark all notifications as unread initially
        })),
      };

    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : notification
        ),
      };

    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};

export default notificationReducer;
