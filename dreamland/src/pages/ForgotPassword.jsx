import React, {useEffect, useRef, useState} from "react";
import { Form, useNavigate, redirect, useActionData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faArrowRight, faLock} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { forgotPasswordAction } from "../actions/authAction";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { passwordResetMessage, error } = useSelector(state => state.auth);

  const handleResetPassword = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordAction(email));
  };
  return(
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-100 p-5 w-full max-w-lg border border-gray-300 rounded-3xl shadow-lg -mt-60">
          <h2 className="text-2xl font-semibold text-gray-600 mb-6 text-center">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Forgot Password
          </h2>
          {passwordResetMessage && <p className="text-green-500 text-center">{passwordResetMessage}</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleResetPassword} className="mt-4">
          <label className="block text-gray-700">E-posta Adresi</label>
          <input 
            type="email" 
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg bg-white mb-5" 
            placeholder="E-posta adresinizi girin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <button 
            type="submit" 
            className="w-full rounded-full p-2 bg-gray-800 text-white hover:bg-gray-600 cursor-pointer">Şifre Sıfırla
          </button>
        </form>
        </div>
      </div>
    </>
  )
}