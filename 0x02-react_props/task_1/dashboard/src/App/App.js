import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";

function App() {
  return (
    <>
      <Notifications />
      <div className="App" data-testid="app">
        <Header />
        <div className="App-body" data-testid="body">
          <Login />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
