import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Marque = () => {
    return (
        <div>
            <div className="my-10">
                <h2 className="text-4xl font-bold text-center mt-5">Neighborhoods in the Miami Area</h2>
                <p className="text-center mt-4">
This neighborhood hub attracts buyers looking to be in the middle of the action. Luxury condo towers reign supreme in this artsy Miami neighborhood</p>
            </div>
           <Marquee pauseOnHover={true} speed={100}>
           <Link>
           <img className="h-72 w-72 mr-4" src="https://i.ibb.co/jTGmbS8/images-q-tbn-ANd9-Gc-Qs-YWf-Og-IUoj0-Kpl4whx3r-NR21z-JHLf2-D6-Wsf-AHim-J9-Q-s.jpg" alt="" />
           </Link>
           <Link>
           <img className="h-72 w-72 mr-4" src="https://i.ibb.co/gw3v7vW/images-q-tbn-ANd9-Gc-Sff-QQlsl67-J3-VNZym-Q-t-FC68-Bzlr-Bkv-O-l-Vm-CRdr-Wacg-s.jpg" alt="" />
           </Link>
           <Link>
           <img className="h-72 w-72 mr-4" src="https://i.ibb.co/N78fmkY/marque-105-high-street-prahran-8c830f19b3ed35070ba6cd36fed9ee99.jpg" alt="" />
           </Link>
           <Link>
           <img className="h-72 w-72 mr-4" src="https://i.ibb.co/jwPs7YW/6107-1-13-231025-025303-w3240-h2160.jpg" alt="" />
           </Link>
           <Link>
           <img className="h-72 w-72 mr-4" src="https://i.ibb.co/LtvdQzY/images-q-tbn-ANd9-Gc-Qk2n-Sh3-XOIWj4fv-W5-C18-ZLwc-K5ts0-Nd-HKIc-RWe-Uu-B-g-s.jpg" alt="" />
           </Link>
           <Link>
           <img className="h-72 w-72 mr-4" src="https://i.ibb.co/871FbYG/images-q-tbn-ANd9-Gc-So-Rthtzmm-Nen-UWERa-QSlh0-UNwvds-QCzynp-IJj-Gj-P5-Kug-s.jpg" alt="" />
           </Link>
           <Link>
           <img className="h-72 w-72 mr-4" src="https://i.ibb.co/mSwncXX/images-q-tbn-ANd9-Gc-QObw-WE3-Jgm-Cg-MDOFLE2j-Ha3-Ah-EGRkp19h3a-Am-V0-V3-Esg-s.jpg" alt="" />
           </Link>

           </Marquee>
        </div>
    );
};

export default Marque;