import React, { useState, useRef, useEffect } from 'react';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCancel, faPlus} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../icons/logo";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/Pagination';
import { DreamsList } from '../components/DreamsList';
import { DreamForm } from '../components/DreamForm';
import { useSelector, useDispatch } from 'react-redux';
import { addDreamToDatabase, deleteDreamFromDatabase, editDreamFromDatabase, getPaginatedDreamsFromDatabase } from '../actions/dreamAction';

export const Dreams = () => {
  
  const [visible, setVisible] = useState(false);
  const formRef = useRef(null);

  const state = useSelector((state) => state.dream);
  const dispatch = useDispatch(); 
  const dreams = state.dreams;
  const dream = state.dream;

  const loading = state.loading;
  const dreamsByPageNumber = state.dreamsByPageNumber;
  const pageSize = 5;
  const pageTotal = Math.ceil(dreams.length / pageSize);
  const [pageNumber, setPagenumber] = useState(1);
  const [isAdding, setIsAdding] = useState(false); 
  const [isDeleting, setIsDeleting] = useState(false); 
  
  useEffect(() => {
    if (pageTotal > 0 && isAdding) {
      setPagenumber(pageTotal);
      setIsAdding(false);
    }
    if (!isDeleting)  return;
    if (pageNumber > pageTotal) setPagenumber(pageTotal);
    setIsDeleting(false); 
  }, [dreams.length]);

  const add = (data) => {
    if(dream?.id) {
      dispatch(editDreamFromDatabase(
        {id:dream?.id, ...data}
      ));
    } else {
      dispatch(addDreamToDatabase({...data}));
      setIsAdding(true);
    }
    formRef.current.reset();
  }
  const reset = () => {
    setVisible(false);
    dispatch({
      type: "CLEAR_DREAM"
    });
    formRef.current.reset();
  }
  const edit = (dream) => {
    setVisible(true);
    dispatch({
      type: "GET_DREAM",
      payload: dream
    });
  }
  const del = (id) => {
    setVisible(true); 
    setIsDeleting(true); 
    dispatch(deleteDreamFromDatabase( {id} ));
  }

  useEffect(() => {
    console.log("useEffect")
      const getDatas = async () => {
          await dispatch(getPaginatedDreamsFromDatabase({pageSize:pageSize, pageNumber:pageNumber}))
      };
      getDatas();
  }, [pageNumber, dreams])

  const changePage = (pageNumber) => {
    setPagenumber(pageNumber)
  };
  return(
    <div className="p-8">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="flex justify-between border-b-2 text-gray-400 border-gray-300 pb-[0.6rem] px-4">
          <h1 className="text-3xl">Dreams
            <span className="admin-icons relative top-1 ml-3">
                <Logo color="#98A1AE" size={55}/></span>
          </h1>
          <div className="flex gap-x-3">
            <div className="flex items-center relative">
              <Search/>
            </div>
            {
              !visible && (
                <div className="admin-button" onClick={()=> setVisible(!visible)}>
                  <span> Add Dream
                    <FontAwesomeIcon icon={faPlus} className="text-sm pl-1"/>
                  </span>
                </div>
              )
            }
            {
              visible && (
                <div className="admin-button" onClick={reset}>
                  <span className="text-red-500"> Close
                    <FontAwesomeIcon icon={faCancel} className="text-sm pl-1"/>
                  </span>
                </div>
              )
            }
          </div>
        </div>
        {
          visible && ( <DreamForm del={del} dream={dream} onSubmit={add} reset={reset} formRef={formRef}/> ) 
        }
        <div className="flex items-start px-2 pb-2 mb-5 mt-16 text-gray-500 gap-x-2">
          <span className="w-1/6 text-center text-sm bg-white border border-[#1f3f96a2] p-1 rounded-full">
            <span className="font-bold text-[#1f3f96a2]">Number</span>
          </span>
          <span className="w-10/12 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Title</span>
          </span>
          <span className="w-1/3 bg-white text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2]">
            <span className= "font-bold">Datetime</span>
          </span>
          <span className="w-1/4">  </span>
        </div>
        <div className='h-[30rem]'>
          {loading ? (
              <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/>
            ) : (
              <DreamsList dreams={dreamsByPageNumber} edit={edit}/>
            )
          }
        </div>
        { dreams.length > pageSize ? (
          <Pagination pageNumber={pageNumber} pageTotal={pageTotal} changePage={changePage} /> 
          ) : (null) 
        }
      </div>
    </div>
  )
}