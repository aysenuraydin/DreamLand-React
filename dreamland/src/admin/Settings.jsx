
import React, { useState } from 'react';
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faFloppyDisk, faLock } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { editAboutFromDatabase } from '../actions/infoAction';
import { Form } from "react-router-dom";
import { updatePasswordAction } from '../actions/authAction';
export const Settings = () => {
  const state = useSelector((state) => state.info);
  const dispatch = useDispatch(); 

  const setForm = (event) => {
      event.preventDefault();

      const password = event.target.elements.password.value;
      const newPassword = event.target.elements.newPassword.value;
      const confirmPassword = event.target.elements.confirmPassword.value;

      if (newPassword !== confirmPassword) {
        alert("Yeni şifreler uyuşmuyor!");
        return;
    }
    dispatch(updatePasswordAction(password, newPassword));
  }

  return(
    <div className="p-8">
      <div className="flex justify-between border-b-2 border-gray-300 text-gray-400 pb-[0.6rem] px-4">
        <h1 className="text-3xl">Settings
          <FontAwesomeIcon icon={faGear} className={'admin-icons ml-4 text-2xl'}/>
        </h1>
        <div className="flex items-center relative">
          <Search/>
        </div>
      </div>
      <ul>
        <li className="mt-10">
        <Form  onSubmit={setForm} className="bg-white p-10 rounded-2xl border border-gray-300 shadow-lg mx-0 md:mx-32 lg:mx-20 px-10 pt-10">
            <h1 className="text-2xl p-5 pt-0 text-center">
            <FontAwesomeIcon icon={faLock} className="mr-2" />Password </h1>
            <div className="mb-4 flex w-full">
                <label htmlFor="password" className="w-1/6 mt-3 text-sm mr-3">Password</label>
                <input id="password" name="password" type="password" className="mt-1 p-1 w-full border border-gray-300  rounded-lg text-gray-800 outline-none"/> 
            </div>
            <div className="mb-4 flex w-full">
                <label htmlFor="newPassword" className="w-1/6 text-sm mr-3">New Password</label>
                <input id="newPassword" name="newPassword" type='password' className="mt-1 p-1 w-full border border-gray-300  rounded-lg text-gray-800 outline-none"/> 
            </div>
            <div className="mb-6 flex w-full">
                <label htmlFor="confirmPassword" className="w-1/6 text-sm mr-3">Confirm Password</label>
                <input id="confirmPassword" name="confirmPassword" type="password" className="mt-1 p-1 w-full border border-gray-300  rounded-lg text-gray-800 outline-none"/> 
            </div>
            <div className='pl-[4.3rem]'>
            <button type="submit" className="block px-4 py-2 mt-3 text-sm bg-gray-200 rounded-md text-center w-full cursor-pointer hover:text-white hover:bg-gray-700"> 
            Save 
            <FontAwesomeIcon icon={faFloppyDisk} className="text-md ml-1"/></button>
            </div>
        </Form>
        </li>
      </ul>
    </div>
  )
}
