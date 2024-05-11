import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [logBtn, setLogBtn] = useState("login");

  //custom hook
  const onlineStatus = useOnlineStatus();

  //useContext to use React Context Store
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between p-6 m-3 bg-yellow-100 sm:bg-green-100 lg:bg-pink-100 shadow-md">
      <div className="logo-container ">
        <img className="w-20" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-1.5">
            Online Status: {onlineStatus ? "🟩" : "🛑"}
          </li>
          <li className="px-1.5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1.5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-1.5">
            <Link to="contact">Contact</Link>
          </li>
          <li className="px-1.5">
            <Link to="grocerry">Grocerry</Link>
          </li>
          <li className="px-1.5">Cart</li>
          <button
            className="px-1.5"
            onClick={() => {
              logBtn === "login" ? setLogBtn("logout") : setLogBtn("login");
            }}
          >
            {logBtn}
          </button>
          <li className="px-1.5 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
