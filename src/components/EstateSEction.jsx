import { useLoaderData } from "react-router-dom";
import SingleHomes from "./SingleHomes";


const EstateSEction = () => {
    const estateHomes=useLoaderData()
    return (
        <div>
            <div>
           <h2 className="text-4xl font-bold text-center mt-5">My Homes</h2>
           <p className="text-center mt-4">If you are looking for a quality care home in Devon that takes a personal approach, <br /> we would love to welcome you to HomeSpotter Residential Home.</p>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {
                estateHomes.map(home=><SingleHomes key={home.id} home={home}></SingleHomes>)
            }
            </div>
        </div>
    );
};

export default EstateSEction;