
import { Link } from "react-router-dom";
import logo  from "../assets/logo.png";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import { useEffect, useState } from "react";
import useNetworkStatus from "../utils/useNetworkStatus.js";

const Header = () => {

  const netStatus = useNetworkStatus();
    
  return (
      <div className="header flex justify-between items-center align-middle bg-slate-300 py-2 px-4">
        <img src={logo} className="logo w-12 animate-spin-slow" alt="logo" />
        {netStatus 
        ? <span className="w-52 text-green-600 font-extrabold text-lg animate-pulse" >{":) connected"}</span>
        : <span className="w-52 text-red-600 font-extrabold text-lg">{":( not connected"}</span>  }
        <nav>
          <ul className="nav-ul flex align-middle gap-x-10  ">
            <li className="nav-ul-li hover:text-blue-800 ">
              <Link to={"/"} className="">Home</Link>
            </li>
            <li className="nav-ul-li hover:text-blue-800">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="nav-ul-li hover:text-blue-800">
              <Link to={"/contacts"}>Contacts</Link>
              </li>
          </ul>
        </nav>
        <button>Login</button>
      </div>
    );
  };

export default Header;