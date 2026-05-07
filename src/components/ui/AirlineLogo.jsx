
// Icons 
import { TbBrandMercedes } from "react-icons/tb";
import { GiLion } from "react-icons/gi";
import {
    FaCar,
    FaPlane
} from 'react-icons/fa6';
import {
    SiAirasia,
    SiJapanairlines,
    SiSingaporeairlines
} from "react-icons/si";

function AirlineLogo({ id }) {
    switch (true) {
        case id.includes("AirAsia"):
            return <SiAirasia />
            break;
        case id.includes("Firefly"):
            return <FaPlane />
            break;
        case id.includes("Batik"):
            return <FaPlane />
            break;
        case id.includes("Malaysia"):
            return <FaPlane />
            break;
        case id.includes("Thai"):
            return <FaPlane />
            break;
        case id.includes("Japan"):
            return <SiJapanairlines />
            break;
        case id.includes("ANA"):
            return <FaPlane />
            break;
        case id.includes("Scoot"):
            return <FaPlane />
            break;
        case id.includes("Singapore"):
            return <SiSingaporeairlines />
            break;
        case id.includes("Korean"):
            return <FaPlane />
            break;

        default:
            return <FaPlane />
            break;
    }
}











export default AirlineLogo