import { Helmet } from "react-helmet-async";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"


const About = () => {
    const position = [23.8103, 90.4125]

    return (
        <div>
            <Helmet>
                <title>HomeSpotter || About</title>
            </Helmet>
            <div className="hero min-h-screen my-10" style={{ backgroundImage: 'url(https://i.ibb.co/0GM5JsT/Residential-Building.png)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-neutral-content bg-slate-00">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">About Our Company</h1>
                        <p className="mb-5 ">Next Realty is working to manage and lease HomeSpotter building. We  are an accomplished property  management <br /> and leasing firm with a long track record of managing and leasing office spaces  in the River North neighborhood. <br /> Whether it is a hot desk or a loft office  space for rent in Chicago, we will provide tenants with the right working  environment for their business.</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl bg-white shadow-md rounded-lg overflow-hidden md:flex">
                    <img src="https://i.ibb.co/w7KdKpc/mad-architects-reveals-first-european-project-paris-newest-residential-building-01.jpg" alt="HomeSpotter Building" className="w-full md:w-1/2 h-auto object-cover" />
                    <div className="p-4 md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">About HomeSpotter Building</h2>
                        <p className="text-gray-700 leading-relaxed">Formerly home to Morrie Mages, Sportmart, and Sports Authority, this iconic eight-story building at the corner of Ontario and LaSalle has been transformed into a modern timber loft office space. Extensive renovations, including the replacement of all mechanical systems and installation of new vertical transportation, have modernized the building. New amenities such as a rooftop desk, showers, bike room, and tenant lounge areas have been added, creating a state-of-the-art work environment with convenient lifestyle amenities to meet today is tenant demands.</p>
                    </div>
                </div>
            </div>
            <div className="p-6 p-16" style={{ backgroundImage: 'url(https://i.ibb.co/p0Lns05/residential-landmark-two-residential-tower-2000x1125-1701201120.jpg)' }}>
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-slate-50">
                        <h1 className="text-5xl font-extrabold dark:text-gray-900 mb-10">Contact Us</h1>
                        <form noValidate="" action="" className="self-stretch space-y-3">
                            <div>
                                <div className="flex gap-3 mb-3">
                                    <input type="text" placeholder="Your Name *" required className="w-1/2 px-4 py-2 rounded-md border-2  h-14 " />
                                    <input type="number" placeholder="Phone Number *" required className="w-1/2 px-4 py-2 rounded-md border-2  h-14" />
                                </div>
                                <input type="email" placeholder="Email *" required className="w-full px-4 py-2 mb-3 h-14 rounded-md border-2  h-14" />
                                <input type="text" placeholder="Your Message" required className="w-full px-4 py-2 rounded-md h-24 border-2" />
                            </div>
                            <button type="button" className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 btn bg-blue-500 border-none text-white">Submit</button>
                        </form>
                    </div>

                    <div className="w-full px-16 py-16 rounded-md  xl:col-span-3 bg-slate-50">
                        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;