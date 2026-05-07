import { FaCarSide, FaHotel, FaPlane, FaBusSimple, FaVanShuttle, FaTrain, FaShip } from "react-icons/fa6";

function TabIcon({ id }) {
    switch (true) {
        case id === 0:
            return <FaHotel />;
            break;
        case id === 1:
            return <FaPlane />;
            break;
        case id === 2:
            return <FaCarSide />;
            break;
        case id === 3:
            return <FaVanShuttle />;
            break;
        case id === 4:
            return <FaBusSimple />;
            break;
        case id === 5:
            return <FaTrain />;
            break;
        case id === 6:
            return <FaShip />;
            break;
        default:
            break;
    }
}
export default TabIcon