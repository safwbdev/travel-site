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
import { HOTEL_DB } from '../../data/hotel.js';
import { FaCity, FaRegCalendarDays, FaMoon, FaBed, FaLocationDot, FaUtensils } from "react-icons/fa6";

function HotelResults({ search, onBack, onNewSearch, onSelectItem }) {
    const [sort, setSort] = useState("recommended");
    const [maxP, setMaxP] = useState(1000);
    const [stars, setStars] = useState([]);
    const [amens, setAmens] = useState([]);
    const [bfOnly, setBf] = useState(false);
    const [fcOnly, setFc] = useState(false);
    const [loading, setLoading] = useState(true);

    const t = useT();

    useEffect(() => {
        setLoading(true);
        const t2 = setTimeout(() => setLoading(false), 900);
        return () => clearTimeout(t2);
    }, [search]);

    const n = nights(search.checkin, search.checkout);

    const base = useMemo(() => HOTEL_DB.filter(h => matchCity(search.dest, h.city)), [search.dest]);

    const list = useMemo(() => {
        let r = [...base];
        if (stars.length) r = r.filter(h => stars.includes(h.stars));
        if (amens.length) r = r.filter(h => amens.every(a => h.amenities.includes(a)));
        if (bfOnly) r = r.filter(h => h.breakfast);
        if (fcOnly) r = r.filter(h => h.cancellation === "Free cancellation");
        r = r.filter(h => h.price <= maxP);
        if (sort === "price_asc") r.sort((a, b) => a.price - b.price);
        if (sort === "price_desc") r.sort((a, b) => b.price - a.price);
        if (sort === "rating") r.sort((a, b) => b.rating - a.rating);
        if (sort === "stars") r.sort((a, b) => b.stars - a.stars);
        return r;
    }, [base, stars, amens, bfOnly, fcOnly, maxP, sort]);

    const toggleStar = s => setStars(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);

    const toggleAmen = a => setAmens(p => p.includes(a) ? p.filter(x => x !== a) : [...p, a]);

    const clear = () => { setStars([]); setAmens([]); setBf(false); setFc(false); setMaxP(1000); setSort("recommended"); };

    return (
        <ResultsShell search={search} onBack={onBack} onNewSearch={onNewSearch}
            breadcrumb={[t("hotels"), search.dest]}
            summaryChips={[<><FaCity /> {`${search.dest}`}</>, <><FaRegCalendarDays />{` ${fmtD(search.checkin)} — ${fmtD(search.checkout)}`}</>, <><FaMoon />{` ${n} ${n !== 1 ? t("nightsLabel") : t("nightLabel")}`}</>, <><FaBed />{` ${search.rooms}`}</>]}
            count={loading ? null : list.length} label={t("hotels")}>
            {/* SIDEBAR */}
            <aside className="filters">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div className="filter-title">{t("filters")}</div>
                    <button className="clear-btn-sm" onClick={clear}>{t("clearAll")}</button>
                </div>
                <PriceFilterSection label={t("maxPriceNight")} min={50} max={1000} value={maxP} onChange={setMaxP} />
                <div className="filter-section">
                    <div className="filter-section-title">{t("starRatingFilter")}</div>
                    {[5, 4, 3, 2].map(s => <label key={s} className="filter-option"><input type="checkbox" checked={stars.includes(s)} onChange={() => toggleStar(s)} /> {"★".repeat(s)} ({base.filter(h => h.stars === s).length})</label>)}
                </div>
                <div className="filter-section">
                    <div className="filter-section-title">{t("amenities")}</div>
                    {["Pool", "Spa", "WiFi", "Gym", "Restaurant", "Bar", "Beach"].map(a => <label key={a} className="filter-option"><input type="checkbox" checked={amens.includes(a)} onChange={() => toggleAmen(a)} /> {a}</label>)}
                </div>
                <div className="filter-section">
                    <div className="filter-section-title">{t("mealPolicy")}</div>
                    <label className="filter-option"><input type="checkbox" checked={bfOnly} onChange={e => setBf(e.target.checked)} /> {t("breakfastOnly")}</label>
                    <label className="filter-option"><input type="checkbox" checked={fcOnly} onChange={e => setFc(e.target.checked)} /> {t("freeCancelOnly")}</label>
                </div>
            </aside>
            {/* RESULTS */}
            <div>
                <div className="sort-bar">
                    <span className="sort-label">{loading ? "…" : `${list.length} ${t("hotels")} in ${search.dest}`}</span>
                    <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="recommended">{t("recommended")}</option>
                        <option value="price_asc">{t("priceLowHigh")}</option>
                        <option value="price_desc">{t("priceHighLow")}</option>
                        <option value="rating">{t("guestRating")}</option>
                        <option value="stars">{t("starRating")}</option>
                    </select>
                </div>
                {loading ? <SkeletonList /> : list.length === 0 ? <NoResults label={`No ${t("hotels")} found`} tip="Available: Bali, Singapore, Tokyo, Bangkok, Penang, Phuket, Seoul" /> : (
                    <div className="result-list">
                        {list.map(h => (
                            <div key={h.id} className="result-card">
                                <div className="rc-thumb">
                                    <img src={h.thumb} alt={h.name} />
                                    <span className="rc-badge-tl">{"★".repeat(h.stars)} {h.stars}★</span>
                                    <span className="rc-badge-bl">{h.tag}</span>
                                </div>
                                <div className="rc-info">
                                    <div>
                                        <div className="rc-name">{h.name}</div>
                                        <div className="rc-sub"><FaLocationDot /> {search.dest}</div>
                                        <div className="rc-chips">
                                            {h.breakfast && <span className="chip chip-yellow"><FaUtensils /> {t("breakfastIncl")}</span>}
                                            {h.amenities.slice(0, 5).map(a => <span key={a} className="chip">{a}</span>)}
                                            {h.amenities.length > 5 && <span className="chip">+{h.amenities.length - 5}</span>}
                                        </div>
                                    </div>
                                    <div className="rc-meta">
                                        <span className="rating-pill">{h.rating}</span>
                                        <span className="rc-reviews">{h.reviews.toLocaleString()} {t("reviews")}</span>
                                        <span className={`chip ${h.cancellation === "Free cancellation" ? "chip-green" : "chip-red"}`}>{h.cancellation === "Free cancellation" ? t("freeCancel") : t("nonRefundable")}</span>
                                    </div>
                                </div>
                                <div className="rc-price-col">
                                    <div>
                                        <div className="price-label">{t("nightLabel")}</div>
                                        <div className="price-orig"><CPrice myr={h.originalPrice} /></div>
                                        <div className="price-main"><CPrice myr={h.price} /></div>
                                        <div className="price-unit">{t("perNight")}</div>
                                        <div style={{ fontSize: ".75rem", color: "var(--muted)", marginTop: 4 }}><CPrice myr={h.price * n} /> · {n} {n !== 1 ? t("nightsLabel") : t("nightLabel")}</div>
                                        <span className="price-disc">-{disc(h.price, h.originalPrice)}% OFF</span>
                                    </div>
                                    <button className="book-btn" onClick={() => onSelectItem && onSelectItem(h)}>{t("selectRoom")}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ResultsShell>
    );
}

export default HotelResults
