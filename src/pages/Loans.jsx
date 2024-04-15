import { Helmet } from "react-helmet-async";


const Loans = () => {
    return (
        <div>
            <Helmet>
                <title>HomeSpotter || Home loans</title>
            </Helmet>
            <section className="bg-gray-200 my-10">
                <div className="container flex flex-col-reverse justify-center px-6 py-12 mx-auto lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leading-tight">Be smarter with your finances and save on your home loan</h1>
                        <p className="mt-6 text-lg">Whether you are buying or refinancing, let us help you find the right home loan and buy your dream home.</p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center">
                                <span className="inline-block px-3 py-1 mr-3 bg-blue-500 rounded-full text-white">1</span>
                                <p className="text-lg font-semibold">Calculate Your Equity</p>
                            </div>
                            <div className="flex items-center">
                                <span className="inline-block px-3 py-1 mr-3 bg-blue-500 rounded-full text-white">2</span>
                                <p className="text-lg font-semibold">Track Your Home Loan</p>
                            </div>
                            <div className="flex items-center">
                                <span className="inline-block px-3 py-1 mr-3 bg-blue-500 rounded-full text-white">3</span>
                                <p className="text-lg font-semibold">Get Notified and Save</p>
                            </div>
                        </div>
                        <button className="inline-block mt-10 px-8 py-4 text-lg font-semibold bg-blue-500 rounded-full hover:bg-blue-700 text-white">Track Now</button>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                        <img src="https://i.ibb.co/qRQYXHF/Hero-Image-1-768x736.webp" alt="Hero Image" className="object-cover w-full h-80 lg:h-full xl:h-112 2xl:h-128 rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            <section className="my-10">
                <h2 className="text-3xl font-bold text-center mb-10">Explore your home loan options</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                    <div className="border p-4 rounded-lg overflow-hidden shadow-md bg-white">
                        <img className="mx-auto mt-6" src="https://i.ibb.co/nCsJB3L/160x48-Icon-170x80.webp" alt="Competitive Rates Icon" />
                        <div className="px-6 py-4">
                            <h3 className="font-bold text-xl mb-2 text-center">Competitive rates</h3>
                            <p className="text-gray-700 text-base text-center">
                                With over 4,000 loans to compare, you can find a home loan that is right for you.
                            </p>
                        </div>
                        <div className="px-6 pb-4">
                            <a href="#" className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">Compare home loans</a>
                        </div>
                    </div>
                    <div className="border p-4 rounded-lg overflow-hidden shadow-md bg-white">
                        <img className="mx-auto mt-6" src="https://i.ibb.co/SmbWbYT/MC-160x48.webp" alt="Highly Experienced Icon" />
                        <div className="px-6 py-4">
                            <h3 className="font-bold text-xl mb-2 text-center">Highly experienced</h3>
                            <p className="text-gray-700 text-base text-center">
                                Over 1,000 mortgage brokers nationally helping people like you secure home loans for more than 30 years.
                            </p>
                        </div>
                        <div className="px-6 pb-4">
                            <a href="#" className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">Find a local broker</a>
                        </div>
                    </div>
                    <div className="border p-4 rounded-lg overflow-hidden shadow-md bg-white">
                        <img className="mx-auto mt-6" src="https://i.ibb.co/6vxJJCh/ubank-homepage-1-160x48.webp" alt="Fast, Simple & Digital Icon" />
                        <div className="px-6 py-4">
                            <h3 className="font-bold text-xl mb-2 text-center">Fast, Simple & Digital</h3>
                            <p className="text-gray-700 text-base text-center">
                                Get started in minutes, explore our range of products, and find the one to suit you!
                            </p>
                        </div>
                        <div className="px-6 pb-4 mt-6">
                            <a href="#" className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">Find out more</a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Search, find and finance with realestate.com.au</h2>
                <div className="mt-10 grid lg:grid-rows-2 lg:grid-flow-col gap-6">
                    <div className="rounded overflow-hidden shadow-lg bg-gradient-to-r from-purple-400 to-pink-500 lg:row-span-2 lg:col-span-2">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-white">How much can you borrow?</div>
                            <p className="text-gray-100 text-base">Easily find out your maximum borrowing power so you can start your property journey.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href="#" className="bg-white hover:bg-gray-200 text-purple-600 font-bold py-2 px-4 rounded-full">Calculate your borrowing power</a>
                        </div>
                        <img src="https://i.ibb.co/jf0KZyx/Borrow-1-640x440.webp" alt="Borrow" className="w-full" />
                    </div>

                    <div className="flex bg-gray-100 rounded-xl shadow-xl lg:col-span-2">
                        <div className="flex-none w-2/3 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get more out of your calculations</h2>
                            <p className="text-gray-600 mb-6">Use our handy calculators to crunch your numbers and work out where you stand.</p>
                            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Calculators</a>
                        </div>
                        <div className="flex-none w-1/3">
                            <img src="https://i.ibb.co/TtBDxVQ/General-1-1-768x621.webp" alt="Calculator Image" className="object-cover h-full w-full"/>
                        </div>
                    </div>
                    <div className="flex bg-gray-100 rounded-xl shadow-xl lg:col-span-2">
                        <div className="flex-none w-2/3 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding home loans</h2>
                            <p className="text-gray-600 mb-6">Our guides will provide you with the information you need to take the next steps.</p>
                            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Read about home loans</a>
                        </div>
                        <div className="flex-none w-1/3">
                            <img src="https://i.ibb.co/pxFq1ZT/Finance-guides-1-1-640x440.webp" alt="Calculator Image" className="object-cover h-full w-full"/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Loans;