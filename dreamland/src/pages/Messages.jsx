import React from "react";
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass , faCancel, faTrash, faEnvelope, faBoxArchive,
  faAdd, faPenToSquare, faXmark, faPlus} from "@fortawesome/free-solid-svg-icons";
export const Messages = () => {
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
            <div className="admin-button"> 
              <span> Add Message 
                <FontAwesomeIcon icon={faPlus} className="text-sm pl-1"/>
              </span>
            </div>
            <div className="admin-button">
              <span className="text-red-500"> Close 
                <FontAwesomeIcon icon={faCancel} className="text-sm pl-1"/>
              </span>
            </div>
          </div>
        </div>
        <div className="w-4/5 mt-10 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
          <input type="hidden" className="hidden"/>
          <input type="hidden" className="hidden"/>
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
        <div className="flex items-start px-2 pb-2 mb-5 mt-16 text-gray-500 gap-x-2">
          <span className="w-1/6 text-center text-sm border border-[#f6d1cb] p-1 rounded-full">
            <span className="font-bold text-[#f6d1cb]">Number</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb]">
            <span className= "font-bold">User</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb]">
            <span className= "font-bold">Message</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb]">
            <span className= "font-bold">Created At</span>
          </span>
          <div className="w-1/6 text-center"></div>
        </div>
        <div id="messages" className="space-y-5 h-[67vh] overflow-scroll">
          <div>
          <div className="flex border border-gray-300 items-center p-3 shadow rounded-md  bg-white">
            <span className="w-1/6 text-center text-sm">
              1 - 2
            </span>
            <span className="w-1/3 text-center text-sm">
              <div
              className="inline-block rounded-md
              mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> lorem </div>
            </span>
            <span className="w-1/3 text-center text-sm">
              <div
              className="inline-block rounded-md
              mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> lorem </div>
            </span>
            <span className="w-1/3 text-center text-sm">
              <div
              className="inline-block rounded-md
              mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> lorem </div>
            </span>
            <span className="w-1/12">
              <div  className="flex items-center justify-center">
              <button className="block mx-1 p-1 py-2 border border-gray-400 text-sm hover:text-white hover:bg-gray-700 rounded-md text-center w-12 cursor-pointer">
                <FontAwesomeIcon icon={faPenToSquare} className="text-sm"/>
              </button>
              </div>
            </span>
          </div>
          </div>
          <div className="bg-white text-center mt-4 p-7 rounded-md shadow-md border border-gray-300">
            <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
              No messages available.
          </div>
        </div>
      </div>
    </div>
  )
}

