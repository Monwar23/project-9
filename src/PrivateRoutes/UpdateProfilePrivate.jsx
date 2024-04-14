import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const UpdateProfilePrivate = ({children}) => {
    const {user,loading}=UseAuth()
    const location =useLocation()
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default UpdateProfilePrivate;
