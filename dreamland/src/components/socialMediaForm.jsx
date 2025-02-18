import React, { useEffect, useState  } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { editSocialMediaFromDatabase } from '../actions/infoAction';

export const SocialMediaForm = () => {
    const state = useSelector((state) => state.info);
    const dispatch = useDispatch(); 
    const socialMedias = state.socialMedias;

    const [error, setError] = useState("");
    const [info, setInfo] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setError("");
            setInfo("");
        }, 3000);
    }, [error, info])

    const setSocialMedias = (event) => {
        event.preventDefault();
        const instagram = event.target.elements.instagram.value;
        const facebook = event.target.elements.facebook.value;
        const twitter = event.target.elements.twitter.value;
        const github = event.target.elements.github.value;
        
        if(instagram && facebook && twitter && github){
            dispatch(editSocialMediaFromDatabase({
                instagram:instagram,
                facebook:facebook,
                twitter:twitter,
                github:github
            }))
            setInfo("Contact has been saved successfully.");
        }else{
            if(!instagram) 
                event.target.elements.instagram.value = socialMedias.instagram || "";
            if(!facebook) 
                event.target.elements.facebook.value = socialMedias.facebook || "";
            if(!twitter) 
                event.target.elements.twitter.value = socialMedias.twitter || "";
            if(!github) 
                event.target.elements.github.value = socialMedias.github || "";
            setError("Instagram, Facebook, Twitter or Github cannot be empty");
        }
    }
    return(
        <form  onSubmit={setSocialMedias} className="bg-white p-10 rounded-2xl border border-gray-300 shadow-lg mx-10 px-10 pt-10">
            <h1 className="text-2xl p-5 pt-0 text-center">Social Media</h1>
            <div className="flex">
                <label htmlFor="instagram" className="w-1/6 pt-3 text-sm">Instagram</label>
                <input type="text" name="instagram" id="instagram" className="border border-gray-300 p-1 my-1 w-5/6 rounded-md" placeholder="Instagram" defaultValue={socialMedias.instagram}/>
            </div>
            <div className="flex">
                <label htmlFor="facebook" className="w-1/6 pt-3 text-sm">Facebook</label>
                <input type="text" name="facebook" id="facebook" className="w-5/6 border border-gray-300 p-1 my-1 rounded-md" placeholder="Facebook" defaultValue={socialMedias.facebook}/>
            </div>
            <div className="flex">
                <label htmlFor="twitter" className="w-1/6 pt-3 text-sm">Twitter</label>
                <input type="text" name="twitter" id="twitter" className="w-5/6 border border-gray-300 p-1 my-1 rounded-md" placeholder="Twitter" defaultValue={socialMedias.twitter}/>
            </div>
            <div className="flex">
                <label htmlFor="github" className="w-1/6 pt-3 text-sm">Github</label>
                <input type="text" name="github" id="github" className="w-5/6 border border-gray-300 p-1 my-1 rounded-md" placeholder="Github" defaultValue={socialMedias.github}/>
            </div>
            <div className="w-5/6 ml-auto">
                <div className='h-4 text-sm leading-2.5'> 
                    {error && (<span className='text-red-500'>- {error}</span>)} 
                    {info && (<span className='text-emerald-500'>- {info}</span>)} 
                </div>
                <button type="submit" className="block px-4 py-2 text-sm hover:white rounded-md text-center w-full bg-gray-200 text-gray-700 hover:text-white hover:bg-gray-700 cursor-pointer">
                Save <FontAwesomeIcon icon={faFloppyDisk} className="text-md ml-1"/>
                </button>
            </div>
        </form>
    )
}