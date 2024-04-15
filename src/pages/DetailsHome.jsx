import { useLoaderData, useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaDollarSign ,FaSquare, FaInfoCircle} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const DetailsHome = () => {
    const homes=useLoaderData()
    const {id}=useParams()
    const home=homes.find((home)=>home.id===id)
    // console.log(home);
    const {image,estate_title,segment_name,description,price,status,area,location,facilities}=home
    

    return (
       <div>
         <Helmet>
                <title>HomeSpotter || DetailsHome</title>
            </Helmet>
         <div className="max-w-md mx-auto my-10 bg-white rounded-xl overflow-hidden shadow-lg md:max-w-2xl">
            <img src={image} alt={estate_title} className="w-full h-96 object-cover object-center" />
            <div className="p-6">
                <div className="text-xl font-bold text-gray-800">{estate_title}</div>
                <p className="text-sm italic text-gray-600 mb-4">{segment_name}</p>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="text-gray-800">
                    <p className="flex items-center text-lg font-semibold">
                        <FaDollarSign className="mr-2" /> {price}
                    </p>
                    <p className="flex items-center text-lg font-semibold">
                        <FaSquare className="mr-2" /> {area} sqft
                    </p>
                    <p className="flex items-center text-lg font-semibold">
                        <FaInfoCircle className="mr-2" /> {status}
                    </p>
                    <p className="flex items-center text-lg font-semibold">
                        <MdLocationOn className="mr-2" /> {location}
                    </p>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Facilities:</h3>
                    <ul className="list-disc list-inside">
                        {facilities.map((facility, index) => (
                            <li key={index} className="text-gray-700">{facility}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
       </div>
    );
};

export default DetailsHome;