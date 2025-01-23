import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

export default function Notifications({ displayDrawer = true }) {
  return (
    <div className="menuItem">
      <p>Your notifications</p>
      {displayDrawer ? (
        <div className="Notifications" data-testid="Notifications">
          <div>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem value="New course available" type="low" />
              <NotificationItem value="New resume available" type="medium" />
              <NotificationItem
                html={{ __html: getLatestNotification() }}
                type="default"
              />
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
