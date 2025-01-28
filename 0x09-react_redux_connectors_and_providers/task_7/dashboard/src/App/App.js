import "./App.css";
import { useEffect, useState, useCallback } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { AppContext, user } from "./AppContext";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "../actions/uiActionCreators";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
    isLoggedIn: state.ui.isUserLoggedIn,
    displayDrawer: state.isNotificationDrawerVisible,
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export const connectRed = connect(mapStateToProps, mapDispatchToProps)(App);
function App({ displayDrawer }) {
  const [{ email, password, isLoggedIn }, setLogInData] = useState(user);
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
  function handleLogin() {
    const { loginRequest } = this.props;
    const email = "user@example.com";
    const password = "password123";

    loginRequest(email, password); // Dispatch the async loginRequest action
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
                <Login logIn={handleLogin} />
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

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

// Define defaultProps for the component
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export default App;
