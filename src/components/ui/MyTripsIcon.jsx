import { FaShuttleVan } from "react-icons/fa";
import { FaBusSimple, FaCar, FaHotel, FaPlane, FaShip, FaTrain } from "react-icons/fa6";

function MyTripsIcon({ type }) {

    switch (true) {
        case type === "Hotel":
            return <FaHotel />
            break;
        case type === "Flight":
            return <FaPlane />
            break;
        case type === "Transfer":
            return <FaShuttleVan />
            break;
        case type === "Car":
            return <FaCar />
            break;
        case type === "Train":
            return <FaTrain />
            break;
        case type === "Cruise":
            return <FaShip />
            break;
        case type === "Bus":
            return <FaBusSimple />
            break;

        default:
            break;
    }

}

export default MyTripsIcon