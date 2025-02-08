import React from "react";
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass , faCancel, faTrash,
  faAdd, faPenToSquare, faXmark, faPlus} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../icons/logo";

export const Dreams = () => {
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
              <div id="search-link" className="cursor-pointer rounded-md px-2 text-sm font-medium border border-gray-400 hover:scale-110 h-9 pt-[0.4rem]">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-md pl-1"/>
              </div>
            </div>
            <div className="admin-button"> 
              <span> Add Dream 
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
        <form className="w-4/5 mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
          <div className="mb-3">
            <div className="flex">
              <label htmlFor="name" className="min-w-24 mt-3 text-sm">Title</label>
              <input id="name" type="text" className="mt-1 p-1 w-full border border-gray-300  rounded-lg text-gray-800 outline-none"/>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex">
              <label htmlFor="iconCssClass" className="min-w-24 mt-3 text-sm">Interpretation</label>
              <textarea name="" id="" rows={4} className="mt-1 p-1 w-full border border-gray-300  rounded-lg text-gray-800 outline-none"></textarea>
            </div>
          </div>
          <div className="pl-[6rem]">
              <div className="w-full flex gap-x-2">
                <button className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm">
                  <span> Edit 
                    <FontAwesomeIcon icon={faPenToSquare} className="text-sm ml-1"/>
                  </span>
                </button>
                <button type="submit" className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm">
                  <span> Add 
                    <FontAwesomeIcon icon={faAdd} className="text-sm ml-1"/>
                  </span>
                </button>
                <button className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm"> Delete 
                  <FontAwesomeIcon icon={faTrash} className="text-sm ml-1"/>
                </button>
                <button className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm"> Clear 
                  <FontAwesomeIcon icon={faCancel} className="text-sm ml-1"/>
                </button>
          </div>
          </div>
        </form>
        <div className="flex items-start px-2 pb-2 mb-5 mt-16 text-gray-500 gap-x-2">
          <span className="w-1/6 text-center text-sm border border-[#f6d1cb] p-1 rounded-full">
            <span className="font-bold text-[#f6d1cb]">Number</span>
          </span>
          <span className="w-10/12 text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb]">
            <span className= "font-bold">Title</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#f6d1cb] border-[#f6d1cb]">
            <span className= "font-bold">Created At</span>
          </span>
          <span className="w-1/6">  </span>
        </div>
        <div id="dreams" className="space-y-5 h-[67vh] overflow-scroll">
          <div>
          <div className="flex border border-gray-300 items-center p-3 shadow rounded-md  bg-white">
            <span className="w-1/6 text-center text-sm">
              1 - 2
            </span>
            <span className="w-10/12 text-center text-sm">
              <div
              className="inline-block rounded-md
              mb-3 mx-2 capitalize text-sm min-w-20 mt-3 p-2 font-medium"> lorem </div>
            </span>
            <span className="w-1/3 text-center text-sm">
              lorem
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
              No dreams available.
          </div>
        </div>
      </div>
    </div>
  )
}