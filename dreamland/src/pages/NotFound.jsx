import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return(
    <div className=" sm:pt-20 pt-10 flex justify-center items-center">
      <main className="bg-white px-6 py-14 lg:px-8 border border-gray-300 shadow-2xl rounded-[2rem]">
          <div className="text-center">
            <p className="text-base font-semibold text-gray-600">404</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Page not found</h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/" className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Go back home</Link>
              <Link to="/contact" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </div>
        </main>
    </div>
  )
}