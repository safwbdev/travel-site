import { useState, useEffect, useMemo } from 'react'
// Lang
import { useT, useCurrency } from '../../i18n/index.js'
// Utils
import { disc, fmtD } from '../../utils/formatters.js';
import { matchCity } from '../../utils/matchCity.js';
// Components 
import { CPrice, PriceFilterSection, SkeletonList, NoResults, AirlineLogo } from '../../components/ui';
import { ResultsShell } from '../../components/layouts';
// Data 
import { FLIGHT_DB } from '../../data/flights.js';
import { FaArrowTurnDown, FaChair, FaPlane, FaRegCalendarDays, FaSuitcaseRolling, FaUser } from 'react-icons/fa6';


function FlightResults({ search, onBack, onNewSearch, onSelectItem }) {
    const [sort, setSort] = useState("recommended");
    const [maxP, setMaxP] = useState(2000);
    const [airlines, setAirlines] = useState([]);
    const [stops, setStops] = useState([]);
    const [clsF, setClsF] = useState([]);
    const [loading, setLoading] = useState(true);
    const t = useT();
    useEffect(() => { setLoading(true); const t2 = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t2); }, [search]);
    const base = useMemo(() => FLIGHT_DB.filter(f => {
        return matchCity(search.from, f.from) && matchCity(search.to, f.to || "");
    }), [search.from, search.to]);
    const allAirlines = [...new Set(FLIGHT_DB.map(f => f.airline))];
    const list = useMemo(() => {
        let r = [...base];
        if (airlines.length) r = r.filter(f => airlines.includes(f.airline));
        if (stops.length) r = r.filter(f => stops.includes(f.stops));
        if (clsF.length) r = r.filter(f => clsF.includes(f.class));
        r = r.filter(f => f.price <= maxP);
        if (sort === "price_asc") r.sort((a, b) => a.price - b.price);
        if (sort === "price_desc") r.sort((a, b) => b.price - a.price);
        if (sort === "rating") r.sort((a, b) => b.rating - a.rating);
        return r;
    }, [base, airlines, stops, clsF, maxP, sort]);
    const toggleA = a => setAirlines(p => p.includes(a) ? p.filter(x => x !== a) : [...p, a]);
    const toggleS = s => setStops(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);
    const toggleC = c => setClsF(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);
    const clear = () => { setAirlines([]); setStops([]); setClsF([]); setMaxP(2000); setSort("recommended"); };
    const chips = [<><FaPlane />{` ${search.from} → ${search.to}`}</>, <><FaRegCalendarDays />{` ${fmtD(search.dep)}`}</>, <><FaUser />{` ${search.pax}`}</>, <><FaChair />{` ${search.cls}`}</>];
    if (search.ret) chips.splice(2, 0, <><FaArrowTurnDown style={{ transform: 'rotate(90deg)' }} />{` ${fmtD(search.ret)}`}</>);
    return (
        <ResultsShell search={search} onBack={onBack} onNewSearch={onNewSearch}
            breadcrumb={[t("flights"), `${search.from} → ${search.to}`]}
            summaryChips={chips} count={loading ? null : list.length} label={t("flights")}>
            <aside className="filters">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div className="filter-title">{t("filters")}</div>
                    <button className="clear-btn-sm" onClick={clear}>{t("clearAll")}</button>
                </div>
                <PriceFilterSection label={t("maxPrice")} min={50} max={2000} value={maxP} onChange={setMaxP} />
                <div className="filter-section">
                    <div className="filter-section-title">{t("stops")}</div>
                    <label className="filter-option"><input type="checkbox" checked={stops.includes(0)} onChange={() => toggleS(0)} /> {t("nonStop")}</label>
                    <label className="filter-option"><input type="checkbox" checked={stops.includes(1)} onChange={() => toggleS(1)} /> {t("oneStop")}</label>
                </div>
                <div className="filter-section">
                    <div className="filter-section-title">{t("cabinClass")}</div>
                    {["Economy", "Business", "First Class"].map(c => <label key={c} className="filter-option"><input type="checkbox" checked={clsF.includes(c)} onChange={() => toggleC(c)} /> {c}</label>)}
                </div>
                <div className="filter-section">
                    <div className="filter-section-title">{t("flights")}</div>
                    {allAirlines.slice(0, 8).map(a => <label key={a} className="filter-option"><input type="checkbox" checked={airlines.includes(a)} onChange={() => toggleA(a)} /> {a}</label>)}
                </div>
            </aside>
            <div>
                <div className="sort-bar">
                    <span className="sort-label">{loading ? "…" : `${list.length} ${t("flights")} found`}</span>
                    <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="recommended">{t("recommended")}</option>
                        <option value="price_asc">{t("priceLowHigh")}</option>
                        <option value="price_desc">{t("priceHighLow")}</option>
                        <option value="rating">{t("departure")}</option>
                    </select>
                </div>
                {loading ? <SkeletonList count={4} height={120} /> : list.length === 0 ? <NoResults label={`No ${t("flights")} found`} tip="Try: Penang (PEN) → Singapore (SIN), KL → Bangkok, KL → Tokyo, Singapore → Bali" /> : (
                    <div className="result-list">
                        {list.map(f => (
                            <div key={f.id} className="flight-card">
                                <div className="airline-logo">
                                    <AirlineLogo id={f.airline} alt={f.airline} /></div>
                                <div className="flight-route" style={{ flex: 1 }}>
                                    <div>
                                        <div className="flight-time">{f.dep}</div>
                                        <div className="flight-city">{f.from}</div>
                                    </div>
                                    <div className="flight-mid" style={{ flex: 1, padding: "0 16px" }}>
                                        <div className="flight-dur">{f.dur}</div>
                                        <div className="flight-line" />
                                        <div className="flight-stops">{f.stops === 0 ? "Direct" : "1 Stop"}</div>
                                    </div>
                                    <div>
                                        <div className="flight-time">{f.arr}</div>
                                        <div className="flight-city">{f.to}</div>
                                    </div>
                                </div>
                                <div className="flight-tags">
                                    <span className="chip chip-blue">{f.airline}</span>
                                    <span className="chip">{f.class}</span>
                                    <span className="chip"><FaSuitcaseRolling /> {f.baggage}</span>
                                    {f.refundable ? <span className="chip chip-green">✓ Refundable</span> : <span className="chip chip-red">✗ Non-refund</span>}
                                </div>
                                <div className="flight-price-col">
                                    <div className="price-orig"><CPrice myr={f.originalPrice} /></div>
                                    <div className="price-main" style={{ fontSize: "1.3rem" }}><CPrice myr={f.price} /></div>
                                    <div className="price-unit">per person</div>
                                    <span className="price-disc">-{disc(f.price, f.originalPrice)}% OFF</span>
                                    <button className="book-btn" style={{ marginTop: 10 }} onClick={() => onSelectItem && onSelectItem(f)}>{t("selectRoom").replace("Room", "")}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ResultsShell>
    );
}

export default FlightResults
