import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Search } from "../components/Search";

export const DreamLayout = ({ children }) => {
    return (
        <div className="-mt-20">
            <Header/>
                <div className="flex lg:flex-row flex-col">
                <div className="lg:w-96 lg:pl-10 px-5 pb-10">
                    <Sidebar />
                </div>
                <div className="w-full px-5">
                    <div className="flex justify-between w-full border-b-2 p-3 text-gray-400 border-gray-300">
                        <h1 className="text-3xl text-[#1f3f96]">Dream Interpretations</h1>
                        <div class="flex items-center relative">
                        <Search/>
                        <div id="search-link" class="cursor-pointer rounded-md px-2 p-[0.4rem] text-sm font-medium border hover:scale-110">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-md"/>
                        </div>
                        </div>
                    </div>
                    { <Outlet/>}
                </div>
            </div>
        </div>
    );
}