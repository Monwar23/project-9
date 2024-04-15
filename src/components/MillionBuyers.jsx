import { Link } from "react-router-dom";

const MillionBuyers = () => {
    return (
        <div>
           <div className="mt-10">
           <h2 className="text-4xl font-bold text-center mt-5">Trusted By 100 Million Buyers</h2>
           <p className="text-center mt-4">Only HomeSpotter connects you directly to the person that knows the most about a property for sale, the listing agent.</p>
           </div>
           <div>
                <Link>
                    <h2>Explore Great Neighborhoods</h2>
                    <p>Explore video tours ,in-depth research,and article on 20,000 neighborhoods</p>
                </Link>
           </div>
        </div>
    );
};

export default MillionBuyers;