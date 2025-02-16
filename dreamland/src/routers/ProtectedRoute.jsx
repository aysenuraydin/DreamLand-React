import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
    const user = useAuth();  
    const location = useLocation(); 

    if (user == undefined)  return null; 

    return user ? (
        children
    ) : (
        <Navigate 
            to="/login" 
            state={{ from: location }} 
            replace
        />
    );
};

export default ProtectedRoute;

