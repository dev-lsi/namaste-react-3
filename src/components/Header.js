
import { Link } from "react-router-dom";
import logo  from "../assets/logo.png";
import useNetworkStatus from "../utils/useNetworkStatus.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Header = () => {

  const netStatus = useNetworkStatus();
  const userContext = useContext(UserContext);
    
  return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        
        <nav>
          <ul className="nav-ul">
            <li className="nav-ul-li">
              <Link to={"/"} className="">Home</Link>
            </li>
            <li className="nav-ul-li">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="nav-ul-li">
              <Link to={"/contacts"}>Contacts</Link>
              </li>
          </ul>
        </nav>
        <div className="header-actions">
        <button className="login-btn">Login</button>
        {netStatus ? <span>online:✅</span>: <span>offline🔴</span>}
        <h4>{userContext.userName}</h4>
        </div>
        
        
      </div>
    );
  };

export default Header;