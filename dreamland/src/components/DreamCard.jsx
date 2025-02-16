import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const DreamCard  = ({ dream, index, edit }) => {
    return(
        <div className="flex border border-gray-300 items-center p-3 shadow rounded-lg  bg-white my-3">
            <span className="w-1/6 text-center text-sm">
            {index+1}
            </span>
            <span className="w-10/12 text-center text-sm">
                <div className="inline-block rounded-md
                mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium">
                {dream.title}
                </div>
            </span>
            <span className="w-1/3 text-center text-sm">
                {/* {dream.date} */}{dream.id}
            </span>
            <span className="w-1/6 flex items-center justify-end pr-4">
                <button className="block mx-1 p-1 py-2 border border-gray-400 text-sm hover:text-white hover:bg-gray-700 rounded-md text-center w-12 cursor-pointer mr-2"
                onClick={()=>edit(dream)}>
                    <FontAwesomeIcon icon={faPenToSquare} className="text-sm"/>
                </button>
            </span>
        </div>
    )
}