import React from "react";

export const CommentCard = ({review, opacity=false}) => {
    return(
        <>
            <div className="flex items-start p-4 w-full my-6 border border-gray-300 rounded-xl shadow-md bg-gray-50" style={{ opacity: opacity? 0.5: 1 }}>
                <img className="w-12 h-12 mt-3 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>
                <div className="w-full">
                    <div className="w-full text-lg font-semibold text-gray-900 flex justify-between pr-4">
                        <div>
                            {review.username}
                            {opacity && (
                                <div className="font-semibold text-[0.7rem] text-[#1f3f96]">Your comment has not been approved yet ! </div>
                            )}
                        </div>
                        <span className="text-[0.7rem] text-gray-700 my-auto"> {review.date} </span>
                    </div>
                    <p className="w-full text-gray-700 mt-2 text-sm"> {review.comment} </p>
                </div>
            </div>
        </>
    )
}