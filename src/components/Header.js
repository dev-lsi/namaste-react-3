
import { Link } from "react-router-dom";
import logo  from "../assets/logo.png";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";

const Header = () => {
    
  return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
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