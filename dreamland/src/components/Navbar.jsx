
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "../icons/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <nav className={`px-10 fixed top-0 w-full transition-all duration-500 z-150
      ${scrolled ? "bg-[#ffffff] shadow-xl" : ""}`}>
      <div className="max-w-[70rem] mx-auto flex justify-between px-5 p-3">
        <Link to="/">
          <span className="text-2xl mr-1 sm:text-3xl tracking-widest text-[#1f3f96]">Dream Land</span>
          <Logo />
        </Link>
        <ul className="gap-x-3 pt-2 hidden md:flex">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive?'navbar bg-[#f6d1cb] text-[#1f3f96] border-[#1f3f96]':'navbar' }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive?'navbar bg-[#f6d1cb] text-[#1f3f96] border-[#1f3f96]':'navbar'}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive?'navbar bg-[#f6d1cb] text-[#1f3f96] border-[#1f3f96]':'navbar'}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/faqs" className={({ isActive }) => isActive?'navbar bg-[#f6d1cb] text-[#1f3f96] border-[#1f3f96]':'navbar'}>
              Faqs
            </NavLink>
          </li>
        </ul>
        <div className="md:hidden inline hover:border text-[#1f3f96] text-xl p-2 py-1 rounded-md cursor-pointer">
          <FontAwesomeIcon icon={faBars} className="text-[#1f3f96]"/>
        </div>
      </div>
    </nav>
  );
};