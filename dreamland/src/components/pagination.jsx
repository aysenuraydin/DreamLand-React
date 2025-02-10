import React from "react";
import { Previous } from "../icons/Previous";
import { Next } from "../icons/Next";

export const Pagination = () => {
    return(
            <div className="flex justify-center pt-20 px-0 text-gray-500">
                <div className="w-full  flex justify-between">
                    <div className="text-gray-600 mt-3 hover:text-gray-700 cursor-pointer">
                        <button className="flex items-center" >
                            <Previous/>
                            <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex" >
                        <div className="hover:border-b  cursor-pointer hover:text-gray-700 hover:border-gray-400 py-1 mr-4 px-4">4</div>
                            <div className="w-5"> . . .</div>
                        </div>
                        <div>
                        <p className="border-b border-black font-bold leading-none hover:text-gray-700 hover:border-gray-400 py-1 px-4 mx-4 text-xl">5</p>
                        </div>
                        <div className="flex" >
                            <div className="w-5"> . . .</div>
                            <div className="hover:border-b  cursor-pointer hover:text-gray-700 hover:border-gray-400 py-1 px-4">6</div>
                        </div>
                    </div>
                    <div className="text-gray-600 hover:text-gray-700 cursor-pointer">
                        <button className="flex mt-3 items-center">
                            <span className="text-sm font-medium leading-none mr-3 ml-auto">Next</span>
                            <Next/>
                        </button>
                    </div>
                </div>
            </div>

    )
}