import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { ReviewCard } from './ReviewCard';

export const ReviewList = ({reviews, get}) => {
    return(
        <div id="reviews" className="space-y-3">
            {
            [...reviews].map((review, index)=>{
                return( <ReviewCard review={review} index={index} key={index} get={get}/> )
            })
            }
            {
            reviews.length==0 && (
                <div className="bg-white text-center mt-4 p-7 rounded-md shadow-md border border-gray-300">
                    <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
                    No reviews available.
                </div>
            )
            }
        </div>
    )
}