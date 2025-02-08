import React from "react";
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faMagnifyingGlass, faFloppyDisk,
    faPenToSquare ,faAdd ,faCancel, faTrash, faXmark} from "@fortawesome/free-solid-svg-icons";

export const Informations = () => {
  return(
    <div className="p-8">
       <div className="flex justify-between border-b-2 border-gray-300 text-gray-400 pb-[0.6rem] px-4">
              <h1 className="text-3xl">Informations
                <FontAwesomeIcon icon={faCircleInfo} className={'admin-icons ml-4 text-2xl'}/>
              </h1>
              <div className="flex items-center relative">
                <Search/>
                <div id="search-link" className="cursor-pointer rounded-md px-2 text-sm font-medium border border-gray-300 hover:scale-110 h-9 pt-[0.4rem]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-md"/>
                </div>
              </div>
        </div>
        <ul>
          <li className="mt-10">
              <div className="bg-white p-10 rounded-2xl border border-gray-300 shadow-lg mx-10 px-10 pt-10">
                <h1 className="text-2xl p-5 pt-0 text-center">About</h1>
                <textarea name="" id="" className="border border-gray-300 w-full rounded-lg" rows={5}></textarea>
                <button className="block px-4 py-2 mt-3 text-sm bg-gray-200 rounded-md text-center w-full hover:bg-white cursor-pointer"> Save 
                <FontAwesomeIcon icon={faFloppyDisk} className="text-md ml-1"/></button>
              </div>
          </li>
          <li className="mt-10">
            <div className="bg-white p-10 rounded-2xl border border-gray-300 shadow-lg mx-10 px-10  pt-10">
              <h1 className="text-2xl p-5 pt-0 text-center">Faqs</h1>
              <div className="bg-white rounded-2xl">
                <input type="hidden"/>
                <input type="text" name="" id="" className="w-full border border-gray-300 p-2 my-1 mb-2 rounded-md" placeholder="question"/>
                <textarea name="adress" id="adress" className="w-full border border-gray-300 p-3 my-1 rounded-lg" placeholder="Adress" rows="4"></textarea>
              </div>
              <div className="flex mt-3">
              <button className="px-4 py-2 text-sm text-gray-700 hover:bg-white bg-gray-200 rounded-md text-center w-full mx-1 p-1 cursor-pointer">
                  Add Question
                  <FontAwesomeIcon icon={faAdd} className="text-md ml-2"/>
              </button>
              <button className="px-4 py-2 text-sm text-gray-700 hover:bg-white bg-gray-200 rounded-md text-center w-full mx-1 p-1 cursor-pointer">
                  Edit  Question
                  <FontAwesomeIcon icon={faPenToSquare} className="text-md ml-2"/>
              </button>
              <button className="px-4 py-2 text-sm text-gray-700 hover:bg-white bg-gray-200 rounded-md text-center w-full mx-1 p-1 cursor-pointer">
                  Cancel Question
                  <FontAwesomeIcon icon={faCancel} className="text-md ml-2"/>
              </button>
              </div>
              <div className="faq-list pt-10">
              <ul className="max-h-[25rem] overflow-scroll">
                <li>
                  <div className="flex border border-gray-400 shadow-lg my-5 m-1 p-2 rounded-md bg-white">
                    <div className="w-3/4 pl-5 my-2">
                      <h1 className="font-semibold text-lg">xxx</h1>
                      <p className="text-gray-600">xxx</p>
                    </div>
                    <div className="w-1/4 flex items-center justify-end pr-4">
                      <button className="inline-block mx-1 px-2 py-2 text-sm text-gray-700 hover:bg-white bg-gray-200 hover:border border-gray-300 rounded-md text-center w-10 cursor-pointer">
                        <FontAwesomeIcon icon={faPenToSquare} className="text-sm"/>
                      </button>
                      <button className="inline-block mx-1 px-2 py-2 text-sm text-gray-700 hover:bg-white bg-gray-200 hover:border border-gray-300 rounded-md text-center w-10 cursor-pointer">
                        <FontAwesomeIcon icon={faTrash} className="text-sm"/>
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="p-6 bg-gray-100 rounded-lg m-1">
                  <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
                      No faqs available.
                  </div>
                </li>
              </ul>
              </div>
            </div>
          </li>
          <li className="mt-10">
            <div className="bg-white p-10 rounded-2xl border border-gray-300 shadow-lg mx-10 px-10  pt-10">
                <h1 className="text-2xl p-5 pt-0 text-center">İnfo</h1>
                <div className="flex">
                  <label htmlFor="email" className="w-1/6 pt-3 text-sm">Email</label>
                  <input type="text" name="email" id="email" className="border border-gray-300 p-1 my-1 w-5/6 rounded-md" placeholder="Email"/>
                </div>
                <div className="flex">
                  <label htmlFor="pNum" className="w-1/6 pt-3 text-sm">Phone Number</label>
                  <input type="text" name="pNum" id="pNum" className="w-5/6 border border-gray-300 p-1 my-1 rounded-md" placeholder="Phone Number"/>
                </div>
                <div className="flex">
                  <label htmlFor="adress" className="w-1/6 pt-3 text-sm">Adress</label>
                  <div className="w-5/6 my-1 rounded-lg">
                    <textarea className="w-full pt-3 border border-gray-300 h-20 overflow-scroll rounded-lg"></textarea>
                  </div>
                </div>
                <div className="flex">
                  <label className="w-1/6"></label>
                  <button className="block px-4 mt-3 py-2 text-sm hover:bg-white rounded-md text-center w-5/6 text-gray-700  bg-gray-200 cursor-pointer">
                    Save <FontAwesomeIcon icon={faFloppyDisk} className="text-md ml-1"/>
                  </button>
                </div>
            </div>
          </li>
          <li className="mt-10">
            <div className="bg-white p-10 rounded-2xl border border-gray-300 shadow-lg mx-10 px-10 pt-10">
                <h1 className="text-2xl p-5 pt-0 text-center">Social Media</h1>
                <div className="flex">
                  <label htmlFor="email" className="w-1/6 pt-3 text-sm">İnstagram</label>
                  <input type="text" name="email" id="email" className="border border-gray-300 p-1 my-1 w-5/6 rounded-md" placeholder="Email"/>
                </div>
                <div className="flex">
                  <label htmlFor="pNum" className="w-1/6 pt-3 text-sm">Facebook</label>
                  <input type="text" name="pNum" id="pNum" className="w-5/6 border border-gray-300 p-1 my-1 rounded-md" placeholder="Phone Number"/>
                </div>
                <div className="flex">
                  <label htmlFor="pNum" className="w-1/6 pt-3 text-sm">Twitter</label>
                  <input type="text" name="pNum" id="pNum" className="w-5/6 border border-gray-300 p-1 my-1 rounded-md" placeholder="Phone Number"/>
                </div>
                <div className="flex">
                  <label htmlFor="pNum" className="w-1/6 pt-3 text-sm">Githup</label>
                  <input type="text" name="pNum" id="pNum" className="w-5/6 border border-gray-300 p-1 my-1 rounded-md" placeholder="Phone Number"/>
                </div>
                <div className="flex mt-4">
                  <label className="w-1/6"></label>
                  <button className="block px-4 py-2 text-sm hover:white rounded-md text-center w-5/6 hover:bg-white bg-gray-200 text-gray-700 hover:border cursor-pointer">
                    Save <FontAwesomeIcon icon={faFloppyDisk} className="text-md ml-1"/>
                  </button>
                </div>
              </div>
          </li>
        </ul>
    </div>
  )
}