import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "./notificationActionTypes";
import { bindActionCreators } from "redux";

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const fetchNotificationsSuccess = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

export const boundNotificationActionCreators = (dispatch) =>
  bindActionCreators(
    {
      markAsAread,
      setNotificationFilter,
    },
    dispatch
  );
