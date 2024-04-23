import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logBtn, setLogBtn] = useState("login");

  //custom hook
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟩" : "🛑"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="grocerry">Grocerry</Link>
          </li>
          <li>Cart</li>
          <button
            className="log-btn"
            onClick={() => {
              logBtn === "login" ? setLogBtn("logout") : setLogBtn("login");
            }}
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
