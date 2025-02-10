import React, { useState, useEffect, useRef } from 'react';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faTrash, faImage,
  faAdd, faPenToSquare, faXmark, faPlus} from "@fortawesome/free-solid-svg-icons";
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import { Header } from "../components/Header";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/Pagination';
import { Confirm } from '../icons/confirm';
import { Reject } from '../icons/Reject';

export const Headers = ({headers, header, addHeader, deleteHeader, getHeader, resetHeader } ) => {
  const items = useLoaderData();
  const errors = useActionData();
  const [visible, setVisible] = useState(false);
  const [isActive, setActive] = useState(false);
  const formRef = useRef(null); 

  useEffect(()=> {
    setActive(header.isActive)
  },[header])
  const add = (event) => {
    event.preventDefault(); 

    const name = event.target.elements.name.value;
    const url = event.target.elements.url.value;

    if(name && url){
        addHeader({name:name, isActive:isActive, url:url});
        formRef.current.reset();
    }
  }
  const reset = () => {
    resetHeader(); 
    formRef.current.reset();
  }
  const edit = (id) => {
    setVisible(true);
    getHeader(id);
  }
  const changeActive = () => {
    setVisible((prev)=> {
      setActive(!prev)
    });
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
              <div className="admin-button" onClick={()=> setVisible(!visible)}>
                <span className="text-red-500"> Close 
                  <FontAwesomeIcon icon={faCancel} className="text-sm pl-1"/>
                </span>
              </div>
              )
            }
            
          </div>
        </div>
        { visible && (
          <Form onSubmit={add} ref={formRef} className="w-4/5 mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300 flex">
          <div className="w-1/3 py-5">
            <div className="flex justify-center mb-5 h-32 w-40">
              <img src="https://dummyimage.com/600x500/ccc/aaa" className="object-cover"/>
            </div>
            <div className="flex justify-center">
              <input type="file" className="mt-1 p-1 w-[6.5rem] border rounded-lg text-gray-800 outline-none text-sm cursor-pointer" />
            </div>
          </div>
          <div className="w-2/3 py-4 ml-12">
            <div className="w-full flex">
              <label htmlFor="name" className="w-15 mt-2">Name</label>
              <div className="flex w-full gap-x-2">
                <input type="text" id="name" name="name" className="mt-1 h-8 w-full border rounded-lg text-gray-800 outline-none px-3" defaultValue={header?.name}/>
                <div className='pt-1 cursor-pointer' onClick={()=> setActive(prev => !prev)}>
                  {isActive ? <Confirm/> : <Reject/> }
                </div>
              </div>
            </div>
            <div className="w-full flex mt-1">
              <label htmlFor="url" className="mt-2 w-15">Url</label>
              <input type="text" id="url" name="url" className="mt-1 h-8 w-full border rounded-lg text-gray-800 outline-none px-3" defaultValue={header?.url}/>
            </div>
            <div className="w-full flex gap-x-2 mt-4">
              {
                header?.id && (
                  <button  type="submit"  className="block w-full px-3 py-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm">
                    <span> Edit 
                      <FontAwesomeIcon icon={faPenToSquare} className="text-sm ml-1"/>
                    </span>
                  </button>
                )
              }
              {
                !header?.id && (
                  <button type="submit" className="block w-full px-3 py-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm">
                    <span> Add 
                      <FontAwesomeIcon icon={faAdd} className="text-sm ml-1"/>
                    </span>
                  </button>
                )
              }
              <button className="block w-full px-3 py-2 bg-gray-200 rounded-lg text-center text-sm hover:bg-gray-500 hover:text-white" onClick={reset}> Clear 
                <FontAwesomeIcon icon={faCancel} className="text-sm ml-1"/>
              </button>
            </div>
          </div>
        </Form>
        )}
        { !visible && (
          <Header/>
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
          <span className="w-1/6"></span>
        </div>
        <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-5'/> 
        <div id="headers" className="space-y-5 overflow-scroll max-h-[30rem]">
          {
            [...headers].reverse().map((header, index)=>{
            return(
              <div key={index} className="flex border border-gray-300 items-center px-3 shadow rounded-md  bg-white">
                <span className="w-1/6 text-center text-sm">
                  {index+1} - {header.id}
                </span>
                <span className="w-1/3 text-center text-sm">
                <img src="https://dummyimage.com/600x500/ccc/aaa" className="object-cover"/>
                </span>
                <span className="w-7/12 text-center text-sm">
                  <div className="inline-block rounded-md
                  mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {header.name} </div>
                </span>
                <span className="w-3/12 text-center text-sm">
                  <div className="inline-block rounded-md
                  mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {header.isActive ? <Confirm/> : <Reject/> } </div>
                </span>
                <div className="w-1/4 flex items-center justify-end pr-4">
                    <button className="inline-block mx-1 p-2 text-sm text-gray-700 bg-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-center w-8 h-9 cursor-pointer" 
                    onClick={()=> edit(header.id)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className="inline-block mx-1 p-2 text-sm text-gray-700 bg-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-center w-8 h-9 cursor-pointer" 
                    onClick={()=> deleteHeader(header.id)}>
                        <FontAwesomeIcon icon={faTrash} className="text-sm"/>
                    </button>
                </div>
              </div>
            )
          })
          }
          {
            headers.length==0 && (
              <div className="bg-white text-center mt-4 p-7 rounded-md shadow-md border border-gray-300">
                <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
                  No headers image available.
              </div>
            )
          }
        </div>
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