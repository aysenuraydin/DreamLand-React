import React from "react"
import SyncLoader from "react-spinners/SyncLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk} from "@fortawesome/free-solid-svg-icons";

export const AboutForm = ({about, infoDispatch}) => {
    const setAbout = (event) => {
        event.preventDefault();
        const value = event.target.elements.about.value;
        console.log(value);
        infoDispatch({ 
            type: "EDİT_ABOUT",
            payload: value
        });
    }
    return(
        <form  onSubmit={setAbout} className="bg-white p-10 rounded-2xl border border-gray-300 shadow-lg mx-10 px-10 pt-10">
            <h1 className="text-2xl p-5 pt-0 text-center">About</h1>
            <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/> 
            <textarea name="about" id="about" className="border border-gray-300 w-full p-2 rounded-lg" 
            defaultValue={about} rows={5}></textarea>
            <button type="submit" className="block px-4 py-2 mt-3 text-sm bg-gray-200 rounded-md text-center w-full cursor-pointer hover:text-white hover:bg-gray-700"> 
            Save 
            <FontAwesomeIcon icon={faFloppyDisk} className="text-md ml-1"/></button>
        </form>
    )
}