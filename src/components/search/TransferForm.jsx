import { useState, useEffect, useMemo } from 'react'
// Lang 
import {
    useT,
    useLang,
    useCurrency
} from '../../i18n/index.js'
// Utils
import { paxLabel } from '../../utils/paxLabel.js';
// Components
import { AutocompleteInput } from '../ui';
import PaxPicker from './PaxPicker.jsx';
// Data
import {
    AIRPORT_LIST,
    TRANSFER_DESTINATIONS
} from '../../data/autocomplete.js';
// Icons
import { FaUserFriends } from 'react-icons/fa';
import {
    FaBuilding,
    FaHotel,
    FaLocationDot,
    FaPlane,
    FaRegCalendarDays,
    FaRegClock
} from 'react-icons/fa6';

function TransferForm({ onSearch, initial = {} }) {
    const [airport, setAirport] = useState(initial.airport || "");
    const [dest, setDest] = useState(initial.dest || "");
    const [date, setDate] = useState(initial.date || "2026-04-20");
    const [time, setTime] = useState(initial.time || "14:00");
    const [pax, setPax] = useState({ adults: 1, children: 0 });
    const t = useT();
    const PAX_ROWS = [
        { field: "adults", label: t("adults"), sub: t("age12plus"), min: 1 },
        { field: "children", label: t("children"), sub: t("age211"), min: 0 },
    ];
    const paxSummary = paxLabel(pax, PAX_ROWS);
    const go = () => {
        if (!airport.trim() || !dest.trim()) { alert("Please enter airport and destination."); return; }
        onSearch({ type: "transfer", airport: airport.trim(), dest: dest.trim(), date, time, pax: paxSummary });
    };
    return (
        <div className="search-grid transfer-grid">
            <div className="field-group">
                <label><FaPlane /> {t("airport")}</label>
                <AutocompleteInput
                    value={airport}
                    onChange={setAirport}
                    options={AIRPORT_LIST}
                    placeholder={t("airport")}
                    icon={<FaPlane />} />
            </div>
            <div className="field-group">
                <label><FaHotel /> {t("hotelDest")}</label>
                <AutocompleteInput
                    value={dest}
                    onChange={setDest}
                    options={TRANSFER_DESTINATIONS}
                    placeholder={t("hotelDest")}
                    icon={<FaLocationDot />} />
            </div>
            <div className="field-group">
                <label><FaRegCalendarDays /> {t("date")}</label>
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
            </div>
            <div className="field-group">
                <label><FaRegClock /> {t("time")}</label>
                <input
                    type="time"
                    value={time}
                    onChange={e => setTime(e.target.value)} />
            </div>
            <div className="field-group">
                <label><FaUserFriends /> {t("passengers")}</label>
                <PaxPicker
                    rows={PAX_ROWS}
                    values={pax}
                    onChange={setPax}
                    triggerLabel={paxSummary} />
            </div>
            <button className="search-btn" onClick={go}>{t("searchTransfers")}</button>
        </div>
    );
}

export default TransferForm
