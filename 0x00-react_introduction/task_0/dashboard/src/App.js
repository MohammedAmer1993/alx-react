import alxLogo from "./alxlogo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={alxLogo} alt="the logo" />
        <p>School dashboard</p>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - ALX</p>
      </div>
    </div>
  );
}

export default App;
