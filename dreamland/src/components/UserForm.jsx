import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faTrash, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-router-dom";

export const UserForm = ({onSubmit, formRef, user, del, reset}) => {
    const [error, setError] = useState("");
    const [info, setInfo] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            setError("");
            setInfo("");
        }, 3000);
        return () => clearTimeout(timer);
    }, [error, info])

    const add = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        if(email){
            onSubmit(email);
            setInfo("User has been saved successfully. Default paralo : 123456");
        }else{
            if(!email) event.target.elements.email.value = user.email || "";
            setError("Email cannot be empty");
        }
    }
    return(
        <Form onSubmit={add} ref={formRef} className="md:w-3/5 w-full mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300 flex">
        <div className="w-full py-4">
            <div className='h-9 text-sm pl-13 -mt-2 flex items-end'> 
                {error && (<span className='text-red-500'>- {error}</span>)} 
                {info && (<span className='text-emerald-500'>
                    - {info.split(".")[0]} <br/>
                    - {info.split(".")[1]}
                </span>)} 
            </div>
            <div className="w-full flex my-1">
                <label htmlFor="email" className="mt-2 w-15">Email</label>
                <input type="email" id="email" name="email" className="mt-1 h-8 w-full border rounded-lg text-gray-800 outline-none px-3" defaultValue={user.email}/>
            </div>
            <div className="flex mt-4">
                <span className="inline-block w-15 mt-3 text-sm"></span>
                <div className="w-full flex gap-x-2">
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
        </div>
    </Form>
    )
}