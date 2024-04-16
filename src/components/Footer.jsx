import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="footer p-10 bg-blue-200 text-base-content mt-20">
            <aside>
                <FaHouse className="text-6xl text-blue-600"></FaHouse>
                <Link to="/" className=" text-xl font-medium"><span className="font-bold text-blue-600">Home</span>Spotter</Link>
               <div className="flex gap-2 mt-10">
               <FaFacebookF className="text-lg"></FaFacebookF>
                <FaTwitter className="text-lg"></FaTwitter>
                <FaInstagram className="text-lg"></FaInstagram>
                <FaLinkedin className="text-lg"></FaLinkedin>
               </div>
            </aside>
            <nav className="text-black">
                <h6 className="footer-title">ADVERTISERS</h6>
                <a className="link link-hover">Advertise</a>
                <a className="link link-hover">Add a property</a>
                <a className="link link-hover">Customer Portal</a>
                <a className="link link-hover">Community Voice</a>
            </nav>
            <nav className="text-black">
                <h6 className="footer-title">SERVICES
                </h6>
                <a className="link link-hover">Single-family homes</a>
                <a className="link link-hover">Townhouses</a>
                <a className="link link-hover">Apartments</a>
                <a className="link link-hover">Student
                    housing</a>
                <a className="link link-hover">senior living communities</a>
            </nav>
            <nav className="text-black">
                <h6 className="footer-title">THE MARKETPLACE
                </h6>
                <a className="link link-hover">HomeSpotter</a>
                <a className="link link-hover">HomeSpotter Canada</a>
                <a className="link link-hover">ForRent</a>
                <a className="link link-hover">Homes.com</a>
                <a className="link link-hover">Land.com</a>
            </nav>
            <nav className="text-black">
                <h6 className="footer-title">ABOUT US</h6>
                <Link to='/about' className="link link-hover">About Us</Link>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Privacy Notice</a>
            </nav>
        </footer>
    );
};

export default Footer;