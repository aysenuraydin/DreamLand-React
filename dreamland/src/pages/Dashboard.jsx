import React from "react";
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";

export const Dashboard = () => {
  return(
    <div className="p-8">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="flex justify-between border-b-2 text-gray-400 border-gray-300 pb-[0.6rem] px-4">
              <h1 className="text-3xl">Dashboard
                <FontAwesomeIcon icon={faMicrosoft} className={'admin-icons ml-4 text-2xl'}/>
              </h1>
              <div className="flex items-center relative">
                <Search/>
                <div id="search-link" className="cursor-pointer rounded-md px-2 text-sm font-medium border hover:scale-110 h-9 pt-[0.4rem]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-md"/>
                </div>
              </div>
        </div>
        <main className="mt-5 sm:p-5 p-10 grid gap-6">
          <section className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center p-8 bg-gray-50 shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-white bg-[#f6d1cb] rounded-full mr-6">
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
                  </div>
                  <div>
                      <span className="block text-2xl font-bold">10</span>
                      <span className="block text-gray-500">Courses</span>
                  </div>
              </div>
              <div className="flex items-center p-8 bg-gray-50 shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-white bg-[#f6d1cb] rounded-full mr-6">
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
                  </div>
                  <div>
                      <span className="block text-2xl font-bold">6.8</span>
                      <span className="block text-gray-500">Average mark</span>
                  </div>
              </div>
              <div className="flex items-center p-8 bg-gray-50 shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 rounded-full mr-6 text-white bg-[#f6d1cb]">
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
                  </div>
                  <div>
                      <span className="inline-block text-2xl font-bold">4</span>
                      <span className="inline-block text-xl text-gray-500 font-semibold">(40%)</span>
                      <span className="block text-gray-500">Number Of Courses Completed</span>
                  </div>
              </div>
              <div className="flex items-center p-8 bg-gray-50 shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-white bg-[#f6d1cb] rounded-full mr-6">
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
                  </div>
                  <div>
                      <span className="block text-2xl font-bold">83%</span>
                      <span className="block text-gray-500">Finished homeworks for this week</span>
                  </div>
              </div>
          </section>
          <section className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-gray-50 shadow rounded-lg">
                  <div className="px-6 py-5 font-semibold border-b border-gray-100">Notes</div>
                  <div className="p-4 flex-grow">
                      <div className="flex items-center justify-center px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                  </div>
              </div>
              <div className="flex items-center p-8 bg-gray-50 shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-white bg-[#f6d1cb] rounded-full mr-6">
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
                  </div>
                  <div>
                      <span className="block text-2xl font-bold">15</span>
                      <span className="block text-gray-500">Lessons left for this week</span>
                  </div>
              </div>
              <div className="flex items-center p-8 bg-gray-50 shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-white bg-[#f6d1cb] rounded-full mr-6">
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
                  </div>
                  <div>
                      <span className="block text-2xl font-bold">139</span>
                      <span className="block text-gray-500">Hours spent on lessons</span>
                  </div>
              </div>
              <div className="flex flex-col row-span-3 bg-gray-50 shadow rounded-lg">
                  <div className="px-6 py-5 font-semibold border-b border-gray-100">Scoreboard</div>
                  <div className="p-4 flex-grow">
                      <div className="flex items-center justify-center px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">To be a front end developer<br/>To be a cloud engineer</div>
                  </div>
              </div>
              <div className="flex flex-col row-span-3 bg-gray-50 shadow rounded-lg">
                  <div className="px-6 py-5 font-semibold border-b border-gray-100">Your Aim Of Getting Into Tech</div>
                  <div className="p-4 flex-grow">
                      <div className="flex items-center justify-center px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">To be a front end developer<br/>To be a cloud engineer</div>
                  </div>
              </div>
          </section>
        </main>
      </div>
    </div>
  )
}