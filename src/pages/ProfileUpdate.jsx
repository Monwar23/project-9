import { useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const ProfileUpdate = () => {
    const { user, updateUserProfile } = UseAuth();
    const [name, setName] = useState(user.displayName || "");
    const [email, setEmail] = useState(user.email || "");
    const [photoURL, setPhotoURL] = useState(user.photoURL || "");
    const passwordPlaceholder = "********"; 

    const handleSave = () => {
        updateUserProfile(name, photoURL)
            .then(() => {
                toast.success("Profile updated successfully");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div>
            <Helmet>
                <title>HomeSpotter || Profile Update</title>
            </Helmet>
            <div className="bg-cover bg-center mt-10" style={{ backgroundImage: "url('https://i.ibb.co/HrCqbd1/Rustic-Mountain-Cabin-Retreat-Nicholas-Sonder-Architect-01-1-Kindesign.jpg')" }}>
            <div className="max-w-md mx-auto p-8 bg-blue-800 bg-opacity-30">
                <h2 className="text-2xl font-bold mb-4 text-white text-center">Edit Your Profile</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block font-medium text-white">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="block font-medium text-white">Photo URL:</label>
                        <input
                            type="text"
                            id="photoURL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-white">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            disabled
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium text-white">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={passwordPlaceholder}
                            disabled
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-white"
                        />
                    </div>
                    
                    <button
                        type="button"
                        onClick={handleSave}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Save
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
        </div>
    );
};

export default ProfileUpdate;
