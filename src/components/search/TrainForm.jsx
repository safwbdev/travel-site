import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'
import { paxLabel } from '../../utils/paxLabel.js';
import PaxPicker from './PaxPicker.jsx';
import AutocompleteInput from '../ui/AutocompleteInput.jsx';
import { TRAIN_STATIONS } from '../../data/autocomplete.js';
import { FaRegCalendarDays, FaTicket, FaTrain, FaUser } from 'react-icons/fa6';

function TrainForm({ onSearch, initial = {} }) {
    const [from, setFrom] = useState(initial.from || "");
    const [to, setTo] = useState(initial.to || "");
    const [date, setDate] = useState(initial.date || "2026-04-20");
    const [cls, setCls] = useState(initial.cls || "Any");
    const [pax, setPax] = useState({ adults: 1, children: 0, seniors: 0 });
    const t = useT();
    const PAX_ROWS = [
        { field: "adults", label: t("adults"), sub: t("age18plus"), min: 1 },
        { field: "children", label: t("children"), sub: t("age412"), min: 0 },
        { field: "seniors", label: t("seniors"), sub: t("age60plus"), min: 0 },
    ];
    const paxSummary = paxLabel(pax, PAX_ROWS);
    const go = () => {
        if (!from.trim() || !to.trim()) { alert("Please enter origin and destination."); return; }
        onSearch({ type: "trains", from: from.trim(), to: to.trim(), date, pax: paxSummary, cls });
    };
    return (
        <div className="search-grid train-grid">
            <div className="field-group">
                <label><FaTrain /> {t("from")}</label>
                <AutocompleteInput
                    value={from}
                    onChange={setFrom}
                    options={TRAIN_STATIONS}
                    placeholder={t("from")}
                    icon={<FaTrain />} />
            </div>
            <div className="field-group">
                <label><FaTrain /> {t("to")}</label>
                <AutocompleteInput
                    value={to}
                    onChange={setTo}
                    options={TRAIN_STATIONS}
                    placeholder={t("to")}
                    icon={<FaTrain />} />
            </div>
            <div className="field-group">
                <label><FaRegCalendarDays /> {t("travelDate")}</label>
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
            <div className="field-group">
                <label><FaTicket /> {t("trainClass")}</label>
                <select
                    value={cls}
                    onChange={e => setCls(e.target.value)}>
                    <option>Any</option>
                    <option>Silver</option>
                    <option>Gold</option>
                    <option>Platinum</option>
                    <option>First</option>
                </select>
            </div>
            <button className="search-btn" onClick={go}>{t("searchTrains")}</button>
        </div>
    );
}

export default TrainForm
