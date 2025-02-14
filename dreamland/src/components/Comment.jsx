import React, { useState, useRef, useContext, useEffect } from 'react';
import { DreamContext } from '../contexts/DreamContext';
import { Form } from "react-router-dom";
import { CommentCard } from './commentCard';
import { useSelector, useDispatch } from 'react-redux';

export const Comment = ({dreamId, dreamTitle}) => {
    const [comment, setComment] = useState([]);
    const formRef = useRef(null); 

    const state = useSelector((state) => state.review);
    const dispatch = useDispatch(); 
    const reviewsByDreamId = state.reviewsByDreamId;

    useEffect(() => {
        dispatch({ 
            type: "SET_REVİEWS_BY_DREAMID",
            payload:  { id:dreamId }
        });
        setComment([]);
    }, [dreamId]); 

    const add = (event) => {
        event.preventDefault(); 
        const username = event.target.elements.username.value;
        const comment = event.target.elements.comment.value;
        if(username && comment){
            dispatch({ 
                type: "ADD_REVİEW",
                payload:  {
                    username:username, 
                    comment:comment, 
                    dreamId:dreamId, 
                    dreamTitle:dreamTitle
                }
            });
            setComment((prev)=>[
                ...prev, 
                {
                    username:username, 
                    comment:comment, 
                    dreamId:dreamId, 
                    dreamTitle:dreamTitle,
                    date: new Date().toISOString().replace("T", " ").substring(0, 19),
                }
            ])
        }
        formRef.current.reset();
    }

    return(
        <>
            <Form onSubmit={add} ref={formRef} className="w-full justify-center items-center">
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
                <div className="flex justify-end my-4 mr-1">
                    <button type="submit" className="p-2 px-8 bg-[#92A2CD] text-white rounded-full font-light hover:bg-gray-700 shadow-xl cursor-pointer">Submit</button>
                </div>
            </Form>
            <div className="p-1">
                {
                    comment && (
                        comment?.map((rew,index) => {
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
                {reviewsByDreamId.length==0 && comment.length==0 &&(
                    <div className="bg-gray-100 p-7 shadow-md rounded-xl border border-gray-300 ml-20">
                        No comment available.
                    </div>
                )}
                {reviewsByDreamId.length > 3 || comment.length > 3 &&(
                    <div className="flex justify-center">
                        <button className="p-2 mt-5 px-16 bg-[#92A2CD] text-white rounded-full font-light hover:bg-gray-700 mx-auto cursor-pointer">Load More Comments</button>
                    </div>
                )}
                
            </div>
        </>
    )
}