import React, { useState, useContext, useEffect } from 'react';
import { DreamContext } from '../contexts/DreamContext';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faEnvelope, faBoxArchive, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData} from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/Pagination';
import { MessageForm } from '../components/messageForm';
import { MessageList } from '../components/messageList';

export const Messages = () => {
  const { messageState , messageDispatch } = useContext(DreamContext);
  const message = messageState.message;
  const messages = messageState.messages;

  const items = useLoaderData();
  const [visible, setVisible] = useState(false);
  const [isArchive, setArchive] = useState(false);
  const [filteredMessages, setFilteredMessages] = useState(
    messages.filter((msg) => msg.isArchive == isArchive)
  );
  useEffect(() => {
    setFilteredMessages(
      messages.filter((msg) => msg.isArchive == isArchive)
    );
  }, [messages,isArchive,visible]); 

  const ArchiveOrMessages = () => {
    setArchive(!isArchive);
    setVisible(false);
  }


  const get = (message) => {
    setVisible(true);
    messageDispatch({ 
      type: "GET_MESSAGE",
      payload:  {...message}
    });
  }
  const del = (id) => {
    setVisible(false);
    messageDispatch({ 
      type: "DELETE_MESSAGE",
      payload:  {id:id}
    });
  }
  const edit = (id) => {
    setVisible(false);
    messageDispatch({ 
      type: "EDİT_MESSAGE",
      payload:  {id:id}
    });
  }
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
              !isArchive && (
                <div className="admin-button" onClick={ArchiveOrMessages}> 
                  <span> Go Archive 
                  <FontAwesomeIcon icon={faBoxArchive} className="pl-1"/>
                  </span>
                </div>
              )
            }
            {
              isArchive && (
              <div className="admin-button" onClick={ArchiveOrMessages}> 
                  <span> Out Archive 
                  <FontAwesomeIcon icon={faXmark} className="pl-1"/>
                  </span>
                </div> 
              )
            }
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
          {
            visible && ( <MessageForm message={message} del={del} edit={edit}  /> ) 
          }
        
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
            <span className= "font-bold">Created At</span>
          </span>
          <div className="w-1/6 text-center"></div>
        </div>
        <SyncLoader color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-4'/> 
        <MessageList get={get} filteredMessages={filteredMessages} isArchive={isArchive} />
        <Pagination/>
      </div>
    </div>
  )
}
export const messagesLoader = async () => {
  return;
}
