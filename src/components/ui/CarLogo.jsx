// Icons 
import { TbBrandMercedes } from "react-icons/tb";
import { GiLion } from "react-icons/gi";
import { FaCar } from 'react-icons/fa6';
import {
    SiBmw,
    SiHonda,
    SiHyundai,
    SiMitsubishi,
    SiToyota
} from 'react-icons/si';

function CarLogo({ id }) {
    switch (true) {
        case id.includes("Toyota"):
            return <SiToyota />
            break;
        case id.includes("Honda"):
            return <SiHonda />
            break;
        case id.includes("BMW"):
            return <SiBmw />
            break;
        case id.includes("Mercedes"):
            return <TbBrandMercedes />
            break;
        case id.includes("Proton"):
            return <GiLion />
            break;
        case id.includes("Perodua"):
            return <SiMitsubishi />
            break;
        case id.includes("Hyundai"):
            return <SiHyundai />
            break;

        default:
            return <FaCar />
            break;
    }
}
export default CarLogo