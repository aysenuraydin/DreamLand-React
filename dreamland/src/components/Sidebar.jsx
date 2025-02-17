import React from "react"
import { NavLink } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

export const Sidebar = ({titles}) => {
    return (
        <div className="px-3 lg:max-h-full pt-9 max-h-52 overflow-scroll">
            {titles.length === 0 ? (
                <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/>
                ) : (null)
            }
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