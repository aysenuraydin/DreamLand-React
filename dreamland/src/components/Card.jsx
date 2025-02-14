import React from "react"
import { Link } from "react-router-dom";
import { Logo } from "../icons/logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from 'dompurify';

export const Card = ({dream}) => {

    const sanitizedContent = DOMPurify.sanitize(dream?.content);
    return(
        <div className="rounded-2xl p-5 shadow-lg border border-gray-300 flex flex-col 
        bg-gradient-to-b from-[#1f3f9682] from-0% via-white via-40% to-white to-100%"> 
            <Link to={`dream/${dream.id}`}>
                <h1 className="text-center text-shadow text-2xl sm:text-lg my-5 text-white hover:scale-110 h-12">
                    { dream.title}
                </h1>
            </Link>
            <Logo size={70}/>
            <div className="text-sm mt-5 text-gray-700 mb-5 h-28 flex items-end ">
                <div>
                    <p  dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    className="pb-2 max-h-10 overflow-hidden indent-3"></p>
                    <Link to={`dream/${dream.id}`} className="font-semibold"> Devamını Oku 
                        <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
//