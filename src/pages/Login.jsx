import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import SocialLogin from "../components/SocialLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {

    const { signIn } = UseAuth()
    const location=useLocation()
    const navigate=useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false)


    const onSubmit = data => {
        const { email, password } = data;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login successful!");

                setTimeout(()=>{
                    navigate(location?.state? location.state:'/')
                },3000)

            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }



    return (
       <div>
        <Helmet>
                <title>HomeSpotter || Login</title>
            </Helmet>
         <div className="p-20 mt-20" style={{ backgroundImage: `url(https://i.ibb.co/SQxMfff/Feature-Image-4.jpg)` }}>
            <div>
                <h2 className="text-center font-bold  text-white text-3xl my-10">Login Now !</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="md:3/4 lg:w-1/2 mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-500'>This field is required</span>}
                    </div>
                   
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered w-full pr-10"
                                {...register("password", { required: true })}
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                onClick={() => {
                                    setShowPassword(!showPassword)
                                }}
                            >
                                {
                                    showPassword
                                        ? <FaEyeSlash />
                                        : <FaEye />
                                }
                            </span>
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center text-white mt-4">Do not have an Account ? Please <Link className="font-bold text-blue-600 btn " to='/register'>Register</Link></p>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer></ToastContainer>
        </div>
       </div>
    );
};

export default Login;