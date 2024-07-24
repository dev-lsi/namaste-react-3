
import { Link } from "react-router-dom";
import logo  from "../assets/logo.png";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import { useState } from "react";
import useNetworkStatus from "../utils/useNetworkStatus.js";

const Header = () => {

  //const[netStatus,setNetStatus] = useState();

  const netStatus = useNetworkStatus();
    
  return (
      <div className="header bg-orange-500">
        <img src={logo} className="logo" alt="logo" />
        <p>{netStatus?"Connected":"Disconnected"}</p>
        <nav>
          <ul className="nav-ul">
            <li className="nav-ul-li">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav-ul-li">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="nav-ul-li">
              <Link to={"/contacts"}>Contacts</Link>
              </li>
          </ul>
        </nav>
        <p className="count">{`Restaurants:`}</p>
        <button>Login</button>
      </div>
    );
  };

export default Header;