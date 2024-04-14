import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const SocialLogin = () => {
    const { googleLogin,gitHubLogin } = UseAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || "/";


    const handleSocialSignIn = (socialProvider) => {
        socialProvider()
            .then(result => {
                console.log(result.user);
                toast.success("Login successful!");
                navigate(from)
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })
    }

    return (
        <div>
           <div className="flex gap-4 justify-center mt-4">
           <p><button onClick={()=>handleSocialSignIn(googleLogin)} className="btn text-white bg-blue-600 border-none">Google</button></p>
           <p><button onClick={()=>handleSocialSignIn(gitHubLogin)} className="btn  bg-blue-600 border-none text-white">GitHub</button></p>
           </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogin;