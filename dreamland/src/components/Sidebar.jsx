import React from "react"
import { NavLink } from "react-router-dom";

export const Sidebar = ({titles}) => {
    return (
        <div className="px-3 lg:max-h-full mt-10 sm:mt-0 max-h-52 overflow-scroll">
            <ul>
                {
                    titles.map((title,index)=> (
                        <li key={index} className="my-3">
                            <NavLink to={`/dream/${title.id}`}
                            className={({ isActive }) => isActive ? 'sidebar bg-[#1f3f96a2] text-white ':'sidebar'}>
                                {title.id}-{title.title}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};



// import React, { useEffect } from "react";
// import { useNavigate, useLocation, useParams } from "react-router-dom";

// export const Sidebar = ({ titles, editDream }) => {
//     const location = useLocation(); 
//     const navigate = useNavigate(); 
//     const { id } = useParams();
//     const pathname = location.pathname;

//     const edit = (id) => {
//         editDream(id);
//         navigate(`/dream/${id}`);
//     };

//     return (
//         <div className="px-3 lg:max-h-full mt-10 sm:mt-0 max-h-52 overflow-scroll">
//             <ul>
//                 {titles.map((title, index) => {
//                     const isActive = location.pathname === `/dream/${title.id}`;

//                     return (
//                         <li 
//                             key={index} 
//                             className={`sidebar border ${isActive ? "text-[#f6d1cb]" : ""}`} 
//                             onClick={() => edit(title.id)}
//                         >
//                             {title.id} - {title.title}
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };