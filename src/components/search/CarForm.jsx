import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'
import AutocompleteInput from '../ui/AutocompleteInput.jsx';
import { CAR_LOCATIONS } from '../../data/autocomplete.js';
import { FaCar, FaLocationDot, FaRegCalendarDays } from 'react-icons/fa6';

function CarForm({ onSearch, initial = {} }) {
    const [pickup, setPickup] = useState(initial.pickup || "");
    const [dropoff, setDropoff] = useState(initial.dropoff || "");
    const [pickDate, setPickDate] = useState(initial.pickDate || "2026-04-20");
    const [retDate, setRetDate] = useState(initial.retDate || "2026-04-25");
    const [carType, setCarType] = useState(initial.carType || "Any");
    const t = useT();
    const go = () => { if (!pickup.trim()) { alert("Please enter a pick-up location."); return; } onSearch({ type: "cars", pickup: pickup.trim(), dropoff: dropoff.trim() || pickup.trim(), pickDate, retDate, carType }); };
    return (
        <div className="search-grid car-grid">
            <div className="field-group">
                <label><FaLocationDot /> {t("pickupLocation")}</label>
                <AutocompleteInput
                    value={pickup}
                    onChange={setPickup}
                    options={CAR_LOCATIONS}
                    placeholder={t("pickupLocation")}
                    icon={<FaLocationDot />} />
            </div>
            <div className="field-group">
                <label><FaLocationDot /> {t("dropoffLocation")}</label>
                <AutocompleteInput
                    value={dropoff}
                    onChange={setDropoff}
                    options={CAR_LOCATIONS}
                    placeholder={t("dropoffLocation")}
                    icon={<FaLocationDot />} />
            </div>
            <div className="field-group">
                <label><FaRegCalendarDays /> {t("pickupDate")}</label>
                <input
                    type="date"
                    value={pickDate}
                    onChange={e => setPickDate(e.target.value)} />
            </div>
            <div className="field-group">
                <label><FaRegCalendarDays /> {t("returnDate")}</label>
                <input
                    type="date"
                    value={retDate}
                    onChange={e => setRetDate(e.target.value)} />
            </div>
            <div className="field-group">
                <label><FaCar /> {t("carType")}</label>
                <select
                    value={carType}
                    onChange={e => setCarType(e.target.value)}>
                    <option>Any</option>
                    <option>Economy</option>
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>MPV</option>
                    <option>Luxury</option>
                </select>
            </div>
            <button className="search-btn" onClick={go}>{t("searchCars")}</button>
        </div>
    );
}

export default CarForm
