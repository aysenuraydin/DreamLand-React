import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const UserCard = ({user, edit, index}) => {
    return(
      <div className="flex border border-gray-300 items-center p-3 shadow rounded-md  bg-white">
        <span className="w-1/6 text-center text-sm">
          {index+1}
        </span>
        <span className="w-6/12 text-center text-sm">
          <div className="inline-block rounded-md mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {user.email} </div>
        </span>
        <span className="w-4/12 text-sm">
          <div className="inline-block rounded-md mb-3 mx-2 capitalize text-[0.7rem] min-w-20 mt-3 p-2 font-medium text-center"> {user.date} </div>
        </span>
        <div className="w-24 flex items-center justify-end">
            {
              user.email!="aysenuraydin292@gmail.com" ? (
                <button className="block mx-1 p-1 py-2 border border-gray-400 text-sm hover:text-white hover:bg-gray-700 rounded-md text-center w-12 cursor-pointer mr-2"   onClick={()=> edit(user)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              ): (<></>)
            }
        </div>
      </div>
    )
  }