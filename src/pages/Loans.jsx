import { Helmet } from "react-helmet-async";


const Loans = () => {
    return (
        <div>
            <Helmet>
                <title>HomeSpotter || Home loans</title>
            </Helmet>
            <section className="bg-gray-800 text-white my-10">
    <div className="container flex flex-col-reverse justify-center px-6 py-12 mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leading-tight">Be smarter with your finances and save on your home loan</h1>
            <p className="mt-6 text-lg">Whether you are buying or refinancing, let us help you find the right home loan and buy your dream home.</p>
            <div className="mt-8 space-y-4">
                <div className="flex items-center">
                    <span className="inline-block px-3 py-1 mr-3 bg-blue-500 rounded-full">1</span>
                    <p className="text-lg font-semibold">Calculate Your Equity</p>
                </div>
                <div className="flex items-center">
                    <span className="inline-block px-3 py-1 mr-3 bg-blue-500 rounded-full">2</span>
                    <p className="text-lg font-semibold">Track Your Home Loan</p>
                </div>
                <div className="flex items-center">
                    <span className="inline-block px-3 py-1 mr-3 bg-blue-500 rounded-full">3</span>
                    <p className="text-lg font-semibold">Get Notified and Save</p>
                </div>
            </div>
            <button className="inline-block mt-10 px-8 py-4 text-lg font-semibold bg-blue-600 rounded-full hover:bg-blue-700">Track Now</button>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
            <img src="https://i.ibb.co/qRQYXHF/Hero-Image-1-768x736.webp" alt="Hero Image" className="object-cover w-full h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg shadow-xl" />
        </div>
    </div>
</section>

        </div>
    );
};

export default Loans;