import * as notifications from "../../notifications.json";
import { schema } from "normalizr";

function getAllNotificationsByUser(userId) {
  const objList = notifications.filter((item) => {
    return item.auther.id === userId;
  });
  const contextList = objList.map((item) => item.context);
  return contextList;
}

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});
