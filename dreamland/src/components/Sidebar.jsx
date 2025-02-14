import React from "react"
import { NavLink } from "react-router-dom";

export const Sidebar = ({titles}) => {
    return (
        <div className="px-3 lg:max-h-full pt-9 max-h-52 overflow-scroll">
            <ul>
                {
                    titles.map((title,index)=> (
                        <li key={index} className="my-3">
                            <NavLink to={`/dream/${title.id}`}
                            className={({ isActive }) => isActive ? 'sidebar bg-[#92A2CD] text-white ':'sidebar'}>
                                {title.title}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};