import React, { useContext } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
// import { DreamContext } from "../contexts/DreamContext";
import { useSelector, useDispatch } from 'react-redux';
import { editContactFromDatabase } from '../actions/infoAction';

export const ContactForm = () => {
    const state = useSelector((state) => state.info);
    const dispatch = useDispatch(); 
    const contact = state.contact;
    
    const setContact = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const phone = event.target.elements.phone.value;
        const address = event.target.elements.address.value;

        // dispatch({ 
        //     type: "EDIT_CONTACT",
        //     payload: {email:email, phone:phone,address:address}
        // });
        dispatch(editContactFromDatabase({
            email:email, 
            phone:phone,
            address:address
        }))
    }
    return(
        <form  onSubmit={setContact} className="bg-white p-10 rounded-2xl border border-gray-300 shadow-lg mx-10 px-10  pt-10">
            <h1 className="text-2xl p-5 pt-0 text-center">Contact</h1>
            <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/> 
            <div className="flex">
                <label htmlFor="email" className="w-1/6 pt-3 text-sm">Email</label>
                <input type="text" name="email" id="email" className="border border-gray-300 p-1 my-1 w-5/6 rounded-md" placeholder="Email" defaultValue={contact.email}/>
            </div>
            <div className="flex">
                <label htmlFor="phone" className="w-1/6 pt-3 text-sm">Phone Number</label>
                <input type="text" name="phone" id="phone" className="w-5/6 border border-gray-300 p-1 my-1 rounded-md" placeholder="Phone Number" defaultValue={contact.phone}/>
            </div>
            <div className="flex">
                <label htmlFor="address" className="w-1/6 pt-3 text-sm">Address</label>
                <div className="w-5/6 my-1 rounded-lg">
                <textarea name="address" id="address" className="w-full pt-3 border p-1 border-gray-300 h-20 overflow-scroll rounded-lg" placeholder="Address" defaultValue={contact.address}></textarea>
                </div>
            </div>
            <div className="flex">
                <label className="w-1/6"></label>
                <button type="submit" className="block px-4 mt-3 py-2 text-sm rounded-md text-center w-5/6 text-gray-700  bg-gray-200 cursor-pointer hover:text-white hover:bg-gray-700">
                Save <FontAwesomeIcon icon={faFloppyDisk} className="text-md ml-1"/>
                </button>
            </div>
        </form>
    )
}