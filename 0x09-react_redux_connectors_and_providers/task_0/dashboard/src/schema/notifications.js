import * as notifications from "../../notifications.json";
import { schema, normalize } from "normalizr";

function getAllNotificationsByUser(userId) {
  const objList = notifications.filter((item) => {
    return item.auther.id === userId;
  });
  const contextList = objList.map((item) => item.context);
  return contextList;
}

const notificationSchema = new schema.Entity("notifications");

export const notificationsNormalizer = (data) => {
  return normalize(data, [notificationSchema]);
};
