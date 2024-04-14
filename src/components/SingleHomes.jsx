import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";


const SingleHomes = ({ home }) => {
    const { image, estate_title, segment_name, description, status,id } = home
    return (
        <div className="max-w-xs mx-auto mb-8">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
            <img className="w-full h-56 object-cover object-center" src={image} alt={estate_title} />
           
            <div className="px-4 py-2">
                <h2 className="text-gray-800 text-lg font-semibold">{estate_title}</h2>
                <div className="flex items-center mt-2 text-gray-600">
                    <FaHouse className="mr-1" />
                    <span>{status}</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{description}</p>
                
                {/* Button at the bottom */}
                <div className="mt-4 flex justify-end">
                    <Link to={`/home/${id}`} className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                        View Property
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SingleHomes;