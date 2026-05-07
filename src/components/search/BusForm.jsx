import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'
import { paxLabel } from '../../utils/paxLabel.js';
import AutocompleteInput from '../ui/AutocompleteInput.jsx';
import PaxPicker from './PaxPicker.jsx';
import { BUS_CITIES } from '../../data/autocomplete.js';
import { FaRegCalendarDays, FaUser, FaSignHanging } from 'react-icons/fa6';

function BusForm({ onSearch, initial = {} }) {
    const [from, setFrom] = useState(initial.from || "");
    const [to, setTo] = useState(initial.to || "");
    const [date, setDate] = useState(initial.date || "2026-04-20");
    const [pax, setPax] = useState({ adults: 1, children: 0 });
    const t = useT();
    const PAX_ROWS = [
        { field: "adults", label: t("adults"), sub: t("age18plus"), min: 1 },
        { field: "children", label: t("children"), sub: t("age313"), min: 0 },
    ];
    const paxSummary = paxLabel(pax, PAX_ROWS);
    const go = () => {
        if (!from.trim() || !to.trim()) { alert("Please enter origin and destination."); return; }
        onSearch({ type: "buses", from: from.trim(), to: to.trim(), date, pax: paxSummary });
    };
    return (
        <div className="search-grid bus-grid">
            <div className="field-group">
                <label><FaSignHanging /> {t("from")}</label>
                <AutocompleteInput
                    value={from}
                    onChange={setFrom}
                    options={BUS_CITIES}
                    placeholder={t("from")}
                    icon={<FaSignHanging />} />
            </div>
            <div className="field-group">
                <label><FaSignHanging /> {t("to")}</label>
                <AutocompleteInput
                    value={to}
                    onChange={setTo}
                    options={BUS_CITIES}
                    placeholder={t("to")}
                    icon={<FaSignHanging />} />
            </div>
            <div className="field-group">
                <label><FaRegCalendarDays /> {t("date")}</label>
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
            </div>
            <div className="field-group">
                <label><FaUser /> {t("passengers")}</label>
                <PaxPicker
                    rows={PAX_ROWS}
                    values={pax}
                    onChange={setPax}
                    triggerLabel={paxSummary} />
            </div>
            <button className="search-btn" onClick={go}>{t("searchBuses")}</button>
        </div>
    );
}

export default BusForm
