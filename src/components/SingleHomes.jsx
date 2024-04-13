import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";


const SingleHomes = ({ home }) => {
    const { image, estate_title, segment_name, description, status } = home
    return (
        <Link to={`/home/${home.id}`}>
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="h-52 rounded-md" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <div className="flex ">
                        <p className="text-xl "># {segment_name}</p>
                        <p className="text-xl text-blue-500 flex gap-2 items-center"><FaHouse></FaHouse>{status}</p>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-blue-600 text-white">View Property</button>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default SingleHomes;