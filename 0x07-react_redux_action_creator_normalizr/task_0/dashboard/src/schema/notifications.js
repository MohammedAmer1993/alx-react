import * as notifications from "../../notifications.json";
function getAllNotificationsByUser(userId) {
  const objList = notifications.filter((item) => {
    return item.auther.id === userId;
  });
  const contextList = objList.map((item) => item.context);
  return contextList;
}

console.log(getAllNotificationsByUser("5debd764a7c57c7839d722e9"));
