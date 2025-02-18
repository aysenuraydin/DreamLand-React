import React, { useState, useContext, useEffect } from 'react';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData} from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/Pagination';
import { MessageForm } from '../components/messageForm';
import { MessageList } from '../components/messageList';
import { useSelector, useDispatch } from 'react-redux';
import { getPaginatedMessagesFromDatabase, editMessageFromDatabase } from '../actions/messageAction';

export const Messages = () => {

  const state = useSelector((state) => state.message);
  const dispatch = useDispatch(); 
  const message = state.message;
  const messages = state.messages;

  const loading = state.loading;
  const messagesByPageNumber = state.messagesByPageNumber;
  const [pageNumber, setPagenumber] = useState(1);
  const pageSize = 5;
  const pageTotal = Math.ceil(messages.length / pageSize);
  const [isAdding, setIsAdding] = useState(false); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageTotal > 0 && isAdding) {
      setPagenumber(pageTotal);
      setIsAdding(false);
    }
    if (!isDeleting)  return;
    if (pageNumber > pageTotal) setPagenumber(pageTotal);
    setIsDeleting(false); 
  }, [messages.length]);

  const get = (message) => {
    setVisible(true);
    dispatch({ 
      type: "GET_MESSAGE",
      payload:  {...message}
    });
  }
  const del = (id) => {
    setVisible(false);
    setIsDeleting(true); 
    dispatch(deleteMessageFromDatabase( {id} ));
  }
  const edit = (id) => {
    setVisible(false);
    dispatch(editMessageFromDatabase({id}));
  }

  useEffect(() => {
      const getDatas = async () => {
          await dispatch(getPaginatedMessagesFromDatabase({
            pageSize:pageSize, 
            pageNumber:pageNumber}))
      };
      getDatas();
  }, [pageNumber, messages])

  const changePage = (pageNumber) => {
    setPagenumber(pageNumber)
  };

  return( 
    <div className="p-8">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="flex justify-between border-b-2 text-gray-400 border-gray-300 pb-[0.6rem] px-4">
          <h1 className="text-3xl">Messages
            <FontAwesomeIcon icon={faEnvelope} className={'admin-icons ml-4 text-2xl'}/>
          </h1>
          <div className="flex gap-x-3">
            <div className="flex items-center relative">
              <Search/>
            </div>
            {
              visible && (
                <div className="admin-button" onClick={()=> setVisible(false)}>
                  <span className="text-red-500"> Close 
                    <FontAwesomeIcon icon={faCancel} className="text-sm pl-1"/>
                  </span>
                </div>
              )
            }
          </div>
        </div>
          { visible && ( <MessageForm message={message} del={del} edit={edit}/> )   }
        
        <div className="flex items-start px-2 pb-2 mb-5 mt-16 text-gray-500 gap-x-2">
          <span className="w-1/6 text-center text-sm border border-[#1f3f96a2] p-1 rounded-full bg-white">
            <span className="font-bold text-[#1f3f96a2]">Number</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">User</span>
          </span>
          <span className="w-[45%] text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Info</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Datetime</span>
          </span>
          <div className="w-1/6 text-center"></div>
        </div>

        <div className='h-[30rem]'>
          {loading ? (
              <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/>
            ) : (
              <MessageList get={get} filteredMessages={messagesByPageNumber} />
            )
          }
        </div>
        { messages.length > pageSize ? (
          <Pagination pageNumber={pageNumber} pageTotal={pageTotal} changePage={changePage} /> 
          ) : (null) 
        }
      </div>
    </div>
  )
}
