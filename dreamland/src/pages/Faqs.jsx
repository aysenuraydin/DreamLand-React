import React, { useContext } from 'react';
// import { DreamContext } from '../contexts/DreamContext';
import { useLoaderData} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

export const Faqs = () => {
    // const items = useLoaderData(); 

    const state = useSelector((state) => state.faq);
    const faqs = state.faqs;

    return(
      <div className="p-10">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="relative isolate overflow-hidden px-6 lg:px-8 text-xl leading-[3rem] flex justify-center">
          <div className="rounded-[2rem] m-10 bg-gray-100 border border-gray-300 p-14 shadow-xl">
            <div className="w-lg text-center mb-10">
              <h2 className="text-4xl font-semibold tracking-tight text-[#1f3f96a2]">Faqs</h2>
            </div>
            <div className="max-h-96 overflow-scroll px-10">
            {
              faqs.map((faq,index) => {
                return(
                  <div key={index} className="w-full mb-4 bg-white rounded-lg shadow p-5 pb-2" >
                    <h4 className="mt-1 text-sm font-semibold text-dark ">  
                    <FontAwesomeIcon icon={faQuestion} className="text-[#4768c4ec] text-lg mr-2"/>
                      {faq.question} ?
                    </h4>
                    <p className="py-1 leading-relaxed text-body-color text-sm text-gray-500" > {faq.answer} </p>
                </div>
                )
              })
            } 
            </div> 
          </div>
      </div>
    </div>
    </div>
    )
  }
  // export const faqsLoader = async () => {
  //   return;
  // }







