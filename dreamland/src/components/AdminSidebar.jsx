import React from "react"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage,faComment ,faEnvelope,faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { Logo } from "../icons/logo";

export const AdminSidebar = () => {
    return(
        <div className="px-3 lg:max-h-full sm:mt-0 max-h-44 overflow-scroll">
            <ul>
                <li>
                    <NavLink to="/admin" end
                        className={({ isActive }) => isActive ? 'admin-active admin-sidebar':'admin-sidebar'}>
                        <FontAwesomeIcon icon={faMicrosoft} className={'admin-icons' }/>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/informations" 
                        className={({ isActive }) => isActive ? 'admin-active admin-sidebar':'admin-sidebar'}>
                        <FontAwesomeIcon icon={faCircleInfo} className="admin-icons"/>
                        Informations
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/dreams" 
                        className={({ isActive }) => isActive ? 'admin-active admin-sidebar':'admin-sidebar'}>
                        <span className="admin-icons relative top-1">
                        <Logo color="#98A1AE" size={45}/></span>
                        Dreams
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/reviews" 
                    className={({ isActive }) => isActive ? 'admin-active admin-sidebar':'admin-sidebar'}>
                    <FontAwesomeIcon icon={faComment} className="admin-icons"/>
                        Reviews
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/messages" 
                    className={({ isActive }) => isActive ? 'admin-active admin-sidebar':'admin-sidebar'}>
                        <FontAwesomeIcon icon={faEnvelope} className="admin-icons"/>
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/headers" 
                    className={({ isActive }) => isActive ? 'admin-active admin-sidebar':'admin-sidebar'}>
                        <FontAwesomeIcon icon={faImage} className="admin-icons"/>
                        Headers
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
