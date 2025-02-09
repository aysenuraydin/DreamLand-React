import React, { useState, useEffect } from 'react';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass , faCancel, faTrash, faEnvelope, faBoxArchive,
  faAdd, faPenToSquare, faXmark, faPlus} from "@fortawesome/free-solid-svg-icons";
import { useLoaderData} from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

export const Messages = ({messages}) => {
  const [visible, setVisible] = useState(false);
  const [isArchive, setArchive] = useState(false);
  const items = useLoaderData();
  const ArchiveOrMessages = () => {
    setArchive(!isArchive);
    setVisible(false);
  }
  return(
    <div className="p-8">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="flex justify-between border-b-2 text-gray-400 border-gray-300 pb-[0.6rem] px-4">
          <h1 className="text-3xl">Messages
            <FontAwesomeIcon icon={faEnvelope} className={'admin-icons ml-4 text-2xl'}/>
          </h1>
          <div className="flex gap-x-3">
            <div className="flex items-center relative">
              <Search/>
              <div id="search-link" className="cursor-pointer rounded-md px-2 text-sm font-medium border border-gray-400 hover:scale-110 h-9 pt-[0.4rem]">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-md pl-1"/>
              </div>
            </div>
            {
              !isArchive && (
                <div className="admin-button" onClick={ArchiveOrMessages}> 
                  <span> Go Archive 
                  <FontAwesomeIcon icon={faBoxArchive} className="pl-1"/>
                  </span>
                </div>
              )
            }
            {
              isArchive && (
              <div className="admin-button" onClick={ArchiveOrMessages}> 
                  <span> Out Archive 
                  <FontAwesomeIcon icon={faXmark} className="pl-1"/>
                  </span>
                </div> 
              )
            }
            {
              visible && (
                <div className="admin-button" onClick={()=> setVisible(false)}>
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
              <div className="w-4/5 mt-10 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
                <div className="mb-3 flex">
                  <label htmlFor="name" className="min-w-24 mt-3 text-sm">Full Name</label>
                  <div className="mt-1 p-1 w-full border rounded-lg border-gray-300 text-gray-800">firstname  lastname</div>
                </div>
                <div className="mb-3 flex">
                  <label htmlFor="color" className="min-w-24 mt-3 text-sm">Email</label>
                  <div className="mt-1 p-1 w-full border rounded-lg border-gray-300 text-gray-800">email</div>
                </div>
                <div className="mb-3 flex">
                  <label htmlFor="color" className="min-w-24 mt-3 text-sm">Phone Number</label>
                  <div className="mt-1 p-1 w-full border rounded-lg border-gray-300 text-gray-800">phoneNumber</div>
                </div>
                <div className="mb-3 flex">
                  <label htmlFor="color" className="min-w-24 mt-3 text-sm">Company</label>
                  <div className="mt-1 p-1 w-full border rounded-lg border-gray-300 text-gray-800">company</div>
                </div>
                <div className="mb-3 flex">
                  <label htmlFor="color" className="min-w-24 mt-3 text-sm">Datetime</label>
                  <div className="mt-1 p-1 w-full border rounded-lg border-gray-300 text-gray-800">createdAt</div>
                </div>
                <div className="mb-6 flex">
                  <label htmlFor="color" className="min-w-24 mt-3 text-sm">Message</label>
                  <div className="mt-1 p-1 w-full border rounded-lg border-gray-300 text-gray-800 max-h-40 h-36 overflow-scroll">message</div>
                </div>
                <div className="pl-[6rem]">
                    <div className="w-full flex">
                      <button className="block w-full px-4 py-2 text-sm mr-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center cursor-pointer">
                        Archive
                        <FontAwesomeIcon icon={faBoxArchive} className="pl-1"/>
                      </button>
                      <button className="block w-full px-4 py-2 text-sm mr-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center cursor-pointer">
                        Unarchive
                        <FontAwesomeIcon icon={faEnvelope} className="pl-1"/>
                      </button>
                      <button className="block w-full px-4 py-2 text-sm mr-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center cursor-pointer"> Delete
                        <FontAwesomeIcon icon={faTrash} className="pl-1"/>
                      </button>
                    </div>
                </div>
              </div>
            )
          }
        
        <div className="flex items-start px-2 pb-2 mb-5 mt-16 text-gray-500 gap-x-2">
          <span className="w-1/6 text-center text-sm border border-[#f6d1cb] p-1 rounded-full bg-white">
            <span className="font-bold text-[#f6d1cb]">Number</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb] bg-white">
            <span className= "font-bold">User</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb] bg-white">
            <span className= "font-bold">Message</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb] bg-white">
            <span className= "font-bold">Created At</span>
          </span>
          <div className="w-1/6 text-center"></div>
        </div>
        <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-4'/> 
        <div id="messages" className="space-y-5 
        max-h-[30rem] overflow-scroll">
          {
            messages.map((message, index)=>{
              return(
                <div key={index} className="flex border border-gray-300 items-center p-1 shadow rounded-md  bg-white">
                  <span className="w-1/6 text-center text-sm">
                    {index+1} - {message.id}
                  </span>
                  <span className="w-1/3 text-center text-sm">
                    <div
                    className="inline-block rounded-md
                    mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {message.name} {message.surname}</div>
                  </span>
                  <span className="w-1/3 text-center text-sm">
                    <div
                    className="inline-block rounded-md
                    mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {message.content.slice(0,30)}...  </div>
                  </span>
                  <span className="w-1/3 text-center text-sm">
                    <div
                    className="inline-block rounded-md
                    mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> {message.date}  </div>
                  </span>
                  <span className="w-1/12">
                    <div  className="flex items-center justify-center">
                    <button className="block mx-1 p-1 py-2 border border-gray-400 text-sm hover:text-white hover:bg-gray-700 rounded-md text-center w-12 cursor-pointer mr-2" onClick={()=> setVisible(true)}>
                      <FontAwesomeIcon icon={faPenToSquare} className="text-sm"/>
                    </button>
                    </div>
                  </span>
                </div>
              )
            })
          }
          {
            messages.length==0 && (
              <div className="text-center mt-4 p-7 rounded-md shadow-md border border-gray-300 bg-gray-50">
                <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
                  No messages available.
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
export const messagesLoader = async () => {
  return;
}
