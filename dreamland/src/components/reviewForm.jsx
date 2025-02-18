import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Reject } from '../icons/Reject';
import { Confirm } from '../icons/confirm';
export const ReviewForm = ({review, edit,  del}) => {
    const formattedDate = new Date(review.date).toISOString().replace("T", " ").substring(0, 19);
    return(
        <div className="md:w-4/5 w-full mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
            <div className="mb-3 flex">
                <label htmlFor="color" className="w-24 mt-3 text-sm">Username</label>
                <div className="mt-1 p-1 w-full border border-gray-300 rounded-lg text-gray-800">{review.username}</div>
            </div>
            <div className="mb-3 flex">
                <label htmlFor="color" className="w-24 mt-3 text-sm">Datetime</label>
                <div className="mt-1 p-1 w-full border border-gray-300 rounded-lg text-gray-800">{formattedDate}</div>
            </div>
            <div className="mb-3 flex">
                <label htmlFor="color" className="w-24 mt-3 text-sm">Dreams</label>
                <div className="mt-1 p-1 w-full border border-gray-300 rounded-lg text-gray-800">{review.dreamTitle}</div>
            </div>
            <div className="flex mb-5">
                <label htmlFor="color" className="w-24 mt-3 text-sm">Reviews</label>
                <div className="mt-1 p-1 w-full border border-gray-300 rounded-lg text-gray-800 max-h-40 h-36 overflow-scroll">{review.comment}</div>
            </div>

            <div className="flex">
                <span className="inline-block w-24 mt-3 text-sm"></span>
                <div className="w-full flex">
                    {
                        review.isConfirm && (
                            <button className="review-button" onClick={()=> edit(review.id)}>
                            <span className='scale-75 pb-1'><Reject/></span>
                            <span className='text-[#1f3f96a2]'>Reject</span>
                            </button>
                        )
                    }
                    {
                        !review.isConfirm && (
                            <button className="review-button" onClick={()=> edit(review.id)}>
                            <span className='scale-75 pb-1'><Confirm/></span>
                            <span className='text-[#1f3f96a2]'>Confirm</span>
                            </button>
                        )
                    }
                    <div className="block w-full text-sm mr-2 pt-3 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center cursor-pointer" onClick={()=> del(review.id)}>
                    Delete <FontAwesomeIcon icon={faTrash}/>
                    </div>
                </div>
            </div>
        </div>
    )
}



