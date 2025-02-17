import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Reject } from '../icons/Reject';
import { Confirm } from '../icons/confirm';

export const ReviewCard = ({review, get, index}) => {
    return(
        <div className="flex border  border-gray-300 items-center p-1 shadow rounded-md bg-white">
            <span className="w-1/6 text-center text-sm">
            {index+1}
            </span>
            <span className="w-1/3 text-center text-sm">
            <div
            className="inline-block rounded-md
            mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {review.username} </div>
            </span>
            <span className="w-1/3 text-center text-sm">
            <Link to="/dream/9" className="inline-block rounded-md
            mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium cursor-pointer hover:underline"> {review.dreamTitle}</Link>
            </span>
            <span className="w-1/3 text-center text-sm">
            <div className="inline-block rounded-md
            mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> 
                { review.isConfirm ? <Confirm/> : <Reject/> } 
            </div>
            </span>
            <span className="w-1/4 text-center text-sm">
            <div
            className="inline-block rounded-md
            mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {review.date} </div>
            </span>
            <span className="w-1/6">
            <div  className="flex items-center justify-center">
                <button className="block mx-1 p-1 py-2 border border-gray-400 text-sm hover:text-white hover:bg-gray-700 rounded-md text-center w-12 cursor-pointer" onClick={()=> get(review)}>
                <FontAwesomeIcon icon={faPenToSquare} className="text-sm"/>
                </button>
            </div>
            </span>
        </div>
    )
}