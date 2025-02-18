import React, { useState, useEffect } from 'react';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faComment} from "@fortawesome/free-solid-svg-icons";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/Pagination';
import { ReviewList } from '../components/reviewList';
import { ReviewForm } from '../components/reviewForm';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReviewFromDatabase, editReviewFromDatabase, getPaginatedReviewsFromDatabase } from '../actions/reviewAction';

export const Reviews = () => {
  const [visible, setVisible] = useState(false);

  const state = useSelector((state) => state.review);
  const dispatch = useDispatch(); 
  const review = state.review;
  const reviews = state.reviews;

  const loading = state.loading;
  const reviewsByPageNumber = state.reviewsByPageNumber;
  const [pageNumber, setPagenumber] = useState(1);
  const pageSize = 5;
  const pageTotal = Math.ceil(reviews.length / pageSize);
  const [isAdding, setIsAdding] = useState(false); 
  const [isDeleting, setIsDeleting] = useState(false); 

  const [datasSearch, setDatasSearch] = useState([]); 
  const [text, setText] = useState(""); 

  useEffect(() => {
    if (!text) {
      setDatasSearch([]);
      return;
    }
  
    setDatasSearch(
      reviews.filter(data => 
          [data.comment, data.dreamTitle, data.username]
            .some(field => field?.toLowerCase().includes(text.toLowerCase()))
      )
    );
  }, [text, reviews]);
  
  const search = (text) => {
    setText(text)
    console.log(text)
  }

  useEffect(() => {
    if (pageTotal > 0 && isAdding) {
      setPagenumber(pageTotal);
      setIsAdding(false);
    }
    if (!isDeleting)  return;
    if (pageNumber > pageTotal) setPagenumber(pageTotal);
    setIsDeleting(false); 
  }, [reviews.length]);

  const get = (review) => {
    setVisible(true);
    dispatch({ 
      type: "GET_REVIEW",
      payload: {...review}
    });
  }
  const del = (id) => {
    setVisible(false);
    setIsDeleting(true); 
    dispatch(deleteReviewFromDatabase( {id} ));
  }
  const edit = (id) => {
    setVisible(false);
    dispatch(editReviewFromDatabase( {id} ));
  }

  useEffect(() => {
      const getDatas = async () => {
          await dispatch(getPaginatedReviewsFromDatabase({pageSize:pageSize, pageNumber:pageNumber}))
      };
      getDatas();
  }, [pageNumber, reviews])

  const changePage = (pageNumber) => {
    setPagenumber(pageNumber)
  };
  return(
    <div className="p-8">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="flex justify-between border-b-2 text-gray-400 border-gray-300 pb-[0.6rem] px-4">
          <h1 className="text-3xl">Reviews
            <FontAwesomeIcon icon={faComment} className={'admin-icons ml-4 text-2xl'}/>
          </h1>
          <div className="flex gap-x-3">
            <div className="flex items-center relative">
              <Search search={search}/>
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
        <div>
          {text && (  
            <p className='text-[1rem] absolute mt-4 ml-4 text-gray-500'>
            Search results for 
            <span className='font-semibold text-gray-700'> '{text}' </span>
            are listed !</p>
          )
          }
        </div>
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
            <span className= "font-bold">Datetime</span>
          </span>
          <div className="w-1/6 text-center"></div>
        </div>

        <div className='h-[32rem] overflow-scroll'>
        { datasSearch.length>0 ? (
          <ReviewList reviews={datasSearch} get={get}/>
        ):(
          <>
          {loading ? (
              <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/>
            ) : (
              <ReviewList reviews={reviewsByPageNumber} get={get}/>
            )
          }
          </>
        )}
        </div>
        { reviews.length > pageSize && datasSearch.length == 0 ? (
          <Pagination pageNumber={pageNumber} pageTotal={pageTotal} changePage={changePage} /> 
          ) : (null) 
        }
      </div>
    </div>
  )
}