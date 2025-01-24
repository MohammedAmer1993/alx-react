import "./Login.css";
import { useState } from "react";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState({
    email: "",
    password: "",
    submit: false,
  });

  if (
    enableSubmit.submit === false &&
    enableSubmit.email &&
    enableSubmit.password
  ) {
    setEnableSubmit((prev) => ({ ...prev, submit: true }));
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }
  function handleLoginSubmit() {
    setIsLoggedIn(true);
  }
  return (
    <>
      <p data-testid="login">Login to access the full dashboard</p>
      <form className="inputs" onSubmit={handleLoginSubmit}>
        <p>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </p>
        <p>
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </p>
        <p>
          <button type="submit" disabled={enableSubmit.submit}>
            OK
          </button>
        </p>
      </form>
    </>
  );
}
