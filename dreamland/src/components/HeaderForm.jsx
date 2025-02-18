
import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faTrash, faAdd, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-router-dom";
import { Confirm } from "../icons/confirm";
import { Reject } from "../icons/Reject";

    export const HeaderForm = ({ onSubmit, formRef, header, del, reset, changeActive, isActive }) => {
    const [formData, setFormData] = useState({
        name: "",
        imageUrl: "",
        title: "",
        titleColor: "#000000",
    });

    const [error, setError] = useState("");
    const [info, setInfo] = useState("");
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const dummyImageUrl = "https://dummyimage.com/600x500/ccc/aaa";

    useEffect(() => {
        if (header) {
        setFormData({
            name: header.name || "",
            imageUrl: header.imageUrl || "",
            title: header.title || "",
            titleColor: header.titleColor || "#000000",
        });
        }
    }, [header]);

    useEffect(() => {
        const timer = setTimeout(() => {
        setError("");
        setInfo("");
        }, 3000);
        return () => clearTimeout(timer);
    }, [error, info]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [id]: value,
        }));
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
        }
    };

    const uploadFile = async () => {
        if (!file) return null;

        setUploading(true);
        const fileId = nanoid();
        const storageRef = ref(storage, `uploads/${fileId}-${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        try {
        await uploadTask;
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setUploading(false);
        return downloadUrl;
        } catch (error) {
        console.error("Upload error:", error);
        setError("File upload failed.");
        setUploading(false);
        return null;
        }
    };

    const add = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.title) {
            setError("Name and Title cannot be empty.");
            return;
        }
    
        if (!file && !formData.imageUrl) {
            setError("Please select an image file.");
            return;
        }
    
        const tempFormData = { ...formData };
        setFormData({
            name: "",
            imageUrl: "",
            title: "",
            titleColor: "#000000",
        });
        setFile(null);
        setImageUrl(""); 
        setInfo("Header is being saved...");
    
        let imageUrl = tempFormData.imageUrl;
        
        if (file) {
            try {
                uploadFile().then((uploadedUrl) => {
                    imageUrl = uploadedUrl;
                    onSubmit({ ...tempFormData, imageUrl, isActive: !!isActive });
                    setInfo("Header has been saved successfully.");
                }).catch(() => {
                    setError("File upload failed.");
                });
            } catch {
                setError("File upload failed.");
            }
        } else {
            onSubmit({ ...tempFormData, imageUrl, isActive: !!isActive });
            setInfo("Header has been saved successfully.");
        }
    };

    return (
        <Form onSubmit={add} ref={formRef} className="md:w-4/5 w-full mt-8 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
        <div className="h-4 text-sm leading-2.5">
            {error && <span className="text-red-500">- {error}</span>}
            {info && <span className="text-emerald-500">- {info}</span>}
        </div>
        <div className="flex">
            <div className="w-1/3 py-5">
            <div className="flex justify-center mb-5 h-32 w-full">
                <img
                src={imageUrl || formData.imageUrl || dummyImageUrl}
                className="object-cover h-full w-full rounded-lg"
                alt="Preview"
                />
            </div>
            <div className="flex justify-start">
                <input type="file"
                className="mt-1 p-1 w-full border rounded-lg text-gray-800 outline-none text-sm cursor-pointer" onChange={handleFileChange} accept="image/*"  />
            </div>
            </div>
            <div className="w-2/3 py-4 lg:pl-10 pl-5">
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
                    <label htmlFor="title" className="mt-2 w-15">Title</label>
                    <input type="text" id="title" name="title" className="mt-1 h-8 w-full border rounded-lg text-gray-800 outline-none px-3" value={formData.title} onChange={handleChange}/>
                </div>
                <div className="w-full flex mt-1"> 
                    <label htmlFor="titleColor" className="mt-2 w-15">Color</label>
                    <input type="color" id="titleColor" name="titleColor" className="mt-1 h-8 w-full border rounded-lg text-gray-800 px-[0.1rem]"  value={formData.titleColor} onChange={handleChange}></input>
                </div>

                <div className='flex'>
                    <span className="inline-block w-15 mt-3 text-sm"></span>
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
        </div>
        </Form>
    );
};


