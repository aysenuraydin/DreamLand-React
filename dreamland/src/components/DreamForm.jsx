import React from 'react';
import { Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faTrash, faAdd, faPenToSquare, } from "@fortawesome/free-solid-svg-icons";

export const DreamForm  = ({ del, dream, add, formRef, reset}) => {
    return(
        <Form onSubmit={add} ref={formRef} className="w-4/5 mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
            <div className="mb-3 flex">
                <label htmlFor="title" className="min-w-24 mt-3 text-sm">Title</label>
                <input id="title" type="text" className="mt-1 p-1 w-full border border-gray-300  rounded-lg text-gray-800 outline-none" defaultValue={dream?.title}/>
            </div>
            <div className="mb-6 flex">
                <label htmlFor="interpretation" className="min-w-24 mt-3 text-sm">Interpretation</label>
                <textarea id="interpretation" rows={4} className="mt-1 p-1 w-full border border-gray-300  rounded-lg text-gray-800 outline-none" defaultValue={dream?.content}></textarea>
            </div>
            <div className="pl-[6rem] w-full flex gap-x-2">
                {
                dream.id && (
                    <button className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm">
                    <span> Edit
                        <FontAwesomeIcon icon={faPenToSquare} className="text-sm ml-1"/>
                    </span>
                    </button>
                )
                }
                {
                !dream.id && (
                    <button type="submit" className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm">
                    <span> Add
                        <FontAwesomeIcon icon={faAdd} className="text-sm ml-1"/>
                    </span>
                    </button>
                )
                }
                {
                dream.id && (
                    <button className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm" onClick={()=> del(dream.id)}>
                    <span> Delete
                        <FontAwesomeIcon icon={faTrash} className="text-sm ml-1"/>
                    </span>
                    </button>
                )
                }
                <button className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm" onClick={ reset }> Clear
                <span>
                    <FontAwesomeIcon icon={faCancel} className="text-sm ml-1"/>
                </span>
                </button>
            </div>
        </Form>
    )
}