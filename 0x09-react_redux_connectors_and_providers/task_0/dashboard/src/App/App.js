import "./App.css";
import { useEffect, useState, useCallback } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { AppContext, user } from "./AppContext";

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

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isUserLoggedIn, // Mapping state to props
  };
};

// export const connet = connect(mapStateToProps)(App);

function App() {
  const [{ email, password, isLoggedIn }, setLogInData] = useState(user);
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [listNot, setListNot] = useState(
    listNotifications.map((item) => ({ ...item }))
  );

  const logOut = useCallback(() => {
    setLogInData({ user: "", password: "", isLoggedIn: false });
  }, []);

  function markNotificationAsRead(id) {
    setListNot((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }
  function logIn(email, password) {
    setLogInData({ email, password, isLoggedIn: true });
  }
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
        logOut(user);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [logOut]);
  return (
    <>
      <AppContext.Provider value={{ email, password, isLoggedIn, logOut }}>
        <Header
          markNotificationAsRead={markNotificationAsRead}
          listNotifications={listNot}
          displayDrawer={displayDrawer}
          handleHideDisplayDrawer={handleHideDisplayDrawer}
          handleShowDisplayDrawer={handleShowDisplayDrawer}
        />

        <div className="App" data-testid="app">
          <div className="App-body" data-testid="body">
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                {" "}
                <CourseList listCourses={listCourses} />{" "}
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              some test herer for nothing I will chang it later
            </BodySection>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
