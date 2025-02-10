
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket} from "@fortawesome/free-solid-svg-icons";
export const NavbarLinks = () => {
  return (
    <ul className="gap-x-3 pt-2 md:flex md:flex-row flex-col">
      <li className="navbar-links">
        <NavLink to="/admin" className={({ isActive }) => isActive?'navbar min-w-32 bg-[#92A2CD] text-white border-[#b4c2ea]':'navbar min-w-32'}>
          Admin Panel
        </NavLink>
      </li>
      <li className="navbar-links">
        <NavLink to="/"  className={() => 
            location.pathname === "/" || location.pathname.startsWith("/dream") 
              ? 'navbar bg-[#92A2CD] text-white border-[#b4c2ea]' 
              : 'navbar'
          }>
          Home
        </NavLink>
      </li>
      <li className="navbar-links">
        <NavLink to="/about" className={({ isActive }) => isActive?'navbar bg-[#92A2CD] text-white border-[#b4c2ea]':'navbar'}>
          About
        </NavLink>
      </li>
      <li className="navbar-links">
        <NavLink to="/contact" className={({ isActive }) => isActive?'navbar bg-[#92A2CD] text-white border-[#b4c2ea]':'navbar'}>
          Contact
        </NavLink>
      </li>
      <li className="navbar-links">
        <NavLink to="/faqs" className={({ isActive }) => isActive?'navbar bg-[#92A2CD] text-white border-[#b4c2ea]':'navbar'}>
          Faqs
        </NavLink>
      </li>
      <li className="navbar-links md:max-w-14">
        <NavLink to="/login" className={({ isActive }) => isActive?'navbar-auth bg-[#92A2CD] text-white border-[#b4c2ea]':'navbar-auth'}>
          {/* <FontAwesomeIcon icon={faRightToBracket}/> */}
          <div className="rotate-180 inline-block"><FontAwesomeIcon icon={faRightToBracket}/></div>
        </NavLink>
      </li>
    </ul>
  );
};
