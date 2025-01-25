import { getFooterCopy, getFullYear } from "../utils/utils";
import "./Footer.css";
import { AppContext } from "../App/AppContext";
import { useContext } from "react";

export default function Footer() {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <>
      <div className="App-footer" data-testid="footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
      {isLoggedIn ? <p>Contact us</p> : null}
    </>
  );
}
