import React, { useState, useRef, useEffect } from 'react';
import { useParams} from "react-router-dom";
import { Form } from "react-router-dom";
import { CommentCard } from './commentCard';
import SyncLoader from "react-spinners/SyncLoader";
import { useSelector, useDispatch } from 'react-redux';
import { addReviewToDatabase, getReviewsByIdFromDatabase } from '../actions/reviewAction';

export const Comment = ({dreamId, dreamTitle}) => {

    const [comments, setComments] = useState([]);
    const formRef = useRef(null); 

    const state = useSelector((state) => state.review);
    const dispatch = useDispatch(); 
    const reviewsByDreamId = state.reviewsByDreamId;
    const loading = state.loading;

    const [error, setError] = useState("");
    const [info, setInfo] = useState("");
    useEffect(() => {
    const timer = setTimeout(() => {
        setError("");
        setInfo("");
    }, 3000);
    return () => clearTimeout(timer);
    }, [error, info])
    const { id } = useParams();
    useEffect(() => {
        if (id) dispatch(getReviewsByIdFromDatabase(id));
    }, [dreamId]);

    const onSubmit = (event) => {
        event.preventDefault(); 
        const username = event.target.elements.username.value;
        const comment = event.target.elements.comment.value;

        if(username && comment){
            dispatch(addReviewToDatabase({
                username:username, 
                comment:comment, 
                dreamId:dreamId, 
                dreamTitle:dreamTitle
            }));
            setComments((prev)=>[
                ...prev, 
                {
                    username:username, 
                    comment:comment, 
                    date: new Date().toISOString().replace("T", " ").substring(0, 19),
                }
            ])
            formRef.current.reset();
            setInfo("Your comment has been received.");
        }else {
            setError("Comment inputs cannot be empty");
        }
    }

    return(
        <>
            <Form onSubmit={onSubmit} ref={formRef} className="w-full justify-center items-center">
                <div className="rounded p-1 w-full flex">
                    <div className="flex pt-5">
                        <div className="mr-6">
                            <img src="https://dummyimage.com/100x100/ccc/aaa" className="rounded-full shadow-md w-20"/>
                        </div>
                    </div>
                    <div className='w-full'>
                        <input type="text" name="username" id="username" className="mt-3 border border-gray-300 p-1 rounded-lg  shadow-md w-full bg-white" placeholder="username" />
                        <textarea rows="4" id="comment" name="comment" className="mt-3 border border-gray-300 p-2 rounded-lg  shadow-md w-full bg-white" placeholder="Write something..."></textarea>
                    </div>
                </div>
                <div className='h-4 text-sm leading-2.5 flex justify-end px-2'> 
                    {error && (<span className='text-red-500'>- {error}</span>)} 
                    {info && (<span className='text-emerald-500'>- {info}</span>)} 
                </div>
                <div className="flex justify-end my-4 mr-1">
                    <button type="submit" className="p-2 px-8 bg-[#92A2CD] text-white rounded-full font-light hover:bg-gray-700 shadow-xl cursor-pointer">Submit</button>
                </div>
            </Form>
            <div className="p-1">
                {loading ? (
                        <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/>
                    ) : (
                        <>
                            {
                                comments && (
                                    comments?.map((rew,index) => {
                                        return(
                                            <CommentCard key={index} review={rew} opacity={true}/>
                                        )
                                    })
                                )
                            }
                            {
                                reviewsByDreamId?.map((rew,index) => {
                                    return(
                                        <CommentCard key={index} review={rew}/>
                                    )
                                })
                            }
                            {reviewsByDreamId.length==0 && comments.length==0 &&(
                                <div className="bg-gray-100 p-7 shadow-md rounded-xl border border-gray-300 ml-20">
                                    No comment available.
                                </div>
                            )}
                        </>
                    )
                }
            </div>
        </>
    )
}