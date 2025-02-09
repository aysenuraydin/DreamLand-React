import React, { useState, useEffect } from 'react';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass , faCancel, faTrash, faImage,
  faAdd, faPenToSquare, faXmark, faPlus} from "@fortawesome/free-solid-svg-icons";
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import { Header } from "../components/Header";
import SyncLoader from "react-spinners/SyncLoader";

export const Headers = ({headers} ) => {
  const items = useLoaderData();
  const errors = useActionData();
  const [visible, setVisible] = useState(false);
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
              <div id="search-link" className="cursor-pointer rounded-md px-2 text-sm font-medium border border-gray-400 hover:scale-110 h-9 pt-[0.4rem]">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-md pl-1"/>
              </div>
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
          <Form className="w-4/5 mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300 flex">
          <div className="w-1/3 py-5">
            <div className="flex justify-center mb-5 h-32 w-40">
              <img src="https://dummyimage.com/600x500/ccc/aaa" className="object-cover"/>
            </div>
            <div className="flex justify-center">
              <input type="file" className="mt-1 p-1 w-[6.5rem] border rounded-lg text-gray-800 outline-none text-sm cursor-pointer"/>
            </div>
          </div>
          <div className="w-2/3 pt-4 ml-12">
            <input type="createdAt" className="hidden"/>
            <div className="w-full">
              <label htmlFor="name" className="w-full mt-2">Name</label>
              <div className="flex">
              <input type="text" id="name" className="mt-1 h-8 w-full border rounded-lg text-gray-800 outline-none px-3"/>
              <input id="isActive" type="checkbox" className="mt-1 contact-checkbox w-10 h-8 ml-3"/>
              </div>
            </div>
            <div className="w-full flex gap-x-2 mt-4">
              <button className="block w-full px-3 py-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm">
                <span> Edit 
                  <FontAwesomeIcon icon={faPenToSquare} className="text-sm ml-1"/>
                </span>
              </button>
              <button type="submit" className="block w-full px-3 py-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm">
                <span> Add 
                  <FontAwesomeIcon icon={faAdd} className="text-sm ml-1"/>
                </span>
              </button>
              <button className="block w-full px-3 py-2 bg-gray-200 rounded-lg text-center text-sm hover:bg-gray-500 hover:text-white"> Delete 
                <FontAwesomeIcon icon={faTrash} className="text-sm ml-1"/>
              </button>
              <button className="block w-full px-3 py-2 bg-gray-200 rounded-lg text-center text-sm hover:bg-gray-500 hover:text-white" onClick={()=> setVisible(false)}> Clear 
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
          <span className="w-1/6 text-center text-sm border border-[#f6d1cb] p-1 rounded-full bg-white">
            <span className="font-bold text-[#f6d1cb]">Number</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb] bg-white">
            <span className= "font-bold">Img</span>
          </span>
          <span className="w-10/12 text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb] bg-white">
            <span className= "font-bold">Name</span>
          </span>

          <span className="w-1/6"></span>
        </div>
        <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-5'/> 
        <div id="dreams" className="space-y-5 overflow-scroll max-h-[30rem]">
          {
            headers.map((header, index)=>{
            return(
              <div className="flex border border-gray-300 items-center px-3 shadow rounded-md  bg-white">
                <span className="w-1/6 text-center text-sm">
                  {index+1} - {header.id}
                </span>
                <span className="w-1/3 text-center text-sm">
                <img src="https://dummyimage.com/600x500/ccc/aaa" className="object-cover"/>
                </span>
                <span className="w-10/12 text-center text-sm">
                  <div
                  className="inline-block rounded-md
                  mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {header.name} </div>
                </span>
                <span className="w-1/12">
                  <div  className="flex items-center justify-center">
                  <button className="block mx-1 p-1 py-2 border border-gray-400 text-sm hover:text-white hover:bg-gray-700 rounded-md text-center w-12 cursor-pointer"
                  onClick={()=> setVisible(true)}>
                    <FontAwesomeIcon icon={faPenToSquare} className="text-sm"/>
                  </button>
                  </div>
                </span>
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