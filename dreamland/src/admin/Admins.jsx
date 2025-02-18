import React, { useState, useRef, useEffect } from 'react';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faCancel, faUser,  faPlus} from "@fortawesome/free-solid-svg-icons";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from '../components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { addUserToDatabase, deleteUserFromDatabase, getPaginatedUsersFromDatabase } from '../actions/userAction';
import { UserForm } from '../components/UserForm';
import { UserList } from '../components/UserList';

export const Admins = () => {
  const [visible, setVisible] = useState(false);
  const formRef = useRef(null); 

  const state = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const users = state.users;
  const [user, setUser] = useState({});

  const envEmail = import.meta.env.VITE_FIREBASE_ADMIN_EMAIL;

  const loading = state.loading;
  const usersByPageNumber = state.usersByPageNumber;
  const [pageNumber, setPagenumber] = useState(1);
  const pageSize = 5;
  const pageTotal = Math.ceil(users.length / pageSize);
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
      users.filter(data => 
          [data.email]
            .some(field => field?.toLowerCase().includes(text.toLowerCase()))
      )
    );
  }, [text, users]);
  
  const search = (text) => {
    setText(text)
    console.log(text)
  }

  useEffect(() => {
    const totalPages = Math.ceil(users.length / pageSize);
    if (totalPages > 0 && isAdding) {
      setPagenumber(totalPages);
      setIsAdding(false);
    }
    if (!isDeleting)  return;
    if (pageNumber > totalPages) setPagenumber(totalPages);
    setIsDeleting(false); 
  }, [users.length]);

  useEffect(()=> {
    if( auth.email!=envEmail ){
      navigate("/admin");
    }
  },[navigate])

  const add = (data) => {
    dispatch(addUserToDatabase({ email:data }));
    setUser("");
    setIsAdding(true);
    formRef.current.reset();
  }
  const reset = () => {
    setVisible(false);
    setUser("");
    dispatch({ 
      type: "CLEAR_USER",
    });
    formRef.current.reset();
  }
  const edit = (user) => {
    setVisible(true);
    setUser(user);
    dispatch({ 
      type: "GET_USER",
      payload: user
    });
  }
  const del = (user) => {
    if(usersByPageNumber.length==1){
      setPagenumber(pageNumber-1)
    }
    setVisible(true);
    setUser("");
    setIsDeleting(true); 
    formRef.current.reset();
    dispatch(deleteUserFromDatabase({ id: user?.id, email: user?.email }));
  };

  useEffect(() => {
      const getDatas = async () => {
          await dispatch(getPaginatedUsersFromDatabase({pageSize:pageSize, pageNumber:pageNumber}))
      };
      getDatas();
  }, [pageNumber, users])

  const changePage = (pageNumber) => {
    setPagenumber(pageNumber)
  };

  return(    
    <div className="p-8">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="flex justify-between border-b-2 text-gray-400 border-gray-300 pb-[0.6rem] px-4">
          <h1 className="text-3xl">Users
              <FontAwesomeIcon icon={faUser} className="admin-icons ml-4 text-2xl"/>
          </h1>
          <div className="flex gap-x-3">
            <div className="flex items-center relative">
              <Search search={search}/>
            </div>
            {
              !visible && (
                <div className="admin-button" onClick={()=> setVisible(!visible)}> 
                  <span> Add Admin
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
              <UserForm del={del} user={user} onSubmit={add} reset={reset} formRef={formRef}/> 
            ) 
        }
        <div>
          {text && (  
            <p className='text-[1rem] absolute mt-4 ml-4 text-gray-500'>
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
          <UserList users={datasSearch} edit={edit} />
        ):(
          <>
          {loading ? (
              <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1} className='text-center pb-2'/>
            ) : (
              <UserList users={usersByPageNumber} edit={edit} />
            )
          }
          </>
        )}
          
        </div>
        { users.length > pageSize && datasSearch.length == 0 ? (
          <Pagination pageNumber={pageNumber} pageTotal={pageTotal} changePage={changePage} /> 
          ) : (null) 
        }

      </div>
    </div>
  )
}