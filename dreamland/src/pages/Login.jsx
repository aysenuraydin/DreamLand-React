import React, {useEffect, useRef} from "react";
import { Form, useNavigate,Link,useLocation, redirect, useActionData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faArrowRight, faLock} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { startEmailPasswordLogin, startGoogleLogin, startLogout } from "../actions/authAction";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation(); 
  const userAuth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const from = location.state?.from?.pathname || "/";
  const formRef = useRef(null);


  useEffect(() => {
    if (userAuth?.uid) {
      navigate(from, { replace: true }); 
    }
  }, [userAuth, navigate, from]);


  const googleLogin = () => {
    dispatch(startGoogleLogin());
  }

  const login = (event) => {
    event.preventDefault(); 
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if(email && password){
      dispatch(startEmailPasswordLogin(email,password));
    }
  }
  return(
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-100 p-5 w-full max-w-lg border border-gray-300 rounded-3xl shadow-lg -mt-60">
          <h2 className="text-2xl font-semibold text-gray-600 mb-6 text-center">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Admin Sign In
          </h2>
          <Form onSubmit={login} ref={formRef}>
            <div className="mb-3">
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-xl text-gray-800 outline-none bg-white" placeholder="Email"/>
              <div>
              </div>
            </div>
            <div className="mb-2">
              <input type="password" id="password" name="password" className="mt-1 p-2 w-full border border-gray-300 rounded-xl text-gray-800 outline-none bg-white" placeholder="Password"/>
            </div>
            <div className="mb-3">
              <Link to="/forgotPassword" className="text-end block w-full text-gray-600 rounded-sm pr-5">
                Forgot My Password!
                <FontAwesomeIcon icon={faArrowRight} className="ml-1"/>
              </Link>
            </div>

            <button type="submit" className="w-full rounded-full p-2 bg-gray-800 text-white hover:bg-gray-600 cursor-pointer">
              Sign In
              <FontAwesomeIcon icon={faRightToBracket} className="ml-1"/>
            </button>
            <div className="w-full mt-2 rounded-full p-2 border-gray-800 text-gray-600 border hover:bg-gray-300 hover:text-white text-center cursor-pointer" onClick={googleLogin}>
              Sign In With Google
              <FontAwesomeIcon icon={faGoogle} />
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}