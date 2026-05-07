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
    NoResults
} from '../../components/ui';
import { ResultsShell } from '../../components/layouts';
// Data 
import { CRUISE_DB } from '../../data/cruises.js';
// Icons
import {
    FaAnchor,
    FaMoon,
    FaRegCalendarDays,
    FaShip
} from 'react-icons/fa6';
import {
    FaGlobeAsia,
    FaUserFriends
} from 'react-icons/fa';

function CruiseResults({ search, onBack, onNewSearch, onSelectItem }) {
    const [sort, setSort] = useState("recommended");
    const [maxP, setMaxP] = useState(5000);
    const [cruiseTypes, setCruiseTypes] = useState([]);
    const [lines, setLines] = useState([]);
    const [loading, setLoading] = useState(true);

    const t = useT();

    useEffect(() => {
        setLoading(true);
        const t2 = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(t2);
    }, [search]);

    const base = useMemo(() => CRUISE_DB.filter(c => {
        const portMatch = matchCity(search.port, c.from);
        const destMatch = !search.dest || !search.dest.trim() || matchCity(search.dest, c.to);
        const durMap = { "Any": true, "2-3 Nights": c.nights <= 3, "4-7 Nights": c.nights >= 4 && c.nights <= 7, "8-14 Nights": c.nights >= 8 && c.nights <= 14, "15+ Nights": c.nights >= 15 };
        const durMatch = durMap[search.duration] ?? true;
        return portMatch && destMatch && durMatch;
    }), [search.port, search.dest, search.duration]);

    const allLines = [...new Set(CRUISE_DB.map(c => c.line))];

    const list = useMemo(() => {
        let r = [...base];
        if (cruiseTypes.length) r = r.filter(c => cruiseTypes.includes(c.type));
        if (lines.length) r = r.filter(c => lines.includes(c.line));
        r = r.filter(c => c.price <= maxP);
        if (sort === "price_asc") r.sort((a, b) => a.price - b.price);
        if (sort === "price_desc") r.sort((a, b) => b.price - a.price);
        if (sort === "rating") r.sort((a, b) => b.rating - a.rating);
        if (sort === "nights") r.sort((a, b) => a.nights - b.nights);
        return r;
    }, [base, cruiseTypes, lines, maxP, sort]);

    const toggleCT = t => setCruiseTypes(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);

    const toggleL = l => setLines(p => p.includes(l) ? p.filter(x => x !== l) : [...p, l]);

    const clear = () => { setCruiseTypes([]); setLines([]); setMaxP(5000); setSort("recommended"); };

    return (
        <ResultsShell search={search} onBack={onBack} onNewSearch={onNewSearch}
            breadcrumb={[t("cruises"), search.port]}
            summaryChips={[<><FaAnchor />{` ${search.port}`}</>, search.dest && <><FaGlobeAsia />{` ${search.dest}`}</>, <><FaRegCalendarDays />{` From ${fmtD(search.date)}`}</>, <><FaMoon />{` ${search.duration}`}</>, <><FaUserFriends />{` ${search.guests}`}</>].filter(Boolean)}
            count={loading ? null : list.length} label={t("cruises")}>
            <aside className="filters">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div className="filter-title">{t("filters")}</div>
                    <button className="clear-btn-sm" onClick={clear}>{t("clearAll")}</button>
                </div>
                <PriceFilterSection label={t("maxPricePerson")} min={150} max={5000} value={maxP} onChange={setMaxP} />
                <div className="filter-section">
                    <div className="filter-section-title">{t("cruiseType")}</div>
                    {["Weekend Cruise", "Short Cruise", "Island Hopping", "Grand Voyage", "Expedition", "Signature Voyage"].map(tp => <label key={tp} className="filter-option"><input type="checkbox" checked={cruiseTypes.includes(tp)} onChange={() => toggleCT(tp)} /> {tp}</label>)}
                </div>
                <div className="filter-section">
                    <div className="filter-section-title">{t("cruiseLine")}</div>
                    {allLines.map(l => <label key={l} className="filter-option"><input type="checkbox" checked={lines.includes(l)} onChange={() => toggleL(l)} /> {l}</label>)}
                </div>
            </aside>
            <div>
                <div className="sort-bar">
                    <span className="sort-label">{loading ? "…" : `${list.length} ${t("cruises")} found`}</span>
                    <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="recommended">{t("recommended")}</option>
                        <option value="price_asc">{t("priceLowHigh")}</option>
                        <option value="price_desc">{t("priceHighLow")}</option>
                        <option value="rating">{t("rating")}</option>
                        <option value="nights">{t("duration")}</option>
                    </select>
                </div>
                {loading ? <SkeletonList count={3} height={180} /> : list.length === 0 ? <NoResults label={`No ${t("cruises")} found`} tip="Try departing from Penang or Singapore. Leave destination blank to see all." /> : (
                    <div className="result-list">
                        {list.map(c => (
                            <div key={c.id} className="cruise-card">
                                <div className="cruise-header" style={{ background: `linear-gradient(135deg, #003d80, #0077cc)` }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                        <div>
                                            <div className="cruise-ship">{c.name}</div>
                                            <div className="cruise-line"><FaShip /> {c.line} · {c.ship}</div>
                                        </div>
                                        <span style={{ background: "rgba(255,255,255,.2)", color: "#fff", fontSize: ".75rem", fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>{c.type}</span>
                                    </div>
                                </div>
                                <div className="cruise-body">
                                    <div>
                                        <div className="cruise-route"><FaAnchor /> {c.from} → <FaGlobeAsia /> {c.to}</div>
                                        <div className="cruise-meta"><FaMoon /> {c.nights} nights · <FaRegCalendarDays /> Departs {fmtD(c.dep)}</div>
                                        <div className="rc-chips" style={{ marginTop: 8 }}>
                                            {c.amenities.map(a => <span key={a} className="chip">{a}</span>)}
                                        </div>
                                        <div style={{ marginTop: 8 }}>
                                            <span style={{ fontSize: ".75rem", color: "var(--muted)", fontWeight: 600 }}>Cabin options: </span>
                                            {c.cabins.map(cb => <span key={cb} className="chip chip-blue" style={{ marginRight: 4 }}>{cb}</span>)}
                                        </div>
                                        <div className="rc-meta" style={{ marginTop: 10 }}>
                                            <span className="rating-pill">{c.rating}</span>
                                            <span className="rc-reviews">{c.reviews} reviews</span>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "right", minWidth: 155 }}>
                                        <div className="price-label">From per person</div>
                                        <div className="price-orig"><CPrice myr={c.originalPrice} /></div>
                                        <div className="price-main"><CPrice myr={c.price} /></div>
                                        <div className="price-unit">/ person</div>
                                        <span className="price-disc">-{disc(c.price, c.originalPrice)}% OFF</span>
                                        <button className="book-btn" style={{ marginTop: 10 }} onClick={() => onSelectItem && onSelectItem(c)}>View Cabins →</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ResultsShell>
    );
}

export default CruiseResults
