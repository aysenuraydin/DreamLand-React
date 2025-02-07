import React from "react"
import { Link } from "react-router-dom";
import { Logo } from "../icons/logo"
export const Card = () => {
    return(
        <div className="rounded-2xl h-[16rem] p-5 shadow-lg border border-gray-300 flex flex-col cursor-pointer
        bg-gradient-to-b from-[#f6d1cb] from-0% via-white via-40% to-white to-100%"> 
            <Link to="/dream">
                <h1 className="text-center my-5 text-[#1f3f96] hover:scale-110">lorem Lorem ipsum</h1>
            </Link>
            <Logo size={70}/>
            <p className="text-sm mt-5 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laborum!...</p>
        </div>
    )
}