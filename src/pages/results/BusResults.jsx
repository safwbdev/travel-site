import { useState, useEffect, useMemo } from 'react'
// Lang
import { useT, useCurrency } from '../../i18n/index.js'
// Utils
import { disc, fmtD, nights } from '../../utils/formatters.js';
import { matchCity } from '../../utils/matchCity.js';
// Components 
import { CPrice, PriceFilterSection, SkeletonList, NoResults } from '../../components/ui';
import { ResultsShell } from '../../components/layouts';
// Data 
import { BUS_DB } from '../../data/buses.js';
import { FaBus, FaBusSimple, FaChair, FaRegClock, FaSignHanging, FaUser } from 'react-icons/fa6';


function BusResults({ search, onBack, onNewSearch, onSelectItem }) {
    const [sort, setSort] = useState("recommended");
    const [maxP, setMaxP] = useState(200);
    const [busTypes, setBusTypes] = useState([]);
    const [operators, setOperators] = useState([]);
    const [loading, setLoading] = useState(true);
    const t = useT();
    useEffect(() => { setLoading(true); const t2 = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t2); }, [search]);
    const base = useMemo(() => BUS_DB.filter(b => {
        return matchCity(search.from, b.from) && matchCity(search.to, b.to);
    }), [search.from, search.to]);
    const allOps = [...new Set(BUS_DB.map(b => b.operator))];
    const list = useMemo(() => {
        let r = [...base];
        if (busTypes.length) r = r.filter(b => busTypes.includes(b.type));
        if (operators.length) r = r.filter(b => operators.includes(b.operator));
        r = r.filter(b => b.price <= maxP);
        if (sort === "price_asc") r.sort((a, b) => a.price - b.price);
        if (sort === "price_desc") r.sort((a, b) => b.price - a.price);
        if (sort === "dep") r.sort((a, b) => a.dep.localeCompare(b.dep));
        return r;
    }, [base, busTypes, operators, maxP, sort]);
    const toggleBT = t => setBusTypes(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);
    const toggleOp = o => setOperators(p => p.includes(o) ? p.filter(x => x !== o) : [...p, o]);
    const clear = () => { setBusTypes([]); setOperators([]); setMaxP(200); setSort("recommended"); };
    return (
        <ResultsShell search={search} onBack={onBack} onNewSearch={onNewSearch}
            breadcrumb={[t("buses"), `${search.from} → ${search.to}`]}
            summaryChips={[<><FaSignHanging />{` ${search.from} → ${search.to}`}</>, <><FaBus />{` ${fmtD(search.date)}`}</>, <><FaUser />{` ${search.pax}`}</>]}
            count={loading ? null : list.length} label={t("buses")}>
            <aside className="filters">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div className="filter-title">{t("filters")}</div>
                    <button className="clear-btn-sm" onClick={clear}>{t("clearAll")}</button>
                </div>
                <PriceFilterSection label={t("maxPrice")} min={20} max={200} value={maxP} onChange={setMaxP} />
                <div className="filter-section">
                    <div className="filter-section-title">{t("busType")}</div>
                    {["Express", "Deluxe", "Premium", "Sleeper", "Tourist"].map(tp => <label key={tp} className="filter-option"><input type="checkbox" checked={busTypes.includes(tp)} onChange={() => toggleBT(tp)} /> {tp}</label>)}
                </div>
                <div className="filter-section">
                    <div className="filter-section-title">{t("operator")}</div>
                    {allOps.map(o => <label key={o} className="filter-option"><input type="checkbox" checked={operators.includes(o)} onChange={() => toggleOp(o)} /> {o}</label>)}
                </div>
            </aside>
            <div>
                <div className="sort-bar">
                    <span className="sort-label">{loading ? "…" : `${list.length} ${t("buses")} found`}</span>
                    <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="recommended">{t("recommended")}</option>
                        <option value="price_asc">{t("priceLowHigh")}</option>
                        <option value="price_desc">{t("priceHighLow")}</option>
                        <option value="dep">{t("departure")}</option>
                    </select>
                </div>
                {loading ? <SkeletonList count={4} height={140} /> : list.length === 0 ? <NoResults label={`No ${t("buses")} found`} tip="Try: Penang→KL, KL→Singapore, KL→Johor Bahru, Penang→Singapore" /> : (
                    <div className="result-list">
                        {list.map(b => (
                            <div key={b.id} className="result-card">
                                <div className="rc-thumb" style={{ background: "linear-gradient(135deg,#fef9c3,#fde68a)" }}>
                                    <img src={b.thumb} />
                                    <span className="rc-badge-tl">{b.dep} → {b.arr}</span>
                                    <span className="rc-badge-bl">{b.type}</span>
                                </div>
                                <div className="rc-info">
                                    <div>
                                        <div className="rc-name">{b.from} → {b.to}</div>
                                        <div className="rc-sub"><FaBus /> {b.operator} · <FaRegClock /> {b.dur} · <FaChair /> {b.seats} seats</div>
                                        <div className="rc-chips">{b.amenities.map(a => <span key={a} className="chip">{a}</span>)}</div>
                                    </div>
                                    <div className="rc-meta">
                                        <span className="rating-pill">{b.rating}</span>
                                        <span className="rc-reviews">{b.reviews} reviews</span>
                                    </div>
                                </div>
                                <div className="rc-price-col">
                                    <div>
                                        <div className="price-label">Per seat</div>
                                        <div className="price-orig"><CPrice myr={b.originalPrice} /></div>
                                        <div className="price-main"><CPrice myr={b.price} /></div>
                                        <div className="price-unit">/ person</div>
                                        <span className="price-disc">-{disc(b.price, b.originalPrice)}% OFF</span>
                                    </div>
                                    <button className="book-btn" onClick={() => onSelectItem && onSelectItem(b)}>{t("bookSeat")}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ResultsShell>
    );
}

export default BusResults
