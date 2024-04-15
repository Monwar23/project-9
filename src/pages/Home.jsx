import { Helmet } from "react-helmet-async";
import EstateSEction from "../components/EstateSEction";
import MillionBuyers from "../components/MillionBuyers";
import Swipper from "../components/Swipper";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HomeSpotter || Home</title>
            </Helmet>
            <Swipper></Swipper>
            <EstateSEction></EstateSEction>
            <MillionBuyers></MillionBuyers>
        </div>
    );
};

export default Home;