// DB MAP — used by DetailRoute to resolve items from the URL :id param

import { BUS_DB } from "../data/buses"
import { CAR_DB } from "../data/cars"
import { CRUISE_DB } from "../data/cruises"
import { FLIGHT_DB } from "../data/flights"
import { HOTEL_DB } from "../data/hotel"
import { TRAIN_DB } from "../data/trains"
import { TRANSFER_DB } from "../data/transfer"

export const DB_MAP = {
    hotels: HOTEL_DB,
    flights: FLIGHT_DB,
    cars: CAR_DB,
    transfer: TRANSFER_DB,
    buses: BUS_DB,
    trains: TRAIN_DB,
    cruises: CRUISE_DB,
}