import React from "react"
import { NavLink,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage,faComment ,faEnvelope,faCircleInfo,faUser,faGear } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { Logo } from "../icons/logo";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from '../hooks/useAuth';

export const AdminSidebar = () => {
    const user = useAuth(); 

    const email = import.meta.env.VITE_FIREBASE_ADMIN_EMAIL;
    return(
        <div className="px-3 lg:max-h-full sm:mt-0 max-h-44 overflow-scroll">
            <ul>
                <li>
                    <NavLink to="/admin" end
                        className={({ isActive }) => isActive ? 'admin-active admin-sidebar':'admin-sidebar'}>
                        <FontAwesomeIcon icon={faMicrosoft} className='admin-icons'/>
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
                        <Logo color="#F7DE06" size={45}/></span>
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
                {
                    user.email == email? (
                        <li>
                            <NavLink to="/admin/admins" 
                            className={({ isActive }) => isActive ? 'admin-active admin-sidebar':'admin-sidebar'}>
                                <FontAwesomeIcon icon={faUser} className="admin-icons"/>
                                Admins
                            </NavLink>
                        </li>
                    ):(<></>)
                }
                <li>
                    <NavLink to="/admin/settings" 
                    className={({ isActive }) => isActive ? 'admin-active admin-sidebar':'admin-sidebar'}>
                        <FontAwesomeIcon icon={faGear} className="admin-icons"/>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}