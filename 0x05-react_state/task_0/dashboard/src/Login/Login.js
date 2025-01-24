import "./Login.css";

export default function Login() {
  return (
    <>
      <p data-testid="login">Login to access the full dashboard</p>
      <div className="inputs">
        <p>
          <label htmlFor="email">email</label>
          <input id="email" />
        </p>
        <p>
          <label htmlFor="password">password</label>
          <input id="password" />
        </p>
        <p>
          <button>OK</button>
        </p>
      </div>
    </>
  );
}
