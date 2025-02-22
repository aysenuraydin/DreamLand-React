import React  from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { MessageCard } from './MessageCard';

export const MessageList = ({ get, filteredMessages }) => {
    return(
        <div id="messages" className="space-y-3">
            {
                [...filteredMessages].map((message, index)=>
                <MessageCard get={get} message={message} index={index} key={index}/>)
            }
            {
                filteredMessages.length==0 && (
                <div className="text-center mt-4 p-7 rounded-md shadow-md border border-gray-300 bg-gray-50">
                    <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
                    No messages available.
                </div>
                )
            }
        </div>
    )
}