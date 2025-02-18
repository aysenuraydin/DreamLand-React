import React, { useState, useRef,useEffect } from 'react';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faImage,  faPlus} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/Pagination';
import { HeaderList } from '../components/HeaderList';
import { HeaderForm } from '../components/HeaderForm';
import { useSelector, useDispatch } from 'react-redux';
import { addHeaderToDatabase, deleteHeaderFromDatabase, editHeaderFromDatabase, getPaginatedHeadersFromDatabase } from '../actions/headerAction';

export const Headers = () => {
  const [visible, setVisible] = useState(false);
  const [isActive, setActive] = useState(false);
  const formRef = useRef(null); 

  const state = useSelector((state) => state.header);
  const dispatch = useDispatch(); 
  const headers = state.headers;
  const header = state.header;

  const loading = state.loading;
  const headersByPageNumber = state.headersByPageNumber;
  const pageSize = 5;
  const pageTotal = Math.ceil(headers.length / pageSize);
  const [pageNumber, setPagenumber] = useState(1);
  const [isAdding, setIsAdding] = useState(false); 
  const [isDeleting, setIsDeleting] = useState(false); 

  const [datasSearch, setDatasSearch] = useState([]); 
  const [text, setText] = useState(""); 

  useEffect(() => {
    if (!text) {
      setDatasSearch([]);
      return;
    }
  
    setDatasSearch(
      headers.filter(data => 
          [data.title, data.content]
            .some(field => field?.toLowerCase().includes(text.toLowerCase()))
      )
    );
  }, [text, headers]);
  
  const search = (text) => {
    setText(text)
    console.log(text)
  }

  useEffect(()=> {
    setActive(header.isActive)
  },[header])

  useEffect(() => {
    if (pageTotal > 0 && isAdding) {
      setPagenumber(pageTotal);
      setIsAdding(false);
    }
    if (!isDeleting)  return;
    if (pageNumber > pageTotal) setPagenumber(pageTotal);
    setIsDeleting(false); 
  }, [headers.length]);

  const add = (data) => {
      if(header?.id) {
        dispatch(editHeaderFromDatabase({id:header?.id, ...data}));
      } else {
        dispatch(addHeaderToDatabase({...data}));
        setIsAdding(true);
      }
      formRef.current.reset();
  }
  const reset = () => {
    setActive(false);
    setVisible(false);
    dispatch({ 
      type: "CLEAR_HEADER",
    });
    formRef.current.reset();
  }
  const edit = (header) => {
    setVisible(true);
    dispatch({ 
      type: "GET_HEADER",
      payload: header
    });
  }
  const del = (id) => {
    if(headersByPageNumber.length==1){
      setPagenumber(pageNumber-1)
    }
    setVisible(true);
    setIsDeleting(true); 
    dispatch(deleteHeaderFromDatabase( {id} ));
  }
  const changeActive = () => {
    setActive(prev => !prev)
  }
  useEffect(() => {
      const getDatas = async () => {
          await dispatch(getPaginatedHeadersFromDatabase({pageSize:pageSize, pageNumber:pageNumber}))
      };
      getDatas();
  }, [pageNumber, headers])

  const changePage = (pageNumber) => {
    setPagenumber(pageNumber)
  };

  return(    
    <div className="p-8">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="flex justify-between border-b-2 text-gray-400 border-gray-300 pb-[0.6rem] px-4">
          <h1 className="text-3xl">Headers
              <FontAwesomeIcon icon={faImage} className={'admin-icons ml-4 text-2xl'}/>
          </h1>
          <div className="flex gap-x-3">
            <div className="flex items-center relative">
              <Search search={search}/>
            </div>
            {
              !visible && (
                <div className="admin-button" onClick={()=> setVisible(!visible)}> 
                  <span> Add Header 
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
          visible && ( 
              <HeaderForm del={del} header={header} onSubmit={add} reset={reset} formRef={formRef} changeActive={changeActive} isActive={isActive} /> 
            ) 
        }
        { !visible && (
          <div className='-mt-9 -mb-10'> <Header/> </div>
          
        )}
        <div className='relative pt-5'>
          {text && (  
            <p className='text-[1rem] absolute ml-4 text-gray-500'>
            Search results for 
            <span className='font-semibold text-gray-700'> '{text}' </span>
            are listed !</p>
          )
          }
        </div>
        <div className="flex items-start px-2 pb-2 mb-5 mt-16 text-gray-500 gap-x-2">
          <span className="w-1/6 text-center text-sm border border-[#1f3f96a2] p-1 rounded-full bg-white">
            <span className="font-bold text-[#1f3f96a2]">Number</span>
          </span>
          <span className="w-1/3 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Img</span>
          </span>
          <span className="w-6/12 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Name</span>
          </span>
          <span className="w-4/12 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Is Active ?</span>
          </span>
          <span className="w-4/12 text-center text-sm border p-1 rounded-full text-[#1f3f96a2] border-[#1f3f96a2] bg-white">
            <span className= "font-bold">Datetime </span>
          </span>
          <span className="w-1/4"></span>
        </div>
        <div className='h-[32rem] overflow-scroll'>
        { datasSearch.length>0 ? (
          <HeaderList headers={datasSearch} edit={edit} />
        ):(
          <>
          {loading ? (
              <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/>
            ) : (
              <HeaderList headers={headersByPageNumber} edit={edit} />
            )
          }
          </>
        )}
        </div>
        { headers.length > pageSize && datasSearch.length == 0 ? (
          <Pagination pageNumber={pageNumber} pageTotal={pageTotal} changePage={changePage} /> 
          ) : (null) 
        }
      </div>
    </div>
  )
} 

