import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";

export const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const backToTop = () =>  window.scrollTo({ top: 0, behavior: "smooth" });

    useEffect(() => {
        window.addEventListener("scroll",  () => setIsVisible(window.scrollY > 300));
    }, []);

    return(
        <button className={`scroll-top ${isVisible? "":"hidden"}`} onClick={backToTop}>
            <div className="arrow up mt-1 inline-block">
                <FontAwesomeIcon icon={faArrowUp} className="text-xl text-white"/>
            </div>
        </button>
    )
}