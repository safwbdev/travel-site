import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { NavBar, Footer } from '../../components/layouts';
// Data 
import { HISTORY } from '../../data/trips.js';
import { FaStar, FaMedal, FaGem, FaVanShuttle, FaShip, FaTrophy, FaGifts, FaRectangleList, FaGift, FaPlane, FaCarSide, FaUtensils, FaHotel, FaRegGem } from "react-icons/fa6";

const REWARD_ITEMS = [
    { icon: <FaPlane />, title: "Flight Discount Voucher", desc: "MYR 50 off any flight booking", pts: "1,500 pts", available: true },
    { icon: <FaHotel />, title: "Hotel Night Credit", desc: "1 free night at 3★+ hotels", pts: "3,000 pts", available: true },
    { icon: <FaCarSide />, title: "Free Car Rental Day", desc: "1 complimentary rental day", pts: "2,000 pts", available: true },
    { icon: <FaGift />, title: "Mystery Deal Box", desc: "Random deal worth MYR 100–300", pts: "2,500 pts", available: true },
    { icon: <FaShip />, title: "Cruise Cabin Upgrade", desc: "Free upgrade to Ocean View cabin", pts: "4,000 pts", available: false },
    { icon: <FaStar />, title: "VIP Lounge Access", desc: "Airport lounge access (1 visit)", pts: "1,200 pts", available: true },
    { icon: <FaUtensils />, title: "Restaurant Voucher", desc: "MYR 80 dining credit at partner hotels", pts: "1,000 pts", available: true },
    { icon: <FaVanShuttle />, title: "Free Airport Transfer", desc: "Complimentary one-way transfer", pts: "800 pts", available: true },
    { icon: <FaRegGem />, title: "Platinum Status Fast-Track", desc: "Upgrade to Platinum tier instantly", pts: "8,000 pts", available: false },
];

function RewardsPage({ onBack, onNav }) {
    const t = useT();
    const totalPts = 4250;
    const nextTier = 6000;
    const pct = Math.round((totalPts / nextTier) * 100);

    return (
        <>
            <NavBar onBack={onBack} onNav={onNav} activePage="rewards" />
            <div className="pg-hero">
                <div className="pg-hero-inner">
                    <span className="pg-hero-tag"><FaStar /> {t("rewardsTag")}</span>
                    <h1 className="pg-hero-title">{t("rewardsHeroTitle")}</h1>
                    <p className="pg-hero-sub">{t("rewardsHeroSub")}</p>
                </div>
            </div>

            <div className="pg-body">
                {/* Loyalty card */}
                <div className="pg-section">
                    <div className="rewards-hero-card">
                        <div className="rhc-watermark">⭐</div>
                        <div className="rhc-tier"><FaMedal style={{ color: "#ef9d3a" }} /> {t("goldMember")}</div>
                        <div className="rhc-name">Steve's Account</div>
                        <div className="rhc-points">{totalPts.toLocaleString()}</div>
                        <div className="rhc-pts-label">{t("VoyaqoMiles")}</div>
                        <div className="rhc-progress-wrap">
                            <div className="rhc-progress-label">
                                <span>Gold</span><span>{nextTier.toLocaleString()} pts → Platinum</span>
                            </div>
                            <div className="rhc-progress"><div className="rhc-bar" style={{ width: `${pct}%` }} /></div>
                        </div>
                        <div className="rhc-next">{(nextTier - totalPts).toLocaleString()} {t("milesProgressLabel")}</div>
                    </div>
                </div>

                {/* Tier benefits */}
                <div className="pg-section">
                    <div className="pg-section-title"><FaTrophy /> {t("membershipTiers")}</div>
                    <div className="tier-grid">
                        {[
                            { icon: <FaMedal style={{ color: "#c8b8da" }} />, name: "Silver", pts: "0 – 1,999 pts", perks: "2% cashback · Priority email support" },
                            { icon: <FaMedal style={{ color: "#ef9d3a" }} />, name: "Gold", pts: "2,000 – 5,999 pts", perks: "5% cashback · Lounge access · Free seat select", active: true },
                            { icon: <FaMedal style={{ color: "#00a8e8" }} />, name: "Platinum", pts: "6,000 – 14,999 pts", perks: "8% cashback · Fast-track check-in · Dedicated concierge" },
                            { icon: <FaGem style={{ color: "#98daf3" }} />, name: "Diamond", pts: "15,000+ pts", perks: "10% cashback · Unlimited lounge · Private transfers" },
                        ].map(tier => (
                            <div key={tier.name} className={`tier-card ${tier.active ? "active-tier" : ""}`}>
                                {tier.active && <span className="tier-badge">{t("currentTier")}</span>}
                                <div className="tier-icon">{tier.icon}</div>
                                <div className="tier-name">{tier.name}</div>
                                <div className="tier-pts" style={{ marginBottom: 8 }}>{tier.pts}</div>
                                <div style={{ fontSize: ".75rem", color: "var(--muted)", lineHeight: 1.5 }}>{tier.perks}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Redeem rewards */}
                <div className="pg-section">
                    <div className="pg-section-title">{<><FaGifts /> {t("redeemMiles")}</>}</div>
                    <div className="pg-section-sub">{t("youHave")} <strong style={{ color: "var(--brand)" }}>4,250 {t("VoyaqoMiles")}</strong> {t("milesAvailable")}</div>
                    <div className="rewards-list">
                        {REWARD_ITEMS.map((r, i) => (
                            <div key={i} className="reward-item" style={{ opacity: r.available ? 1 : .6 }}>
                                <div className="ri-icon">{r.icon}</div>
                                <div className="ri-title">{r.title}</div>
                                <div className="ri-desc">{r.desc}</div>
                                <div className="ri-pts">{r.pts}</div>
                                <button className="ri-btn" disabled={!r.available}>{r.available ? t("redeemNow") : t("insufficientMiles")}</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Points history */}
                <div className="pg-section">
                    <div className="pg-section-title">{<><FaRectangleList /> {t("milesHistory")}</>}</div>
                    <div style={{ background: "#fff", borderRadius: 14, boxShadow: "var(--shadow)", overflow: "hidden" }}>
                        <table className="history-table">
                            <thead><tr><th>{t("dateLabel")}</th><th>{t("descLabel")}</th><th style={{ textAlign: "right" }}>{t("VoyaqoMiles")}</th></tr></thead>
                            <tbody>
                                {HISTORY.map((h, i) => (
                                    <tr key={i}>
                                        <td style={{ color: "var(--muted)", whiteSpace: "nowrap" }}>{h.date}</td>
                                        <td>{h.desc}</td>
                                        <td style={{ textAlign: "right" }} className={h.type === "earn" ? "pts-earned" : "pts-redeemed"}>{h.pts}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RewardsPage
