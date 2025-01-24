import alxLogo from "../assets/alxlogo.jpg";
import "./Header.css";
export default function Header() {
  return (
    <div className="App-header" data-testid="header">
      <img src={alxLogo} alt="the logo" />
      <h1>School dashboard</h1>
    </div>
  );
}
