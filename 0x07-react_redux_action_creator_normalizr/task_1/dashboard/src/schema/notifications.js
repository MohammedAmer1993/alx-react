import * as notifications from "../../notifications.json";
import { schema, normalize } from "normalizr";

const normalizedData = normalize(notifications, [notification]);

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  // Filter notifications by userId and map to corresponding message context
  return Object.values(notifications)
    .filter((notif) => notif.author === userId)
    .map((notif) => messages[notif.context]);
}

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export { user, message, notification };
