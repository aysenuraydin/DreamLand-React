import React, { useState, useContext } from 'react';
// import { DreamContext } from '../contexts/DreamContext';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faComment} from "@fortawesome/free-solid-svg-icons";
import { useLoaderData} from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/Pagination';
import { ReviewList } from '../components/reviewList';
import { ReviewForm } from '../components/reviewForm';
import { useSelector, useDispatch } from 'react-redux';

export const Reviews = () => {
  const items = useLoaderData();
  const [visible, setVisible] = useState(false);

  const state = useSelector((state) => state.review);
  const dispatch = useDispatch(); 
  const review = state.review;
  const reviews = state.reviews;

  const get = (review) => {
    setVisible(true);
    dispatch({ 
      type: "GET_REVİEW",
      payload: {...review}
    });
  }
  const del = (id) => {
    setVisible(false);
    dispatch({ 
      type: "DELETE_REVİEW",
      payload: {id:id}
    });
  }
  const edit = (id) => {
    setVisible(false);
    dispatch({ 
      type: "EDİT_REVİEW",
      payload: {id:id}
    });
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
          visible && (  <ReviewForm review={review} edit={edit} del={del}/> )
        }
        <div className="flex items-start px-2 pb-2 mb-5 mt-16 text-gray-500 gap-x-2">
          <span className="w-1/6 bg-white text-center text-sm border border-[#1f3f96a2] p-1 rounded-full">
            <span className="font-bold text-[#1f3f96a2]">Number</span>
          </span>
          <span className="w-1/3 bg-white text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2]">
            <span className= "font-bold">User</span>
          </span>
          <span className="w-1/3 bg-white text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2]">
            <span className= "font-bold">Dream</span>
          </span>
          <span className="w-1/3 bg-white text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2]">
            <span className= "font-bold">Is Confirm ?</span>
          </span>
          <span className="w-1/4 bg-white text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2]">
            <span className= "font-bold">Created At</span>
          </span>
          <div className="w-1/6 text-center"></div>
        </div>
        <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-4'/> 
        <ReviewList reviews={reviews} get={get}/>
        <Pagination/>
      </div>
    </div>
  )
}
export const reviewsLoader = async () => {
  return;
}