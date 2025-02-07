import React from "react"
import { NavLink } from "react-router-dom";
const dizi = [1,2,3,4,5,6,7,8,9,13,4,5,6,7,8,9,10]
export const Sidebar = () => {
    return(
        <div className="px-3 lg:max-h-full mt-10 sm:mt-0 md:max-h-96 max-h-44 overflow-scroll">
            <ul>
                {
                    dizi.map(i=> (
                        <li key={i} className="p-2 px-4 cursor-pointer border  border-gray-300 shadow rounded-full my-3 hover:bg-gray-100">
                            <NavLink to="/" >Lorem, ipsum dolor</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}