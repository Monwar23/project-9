import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import { useForm } from "react-hook-form";


const Register = () => {

    const { createUser } = UseAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },reset
    } = useForm();


    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = data => {
        const { email, password } = data;

        if (
            !/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)
        ) {
            toast.error(
                "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
            );
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Registration successful!");
                reset()
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })



    }

    return (
        <div  className="p-20 mt-20" style={{ backgroundImage: `url(https://i.ibb.co/SQxMfff/Feature-Image-4.jpg)`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div>
                <h2 className="text-white font-bold text-center text-3xl my-10">Register Now !</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="md:3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="name" placeholder="Name" className="input input-bordered"
                            {...register("Name", { required: true })} />
                        {errors.Name && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" className="input input-bordered" {...register("image", { required: true })} />
                        {errors.image && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
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
                            {errors.password && (
                                <span className="text-red-500">This field is required</span>
                            )}
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4 text-white">Already have an Account ? Please <Link className="font-bold text-blue-600 btn" to='/login'>Login</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;