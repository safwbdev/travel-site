
// Icons 
import { TbBrandMercedes } from "react-icons/tb";
import { GiLion } from "react-icons/gi";
import {
    FaAnchor,
    FaCar,
    FaHotel,
    FaPlane,
    FaShip,
    FaSignHanging,
    FaTrain
} from 'react-icons/fa6';
import {
    SiAirasia,
    SiJapanairlines,
    SiSingaporeairlines
} from "react-icons/si";
import {
    FaGlobeAsia,
    FaShuttleVan
} from "react-icons/fa";

function AutocompleteLogo({ id }) {
    switch (true) {
        case id === "hotel":
            return <FaHotel />
            break;
        case id === "plane":
            return <FaPlane />
            break;
        case id === "car":
            return <FaCar />
            break;
        case id === "bus":
            return <FaSignHanging />
            break;
        case id === "transfer":
            return <FaShuttleVan />
            break;
        case id === "train":
            return <FaTrain />
            break;
        case id === "cruiseport":
            return <FaAnchor />
            break;
        case id === "cruisedestination":
            return <FaGlobeAsia />
            break;

        default:
            return;
            break;
    }
}











export default AutocompleteLogo