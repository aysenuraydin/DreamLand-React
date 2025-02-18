import React, { useState, useEffect } from 'react';
import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";
import { useSelector, useDispatch } from 'react-redux';
import SyncLoader from "react-spinners/SyncLoader";
import { getPaginatedDreamsFromDatabase } from '../actions/dreamAction';
export const Home = () => {

    const state = useSelector((state) => state.dream);
    const dispatch = useDispatch(); 
    const dreams = state.dreams;
    const loading = state.loading;
    const dreamsByPageNumber = state.dreamsByPageNumber;
    const [pageNumber, setPagenumber] = useState(1);
    const pageSize = 9;
    const pageTotal = Math.ceil(dreams.length / pageSize);

    useEffect(() => {
        const getDatas = async () => {
            await dispatch(getPaginatedDreamsFromDatabase({pageSize:pageSize, pageNumber:pageNumber}))
        };
        getDatas(); 
    }, [pageNumber, dreams])
  
    const changePage = (pageNumber) => {
      setPagenumber(pageNumber)
    };

  return(
    <>
        {dreams.length === 0 ? (
            <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/>
          ) : (null)
        }
    

      {loading ? (
            <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/>
          ) : (
            <div className='min-h-[66rem]'>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-7 gap-9 mt-12">
                {
                    dreamsByPageNumber.map((dream,index) => ( <Card key = {index} dream={dream}/> ))
                }
              </div>
            </div>
          )
        }
        { dreams.length > pageSize ? (
          <Pagination pageNumber={pageNumber} pageTotal={pageTotal} changePage={changePage} /> 
          ) : (null) 
        }
    </>
  )
}