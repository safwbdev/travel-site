import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useCurrency } from '../../i18n/index.js'
// Utils
import { disc, nights } from '../../utils/formatters.js';
// Components 
import { NavBar, Footer } from '../../components/layouts';
import { CPrice, AirlineLogo } from '../../components/ui';
// Data 
import { SAMPLE_REVIEWS_SHORT } from '../../data/reviews.js';
import { FLIGHT_DETAILS } from '../../data/flights.js';
// Constants
import { FLIGHT_GRADS } from '../../constants/grad.js';
// Icons 
import { FaTicketAlt } from 'react-icons/fa';
import {
    FaBuilding,
    FaChair,
    FaClapperboard,
    FaDoorClosed,
    FaLocationDot,
    FaPlane,
    FaPlaneDeparture,
    FaSuitcaseRolling,
    FaUser,
    FaUtensils,
    FaWifi
} from 'react-icons/fa6';

function FlightDetailPage({ item, search, onBack, onBackToResults }) {
    const t = useT();
    const detail = FLIGHT_DETAILS[item.id] || DEFAULT_FLIGHT_DETAIL;
    return (
        <>
            <NavBar onBack={onBack} />
            <div className="dp-page">
                <div className="dp-breadcrumb">
                    <button onClick={onBack}>Home</button><span>›</span>
                    <button onClick={onBackToResults}>{t("flights")}</button><span>›</span>
                    <span>{item.from} → {item.to}</span>
                </div>
                <div className="dp-body">
                    <div>
                        <div style={{ marginBottom: 20 }}>
                            <span className="chip chip-blue" style={{ marginBottom: 8, display: "inline-block" }}>{item.airline}</span>
                            <div className="dp-name">{item.from} → {item.to}</div>
                            <div className="dp-sub"><FaPlaneDeparture /> Departs {item.dep} · Arrives {item.arr} · {item.dur} · {item.stops === 0 ? "Non-stop" : "1 stop"}</div>
                            <div className="dp-meta-row">
                                <span className="chip">{item.class}</span>
                                <span className="chip"><FaSuitcaseRolling /> {item.baggage}</span>
                                {item.refundable ? <span className="chip chip-green">✓ Refundable</span> : <span className="chip chip-red">✗ Non-refundable</span>}
                            </div>
                        </div>
                        <div className="dp-section-title"><FaPlane /> About This Flight</div>
                        <p className="dp-desc">{detail.airline_info}</p>
                        <div className="dp-section-title"><FaPlane /> Flight Specifications</div>
                        <div className="dp-specs">
                            {[[<FaPlaneDeparture />, "Aircraft", detail.aircraft], [<FaBuilding />, "Terminal", detail.terminal], [<FaDoorClosed />, "Gate", detail.gate], [<FaUtensils />, "Meals", detail.meals], [<FaClapperboard />, "Entertainment", detail.entertainment], [<FaWifi />, "WiFi", detail.wifi]].map(([icon, label, val]) => (
                                <div key={label} className="dp-spec"><div className="dp-spec-icon">{icon}</div><div className="dp-spec-label">{label}</div><div className="dp-spec-val">{val}</div></div>
                            ))}
                        </div>
                        <div className="dp-section-title"><FaTicketAlt /> Fare Conditions</div>
                        <p className="dp-desc">{detail.fare_conditions}</p>
                        <div className="dp-section-title"><FaChair /> Seat Information</div>
                        <p className="dp-desc">{detail.seat_map_hint}</p>
                    </div>
                    <div>
                        <div className="dp-book-card">
                            <div className="dp-bc-title">{t("bookFlight").replace(" →", "")}</div>
                            <div className="dp-bc-price-block">
                                <div className="dp-bc-orig"><CPrice myr={item.originalPrice} /></div>
                                <div className="dp-bc-price"><CPrice myr={item.price} /></div>
                                <div className="dp-bc-unit">per person · {disc(item.price, item.originalPrice)}% off</div>
                            </div>
                            <div className="dp-bc-info"><FaLocationDot /> {search?.dep ? new Date(search.dep).toLocaleDateString("en-MY", { day: "numeric", month: "short", year: "numeric" }) : "Selected date"}<br /><FaUser /> {search?.pax || "1 Adult"}</div>
                            <div className="dp-bc-divider" />
                            <div className="dp-bc-row"><span className="dp-bc-row-label">{t("baseFare")}</span><span className="dp-bc-row-val"><CPrice myr={item.price} /></span></div>
                            <div className="dp-bc-row"><span className="dp-bc-row-label">{t("taxesFees")}</span><span className="dp-bc-row-val"><CPrice myr={Math.round(item.price * 0.18)} /></span></div>
                            <div className="dp-bc-total"><span className="dp-bc-total-label">{t("total")}</span><span className="dp-bc-total-val"><CPrice myr={Math.round(item.price * 1.18)} /></span></div>
                            <button className="dp-bc-book">{t("bookFlight")}</button>
                            {item.refundable && <div className="dp-bc-note">{t("freeCancel")}</div>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FlightDetailPage
