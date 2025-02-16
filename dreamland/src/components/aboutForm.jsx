import React, { useContext, useState } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
// import { DreamContext } from '../contexts/DreamContext';
import { CkeditorArea } from '../components/CkeditorArea';
import { useSelector, useDispatch } from 'react-redux';
import { editAboutFromDatabase } from '../actions/infoAction';

export const AboutForm = () => {
    const state = useSelector((state) => state.info);
    const [newAbout, setNewAbout] = useState(state.about);
    const dispatch = useDispatch(); 

    const setAbout = (event) => {
        event.preventDefault();
        // dispatch({ 
        //     type: "EDIT_ABOUT",
        //     payload: newAbout
        // });
        dispatch(editAboutFromDatabase({content:newAbout}))
    }
    const aboutChange = (data) => {
        setNewAbout(data);
    };
    return(
        <form  onSubmit={setAbout} className="bg-white p-10 rounded-2xl border border-gray-300 shadow-lg mx-10 px-10 pt-10">
            <h1 className="text-2xl p-5 pt-0 text-center">About</h1>
            <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/> 
            {/* <textarea name="about" id="about" className="border border-gray-300 w-full p-2 rounded-lg" 
            defaultValue={newAbout} rows={5}></textarea> */}
            <div className='w-full lg:max-w-xl'>
                <CkeditorArea value={newAbout}  handleChange={aboutChange}/>
            </div>
            <button type="submit" className="block px-4 py-2 mt-3 text-sm bg-gray-200 rounded-md text-center w-full cursor-pointer hover:text-white hover:bg-gray-700"> 
            Save 
            <FontAwesomeIcon icon={faFloppyDisk} className="text-md ml-1"/></button>
        </form>
    )
}