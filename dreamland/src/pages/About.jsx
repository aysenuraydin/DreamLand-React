import React from "react";
import { useLoaderData } from "react-router-dom";
import { Facebook } from "../icons/facebook";
import { Instagram } from "../icons/instagram";
import { Twiter } from "../icons/twiter";
import { Github } from "../icons/github";
export const About = ({about, socialMedias}) => {
  const items = useLoaderData();
  return(
    <div className="p-10">
      <div className="min-h-[80vh] mx-auto">
        <div className="relative isolate overflow-hidden px-6 lg:px-8 leading-[3rem] flex justify-center">
          <div className="rounded-[2rem] bg-gray-100 border border-gray-300 p-10 shadow-xl m-10 max-w-2xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-[#1f3f96a2] text-4xl font-semibold tracking-tight">About Us</h2>
            </div>
            <p className="mt-5 text-md leading-8 mx-10 text-gray-500"> {about} </p>
            <div className="max-w-2xl p-2 mx-10">
              <div className="mt-2 text-sm text-gray-600 grid grid-cols-4 gap-2">
                <div className="font-semibold">Instagram :</div> 
                <div className="col-span-3 flex">
                  <Instagram/>
                  <span className="pl-2 inline">{socialMedias.instagram}</span>
                </div>
                <div className="font-semibold">Facebook :</div> 
                <div className="col-span-3 flex">
                  <Facebook/>
                  <span className="pl-2 inline">{socialMedias.facebook}</span>
                </div>
                <div className="font-semibold">Twitter :</div> 
                <div className="col-span-3 flex">
                  <Twiter/>
                  <span className="pl-2 inline">{socialMedias.twitter}</span>
                </div>
                <div className="font-semibold">Github :</div> 
                <div className="col-span-3 flex">
                  <Github/>
                  <span className="pl-2 inline">{socialMedias.github}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const aboutLoader = async () => {
  return;
}