import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'
import { paxLabel } from '../../utils/paxLabel.js';
import AutocompleteInput from '../ui/AutocompleteInput.jsx';
import PaxPicker from './PaxPicker.jsx';
import { FLIGHT_LOCATIONS } from '../../data/autocomplete.js';
import { FaChair, FaPlaneArrival, FaPlaneDeparture, FaRegCalendarDays, FaUser } from 'react-icons/fa6';

function FlightForm({ onSearch, initial = {} }) {
    const [tripType, setTripType] = useState(initial.tripType || "roundtrip");
    const [from, setFrom] = useState(initial.from || "");
    const [to, setTo] = useState(initial.to || "");
    const [dep, setDep] = useState(initial.dep || "2026-04-20");
    const [ret, setRet] = useState(initial.ret || "2026-04-27");
    const [cls, setCls] = useState(initial.cls || "Economy");
    const [pax, setPax] = useState({ adults: 1, children: 0, infants: 0 });
    const t = useT();

    const PAX_ROWS = [
        { field: "adults", label: t("adults"), sub: t("age12plus"), min: 1 },
        { field: "children", label: t("children"), sub: t("age211"), min: 0 },
        { field: "infants", label: t("infants"), sub: t("under2lap"), min: 0 },
    ];
    const paxSummary = paxLabel(pax, PAX_ROWS);
    const go = () => {
        if (!from.trim() || !to.trim()) { alert("Please enter origin and destination."); return; }
        onSearch({ type: "flights", from: from.trim(), to: to.trim(), dep, ret: tripType === "roundtrip" ? ret : null, pax: paxSummary, cls, tripType });
    };
    return (
        <div>
            <div className="trip-type-row">
                {[["roundtrip", "roundTrip"], ["oneway", "oneWay"], ["multicity", "multiCity"]].map(([val, key]) => (
                    <button key={val} className={`trip-btn ${tripType === val ? "active" : ""}`} onClick={() => setTripType(val)}>{t(key)}</button>
                ))}
            </div>
            <div className="search-grid flight-grid">
                <div className="field-group">
                    <label><FaPlaneDeparture /> {t("from")}</label>
                    <AutocompleteInput
                        value={from}
                        onChange={setFrom}
                        options={FLIGHT_LOCATIONS}
                        placeholder={t("from")}
                        icon={<FaPlaneDeparture />} />
                </div>
                <div className="field-group">
                    <label><FaPlaneArrival /> {t("to")}</label>
                    <AutocompleteInput
                        value={to}
                        onChange={setTo}
                        options={FLIGHT_LOCATIONS}
                        placeholder={t("to")}
                        icon={<FaPlaneArrival />} />
                </div>
                <div className="field-group">
                    <label><FaRegCalendarDays /> {t("departure")}</label>
                    <input
                        type="date"
                        value={dep}
                        onChange={e => setDep(e.target.value)} />
                </div>
                {tripType === "roundtrip" && <div className="field-group">
                    <label><FaRegCalendarDays /> {t("return")}</label>
                    <input type="date" value={ret} onChange={e => setRet(e.target.value)} />
                </div>}
                <div className="field-group">
                    <label><FaUser /> {t("passengers")}</label>
                    <PaxPicker
                        rows={PAX_ROWS}
                        values={pax}
                        onChange={setPax}
                        triggerLabel={paxSummary} />
                </div>
                <div className="field-group">
                    <label><FaChair /> {t("cabinClass")}</label>
                    <select
                        value={cls}
                        onChange={e => setCls(e.target.value)}>
                        <option>Economy</option>
                        <option>Business</option>
                        <option>First Class</option>
                    </select>
                </div>
                <button className="search-btn" onClick={go}>{t("searchFlights")}</button>
            </div>
        </div>
    );
}

export default FlightForm
