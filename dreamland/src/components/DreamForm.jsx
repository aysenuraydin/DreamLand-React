import React, {useState,useEffect} from 'react';
import { Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faTrash, faAdd, faPenToSquare, } from "@fortawesome/free-solid-svg-icons";
import { CkeditorArea } from '../components/CkeditorArea';

export const DreamForm  = ({ del, dream, onSubmit, formRef, reset}) => {
    const [formData, setFormData] = useState({
        title: dream.title || '',
        content: dream.content || ''
    });

    const [error, setError] = useState("");
    const [info, setInfo] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            setError("");
            setInfo("");
        }, 3000);
        return () => clearTimeout(timer);
    }, [error, info])

    useEffect(() => {
        if (dream) {
            setFormData({
                title: dream.title || '',
                content: dream.content || ''
            });
        }
    }, [dream]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };
    const add = (e) => {
        e.preventDefault();

        if(formData.title && formData.content){
            onSubmit(formData);
            setInfo("Dreams has been saved successfully.");
        }else{
            if(!formData.title){
                setFormData((prev) => ({
                    ...prev,
                    title: dream.title || '',
                }));
            }
            if(!formData.content){
                setFormData((prev) => ({
                    ...prev,
                    content: dream.content || ''
                }));
            }
            setError("Title or Content cannot be empty");
        }
    };
    const contentChange = (data) => {
        setFormData((prevData) => ({
            ...prevData,
            content: data
        }));
    };
    return(
        <Form onSubmit={add} ref={formRef} className="w-4/5 mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
            <div className="mb-3 flex w-full">
                <label htmlFor="title" className="w-1/6 mt-3 text-sm mr-3">Title</label>
                <input id="title" type="text" className="mt-1 p-1 w-full border border-gray-300  rounded-lg text-gray-800 outline-none"  value={formData.title} onChange={handleChange}/> 
            </div>
            <div className="mb-2 flex w-full">
                <label htmlFor="interpretation" className="w-1/6 mt-3 text-sm">Context</label>
                {/* <textarea id="interpretation" rows={4} className="mt-1 p-1 w-5/6 border border-gray-300  rounded-lg text-gray-800 outline-none" value={formData.content} onChange={handleChange}></textarea>  */}
                <div className='w-5/6 lg:max-w-xl'>
                    <CkeditorArea value={formData.content} handleChange={contentChange}/>
                </div> 
            </div>
            <div className='h-4 text-sm leading-2.5'> 
                {error && (<span className='text-red-500'>- {error}</span>)} 
                {info && (<span className='text-emerald-500'>- {info}</span>)} 
            </div>
            <div className="w-full flex gap-x-2">
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
                    <div className="block w-full px-3 py-2 cursor-pointer hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm" onClick={()=> del(dream.id)}>
                    <span> Delete
                        <FontAwesomeIcon icon={faTrash} className="text-sm ml-1"/>
                    </span>
                    </div>
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