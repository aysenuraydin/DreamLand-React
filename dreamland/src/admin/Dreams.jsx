import React, { useState, useRef, useContext } from 'react';
import { Search } from "../components/Search";
import { redirect, useActionData, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCancel, faPlus} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../icons/logo";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/Pagination';
import { DreamsList } from '../components/DreamsList';
import { DreamForm } from '../components/DreamForm';
import { DreamContext } from '../contexts/DreamContext';

export const Dreams = () => {
  const errors = useActionData();
  const items = useLoaderData();
  
  const [visible, setVisible] = useState(false);
  const formRef = useRef(null);

  const { dreamState, dreamDispatch } = useContext(DreamContext);
  const dreams = dreamState.dreams;
  const dream = dreamState.dream;

  const add = (data) => {
  // const add = (event) => {
    // event.preventDefault();
    // const title = event.target.elements.title.value;
    // const interpretation = event.target.elements.interpretation.value;
    const title = data.title;
    const interpretation = data.content;
    if(title && interpretation){
        if(dream?.id) {
          dreamDispatch({
            type: "EDIT_DREAM",
            payload: {id:dream?.id, title:title, content:interpretation}
          });
        } else {
          dreamDispatch({
            type: "ADD_DREAM",
            payload: {title:title, content:interpretation}
          });
        }
        formRef.current.reset();
    }
  }
  const reset = () => {
    setVisible(false);
    dreamDispatch({
      type: "CLEAR_DREAM"
    });
    formRef.current.reset();
  }
  const edit = (dream) => {
    setVisible(true);
    dreamDispatch({
      type: "GET_DREAM",
      payload: dream
    });
  }
  const del = (id) => {
    setVisible(true);
    dreamDispatch({
      type: "DELETE_DREAM",
      payload: {id:id}
    });
  }
  return(
    <div className="p-8">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="flex justify-between border-b-2 text-gray-400 border-gray-300 pb-[0.6rem] px-4">
          <h1 className="text-3xl">Dreams
            <span className="admin-icons relative top-1 ml-3">
                <Logo color="#98A1AE" size={55}/></span>
          </h1>
          <div className="flex gap-x-3">
            <div className="flex items-center relative">
              <Search/>
            </div>
            {
              !visible && (
                <div className="admin-button" onClick={()=> setVisible(!visible)}>
                  <span> Add Dream
                    <FontAwesomeIcon icon={faPlus} className="text-sm pl-1"/>
                  </span>
                </div>
              )
            }
            {
              visible && (
                <div className="admin-button" onClick={reset}>
                  <span className="text-red-500"> Close
                    <FontAwesomeIcon icon={faCancel} className="text-sm pl-1"/>
                  </span>
                </div>
              )
            }
          </div>
        </div>
        {
          visible && ( <DreamForm del={del} dream={dream} add={add} reset={reset} formRef={formRef}/> ) 
        }
        <div className="flex items-start px-2 pb-2 mb-5 mt-16 text-gray-500 gap-x-2">
          <span className="w-1/6 text-center text-sm bg-white border border-[#1f3f96a2] p-1 rounded-full">
            <span className="font-bold text-[#1f3f96a2]">Number</span>
          </span>
          <span className="w-10/12 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Title</span>
          </span>
          <span className="w-1/3 bg-white text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2]">
            <span className= "font-bold">Created At</span>
          </span>
          <span className="w-1/4">  </span>
        </div>
        <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/>
        <DreamsList dreams={dreams} edit={edit}/>
        <Pagination/>
      </div>
    </div>
  )
}
export const dreamsAction = async ({ request }) => {
  return redirect("/");
}
export const dreamsLoader = async () => {
  return;
}