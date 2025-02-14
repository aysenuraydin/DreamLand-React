import React, { useContext, useEffect } from 'react';
import { DreamContext } from '../contexts/DreamContext';
import headerImage from "../assets/deneme10.png";

export const Header = () => {
    
    const { headerState , headerDispatch } = useContext(DreamContext);
    const header = headerState.headerActive;

    useEffect(() => {
        headerDispatch({ 
            type: "GET_ACTİVE_HEADER"
        });
    }, []);  
    

  return(
    <>
      <div className="overflow-hidden my-8 rounded-2xl relative">
        {
          header.isActive && (
            <>
              <img className="w-full object-contain my-12 rounded-2xl" src={headerImage} alt="Header" />
              { 
                header?.title && ( <span className="header" style={{ color: header?.titleColor }}>
                {
                  header?.title.split(".").map((h,i)=> ( 
                    <div key={i}> {h} <br/> </div>
                  ))
                }
                </span> )
              }
            </>
          )
        }
      </div>
    </>
  )
}
