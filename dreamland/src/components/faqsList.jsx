import React, { useContext } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faXmark} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { deleteFaqFromDatabase } from '../actions/faqAction';

export const FaqsList = () => {
    const state = useSelector((state) => state.faq);
    const dispatch = useDispatch(); 
    const faqs = state.faqs;

    const get = (faq) => {
        dispatch({ 
            type: "GET_FAQ",
            payload: {...faq}
        });
    }
    const del = (faq) => {
        dispatch(deleteFaqFromDatabase( {id:faq?.id} ));
    }
    return(
        <>
            <div className="faq-list pt-10">
                { faqs.length === 0 ? (
                    <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/> 
                    ) : (null)
                }
                
                <ul className="max-h-[25rem] px-2 overflow-scroll">
                    {
                    [...faqs].reverse().map((faq,index)=> {
                    return(
                        <li key={index}>
                        <div className="flex border border-gray-300 shadow-lg my-5 m-1 p-1 rounded-md bg-gray-100">
                            <div className="w-3/4 pl-5 my-2">
                            <h1 className="text-md">
                                {faq.question}
                            </h1>
                            <p className="text-gray-600 text-sm">
                                {faq.answer?.slice(0,90)}...
                            </p>
                            </div>
                            <div className="w-1/4 flex items-center justify-end pr-4">
                                <button className="inline-block mx-1 p-2 text-sm text-gray-700 bg-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-center w-8 h-9 cursor-pointer" 
                                onClick={()=> get(faq)}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                                <button className="inline-block mx-1 p-2 text-sm text-gray-700 bg-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-center w-8 h-9 cursor-pointer" 
                                onClick={()=> del(faq)}>
                                    <FontAwesomeIcon icon={faTrash} className="text-sm"/>
                                </button>
                            </div>
                        </div>
                        </li>
                    )
                    })
                    }
                    {faqs.length==0 && 
                    <li>
                        <div className="p-6 bg-gray-100 rounded-lg m-1">
                        <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
                            No faqs available.
                        </div>
                    </li>
                    }
                </ul>
            </div>
        </>
    )
}