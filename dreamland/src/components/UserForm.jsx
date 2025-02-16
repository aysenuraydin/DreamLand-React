import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faTrash, faAdd, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-router-dom";;
import { Confirm } from '../icons/confirm';
import { Reject } from '../icons/Reject';

export const UserForm = ({add, formRef, user, del, reset}) => {
    return(
    <Form onSubmit={add} ref={formRef} className="w-3/5 mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300 flex">
        <div className="w-full py-4">
        <div className="w-full flex mt-1">
            <label htmlFor="email" className="mt-2 w-15">Email</label>
            <input type="email" id="email" name="email" className="mt-1 h-8 w-full border rounded-lg text-gray-800 outline-none px-3" defaultValue={user.email}/>
        </div>
        <div className="w-full flex gap-x-2 mt-4 pl-13">
            {
                !user?.id && (
                    <button type="submit" className="block w-full px-3 py-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm cursor-pointer">
                        <span> Add 
                            <FontAwesomeIcon icon={faAdd} className="text-sm ml-1"/>
                        </span>
                    </button>
                )
            }
            {
                user?.id && (
                    <div className="block w-full px-3 py-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm cursor-pointer" onClick={()=>del(user)}>
                        <span> Delete
                            <FontAwesomeIcon icon={faTrash} className="text-sm ml-1"/>
                        </span>
                    </div>
                )
            }
            <button className="block w-full px-3 py-2 cursor-pointer bg-gray-200 rounded-lg text-center text-sm hover:bg-gray-500 hover:text-white" onClick={reset}> Clear 
                <FontAwesomeIcon icon={faCancel} className="text-sm ml-1"/>
            </button>
        </div>
        </div>
    </Form>
    )
}