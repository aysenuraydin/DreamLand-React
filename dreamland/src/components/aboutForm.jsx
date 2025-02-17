import React, { useEffect, useState } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import { CkeditorArea } from '../components/CkeditorArea';
import { useSelector, useDispatch } from 'react-redux';
import { editAboutFromDatabase } from '../actions/infoAction';

export const AboutForm = () => {
    const state = useSelector((state) => state.info);
    const [newAbout, setNewAbout] = useState(state.about.content);
    const dispatch = useDispatch();

    const [error, setError] = useState("");
    const [info, setInfo] = useState("");

    useEffect(() => {
        if (state.about) {
            setNewAbout(state.about.content); 
        }
    }, [state.about])

    useEffect(() => {
        setTimeout(() => {
            setError("");
            setInfo("");
        }, 3000);
    }, [error, info])

    const setAbout = (event) => {
        event.preventDefault();
        
        if (newAbout.length>0) {
            setInfo("About has been saved successfully.");
            dispatch(editAboutFromDatabase( {content: newAbout} ));
            return;
        } else{
            setError("About cannot be empty");
            setNewAbout(state.about.content);
        }
    }
    const aboutChange = (data) => {
        setNewAbout(data);
    };
    return(
        <form  onSubmit={setAbout} className="bg-white p-10 rounded-2xl border border-gray-300 shadow-lg mx-10 px-10 pt-10">
            <h1 className="text-2xl p-5 pt-0 text-center">About</h1>
            {/* <textarea name="about" id="about" className="border border-gray-300 w-full p-2 rounded-lg"
            defaultValue={newAbout} rows={5}></textarea> */}
            <div className='w-full lg:max-w-xl'>
                <CkeditorArea value={newAbout}  handleChange={aboutChange}/>
            </div>
            <div className='h-4 text-sm leading-2.5 mt-1'> 
                {error && (<span className='text-red-500'>- {error}</span>)} 
                {info && (<span className='text-emerald-500'>- {info}</span>)} 
            </div>
            <button type="submit" className="block px-4 py-2 text-sm bg-gray-200 rounded-md text-center w-full cursor-pointer hover:text-white hover:bg-gray-700">
            Save
            <FontAwesomeIcon icon={faFloppyDisk} className="text-md ml-1"/></button>
        </form>
    )
}