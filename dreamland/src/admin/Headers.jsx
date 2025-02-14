import React, { useState, useRef, useContext, useEffect } from 'react';
// import { DreamContext } from '../contexts/DreamContext';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faImage,  faPlus} from "@fortawesome/free-solid-svg-icons";
import { redirect, useActionData, useLoaderData } from "react-router-dom";
import { Header } from "../components/Header";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/Pagination';
import { HeaderList } from '../components/HeaderList';
import { HeaderForm } from '../components/HeaderForm';
import { useSelector, useDispatch } from 'react-redux';

export const Headers = () => {
  const items = useLoaderData();
  const errors = useActionData();
  
  const [visible, setVisible] = useState(false);
  const [isActive, setActive] = useState(false);
  const formRef = useRef(null); 

  const state = useSelector((state) => state.header);
  const dispatch = useDispatch(); 
  const headers = state.headers;
  const header = state.header;

  useEffect(()=> {
    setActive(header.isActive)
  },[header])

  const add = (event) => {
    event.preventDefault(); 

    const name = event.target.elements.name.value;
    const url = event.target.elements.url.value;
    const title = event.target.elements.title.value;
    const titleColor = event.target.elements.titleColor.value;

    if(name && url){
        if(header?.id){
          dispatch({ 
            type: "EDIT_HEADER",
            payload: {id:header?.id, name:name, isActive:isActive, url:url, title:title, titleColor:titleColor}
          });
        } else {
          dispatch({ 
            type: "ADD_HEADER",
            payload: {name:name, isActive:isActive, url:url, title:title, titleColor:titleColor}
          });
        }
        setActive(false);
        formRef.current.reset();
    }
  }
  const reset = () => {
    setActive(false);
    setVisible(false);
    dispatch({ 
      type: "CLEAR_HEADER",
    });
    formRef.current.reset();
  }
  const edit = (header) => {
    setVisible(true);
    dispatch({ 
      type: "GET_HEADER",
      payload: header
    });
  }
  const del = (header) => {
    setVisible(true);
    dispatch({ 
      type: "DELETE_HEADER",
      payload: header
    });
  }
  const changeActive = () => {
    setActive(prev => !prev)
  }

  return(    
    <div className="p-8">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="flex justify-between border-b-2 text-gray-400 border-gray-300 pb-[0.6rem] px-4">
          <h1 className="text-3xl">Headers
              <FontAwesomeIcon icon={faImage} className={'admin-icons ml-4 text-2xl'}/>
          </h1>
          <div className="flex gap-x-3">
            <div className="flex items-center relative">
              <Search/>
            </div>
            {
              !visible && (
                <div className="admin-button" onClick={()=> setVisible(!visible)}> 
                  <span> Add Header 
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
          visible && ( 
              <HeaderForm del={del} header={header} add={add} reset={reset} formRef={formRef} changeActive={changeActive} isActive={isActive} /> 
            ) 
        }
        { !visible && (
          <div className='-my-9 -mb-16'> <Header/> </div>
          
        )}
        <div className="flex items-start px-2 pb-2 mb-5 mt-16 text-gray-500 gap-x-2">
          <span className="w-1/6 text-center text-sm border border-[#1f3f96a2] p-1 rounded-full bg-white">
            <span className="font-bold text-[#1f3f96a2]">Number</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Img</span>
          </span>
          <span className="w-6/12 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Name</span>
          </span>
          <span className="w-4/12 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Is Active ?</span>
          </span>
          <span className="w-4/12 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Created At </span>
          </span>
          <span className="w-1/4"></span>
        </div>
        <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-5'/> 
        <HeaderList headers={headers} edit={edit} />
        <Pagination/>
      </div>
    </div>
  )
}
export const headersAction = async ({ request }) => {
  return redirect("/");
}
export const headersLoader = async () => {
  return;
}