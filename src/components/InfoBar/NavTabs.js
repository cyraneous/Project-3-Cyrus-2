import React from "react";
import { Link, useLocation } from "react-router-dom";
import './NavTabs.css';
import AuthNav from "../auth-nav"
import Login from "../../pages/Login"
import Logout from "../../pages/Logout"
function NavTabs() {
 
  const location = useLocation();

  return (
    <header>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      
      <li className="nav-item">
        <Link
          to="/chat"
          className={location.pathname === "/chat" ? "nav-link active" : "nav-link"}
        >
          Chat
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/reserve"
          className={location.pathname === "/reserve" ? "nav-link active" : "nav-link"}
        >
          Reserve
        </Link>
      </li>
     
    </ul>
    <div>
      <Login />
      <Logout/>
    </div>
    </header>
  );
}

export default NavTabs;