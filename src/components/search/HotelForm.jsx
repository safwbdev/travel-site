import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'
import AutocompleteInput from '../ui/AutocompleteInput.jsx';
import { HOTEL_DESTINATIONS } from '../../data/autocomplete.js';
import GuestPicker from './GuestPicker.jsx';
import { FaCity, FaRegCalendarDays, FaBed, FaMagnifyingGlass } from "react-icons/fa6";

function HotelForm({ onSearch, initial = {} }) {
    const [dest, setDest] = useState(initial.dest || "");
    const [checkin, setCheckin] = useState(initial.checkin || "2026-04-20");
    const [checkout, setCheckout] = useState(initial.checkout || "2026-04-25");
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const t = useT();
    const handleGuestChange = ({ rooms: r, adults: a, children: c, infants: i }) => {
        setRooms(r); setAdults(a); setChildren(c); setInfants(i);
    };
    const roomsSummary = `${rooms} ${t("rooms")}, ${adults + children + infants} ${t("guests")}`;
    const go = () => {
        if (!dest.trim()) { alert(t("destination")); return; }
        onSearch({ type: "hotels", dest: dest.trim(), checkin, checkout, rooms: roomsSummary });
    };
    return (
        <div className="search-grid hotel-grid">
            <div className="field-group">
                <label><FaCity /> {t("destination")}</label>
                <AutocompleteInput
                    value={dest}
                    onChange={setDest}
                    options={HOTEL_DESTINATIONS}
                    placeholder={t("destination")}
                    icon={<FaMagnifyingGlass />}
                    onSelect={() => { }} />
            </div>
            <div className="field-group">
                <label><FaRegCalendarDays /> {t("checkIn")}</label>
                <input
                    type="date"
                    value={checkin}
                    onChange={e => setCheckin(e.target.value)} />
            </div>
            <div className="field-group">
                <label><FaRegCalendarDays /> {t("checkOut")}</label>
                <input
                    type="date"
                    value={checkout}
                    onChange={e => setCheckout(e.target.value)} />
            </div>
            <div className="field-group">
                <label><FaBed /> {t("roomsGuests")}</label>
                <GuestPicker
                    rooms={rooms}
                    adults={adults}
                    children={children}
                    infants={infants}
                    onChange={handleGuestChange} />
            </div>
            <button className="search-btn" onClick={go}>{t("searchHotels")}</button>
        </div>
    );
}

// ─────────────────────────────────────────────
//  PAX PICKER — generic passenger counter
//  rows: [{ field, label, sub, min, max }]
//  values / onChange: { [field]: number }
// ─────────────────────────────────────────────

export default HotelForm
