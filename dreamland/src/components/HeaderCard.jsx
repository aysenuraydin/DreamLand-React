import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Confirm } from '../icons/confirm';
import { Reject } from '../icons/Reject';

export const HeaderCard = ({header, edit, index}) => {
  const formattedDate = new Date(header.date).toISOString().replace("T", " ").substring(0, 19);
    return(
      <div className="flex border border-gray-300 items-center px-3 shadow rounded-md  bg-white">
        <span className="w-1/6 text-center text-sm">
          {index+1}
        </span>
        <span className="w-1/3 text-center text-sm">
        <img src={header.imageUrl || "https://dummyimage.com/600x500/ccc/aaa"}className="object-cover"/>
        </span>
        <span className="w-6/12 text-center text-sm">
          <div className="inline-block rounded-md mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {header.name} </div>
        </span>
        <span className="w-3/12 text-sm">
          <div className="flex justify-center rounded-md mb-3 capitalize text-sm mt-3 p-2 font-medium"> {header.isActive ? <Confirm/> : <Reject/> } </div>
        </span>
        <span className="w-4/12 text-sm">
          <div className="inline-block rounded-md mb-3 mx-2 capitalize text-[0.7rem] min-w-20 mt-3 p-2 font-medium text-center"> {formattedDate} </div>
        </span>
        <div className="w-24 flex items-center justify-end">
            <button className="block mx-1 p-1 py-2 border border-gray-400 text-sm hover:text-white hover:bg-gray-700 rounded-md text-center w-12 cursor-pointer mr-2" 
            onClick={()=> edit(header)}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
        </div>
      </div>
    )
  }