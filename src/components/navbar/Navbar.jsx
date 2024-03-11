import React , {useState} from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenSidebar () {
    setIsOpen(prev => !prev)
  }


  return (
    <nav className="nav">
      <div className="logo">
        <img
          src={logo}
          alt="logo"
        />

      </div>

      <div className="horizontalLine"></div>
      <div className="nav-links">
        <NavLink to="/"><b>00&emsp;</b>  HOME </NavLink>
        <NavLink to="/destination"><b>01&emsp;</b>  DESTINATION</NavLink>
        <NavLink to="/crew"><b>02&emsp;</b>  CREW</NavLink>
        <NavLink to="/technology"><b>03&emsp;</b>  TECHNOLOGY</NavLink>
      </div>

      <div className="hamburger-icon">
        <img src={hamburger} alt="hamburger" onClick={handleOpenSidebar}/>
      </div>
      {isOpen && <Sidebar handleOpenSidebar={handleOpenSidebar}/>}
      
      
    </nav>
  );
}

export default Navbar;
