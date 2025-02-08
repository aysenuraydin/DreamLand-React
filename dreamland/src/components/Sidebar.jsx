import React from "react"
import { NavLink } from "react-router-dom";

const dizi = [1,2,3,4,5,6,7,8,9,13,4]
export const Sidebar = () => {
    return (
        <div className="px-3 lg:max-h-full mt-10 sm:mt-0 max-h-52 overflow-scroll">
            <ul>
                {
                    dizi.map((i,index)=> (
                        <li key={index} className="p-2 px-4 cursor-pointer border  border-gray-300 shadow rounded-full my-3 hover:bg-gray-100">
                            <NavLink to="/" >Lorem, ipsum dolor</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};