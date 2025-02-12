import React, { useEffect } from 'react';
import { Outlet , useParams} from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Letters } from '../components/letters';

export const DreamLayout = ({ children, titles, dreamDispatch}) => {
    const { id } = useParams();
    useEffect(() => {
        dreamDispatch({ 
            type: "GET_DREAM_BY_ID",
            payload:  {id:id}
        });
    }, [id]);

    return (
        <div className="-mt-20">
            <Header/>
            <div className="flex justify-between w-full border-b-2 p-3 text-[#1f3f96] border-[#1f3f96a4]">
                <h1 className="sm:text-3xl text-2xl ml-10">Dream Interpretations</h1>
                <div className="flex items-center relative">
                    <Search/>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col">
                <div className="lg:w-96 lg:pl-10 px-5 pb-10">
                    <Sidebar  titles={titles} />
                    <Letters />
                </div>
                <div className="w-full px-5">
                    { <Outlet/>}
                </div>
            </div>
        </div>
    );
}