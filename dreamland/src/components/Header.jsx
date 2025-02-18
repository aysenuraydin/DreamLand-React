import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Header = () => {
  const dummyImageUrl = "https://dummyimage.com/600x500/ccc/aaa";
    const state = useSelector((state) => state.header);
    const dispatch = useDispatch(); 
    const header = state.headerActive;

    useEffect(() => {
        dispatch({ 
            type: "GET_ACTİVE_HEADER"
        });
    }, []);  
    
  return(
    <>
      <div className="overflow-hidden my-8 rounded-2xl relative">
        {
          header.isActive && (
            <>
              <img className="w-full object-contain my-12 rounded-2xl border border-gray-200"
              style={{ backgroundColor: header?.titleColor+"40" }} 
              src={header?.imageUrl || dummyImageUrl} alt="Header" />
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
