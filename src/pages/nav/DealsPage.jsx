import { useState, useEffect, useMemo } from 'react'
// Lang
import { useT, useCurrency } from '../../i18n/index.js'
// Hooks 
import { useCountdown } from '../../hooks/useCountdown.js';
// Data
import { ALL_DEALS } from '../../data/deals.js';
// Components 
import { NavBar, Footer } from '../../components/layouts';
import { FaStar, FaBoltLightning, FaBullseye, FaLocationDot, FaHourglassHalf, FaFire } from "react-icons/fa6";

function DealsPage({ onBack, onNav, onSearch }) {
    const t = useT();
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Hotel", "Flight", "Cruise", "Car", "Train", "Bus", "Transfer"];
    const { h, m, s } = useCountdown();
    const pad = n => String(n).padStart(2, "0");

    const filtered = filter === "All" ? ALL_DEALS : ALL_DEALS.filter(d => d.type === filter);
    const featured = ALL_DEALS.slice(0, 2);

    const discPct = (p, o) => Math.round((1 - p / o) * 100);

    return (
        <>
            {/* <style>{PAGES_CSS}</style> */}
            <NavBar onBack={onBack} onNav={onNav} activePage="deals" />
            <div className="pg-hero">
                <div className="pg-hero-inner">
                    <span className="pg-hero-tag"><FaFire /> {t("dealsTag")}</span>
                    <h1 className="pg-hero-title">{t("dealsHeroTitle")}</h1>
                    <p className="pg-hero-sub">{t("dealsHeroSub")}</p>
                </div>
            </div>

            <div className="pg-body">
                {/* Flash Sale Countdown */}
                <div className="countdown-bar">
                    <span className="cd-label"><FaBoltLightning /> {t("flashSaleEnds")}</span>
                    <div className="cd-blocks">
                        <div className="cd-block"><div className="cd-num">{pad(h)}</div><div className="cd-unit">{t("countdownHrs")}</div></div>
                        <div className="cd-sep">:</div>
                        <div className="cd-block"><div className="cd-num">{pad(m)}</div><div className="cd-unit">{t("countdownMin")}</div></div>
                        <div className="cd-sep">:</div>
                        <div className="cd-block"><div className="cd-num">{pad(s)}</div><div className="cd-unit">{t("countdownSec")}</div></div>
                    </div>
                </div>

                {/* Featured deals */}
                <div className="pg-section">
                    <div className="pg-section-title"><FaStar />{t("featuredDeals")}</div>
                    {featured.map(d => (
                        <div key={d.id} className="big-deal-card" onClick={() => onSearch({ type: "hotels", dest: "Bali", checkin: "2026-04-20", checkout: "2026-04-25", rooms: "1 Room, 2 Guests" })}>
                            <div className="bdc-visual" style={{ background: d.bg }}>
                                <img src={d.img} alt="" />
                                <span className="bdc-badge">-{discPct(d.price, d.orig)}% OFF</span>
                            </div>
                            <div className="bdc-content">
                                <div>
                                    <div className="bdc-tag">{d.tag} · {d.type}</div>
                                    <div className="bdc-title">{d.title}</div>
                                    <div className="bdc-desc">{d.loc}</div>
                                    <div className="bdc-price-row">
                                        <span className="bdc-orig">MYR {d.orig}</span>
                                        <span className="bdc-price">MYR {d.price}</span>
                                        <span className="bdc-unit">/ {d.type === "Hotel" ? "night" : d.type === "Car" ? "day" : "person"}</span>
                                    </div>
                                    <div className="dt-expires"><FaHourglassHalf /> Expires in {d.expires}</div>
                                </div>
                                <button className="bdc-cta">{t("grabThisDeal")}</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filter bar */}
                <div className="deals-filter-bar">
                    {categories.map(c => (
                        <button key={c} className={`df-btn ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>{c}</button>
                    ))}
                </div>

                {/* All deals grid */}
                <div className="pg-section">
                    <div className="pg-section-title"><FaBullseye /> {t("allDeals")} <span style={{ fontSize: ".85rem", fontWeight: 400, color: "var(--muted)" }}>({filtered.length} {t("dealsCount")})</span></div>
                    <div className="deals-grid-3">
                        {filtered.map(d => (
                            <div key={d.id} className="deal-tile" onClick={() => onSearch({ type: "hotels", dest: "Bali", checkin: "2026-04-20", checkout: "2026-04-25", rooms: "1 Room, 2 Guests" })}>
                                <div className="dt-img" style={{ background: d.bg }}>
                                    <img src={d.img} alt="" />
                                    <span className="dt-badge">-{discPct(d.price, d.orig)}%</span>
                                    <span className="dt-type">{d.type}</span>
                                </div>
                                <div className="dt-body">
                                    <div className="dt-title">{d.title}</div>
                                    <div className="dt-loc"><FaLocationDot /> {d.loc}</div>
                                    <div className="dt-price-row">
                                        <div><div className="dt-orig">MYR {d.orig}</div><div className="dt-price">MYR {d.price}</div></div>
                                        <span className="chip chip-yellow">{d.tag}</span>
                                    </div>
                                    <div className="dt-expires"><FaHourglassHalf /> {d.expires} left</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DealsPage
