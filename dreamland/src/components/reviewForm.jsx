import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Reject } from '../icons/Reject';
import { Confirm } from '../icons/confirm';
export const ReviewForm = ({review, edit,  del}) => {
    return(
        <div className="w-4/5 mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
            <div className="mb-3 flex">
                <label htmlFor="color" className="min-w-24 mt-3 text-sm">Username</label>
                <div className="mt-1 p-1 w-full border border-gray-300 rounded-lg text-gray-800">{review.username}</div>
            </div>
            <div className="mb-3 flex">
                <label htmlFor="color" className="min-w-24 mt-3 text-sm">Created At</label>
                <div className="mt-1 p-1 w-full border border-gray-300 rounded-lg text-gray-800">{review.date}</div>
            </div>
            <div className="mb-3 flex">
                <label htmlFor="color" className="min-w-24 mt-3 text-sm">Dreams</label>
                <div className="mt-1 p-1 w-full border border-gray-300 rounded-lg text-gray-800">{review.dreamTitle}</div>
            </div>
            <div className="mb-6 flex">
                <label htmlFor="color" className="min-w-24 mt-3 text-sm">Reviews</label>
                <div className="mt-1 p-1 w-full border border-gray-300 rounded-lg text-gray-800 max-h-40 h-36 overflow-scroll">{review.comment}</div>
            </div>

            <div className="pl-[6rem]">
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
                    <button className="block w-full text-sm mr-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center cursor-pointer" onClick={()=> del(review.id)}>
                    Delete <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </div>
            </div>
        </div>
    )
}