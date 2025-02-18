import React, { useEffect } from 'react';
import { useParams} from "react-router-dom";
import { Logo } from "../icons/logo";
import { Return } from "../icons/return";
import { Link } from "react-router-dom";
import { Comment } from "../components/Comment";
import DOMPurify from 'dompurify';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons"; 
import { fetchDreamFromDatabase } from '../actions/dreamAction';
import SyncLoader from "react-spinners/SyncLoader";

export const DreamDetail = () => {
    const state = useSelector((state) => state.dream);
    const dispatch = useDispatch(); 
    const dream = state.dreamPage;

    const { id } = useParams();

    useEffect(() => {
      dispatch(fetchDreamFromDatabase(id)); 
  }, [id, dream]);

    if (!dream) {
      return(
        <div className="bg-white text-center mt-4 p-7 rounded-md shadow-md border border-gray-300">
            <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
            Dreams not found.
        </div>
      )
    }
    const sanitizedContent = DOMPurify.sanitize(dream?.content);

  return(
      <>
        <div className="my-10 mx-5 rounded-3xl shadow-lg border border-gray-300 bg-white relative">
          <div className='bg-gradient-to-b from-[#1f3f9682] from-0% via-white via-40% to-white to-100% h-[35rem] w-full rounded-3xl absolute'></div>
          <div className="relative p-10 pb-18 h-3/4">
            <Link to="/" className='flex w-32 absolute bottom-5 right-5 cursor-pointer hover:scale-125 items-center text-sm'>
              <div className='text-[#92A2CD]'>Go To List</div>
              <div><Return /> </div>
            </Link> 
            <div className="flex justify-center pt-10">
              <h1 className="text-2xl text-white px-5 -mt-2 text-shadow">{dream?.title}</h1>
            </div>
            <div className='flex justify-center mt-10 scale-125 pt-10'><Logo /></div>
            <div className="mt-5 text-gray-600 min-h-72 pt-10">
                {dream && (!dream.title || dream.title.length === 0) ? (
                  <SyncLoader color="#8FA0CB" size={12} speedMultiplier={1} className="text-center pt-14 " />
                  ) : null
                }
              <p  dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              className="indent-6 pb-3 text-gray-600"></p>
            </div>
          </div>
        </div>
        <div className="p-6 py-12">
          <Comment dreamId={dream?.id} dreamTitle={dream?.title}/>
        </div>
      </>
  )
}
