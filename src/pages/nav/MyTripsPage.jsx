import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { NavBar, Footer } from '../../components/layouts';
// Data 
import { DUMMY_TRIPS } from '../../data/trips.js';
import { FaRegCalendarDays, FaPlane, FaGlobe, FaRegStar, FaCheck, FaXmark } from "react-icons/fa6";
import MyTripsIcon from '../../components/ui/MyTripsIcon.jsx';

function MyTripsPage({ onBack, onNav }) {
    const t = useT();
    const [tab, setTab] = useState("upcoming");
    const trips = DUMMY_TRIPS[tab] || [];

    return (
        <>
            <NavBar onBack={onBack} onNav={onNav} activePage="mytrips" />
            <div className="pg-hero">
                <div className="pg-hero-inner">
                    <span className="pg-hero-tag"><FaRegCalendarDays /> {t("myTripsTag")}</span>
                    <h1 className="pg-hero-title">{t("myTripsHeroTitle")}</h1>
                    <p className="pg-hero-sub">{t("myTripsHeroSub")}</p>
                </div>
            </div>

            <div className="pg-body">
                {/* Stats row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 32 }}>
                    {[
                        { icon: <FaPlane />, labelKey: "totalTrips", value: "8", subKey: "allTime" },
                        { icon: <FaGlobe />, labelKey: "countries", value: "6", subKey: "visited" },
                        { icon: <FaRegStar />, labelKey: "rewardPoints", value: "4,250", sub: "Voyaqo Miles" },
                    ].map(s => (
                        <div key={s.labelKey} style={{ background: "#fff", borderRadius: 14, boxShadow: "var(--shadow)", padding: "20px 24px", textAlign: "center" }}>
                            <div style={{ fontSize: "2rem", marginBottom: 8 }}>{s.icon}</div>
                            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--brand)" }}>{s.value}</div>
                            <div style={{ fontWeight: 700, fontSize: ".875rem", color: "var(--text)", marginBottom: 2 }}>{t(s.labelKey)}</div>
                            <div style={{ fontSize: ".75rem", color: "var(--muted)" }}>{s.subKey ? t(s.subKey) : s.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="mt-tabs">
                    {[["upcoming", t("upcoming"), <FaRegCalendarDays />], ["completed", t("completed"), <FaCheck />], ["cancelled", t("cancelled"), <FaXmark />]].map(([id, label, icon]) => (
                        <button key={id} className={`mt-tab ${tab === id ? "active" : ""}`} onClick={() => setTab(id)}>{label} {icon}</button>
                    ))}
                </div>

                {trips.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">{tab === "upcoming" ? <FaRegCalendarDays /> : tab === "completed" ? <FaCheck /> : <FaXmark />}</div>
                        <div className="empty-title">No {tab} trips</div>
                        <div className="empty-sub">
                            {tab === "upcoming" ? t("noUpcomingTrips") : `${t("noTripsFound")} ${tab} ${t("bookingsFound")}`}
                        </div>
                        {tab === "upcoming" && <button className="empty-cta" onClick={onBack}>{t("startExploring")}</button>}
                    </div>
                ) : (
                    <div>
                        {trips.map(trip => (
                            <div key={trip.id} className="trip-card">
                                <div className="tc-icon" style={{ background: trip.iconBg, color: "fff" }}><MyTripsIcon type={trip.type} /></div>
                                <div className="tc-info">
                                    <div className="tc-type">{trip.type}</div>
                                    <div className="tc-title">{trip.title}</div>
                                    <div className="tc-details">{trip.details}</div>
                                    <div className="tc-actions">
                                        {trip.status === "upcoming" && <>
                                            <button className="tc-btn primary">{t("viewETicket")}</button>
                                            <button className="tc-btn">{t("manageBooking")}</button>
                                            <button className="tc-btn">{t("addToWallet")}</button>
                                        </>}
                                        {trip.status === "completed" && <>
                                            <button className="tc-btn primary">{t("viewDetails")}</button>
                                            <button className="tc-btn">{t("rebook")}</button>
                                            <button className="tc-btn">{t("writeReview")}</button>
                                        </>}
                                        {trip.status === "cancelled" && <>
                                            <button className="tc-btn primary">{t("viewRefund")}</button>
                                            <button className="tc-btn">{t("rebook")}</button>
                                        </>}
                                    </div>
                                </div>
                                <div className="tc-status">
                                    <span className={`status-pill status-${trip.status}`}>
                                        {trip.status === "upcoming" ? <FaRegCalendarDays /> : trip.status === "completed" ? <FaCheck /> : <FaXmark />} {trip.status === "upcoming" ? t("statusUpcoming") : trip.status === "completed" ? t("statusCompleted") : t("statusCancelled")}
                                    </span>
                                    <div style={{ fontWeight: 800, fontSize: "1rem", color: "var(--brand)" }}>{trip.price}</div>
                                    <div className="tc-ref">Ref: {trip.id}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default MyTripsPage
