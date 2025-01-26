import alxLogo from "../assets/alxlogo.jpg";
import { useContext } from "react";
import { AppContext } from "../App/AppContext";
import Notifications from "../Notifications/Notifications";
import "./Header.css";
export default function Header({
  listNotifications,
  displayDrawer,
  handleHideDisplayDrawer,
  handleShowDisplayDrawer,
  markNotificationAsRead,
}) {
  const { email, logOut } = useContext(AppContext);
  return (
    <>
      <section id="logoutSection">
        welcome {email} <button onClick={logOut}>log out!</button>
      </section>
      <div className="header-container">
        <div className="App-header" data-testid="header">
          <img src={alxLogo} alt="the logo" />
          <h1>School dashboard</h1>
        </div>
        <Notifications
          data-testid="Notifications"
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleHideDisplayDrawer={handleHideDisplayDrawer}
          handleShowDisplayDrawer={handleShowDisplayDrawer}
          markNotificationAsRead={markNotificationAsRead}
        />
      </div>
    </>
  );
}
