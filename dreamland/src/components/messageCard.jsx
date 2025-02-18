import React  from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPenToSquare, faXmark, faPhone} from "@fortawesome/free-solid-svg-icons";

export const MessageCard = ({ get, message, index }) => {
    const formattedDate = new Date(message.date).toISOString().replace("T", " ").substring(0, 19);
    return(
        <div className="flex border border-gray-300 items-center p-1 shadow rounded-md  bg-white">
            <span className="w-1/6 text-center text-sm">
                {index+1}
            </span>
            <span className="w-1/3 text-center text-sm">
                <div
                className="inline-block rounded-md
                mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {message.fullname} </div>
            </span>
            <span className="w-[45%] text-center text-sm">
                <div
                className="inline-block rounded-md
                mb-3 mx-2 capitalize min-w-20 mt-3 p-2 text-[0.7rem]"> 
                <div><FontAwesomeIcon className='pr-1 text-gray-500' icon={faEnvelope} />{message.email}</div>
                <div><FontAwesomeIcon className='pr-1 text-gray-500' icon={faPhone} />{message.phone}</div> 
                </div>
            </span>
            <span className="w-1/3 text-center text-sm">
                <div
                className="inline-block rounded-md text-[0.7rem] mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {formattedDate}  </div>
            </span>
            <span className="w-1/12">
                <div  className="flex items-center justify-center">
                <button className="block mx-1 p-1 py-2 border border-gray-400 text-sm hover:text-white hover:bg-gray-700 rounded-md text-center w-12 cursor-pointer mr-2"  onClick={()=> get(message)}>
                <FontAwesomeIcon icon={faPenToSquare} className="text-sm"/>
                </button>
                </div>
            </span>
        </div>
    )
}