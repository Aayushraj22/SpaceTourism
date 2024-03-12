import React from "react";
import { useLocation, NavLink } from "react-router-dom";

import "./sidebar.css";
import close from "../../assets/shared/icon-close.svg";

function Sidebar({ handleOpenSidebar }) {
  const linksList = ["/", "/destination", "/crew", "/technology"];
  const { pathname } = useLocation();

  return (
    <div className="mobile-sidebar">
      <div className="icon-container">
        <img src={close} alt="close" onClick={handleOpenSidebar} />
      </div>

      <ul className="links">
        {linksList.map((link, index) => (
          <li key={link === "/" ? "home" : link.slice(1)}>
            <NavLink to={link} className={pathname === link ? "isActive" : ""}>
              <b>0{index}&ensp;</b>
              {link === "/" ? "home" : link.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
