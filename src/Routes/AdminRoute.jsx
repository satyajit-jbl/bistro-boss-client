import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    // console.log(a);
    // const {user, loading} = useContext(AuthContext);
    // console.log(useAuth);
    const [isAdmin, isAdminLoading] = useAdmin();
    
    const location = useLocation();

    if(loading || isAdminLoading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user && isAdmin){
        return children;
        
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>
};


export default AdminRoute;