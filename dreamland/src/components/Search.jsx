import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const Search = () => {
    return(
        <>
            <div className="z-0">
                <input className="px-2 mr-2 py-1 pr-7 w-28 h-9 rounded-lg border bg-white" type="text" name="search" id="search" placeholder="Search Products ..."/>
                <FontAwesomeIcon icon={faXmark} 
                className="text-lg absolute right-12 sm:top-[0.4rem] 
                top-[0.5rem] text-gray-400 p-1 cursor-pointer bg-white"/>
            </div>
            <div id="search-link" className="cursor-pointer rounded-md px-2 text-sm font-medium border hover:scale-110 h-9 pt-[0.4rem] bg-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-md"/>
            </div>
        </>
    )
}