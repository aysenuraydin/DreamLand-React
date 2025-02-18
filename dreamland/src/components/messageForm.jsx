import React  from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const MessageForm = ({del, message}) => {
    const formattedDate = new Date(message.date).toISOString().replace("T", " ").substring(0, 19);
    return(
        <div className="md:w-4/5 w-full mt-10 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
            <div className="mb-3 flex">
                <label htmlFor="name" className="w-24 mt-3 text-sm">Full Name</label>
                <div className="mt-1 p-1 w-full border rounded-lg border-gray-300 text-gray-800">{message.fullname}</div>
            </div>
            <div className="mb-3 flex">
                <label htmlFor="color" className="w-24 mt-3 text-sm">Email</label>
                <div className="mt-1 p-1 w-full border rounded-lg border-gray-300 text-gray-800">{message.email}</div>
            </div>
            <div className="mb-3 flex">
                <label htmlFor="color" className="w-24 text-sm">Phone Number</label>
                <div className="mt-1 p-1 w-full border rounded-lg border-gray-300 text-gray-800">{message.phone}</div>
            </div>
            <div className="mb-3 flex">
                <label htmlFor="color" className="w-24 mt-3 text-sm">Datetime</label>
                <div className="mt-1 p-1 w-full border rounded-lg border-gray-300 text-gray-800">{formattedDate}</div>
            </div>
            <div className="mb-6 flex">
                <label htmlFor="color" className="w-24 mt-3 text-sm">Message</label>
                <div className="mt-1 p-1 w-full border rounded-lg border-gray-300 text-gray-800 max-h-40 h-36 overflow-scroll">{message.content}</div>
            </div>
            <div className="flex">
            <span className="inline-block w-24 mt-3 text-sm"></span>
            <div className="w-full flex">
                <button className="block w-full px-4 py-2 text-sm hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center cursor-pointer"
                onClick={()=> del(message.id)}>
                    Delete <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
            </div>
        </div>
    )
}