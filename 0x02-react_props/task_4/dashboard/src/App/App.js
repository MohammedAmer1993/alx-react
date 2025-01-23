import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";

function App({ isLoggedIn = false }) {
  return (
    <>
      <div className="header-container">
        <Header />
        <Notifications data-testid="Notifications" />
      </div>
      <div className="App" data-testid="app">
        <div className="App-body" data-testid="body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
