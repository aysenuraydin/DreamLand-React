import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { listenForAuthChanges } from "../actions/userAction"; 

export const useAuth = () => {
    const dispatch = useDispatch();
    const userAll = useSelector((state) => state.user); 

    useEffect(() => {
        dispatch(listenForAuthChanges()); 
    }, [dispatch]);

    return userAll.user;
}