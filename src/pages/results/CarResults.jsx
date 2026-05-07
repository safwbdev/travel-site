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
import { CAR_DB } from '../../data/cars.js';
import { FaBuilding, FaCar, FaFilter, FaGear, FaLocationDot, FaRegCalendarDays, FaSuitcaseRolling, FaUser } from 'react-icons/fa6';
import CarLogo from '../../components/ui/CarLogo.jsx';



function CarResults({ search, onBack, onNewSearch, onSelectItem }) {
    const [sort, setSort] = useState("recommended");
    const [maxP, setMaxP] = useState(600);
    const [types, setTypes] = useState([]);
    const [fcOnly, setFc] = useState(false);
    const [loading, setLoading] = useState(true);
    const t = useT();
    useEffect(() => { setLoading(true); const t2 = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t2); }, [search]);
    const rentalDays = nights(search.pickDate, search.retDate);
    const base = useMemo(() => {
        if (search.carType === "Any") return CAR_DB;
        return CAR_DB.filter(c => c.type === search.carType);
    }, [search.carType]);
    const list = useMemo(() => {
        let r = [...base];
        if (types.length) r = r.filter(c => types.includes(c.type));
        if (fcOnly) r = r.filter(c => c.freeCancel);
        r = r.filter(c => c.price <= maxP);
        if (sort === "price_asc") r.sort((a, b) => a.price - b.price);
        if (sort === "price_desc") r.sort((a, b) => b.price - a.price);
        if (sort === "rating") r.sort((a, b) => b.rating - a.rating);
        return r;
    }, [base, types, fcOnly, maxP, sort]);
    const toggleT = t => setTypes(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);
    const clear = () => { setTypes([]); setFc(false); setMaxP(600); setSort("recommended"); };
    return (
        <ResultsShell search={search} onBack={onBack} onNewSearch={onNewSearch}
            breadcrumb={[t("carRental"), search.pickup]}
            summaryChips={[<><FaLocationDot />{` ${search.pickup}`}</>, <><FaRegCalendarDays />{` ${fmtD(search.pickDate)} — ${fmtD(search.retDate)}`}</>, <><FaRegCalendarDays />{` ${rentalDays} Day${rentalDays !== 1 ? "s" : ""}`}</>, <><FaCar />{` ${search.carType}`}</>]}
            count={loading ? null : list.length} label={t("carRental")}>
            <aside className="filters">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div className="filter-title">{<><FaFilter /> {t("filters")}</>}</div>
                    <button className="clear-btn-sm" onClick={clear}>{t("clearAll")}</button>
                </div>
                <PriceFilterSection label={t("maxPriceDay")} min={50} max={600} value={maxP} onChange={setMaxP} />
                <div className="filter-section">
                    <div className="filter-section-title">{t("carTypeFilter")}</div>
                    {["Economy", "Sedan", "SUV", "MPV", "Luxury"].map(tp => <label key={tp} className="filter-option"><input type="checkbox" checked={types.includes(tp)} onChange={() => toggleT(tp)} /> {tp} ({CAR_DB.filter(c => c.type === tp).length})</label>)}
                </div>
                <div className="filter-section">
                    <div className="filter-section-title">{t("policy")}</div>
                    <label className="filter-option"><input type="checkbox" checked={fcOnly} onChange={e => setFc(e.target.checked)} /> {t("freeCancelOnly")}</label>
                </div>
            </aside>
            <div>
                <div className="sort-bar">
                    <span className="sort-label">{loading ? "…" : `${list.length} ${t("carRental")} available`}</span>
                    <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="recommended">{t("recommended")}</option>
                        <option value="price_asc">{t("priceLowHigh")}</option>
                        <option value="price_desc">{t("priceHighLow")}</option>
                        <option value="rating">{t("rating")}</option>
                    </select>
                </div>
                {loading ? <SkeletonList /> : list.length === 0 ? <NoResults label="No vehicles found" /> : (
                    <div className="result-list">
                        {list.map(c => (
                            <div key={c.id} className="result-card">
                                <div className="rc-thumb">
                                    <span><CarLogo id={c.name} /></span>
                                    <span className="rc-badge-tl"><FaUser /> {c.seats} seats</span>
                                    <span className="rc-badge-bl">{c.type}</span>
                                </div>
                                <div className="rc-info">
                                    <div>
                                        <div className="rc-name">{c.name}</div>
                                        <div className="rc-sub"><FaBuilding /> {c.provider} · <FaGear /> {c.transmission} · <FaSuitcaseRolling /> {c.bags} bags</div>
                                        <div className="rc-chips">{c.features.map(f => <span key={f} className="chip">{f}</span>)}</div>
                                    </div>
                                    <div className="rc-meta">
                                        <span className="rating-pill">{c.rating}</span>
                                        <span className="rc-reviews">{c.reviews} {t("reviews")}</span>
                                        {c.freeCancel ? <span className="chip chip-green">{t("freeCancel")}</span> : <span className="chip chip-red">{t("nonRefundable")}</span>}
                                    </div>
                                </div>
                                <div className="rc-price-col">
                                    <div>
                                        <div className="price-label">Per day</div>
                                        <div className="price-orig"><CPrice myr={c.originalPrice} /></div>
                                        <div className="price-main"><CPrice myr={c.price} /></div>
                                        <div className="price-unit">/ day</div>
                                        <div style={{ fontSize: ".75rem", color: "var(--muted)", marginTop: 4 }}><CPrice myr={c.price * rentalDays} /> · {rentalDays} day{rentalDays !== 1 ? "s" : ""}</div>
                                        <span className="price-disc">-{disc(c.price, c.originalPrice)}% OFF</span>
                                    </div>
                                    <button className="book-btn" onClick={() => onSelectItem && onSelectItem(c)}>{t("bookCar")}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ResultsShell>
    );
}

export default CarResults
