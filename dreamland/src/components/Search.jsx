import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Search = ({ search }) => {
    const [text, setText] = useState("");

    const change = (event) => {
        setText(event.target.value);
    };
    const clear = () => {
        setText("");
        search("");
    };

    return (
        <div className="flex items-center space-x-2">
            <div className="relative">
                <input 
                    className="px-2 py-1 pr-7 w-44 h-9 rounded-lg border bg-white" 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Search Products ..." 
                    value={text}
                    onChange={change}
                />
                {text && (
                    <FontAwesomeIcon 
                        icon={faXmark} 
                        className="text-lg absolute right-2 top-[0.5rem] text-gray-400 p-1 cursor-pointer bg-white"
                        onClick={clear}
                    />
                )}
            </div>
            <div 
                id="search-link" 
                className="cursor-pointer rounded-md px-2 text-sm font-medium border hover:scale-110 h-9 flex items-center bg-white"
                onClick={()=>search(text)}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-md" />
            </div>
        </div>
    );
};