import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faArrowRight} from "@fortawesome/free-solid-svg-icons";
export const Login = () => {
  return(
    <>
      <div className="flex h-full items-center justify-center pt-20">
        <div className="bg-gray-100 p-5 w-full my-16 max-w-lg border border-gray-300 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-600 mb-6 text-center">
            Sign In
          </h2>
          <form>
            <div className="mb-3">
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-xl text-gray-800 outline-none bg-white" placeholder="Email"/>
              <div>
              </div>
            </div>
            <div className="mb-2">
              <input type="password" id="password" name="password" className="mt-1 p-2 w-full border border-gray-300 rounded-xl text-gray-800 outline-none bg-white" placeholder="Password"/>
            </div>
            <div className="mb-3">
              <a className="text-end block w-full text-gray-600 rounded-sm pr-5">
                Forgot My Password!
                <FontAwesomeIcon icon={faArrowRight} className="ml-1"/>
              </a>
            </div>

            <button type="submit" className="w-full rounded-full p-2 bg-gray-800 text-white hover:bg-gray-600">
              Sign In
              <FontAwesomeIcon icon={faRightToBracket} className="ml-1"/>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}