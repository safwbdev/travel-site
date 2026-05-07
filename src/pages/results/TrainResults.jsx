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
import { TRAIN_DB } from '../../data/trains.js';
// Icons
import {
    FaRegCalendarDays,
    FaRegClock,
    FaTicket,
    FaTrain,
    FaUser
} from 'react-icons/fa6';

function TrainResults({ search, onBack, onNewSearch, onSelectItem }) {
    const [sort, setSort] = useState("recommended");
    const [maxP, setMaxP] = useState(300);
    const [clsF, setClsF] = useState([]);
    const [trainTypes, setTrainTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    const t = useT();

    useEffect(() => {
        setLoading(true);
        const t2 = setTimeout(() => setLoading(false), 900);
        return () => clearTimeout(t2);
    }, [search]);

    const base = useMemo(() => TRAIN_DB.filter(tr => {
        return matchCity(search.from, t.from) && matchCity(search.to, t.to);
    }), [search.from, search.to]);

    const list = useMemo(() => {
        let r = [...base];
        if (clsF.length) r = r.filter(tr => clsF.includes(tr.class));
        if (trainTypes.length) r = r.filter(tr => trainTypes.includes(tr.type));
        r = r.filter(tr => tr.price <= maxP);
        if (sort === "price_asc") r.sort((a, b) => a.price - b.price);
        if (sort === "price_desc") r.sort((a, b) => b.price - a.price);
        if (sort === "dep") r.sort((a, b) => a.dep.localeCompare(b.dep));
        if (sort === "rating") r.sort((a, b) => b.rating - a.rating);
        return r;
    }, [base, clsF, trainTypes, maxP, sort]);

    const toggleC = c => setClsF(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);

    const toggleT = t => setTrainTypes(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);

    const clear = () => {
        setClsF([]);
        setTrainTypes([]);
        setMaxP(300);
        setSort("recommended");
    };

    return (
        <ResultsShell search={search} onBack={onBack} onNewSearch={onNewSearch}
            breadcrumb={[t("trains"), `${search.from} → ${search.to}`]}
            summaryChips={[<><FaTrain />{` ${search.from} → ${search.to}`}</>, <><FaRegCalendarDays />{` ${fmtD(search.date)}`}</>, <><FaUser />{` ${search.pax}`}</>, <><FaTicket />{` ${search.cls}`}</>]}
            count={loading ? null : list.length} label={t("trains")}>
            <aside className="filters">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div className="filter-title">{t("filters")}</div>
                    <button className="clear-btn-sm" onClick={clear}>{t("clearAll")}</button>
                </div>
                <PriceFilterSection label={t("maxPrice")} min={20} max={300} value={maxP} onChange={setMaxP} />
                <div className="filter-section">
                    <div className="filter-section-title">{t("trainClass2")}</div>
                    {["Silver", "Gold", "Platinum", "First", "Business", "Economy"].map(c => <label key={c} className="filter-option"><input type="checkbox" checked={clsF.includes(c)} onChange={() => toggleC(c)} /> {c}</label>)}
                </div>
                <div className="filter-section">
                    <div className="filter-section-title">{t("trainType")}</div>
                    {["ETS Silver", "ETS Gold", "ETS Platinum", "Express", "Night Mail", "Sprinter"].map(tp => <label key={tp} className="filter-option"><input type="checkbox" checked={trainTypes.includes(tp)} onChange={() => toggleT(tp)} /> {tp}</label>)}
                </div>
            </aside>
            <div>
                <div className="sort-bar">
                    <span className="sort-label">{loading ? "…" : `${list.length} ${t("trains")} found`}</span>
                    <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="recommended">{t("recommended")}</option>
                        <option value="price_asc">{t("priceLowHigh")}</option>
                        <option value="price_desc">{t("priceHighLow")}</option>
                        <option value="dep">{t("departure")}</option>
                        <option value="rating">{t("rating")}</option>
                    </select>
                </div>
                {loading ? <SkeletonList count={4} height={140} /> : list.length === 0 ? <NoResults label={`No ${t("trains")} found`} tip="Try: KL Sentral → JB Sentral, KL Sentral → Penang, KL Sentral → Ipoh, Singapore → Kuala Lumpur" /> : (
                    <div className="result-list">
                        {list.map(tr => (
                            <div key={tr.id} className="result-card">
                                <div className="rc-thumb" style={{ background: "linear-gradient(135deg,#ede9fe,#c4b5fd)" }}>
                                    <img src={tr.thumb} alt={t.operator} />
                                    <span className="rc-badge-tl">{tr.dep} → {tr.arr}</span>
                                    <span className="rc-badge-bl">{tr.class}</span>
                                </div>
                                <div className="rc-info">
                                    <div>
                                        <div className="rc-name">{tr.from} → {tr.to}</div>
                                        <div className="rc-sub"><FaTrain /> {tr.operator} {tr.type} · <FaRegClock /> {tr.dur}</div>
                                        <div className="rc-chips">
                                            <span className={`chip ${tr.seats === "Limited" ? "chip-red" : "chip-green"}`}>{tr.seats === "Limited" ? "⚠️ Limited seats" : "✓ Seats available"}</span>
                                            {tr.amenities.map(a => <span key={a} className="chip">{a}</span>)}
                                        </div>
                                    </div>
                                    <div className="rc-meta">
                                        <span className="rating-pill">{tr.rating}</span>
                                        <span className="rc-reviews">{tr.reviews} {t("reviews")}</span>
                                    </div>
                                </div>
                                <div className="rc-price-col">
                                    <div>
                                        <div className="price-label">Per seat</div>
                                        <div className="price-orig"><CPrice myr={tr.originalPrice} /></div>
                                        <div className="price-main"><CPrice myr={tr.price} /></div>
                                        <div className="price-unit">/ person</div>
                                        <span className="price-disc">-{disc(tr.price, tr.originalPrice)}% OFF</span>
                                    </div>
                                    <button className="book-btn" onClick={() => onSelectItem && onSelectItem(tr)}>{t("bookSeat")}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ResultsShell>
    );
}

export default TrainResults
