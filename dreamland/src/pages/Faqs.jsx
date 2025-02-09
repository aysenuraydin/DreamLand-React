import React from "react";
import { useLoaderData} from "react-router-dom";
export const Faqs = ({faqs}) => {
    const items = useLoaderData();
    return(
      <div className="p-10">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="relative isolate overflow-hidden px-6 lg:px-8 text-xl leading-[3rem] flex justify-center">
          <div className="rounded-[2rem] m-10 bg-gray-100 border border-gray-300 p-14 shadow-xl">
            <div className="w-lg text-center mb-10">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900">Faqs</h2>
            </div>
            <div className="px-2 max-h-96 overflow-scroll">
            {
              faqs.map((faq,index) => {
                return(
                  <div key={index} className="w-full mb-4 bg-white rounded-lg shadow px-5 pb-2" >
                  <h4 className="mt-1 text-md font-semibold text-dark " >  {faq.question}  </h4>
                  <p className="py-1 leading-relaxed text-body-color text-sm" >  
                  {faq.answer} </p>
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
  export const faqsLoader = async () => {
    return;
  }







