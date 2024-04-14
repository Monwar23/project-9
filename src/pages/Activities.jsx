import 'animate.css';


const Activities = () => {
    return (
        <div>
            <div className=" min-h-screen my-10" style={{ backgroundImage: 'url(https://i.ibb.co/Nyzg9Md/dd7bd2-e8a76e41e6924e62a8d9a2af42a17a6c-mv2-d-6000-4000-s-4-2.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 mt-80 text-5xl font-bold italic">Our <br />Extra Activities</h1>

                    </div>
                </div>

            </div>
            <div className='text-center mb-10 border-b-2 pb-4'>
                <h2 className='text-xl'>THINGS</h2>
                <h1 className='text-4xl font-bold'>TO DO</h1>
            </div>
            <section className="animate__animated animate__fadeInUp bg-gradient-to-r from-blue-900 to-blue-700 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 text-white">
                <div className="container flex flex-col-reverse justify-center mx-auto lg:flex-row">
                    <div className="flex flex-col justify-center p-6 text-center lg:max-w-md lg:text-left">
                        <h1 className="text-4xl font-bold leading-none md:text-5xl lg:text-6xl italic">Excursions</h1>
                        <p className="mt-6 mb-8 text-lg md:mt-8 md:mb-12">Being situated in the heart of Mid Wales has many benefits, one of them being the beautiful surrounding landscape. </p>
                        <p className="mt-6 mb-8 text-lg md:mt-8 md:mb-12">Service Users have the opportunity to explore the local scenery. With our own minibus our day care assistant takes Service Users on trips to tour the local Victorian town;</p>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                        <img src="https://i.ibb.co/Wz32Kdh/Elan-Valley-1-01211.jpg" alt="Elan Valley" className="object-cover w-full max-w-lg rounded-lg shadow-lg lg:max-w-none" />
                    </div>
                </div>
            </section>
            <section className="animate__animated animate__fadeInLeft bg-gradient-to-r from-blue-900 to-blue-700 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 my-10 text-white">
                <div className="container flex flex-col-reverse justify-center mx-auto lg:flex-row">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                        <img src="https://i.ibb.co/fMDHJPW/Old-man-painting-smiling.jpg" alt="Elan Valley" className="object-cover w-full max-w-lg rounded-lg shadow-lg lg:max-w-none" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center lg:max-w-md lg:text-left">
                        <h1 className="text-4xl font-bold leading-none md:text-5xl lg:text-6xl italic">Activities within the Home</h1>
                        <p className="mt-6 mb-4 text-lg md:mt-8 md:mb-12">We realise that an active and sociable life-style is a must for our Service Users and is why we have a Full Time Activities Coordinator who assists clients to enjoy a range of activities, some of which are listed below:</p>
                        <ul>
                            <li>Art and Crafts</li>
                            <li>Darts</li>
                            <li>Gardening</li>
                            <li>Musical Entertainment</li>
                        </ul>
                    </div>
                   
                </div>
            </section>
            <section className="animate__animated animate__fadeInDown bg-gradient-to-r from-blue-900 to-blue-700 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 text-white">
                <div className="container flex flex-col-reverse justify-center mx-auto lg:flex-row">
                    <div className="flex flex-col justify-center p-6 text-center lg:max-w-md lg:text-left">
                        <h1 className="text-4xl font-bold leading-none md:text-5xl lg:text-6xl italic">Freedom like Never Before</h1>
                        <p className="mt-6 mb-8 text-lg md:mt-8 md:mb-12">Never before has it been as easy or accessible for Service Users to venture out to see the wonderful surrounding landscape, with disabled access and no longer worrying about taxi fares, the Spas Minibus allows so much more freedom for the Service Users.</p>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                        <img src="https://i.ibb.co/9Vg42CK/Minibus-Original-Edited.jpg" alt="Elan Valley" className="object-cover w-full max-w-lg rounded-lg shadow-lg lg:max-w-none" />
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Activities;