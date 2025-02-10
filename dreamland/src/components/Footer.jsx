import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Twiter }  from "../icons/twiter"
import { Instagram } from '../icons/instagram';
import { Github } from '../icons/github';
import { Facebook } from '../icons/facebook';
export const Footer = () => {
  return(
    <div className="mt-20 sticky top-full 
    bg-gray-100 px-10">
        <div className="max-w-[70rem] px-4 pt-10 pb-5 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                <div className="px-5 py-2">
                    <NavLink to="/"
                    className={({ isActive }) => isActive?'footer-link text-[#4768c4ec]':'footer-link' } >
                        Home
                    </NavLink>
                </div>
                <div className="px-5 py-2">
                    <NavLink to="/about"
                    className={({ isActive }) => isActive?'footer-link text-[#4768c4ec]':'footer-link' } >
                        About
                    </NavLink>
                </div>
                <div className="px-5 py-2">
                    <NavLink to="/contact"
                    className={({ isActive }) => isActive?'footer-link text-[#4768c4ec]':'footer-link' } >
                        Contact
                    </NavLink>
                </div>
                <div className="px-5 py-2">
                    <NavLink to="/faqs"
                    className={({ isActive }) => isActive?'footer-link text-[#4768c4ec]':'footer-link' } >
                        Faqs
                    </NavLink>
                </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-6">
                <NavLink to="/" href="#" 
                className="text-gray-400 hover:text-gray-500">
                    <Facebook />
                </NavLink>
                <NavLink to="/" href="#" 
                className="text-gray-400 hover:text-gray-500">
                    <Instagram />
                </NavLink>
                <NavLink to="/" href="#" className="text-gray-400 hover:text-gray-500">
                    <Twiter />
                </NavLink>
                <NavLink to="/" href="#" className="text-gray-400 hover:text-gray-500">
                    <Github />
                </NavLink>
            </div>
            <p className="mt-8 text-sm leading-6 text-center text-gray-400">
                © 2025 AYŞENUR AYDIN
            </p>
        </div>
    </div>
  )
}