
import logo  from "../assets/logo.png";

const Header = () => {
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <nav>
          <ul className="nav-ul">
            <li className="nav-ul-li">Home</li>
            <li className="nav-ul-li">About</li>
            <li className="nav-ul-li">Contacts</li>
          </ul>
        </nav>
        <button>Login</button>
      </div>
    );
  };

export default Header;