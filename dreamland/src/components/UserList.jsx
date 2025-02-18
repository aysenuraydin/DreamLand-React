import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { UserCard } from './UserCard';

export const UserList = ({users, edit}) => {
    return(
      <div id="users" className="space-y-3">
      {
        [...users].map((user, index)=>{
        return(
          <UserCard key={index} user={user} index={index} edit={edit}/>
        )
        })
      }
      {
        users.length==0 && (
          <div className="bg-white text-center mt-4 p-7 rounded-md shadow-md border border-gray-300">
            <FontAwesomeIcon icon={faXmark} className="text-sm mr-2"/>
              No admins available.
          </div>
        )
      }
    </div>
    )
  }