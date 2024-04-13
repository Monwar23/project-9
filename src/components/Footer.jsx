import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-20">
            <aside>
              <FaHouse className="text-6xl"></FaHouse>
                <Link to="/" className=" text-xl font-medium"><span className="font-bold text-green-500">Home</span>Spotter</Link>
            </aside>
            <nav>
                <h6 className="footer-title">ADVERTISERS</h6>
                <a className="link link-hover">Advertise</a>
                <a className="link link-hover">Add a property</a>
                <a className="link link-hover">Customer Portal</a>
                <a className="link link-hover">Community Voice</a>
            </nav>
            <nav>
                <h6 className="footer-title">SERVICES
                </h6>
                <a className="link link-hover">Single-family homes</a>
                <a className="link link-hover">Townhouses</a>
                <a className="link link-hover">Apartments</a>
                <a className="link link-hover">Student
                    housing</a>
                <a className="link link-hover">senior living communities</a>
            </nav>
            <nav>
                <h6 className="footer-title">THE MARKETPLACE
                </h6>
                <a className="link link-hover">HomeSpotter</a>
                <a className="link link-hover">HomeSpotter Canada</a>
                <a className="link link-hover">ForRent</a>
                <a className="link link-hover">Homes.com</a>
                <a className="link link-hover">Land.com</a>
            </nav>
            <nav>
                <h6 className="footer-title">ABOUT US</h6>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Privacy Notice</a>
            </nav>
        </footer>
    );
};

export default Footer;