import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";

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

function App({ isLoggedIn = true }) {
  return (
    <>
      <div className="header-container">
        <Header />
        <Notifications
          data-testid="Notifications"
          listNotifications={listNotifications}
        />
      </div>
      <div className="App" data-testid="app">
        <div className="App-body" data-testid="body">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
