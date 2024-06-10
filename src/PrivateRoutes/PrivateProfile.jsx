import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const PrivateProfile = ({children}) => {
    const {user,loading}=UseAuth()
    // const location =useLocation()
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateProfile;