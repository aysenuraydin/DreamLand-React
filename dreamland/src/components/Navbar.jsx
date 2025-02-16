
import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Logo } from "../icons/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { NavbarLinks } from "./NavbarLinks";
import { useDispatch, useSelector } from "react-redux";


export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);


  const [bar, setBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <nav className={`px-10 fixed top-0 w-full transition-all duration-500 z-150
      ${scrolled ? "bg-[#F3F4F6] shadow-xl border-b border-gray-300" : ""} ${bar ? "bg-[#F3F4F6]" : ""}`}>
      <div className="max-w-[70rem] mx-auto flex justify-between px-5 p-3">
        <Link to="/">
          <span className="text-2xl mr-1 sm:text-3xl tracking-widest text-[#1f3f96]">Dream Land</span>
          <Logo />
        </Link>
        <div className="flex">
          <div className="hidden lg:block"> <NavbarLinks/> </div>
          { user.uid && ( <div className="text-[#92A2CD] lg:hidden block pt-1 pr-4"> {user.displayName}</div> ) }
          <div className="lg:hidden inline hover:border text-[#1f3f96] text-xl p-2 py-1 rounded-md cursor-pointer" onClick={()=>{setBar(!bar)}}>
            <FontAwesomeIcon icon={faBars}/>
          </div>
        </div>
      </div>

      { bar && <div className="lg:hidden block mx-auto pb-3 px-6"> <NavbarLinks/> </div> }
    </nav>
  );
};

