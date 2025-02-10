import React, { useState, useRef } from 'react';
import { Search } from "../components/Search";
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCancel, faTrash, faAdd, faPenToSquare, faXmark, faPlus} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../icons/logo";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/Pagination';

export const Dreams = ({dreams,dream ,getDream, resetDream,addDream,deleteDream }) => {
  const errors = useActionData();
  const items = useLoaderData();
  const [visible, setVisible] = useState(false);
  const formRef = useRef(null); 

  const add = (event) => {
    event.preventDefault(); 
    const title = event.target.elements.title.value;
    const interpretation = event.target.elements.interpretation.value;
    if(title && interpretation){
        addDream({title:title, content:interpretation, date:dream.date})
        formRef.current.reset();
    }
  }
  const reset = () => {
    resetDream(); 
    formRef.current.reset();
  }
  const edit = (id) => {
    setVisible(true);
    getDream(id);
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
          visible && (
            <Form onSubmit={add} ref={formRef} className="w-4/5 mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
              <div className="mb-3 flex">
                  <label htmlFor="title" className="min-w-24 mt-3 text-sm">Title</label>
                  <input id="title" type="text" className="mt-1 p-1 w-full border border-gray-300  rounded-lg text-gray-800 outline-none" defaultValue={dream?.title}/>
              </div>
              <div className="mb-6 flex">
                  <label htmlFor="interpretation" className="min-w-24 mt-3 text-sm">Interpretation</label>
                  <textarea id="interpretation" rows={4} className="mt-1 p-1 w-full border border-gray-300  rounded-lg text-gray-800 outline-none" defaultValue={dream?.content}></textarea>
              </div>
              <div className="pl-[6rem] w-full flex gap-x-2">
                  {
                    dream.id && (
                      <button className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm">
                        <span> Edit 
                          <FontAwesomeIcon icon={faPenToSquare} className="text-sm ml-1"/>
                        </span>
                      </button>
                    )
                  }
                  {
                    !dream.id && (
                      <button type="submit" className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm">
                        <span> Add 
                          <FontAwesomeIcon icon={faAdd} className="text-sm ml-1"/>
                        </span>
                      </button>
                    )
                  }
                  
                  <button className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm"
                  onClick={ reset }> Clear 
                    <FontAwesomeIcon icon={faCancel} className="text-sm ml-1"/>
                  </button>
              </div>
            </Form>
          )
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
        <div id="dreams" className="space-y-5 max-h-96 overflow-scroll ">
          {
            [...dreams].reverse().map((dream, index)=>{
              return(
                <div key={index} className="flex border border-gray-300 items-center p-3 shadow rounded-lg  bg-white my-3">
                  <span className="w-1/6 text-center text-sm">
                  {index+1} - {dream.id}
                  </span>
                  <span className="w-10/12 text-center text-sm">
                    <div className="inline-block rounded-md
                    mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> 
                      {dream.title} 
                    </div>
                  </span>
                  <span className="w-1/3 text-center text-sm">
                    {dream.date}
                  </span>
                  <span className="w-1/6 flex items-center justify-end pr-4">
                      <button className="inline-block mx-1 p-2 text-sm text-gray-700 bg-gray-200 hover:text-white hover:bg-gray-700 rounded-md text-center w-8 h-9 cursor-pointer" 
                      onClick={()=>edit(dream.id)}> 
                          <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      <button className="inline-block mx-1 p-2 text-sm text-gray-700 bg-gray-200 hover:text-white hover:bg-gray-700 rounded-md text-center w-8 h-9 cursor-pointer" onClick={()=> deleteDream(dream.id)}>
                          <FontAwesomeIcon icon={faTrash} className="text-sm"/>
                      </button>
                  </span>
                </div>
              )
            })
          }
          { dreams.length==0 &&
            <div className="text-center mt-4 p-7 rounded-md shadow-md border border-gray-300 bg-white">
            <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
              No dreams available.
          </div>
          }
        </div>
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