import React, { useState, useEffect } from 'react';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faTrash, faComment, faStar as solidStar, faPenToSquare, faXmark, faCheck} from "@fortawesome/free-solid-svg-icons";
import { useLoaderData} from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/pagination';
import { Reject } from '../icons/Reject';
import { Confirm } from '../icons/confirm';

export const Reviews = ({reviews, review, editReview, getReview, deleteReview } ) => {
  const items = useLoaderData();
  const [visible, setVisible] = useState(false);
  const get = (id) => {
    setVisible(true);
    getReview(id);
  }
  const del = (id) => {
    setVisible(false);
    deleteReview(id);
  }
  const edit = (id) => {
    setVisible(false);
    editReview(id);
  }
  return(
    <div className="p-8">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="flex justify-between border-b-2 text-gray-400 border-gray-300 pb-[0.6rem] px-4">
          <h1 className="text-3xl">Reviews
            <FontAwesomeIcon icon={faComment} className={'admin-icons ml-4 text-2xl'}/>
          </h1>
          <div className="flex gap-x-3">
            <div className="flex items-center relative">
              <Search/>
            </div>
            {
              visible && (
                <div className="admin-button" onClick={()=> setVisible(!visible)}>
                <span className="text-red-500"> Close 
                  <FontAwesomeIcon icon={faCancel} className="text-sm pl-1"/>
                </span>
              </div>
              )
            }
          </div>
        </div>
        {
          visible && (
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
                        <button className="block w-16 text-sm mr-2 pt-1 hover:bg-gray-500 hover:text-white border border-gray-300 rounded-lg text-center cursor-pointer" onClick={()=> edit(review.id)}>
                          <Reject/>
                        </button>
                      )
                    }
                    {
                      !review.isConfirm && (
                        <button className="block w-16 text-sm mr-2 pt-1 hover:bg-gray-500 hover:text-white border border-gray-300 rounded-lg text-center cursor-pointer" onClick={()=> edit(review.id)}>
                          <Confirm/>
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
        <div className="flex items-start px-2 pb-2 mb-5 mt-16 text-gray-500 gap-x-2">
          <span className="w-1/6 bg-white text-center text-sm border border-[#f6d1cb] p-1 rounded-full">
            <span className="font-bold text-[#f6d1cb]">Number</span>
          </span>
          <span className="w-1/3 bg-white text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb]">
            <span className= "font-bold">User</span>
          </span>
          <span className="w-1/3 bg-white text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb]">
            <span className= "font-bold">Dream</span>
          </span>
          <span className="w-1/3 bg-white text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb]">
            <span className= "font-bold">Comment</span>
          </span>
          <span className="w-1/4 bg-white text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb]">
            <span className= "font-bold">Created At</span>
          </span>
          <div className="w-1/6 text-center"></div>
        </div>
        <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-4'/> 
        <div id="reviews" className="space-y-5 h-[30rem] overflow-scroll">
          {
            [...reviews].reverse().map((review, index)=>{
              return(
                <div key={index} className="flex border  border-gray-300 items-center p-1 shadow rounded-md  bg-white">
                  <span className="w-1/6 text-center text-sm">
                    {index+1} - {review.id}
                  </span>
                  <span className="w-1/3 text-center text-sm">
                    <div
                    className="inline-block rounded-md
                    mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {review.username}  </div>
                  </span>
                  <span className="w-1/3 text-center text-sm">
                    <div
                    className="inline-block rounded-md
                    mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {review.dreamId} - {review.dreamTitle} </div>
                  </span>
                  <span className="w-1/3 text-center text-sm">
                    <div
                    className="inline-block rounded-md
                    mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> 
                    {review.isConfirm ? <Confirm/> : <Reject/> } </div>
                  </span>
                  <span className="w-1/4 text-center text-sm">
                    <div
                    className="inline-block rounded-md
                    mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {review.date} </div>
                  </span>
                  <span className="w-1/6">
                    <div  className="flex items-center justify-center">
                      <button className="block mx-1 p-1 py-2 border border-gray-400 text-sm hover:text-white hover:bg-gray-700 rounded-md text-center w-12 cursor-pointer" onClick={()=> get(review.id)}>
                        <FontAwesomeIcon icon={faPenToSquare} className="text-sm"/>
                      </button>
                    </div>
                  </span>
                </div>
              )
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
        <Pagination/>
      </div>
    </div>
  )
}
export const reviewsLoader = async () => {
  return;
}