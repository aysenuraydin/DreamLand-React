import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const Pagination = ({pageNumber=4, pageTotal=10, changePage}) => {
    return(
            <div className="flex justify-center pt-20 px-0 text-gray-500">
                <div className="w-1/2 flex justify-between">
                    <div className={`text-gray-600 hover:text-gray-700 px-4 flex gap-x-3`}>
                    <button onClick={()=> changePage(1)} className={` ${pageNumber==1 || pageNumber==2?'invisible':''}`}>
                            <FontAwesomeIcon icon={faAnglesRight} className="text-xl  cursor-pointer hover:scale-125 rotate-180 inline-block" />
                        </button>
                        <button onClick={()=> changePage(pageNumber-1)} className={` ${pageNumber==1 ?'invisible':''}`}>
                            <FontAwesomeIcon icon={faAngleRight} className="text-xl  cursor-pointer hover:scale-125 rotate-180 inline-block" />
                        </button>
                    </div>
                    <ul className="flex gap-x-10 items-center">
                        <li onClick={()=> changePage(pageNumber-1)}>
                            <span className={`hover:scale-110 cursor-pointer p-2 ${pageNumber==1?'invisible':''}`}>
                                {pageNumber - 1}
                            </span>
                        </li>
                        <li>
                            <span className="text-2xl hover:scale-110 cursor-pointer border p-2 px-3 rounded-xl shadow-lg bg-white">
                                {pageNumber}
                            </span>
                        </li>
                        <li onClick={()=> changePage(pageNumber+1)}>
                        <span className={`hover:scale-110 cursor-pointer p-2 ${pageNumber==pageTotal?'invisible':''}`}>
                                {pageNumber + 1}
                            </span>
                        </li>
                    </ul>
                    <div className={`text-gray-600 hover:text-gray-700 px-4 flex gap-x-3`}>
                        <button onClick={()=> changePage(pageNumber+1)} className={` ${pageNumber==pageTotal ?'invisible':''}`}>
                            <FontAwesomeIcon icon={faAngleRight} className="text-xl  cursor-pointer hover:scale-125" />
                        </button>
                        <button onClick={()=> changePage(pageTotal)} className={` ${pageNumber==pageTotal || pageNumber==pageTotal-1 ?'invisible':''}`}>
                            <FontAwesomeIcon icon={faAnglesRight} className="text-xl  cursor-pointer hover:scale-125" />
                        </button>
                    </div>
                </div>
            </div>

    )
}