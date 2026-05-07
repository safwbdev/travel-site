import { useState, useEffect, useMemo } from 'react'
// Lang
import {
    useT,
    useCurrency
} from '../../i18n/index.js'
// Utils
import {
    disc,
    fmtD,
    nights
} from '../../utils/formatters.js';
import { matchCity } from '../../utils/matchCity.js';
// Components 
import {
    CPrice,
    PriceFilterSection,
    SkeletonList,
    NoResults,
    CarLogo
} from '../../components/ui';
import { ResultsShell } from '../../components/layouts';
// Data 
import { TRANSFER_DB } from '../../data/transfer.js';
// Icons 
import {
    FaClock,
    FaUserFriends
} from 'react-icons/fa';
import {
    FaBuilding,
    FaPlane,
    FaRegCalendarDays,
    FaRegClock,
    FaUser
} from 'react-icons/fa6';

function TransferResults({ search, onBack, onNewSearch, onSelectItem }) {
    const [sort, setSort] = useState("recommended");
    const [maxP, setMaxP] = useState(500);
    const [vTypes, setVTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    const t = useT();

    useEffect(() => {
        setLoading(true);
        const t2 = setTimeout(() => setLoading(false), 900);
        return () => clearTimeout(t2);
    }, [search]);

    const paxNum = parseInt(search.pax) || 2;
    const base = useMemo(() => TRANSFER_DB.filter(tr => tr.maxPax >= Math.min(paxNum, 2)), [paxNum]);

    const list = useMemo(() => {
        let r = [...base];
        if (vTypes.length) r = r.filter(tr => vTypes.includes(tr.type));
        r = r.filter(tr => tr.price <= maxP);
        if (sort === "price_asc") r.sort((a, b) => a.price - b.price);
        if (sort === "price_desc") r.sort((a, b) => b.price - a.price);
        if (sort === "rating") r.sort((a, b) => b.rating - a.rating);
        return r;
    }, [base, vTypes, maxP, sort]);

    const toggleV = v => setVTypes(p => p.includes(v) ? p.filter(x => x !== v) : [...p, v]);

    const clear = () => { setVTypes([]); setMaxP(500); setSort("recommended"); };

    return (
        <ResultsShell search={search} onBack={onBack} onNewSearch={onNewSearch}
            breadcrumb={[t("airportTransfer"), `${search.airport} → ${search.dest}`]}
            summaryChips={[<><FaPlane />{` ${search.airport}`}</>, <><FaBuilding />{` ${search.dest}`}</>, <><FaRegCalendarDays />{` ${fmtD(search.date)} ${search.time}`}</>, <><FaUserFriends />{` ${search.pax}`}</>]}
            count={loading ? null : list.length} label={t("airportTransfer")}>
            <aside className="filters">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div className="filter-title">{t("filters")}</div>
                    <button className="clear-btn-sm" onClick={clear}>{t("clearAll")}</button>
                </div>
                <PriceFilterSection label={t("maxPrice")} min={30} max={500} value={maxP} onChange={setMaxP} />
                <div className="filter-section">
                    <div className="filter-section-title">{t("vehicleType")}</div>
                    {["Sedan", "Business", "MPV", "Van", "Luxury", "Electric"].map(v => <label key={v} className="filter-option"><input type="checkbox" checked={vTypes.includes(v)} onChange={() => toggleV(v)} /> {v}</label>)}
                </div>
            </aside>
            <div>
                <div className="sort-bar">
                    <span className="sort-label">{loading ? "…" : `${list.length} ${t("airportTransfer")} available`}</span>
                    <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="recommended">{t("recommended")}</option>
                        <option value="price_asc">{t("priceLowHigh")}</option>
                        <option value="price_desc">{t("priceHighLow")}</option>
                        <option value="rating">{t("rating")}</option>
                    </select>
                </div>
                {loading ? <SkeletonList /> : list.length === 0 ? <NoResults label="No transfers found" /> : (
                    <div className="result-list">
                        {list.map(tr => (
                            <div key={tr.id} className="result-card">
                                <div className="rc-thumb">
                                    <span><CarLogo id={tr.vehicle} /></span>
                                    <span className="rc-badge-tl"><FaUser /> max {tr.maxPax}</span>
                                    <span className="rc-badge-bl">{tr.type}</span>
                                </div>
                                <div className="rc-info">
                                    <div>
                                        <div className="rc-name">{tr.vehicle}</div>
                                        <div className="rc-sub"><FaBuilding /> {tr.provider} · <FaRegClock /> ~{tr.duration}</div>
                                        <div className="rc-chips">{tr.features.map(f => <span key={f} className="chip">{f}</span>)}</div>
                                    </div>
                                    <div className="rc-meta">
                                        <span className="rating-pill">{tr.rating}</span>
                                        <span className="rc-reviews">{tr.reviews} {t("reviews")}</span>
                                        <span className="chip chip-green">✓ Instant Confirmation</span>
                                    </div>
                                </div>
                                <div className="rc-price-col">
                                    <div>
                                        <div className="price-label">{t("perNight")}</div>
                                        <div className="price-orig"><CPrice myr={tr.originalPrice} /></div>
                                        <div className="price-main"><CPrice myr={tr.price} /></div>
                                        <div className="price-unit">/ vehicle</div>
                                        <span className="price-disc">-{disc(tr.price, tr.originalPrice)}% OFF</span>
                                    </div>
                                    <button className="book-btn" onClick={() => onSelectItem && onSelectItem(tr)}>{t("bookTransfer")}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ResultsShell>
    );
}

export default TransferResults
