
import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faTrash, faAdd, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-router-dom";;
import { Confirm } from '../icons/confirm';
import { Reject } from '../icons/Reject';

export const HeaderForm = ({onSubmit, formRef, header, del, reset, changeActive, isActive}) => {
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        title: '',
        titleColor: '#000000'
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
        if (header) {
            setFormData({
                name: header.name || '',
                url: header.url || '',
                title: header.title || '',
                titleColor: header.titleColor || '#000000'
            });
        }
    }, [header]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const add = (e) => {
        e.preventDefault();

        if(formData.name && formData.url && formData.title){
            onSubmit({...formData, isActive:!!isActive});
            setInfo("Headers has been saved successfully.");
        }else{
            if(!formData.name){
                setFormData((prev) => ({
                    ...prev,
                    name: header.name || '',
                }));
            }
            if(!formData.url){
                setFormData((prev) => ({
                    ...prev,
                    url: header.url || ''
                }));
            }
            if(!formData.title){
                setFormData((prev) => ({
                    ...prev,
                    title: header.title || ''
                }));
            }
            if(!formData.titleColor){
                setFormData((prev) => ({
                    ...prev,
                    titleColor: header.titleColor || '#000000'
                }));
            }
            setError("Name, Url, Title or Color cannot be empty");
        }
    };
    return(
    <Form onSubmit={add} ref={formRef} className="w-4/5 mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
        <div className='h-4 text-sm leading-2.5'> 
            {error && (<span className='text-red-500'>- {error}</span>)} 
            {info && (<span className='text-emerald-500'>- {info}</span>)} 
        </div>
        <div className="flex">
            <div className="w-1/3 py-5">
            <div className="flex justify-center mb-5 h-32 w-40">
                <img src="https://dummyimage.com/600x500/ccc/aaa" className="object-cover"/>
            </div>
            <div className="flex justify-center">
                <input type="file" className="mt-1 p-1 w-[6.5rem] border rounded-lg text-gray-800 outline-none text-sm cursor-pointer" />
            </div>
            </div>
            <div className="w-2/3 py-4 ml-12">
            <div className="w-full flex">
                <label htmlFor="name" className="w-15 mt-2">Name</label>
                <div className="flex w-full gap-x-2">
                <input type="text" id="name" name="name" className="mt-1 h-8 w-full border rounded-lg text-gray-800 outline-none px-3" value={formData.name} onChange={handleChange}/>
                    <div className='pt-1 cursor-pointer' onClick={changeActive}>
                        {isActive ? <Confirm/> : <Reject/> }
                    </div>
                </div>
            </div>
            <div className="w-full flex mt-1">
                <label htmlFor="url" className="mt-2 w-15">Url</label>
                <input type="text" id="url" name="url" className="mt-1 h-8 w-full border rounded-lg text-gray-800 outline-none px-3" value={formData.url} onChange={handleChange}/>
            </div>
            <div className="w-full flex mt-1">
                <label htmlFor="title" className="mt-2 w-15">Title</label>
                <input type="text" id="title" name="title" className="mt-1 h-8 w-full border rounded-lg text-gray-800 outline-none px-3" value={formData.title} onChange={handleChange}/>
            </div>
            <div className="w-full flex mt-1"> 
                <label htmlFor="titleColor" className="mt-2 w-15">Color</label>
                <input type="color" id="titleColor" name="titleColor" className="mt-1 h-8 w-full border rounded-lg text-gray-800 px-3"  value={formData.titleColor} onChange={handleChange}></input>
            </div>
            <div className="w-full flex gap-x-2 mt-4">
                {
                    header?.id && (
                        <button  type="submit"  className="block w-full px-3 py-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm cursor-pointer">
                            <span> Edit 
                                <FontAwesomeIcon icon={faPenToSquare} className="text-sm ml-1"/>
                            </span>
                        </button>
                    )
                }
                {
                    !header?.id && (
                        <button type="submit" className="block w-full px-3 py-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm cursor-pointer">
                            <span> Add 
                                <FontAwesomeIcon icon={faAdd} className="text-sm ml-1"/>
                            </span>
                        </button>
                    )
                }
                {
                    header?.id && (
                        <div className="block w-full px-3 py-2 hover:bg-gray-500 hover:text-white bg-gray-200 rounded-lg text-center text-sm cursor-pointer" onClick={()=>del(header.id)}>
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
