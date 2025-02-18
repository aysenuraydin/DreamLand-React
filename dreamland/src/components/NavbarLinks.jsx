
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/authAction";
import { useNavigate } from "react-router-dom"; 


export const NavbarLinks = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch(); 

  const logout = async () => {
    await dispatch(startLogout())
    navigate("/"); 
  }
  return (
    <ul className="gap-x-3 pt-2 md:flex md:flex-row flex-col">
      { user?.uid && (
          <>
            <li className="text-[#92A2CD] lg:block hidden"> {user.displayName}</li>
            <li className="navbar-links">
              <NavLink to="/admin" className={({ isActive }) => isActive?'navbar min-w-32 bg-[#92A2CD] text-white border-[#b4c2ea]':'navbar min-w-32'}>
                Admin Panel
              </NavLink>
            </li>
          </>
        ) 
      }
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
      { user?.uid ? (
        <li className="navbar-links md:max-w-14">
          <NavLink className={({ isActive }) => isActive?'navbar-auth bg-[#92A2CD] text-white border-[#b4c2ea]':'navbar-auth'} onClick={logout}>
              <FontAwesomeIcon icon={faRightToBracket}/>
          </NavLink>
        </li>
      ):(
        <li className="navbar-links md:max-w-14">
          <NavLink to="/login" className={({ isActive }) => isActive?'navbar-auth bg-[#92A2CD] text-white border-[#b4c2ea]':'navbar-auth'}>
            <div className="rotate-180 inline-block"><FontAwesomeIcon icon={faRightToBracket}/></div>
          </NavLink>
        </li>
      )}
    </ul>
  );
};
