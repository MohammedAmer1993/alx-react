import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

export default function Notifications({
  displayDrawer = true,
  listNotifications,
}) {
  function markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  return (
    <div className="menuItem">
      <p>Your notifications</p>
      {displayDrawer ? (
        <div className="Notifications" data-testid="Notifications">
          <div>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.map((item) => (
                <NotificationItem
                  key={item.id}
                  id={item.id}
                  markAsRead={markAsRead}
                  type={item.type}
                  html={item.html ? item.html : null}
                  value={item.html ? null : item.value}
                />
              ))}
            </ul>
          </div>
          <button
            style={{ backgroundColor: "white", border: "none", color: "black" }}
            aria-label="Close"
            onClick={() => {
              console.log("Close button has been clicked");
            }}
          >
            <img src={closeIcon} alt="close button" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
};
