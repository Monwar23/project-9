import { Link } from "react-router-dom";
import "animate.css";

const MillionBuyers = () => {
    return (
        <div>
            <div className="my-10">
                <h2 className="text-4xl font-bold text-center mt-5">Trusted By 100 Million Buyers</h2>
                <p className="text-center mt-4">Only HomeSpotter connects you directly to the person that knows the most about a property for sale, the listing agent.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Link className="flex flex-col animate__animated animate__fadeInUp">
                    <div className="border p-14 rounded-lg bg-zinc-600 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex-grow">
                        <h2 className="text-2xl font-semibold mb-2">Explore Great Neighborhoods</h2>
                        <p>Explore video tours, in-depth research, and articles on 20,000 neighborhoods</p>
                    </div>
                </Link>
                <Link className="flex flex-col animate__animated animate__fadeInDown">
                    <div className="border p-14 rounded-lg bg-zinc-600 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex-grow">
                        <h2 className="text-2xl font-semibold mb-2">Find Highly Rated Schools</h2>
                        <p>Find the very best schools with in-depth reviews and ratings from multiple experts.</p>
                    </div>
                </Link>
                <Link className="flex flex-col animate__animated animate__fadeInLeft">
                    <div className="border p-14 rounded-lg bg-zinc-600 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex-grow">
                        <h2 className="text-2xl font-semibold mb-2">Discover Residential Buildings</h2>
                        <p>Discover residential buildings with our comprehensive building search.</p>
                    </div>
                </Link>
                <Link className="flex flex-col animate__animated animate__fadeInRight">
                    <div className="border p-14 rounded-lg bg-zinc-600 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex-grow">
                        <h2 className="text-2xl font-semibold mb-2">Find the Best Agent for You</h2>
                        <p>Search a million agent profiles with bios, photographs, reviews, and deal history.</p>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default MillionBuyers;