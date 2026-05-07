import { useState, useEffect, useMemo } from 'react'
// Lang 
import {
    useT,
    useLang,
    useCurrency
} from '../../i18n/index.js'
// Utils
import { paxLabel } from '../../utils/paxLabel.js';
import PaxPicker from './PaxPicker.jsx';
// Components 
import { AutocompleteInput } from '../ui';
// Data 
import {
    CRUISE_DESTINATIONS,
    CRUISE_PORTS
} from '../../data/autocomplete.js';
// Icons
import {
    FaAnchor,
    FaMoon,
    FaRegCalendarDays
} from 'react-icons/fa6';
import {
    FaGlobeAsia,
    FaUserFriends
} from 'react-icons/fa';

function CruiseForm({ onSearch, initial = {} }) {
    const [port, setPort] = useState(initial.port || "");
    const [dest, setDest] = useState(initial.dest || "");
    const [date, setDate] = useState(initial.date || "2026-05-01");
    const [duration, setDuration] = useState(initial.duration || "Any");
    const [pax, setPax] = useState({ adults: 2, children: 0, infants: 0 });

    const t = useT();

    const PAX_ROWS = [
        { field: "adults", label: t("adults"), sub: t("age18plus"), min: 1 },
        { field: "children", label: t("children"), sub: t("age217"), min: 0 },
        { field: "infants", label: t("infants"), sub: t("under2lap"), min: 0 },
    ];

    const paxSummary = paxLabel(pax, PAX_ROWS);

    const go = () => {
        if (!port.trim()) { alert("Please enter a departure port."); return; }
        onSearch({ type: "cruises", port: port.trim(), dest: dest.trim(), date, duration, guests: paxSummary });
    };

    return (
        <div className="search-grid cruise-grid">
            <div className="field-group">
                <label><FaAnchor /> {t("departurePort")}</label>
                <AutocompleteInput
                    value={port}
                    onChange={setPort}
                    options={CRUISE_PORTS}
                    placeholder={t("departurePort")}
                    icon={<FaAnchor />} />
            </div>
            <div className="field-group">
                <label><FaGlobeAsia /> {t("cruiseDest")}</label>
                <AutocompleteInput
                    value={dest}
                    onChange={setDest}
                    options={CRUISE_DESTINATIONS}
                    placeholder={t("cruiseDest")}
                    icon={<FaGlobeAsia />} />
            </div>
            <div className="field-group">
                <label><FaRegCalendarDays /> {t("departure")}</label>
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
            </div>
            <div className="field-group">
                <label><FaMoon /> {t("duration")}</label>
                <select
                    value={duration}
                    onChange={e => setDuration(e.target.value)}>
                    <option>Any</option>
                    <option>2-3 Nights</option>
                    <option>4-7 Nights</option>
                    <option>8-14 Nights</option>
                    <option>15+ Nights</option>
                </select>
            </div>
            <div className="field-group">
                <label><FaUserFriends /> {t("guests")}</label>
                <PaxPicker
                    rows={PAX_ROWS}
                    values={pax}
                    onChange={setPax}
                    triggerLabel={paxSummary} />
            </div>
            <button className="search-btn" onClick={go}>{t("searchCruises")}</button>
        </div>
    );
}

export default CruiseForm
