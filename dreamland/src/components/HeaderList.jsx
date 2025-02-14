import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { HeaderCard } from './HeaderCard';

export const HeaderList = ({headers, edit}) => {
    return(
      <div id="headers" className="space-y-5 overflow-scroll h-[25rem]">
      {
        [...headers].reverse().map((header, index)=>{
        return(
          <HeaderCard key={index} header={header} index={index} edit={edit}/>
        )
        })
      }
      {
        headers.length==0 && (
          <div className="bg-white text-center mt-4 p-7 rounded-md shadow-md border border-gray-300">
            <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
              No headers image available.
          </div>
        )
      }
    </div>
    )
  }