import alxLogo from "./alxlogo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={alxLogo} alt="the logo" />
        <p>School dashboard</p>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <p className="inputs">
          <p>
            <label for="email">email</label>
            <input id="email" />
          </p>
          <p>
            <label for="password">password</label>
            <input id="password" />
          </p>
          <p>
            <button>OK</button>
          </p>
        </p>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
