import React from "react";
import "./Notifications.css";
import closeIcon from "./close.png";
import { getLatestNotification } from "./utils";

export default function Notifications() {
  return (
    <div className="Notifications">
      <div>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="low">New course available</li>
          <li data-priority="medium">New resume available</li>
          <li
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
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
  );
}
