import React, { useContext } from 'react';
import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";
import { useSelector } from 'react-redux';
import SyncLoader from "react-spinners/SyncLoader";
export const Home = () => {

    const state = useSelector((state) => state.dream);
    const dreams = state.dreams;

  return(
    <>
        {dreams.length === 0 ? (
            <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/>
          ) : (null)
        }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-7 gap-9 mt-12">
        {
          Array.isArray(dreams) ? (
            dreams.map((dream,index) => ( <Card key = {index} dream={dream}/> ))
          ) : (null)
        }
      </div>
      <Pagination/>
    </>
  )
}