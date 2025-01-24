import "./App.css";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "React project due soon" },
  {
    id: 3,
    type: "urgent",
    html: { __html: "<strong>Urgent requirement</strong>" },
  },
];

function App({ isLoggedIn = true, logOut }) {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  function handleShowDisplayDrawer() {
    setDisplayDrawer(true);
  }
  function handleHideDisplayDrawer() {
    setDisplayDrawer(false);
  }
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "h") {
        alert("Logging you out");
        logOut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [logOut]);
  return (
    <>
      <div className="header-container">
        <Header />
        <Notifications
          data-testid="Notifications"
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleHideDisplayDrawer={handleHideDisplayDrawer}
          handleShowDisplayDrawer={handleShowDisplayDrawer}
        />
      </div>
      <div className="App" data-testid="app">
        <div className="App-body" data-testid="body">
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              {" "}
              <CourseList listCourses={listCourses} />{" "}
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            some test herer for nothing I will chang it later
          </BodySection>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
