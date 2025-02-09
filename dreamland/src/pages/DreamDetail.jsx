import React from "react";
import { Logo } from "../icons/logo";
import { useLoaderData} from "react-router-dom";
import { Return } from "../icons/return";
import { Link } from "react-router-dom";

export const DreamDetail = ({dream}) => {
  const dreams = useLoaderData();
  return(
    <div className="my-10 mx-5 p-10 py-18 rounded-3xl relative
    shadow-lg border border-gray-300 min-h-3/4
    bg-gradient-to-b from-[#f6d1cb] from-0% via-white via-40% to-white to-100%">
      <Link to="/" className="inline-block w-12  absolute bottom-5 right-5 cursor-pointer"><Return /></Link>
      <div className="flex justify-center">
        <Logo size={70} color="#1f3f96"/>
        <h1 className="text-2xl text-[#1f3f96] px-5 -mt-2">{dream.id} - {dream.title}</h1>
        <Logo size={70} color="#1f3f96"/>
      </div>
      <div className="mt-5 text-gray-600">
        <p className="indent-6 pb-3 text-gray-600">{dream.content}</p>
        <p className="indent-6 pb-3 text-gray-600">{dream.content}</p>
        <p className="indent-6 pb-3 text-gray-600">{dream.content}</p>
        <p className="indent-6 pb-3 text-gray-600">{dream.content}</p>
        <p className="indent-6 pb-3 text-gray-600">{dream.content}</p>
      </div>
      

      {/* {
        dreams.map(user => user)
      } */}
    </div>
  )
}
export const dreamLoader = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // if(res.status === 404) {
  //     throw new Response("Kaynak bulunamadı", { status: 404 });
  // }
  // return res.json();
  return;
}