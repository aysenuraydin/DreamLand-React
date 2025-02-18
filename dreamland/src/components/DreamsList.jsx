import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DreamCard } from './DreamCard';

export const DreamsList  = ({ dreams,edit }) => {
    return(
    <div id="dreams">
        {
            [...dreams].reverse().map((dream, index)=>{
            return(
                <DreamCard dream = {dream} index = {index}  edit = {edit} key = {index}/>
            )
            })
        }
        { dreams.length==0 &&
            <div className="text-center mt-4 p-7 rounded-md shadow-md border border-gray-300 bg-white">
            <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
            No dreams available.
        </div>
        }
        </div>
    )
}
