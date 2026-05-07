import { useState, useEffect, useMemo } from 'react'
// Lanmg 
import { useT, useCurrency } from '../../i18n/index.js'
// Utils
import { disc, nights } from '../../utils/formatters.js';
// Components 
import { NavBar, Footer } from '../../components/layouts';
import { CPrice } from '../../components/ui';
// Data 
import { SAMPLE_REVIEWS_SHORT } from '../../data/reviews.js';
import { TRAIN_DETAILS } from '../../data/trains.js';
// Constants
import { TRAIN_GRADS } from '../../constants/grad.js';
// Icons 
import { FaTicketAlt } from 'react-icons/fa';
import {
    FaAccessibleIcon,
    FaBuilding,
    FaCircleInfo,
    FaClipboardList,
    FaLocationDot,
    FaPlug,
    FaRegCalendarDays,
    FaRegClock,
    FaSignHanging,
    FaTrailer,
    FaTrain,
    FaUser,
    FaUtensils,
    FaWifi
} from 'react-icons/fa6';

function TrainDetailPage({ item, search, onBack, onBackToResults }) {
    const t = useT();
    const detail = TRAIN_DETAILS[item.id] || DEFAULT_TRAIN_DETAIL;
    return (
        <>
            <NavBar onBack={onBack} />
            <div className="dp-page">
                <div className="dp-breadcrumb">
                    <button onClick={onBack}>Home</button><span>›</span>
                    <button onClick={onBackToResults}>{t("trains")}</button><span>›</span>
                    <span>{item.from} → {item.to}</span>
                </div>
                <div className="dp-body">
                    <div>
                        <div style={{ marginBottom: 20 }}>
                            <span className="chip chip-blue" style={{ marginBottom: 8, display: "inline-block" }}>{item.type}</span>
                            <div className="dp-name">{item.from} → {item.to}</div>
                            <div className="dp-sub"><FaTrain /> {item.operator} · Train {detail.trainNo} · Departs {item.dep} · Arrives {item.arr}</div>
                            <div className="dp-meta-row">
                                <span className="rating-pill">{item.rating}</span>
                                <span className="rc-reviews">{item.reviews} reviews</span>
                                <span className={`chip ${item.seats === "Limited" ? "chip-red" : "chip-green"}`}>{item.seats === "Limited" ? "⚠️ Limited seats" : "✓ Seats available"}</span>
                            </div>
                        </div>
                        <div className="dp-section-title"><FaTrain /> Train Specifications</div>
                        <div className="dp-specs">
                            {[[<FaBuilding />, "Operator", detail.operator], [<FaTrain />, "Train No.", detail.trainNo], [<FaTrailer />, "Consist", detail.consist], [<FaUtensils />, "Catering", detail.onboard_catering], [<FaWifi />, "WiFi", detail.wifi], [<FaPlug />, "Power", detail.power]].map(([icon, label, val]) => (
                                <div key={label} className="dp-spec"><div className="dp-spec-icon">{icon}</div><div className="dp-spec-label">{label}</div><div className="dp-spec-val">{val}</div></div>
                            ))}
                        </div>
                        <div className="dp-section-title"><FaLocationDot /> Journey Details</div>
                        <div className="dp-inclusions">
                            <div className="dp-inclusion"><FaTrain /><span><strong>Departure:</strong> {detail.departure_platform}</span></div>
                            <div className="dp-inclusion"><FaRegClock /><span><strong>Duration:</strong> {item.dur}</span></div>
                            <div className="dp-inclusion"><FaAccessibleIcon /><span><strong>Accessibility:</strong> {detail.accessibility}</span></div>
                        </div>
                        <div className="dp-section-title"><FaTrain /> About {item.operator}</div>
                        <p className="dp-desc">{detail.provider_info}</p>
                        <div className="dp-section-title"><FaClipboardList /> Travel Policies</div>
                        <div className="dp-policies">{detail.policies.map((p, i) => <div key={i} className="dp-policy"><FaCircleInfo /><span>{p}</span></div>)}</div>
                    </div>
                    <div>
                        <div className="dp-book-card">
                            <div className="dp-bc-title">{t("bookTicket").replace(" →", "")}</div>
                            <div className="dp-bc-price-block">
                                <div className="dp-bc-orig"><CPrice myr={item.originalPrice} /></div>
                                <div className="dp-bc-price"><CPrice myr={item.price} /></div>
                                <div className="dp-bc-unit">per seat · {disc(item.price, item.originalPrice)}% off</div>
                            </div>
                            <div className="dp-bc-info"><FaSignHanging /> {item.from} → {item.to}<br /><FaRegClock /> {item.dep} – {item.arr} ({item.dur})<br /><FaRegCalendarDays /> {search?.date || "Selected date"}<br /><FaTicketAlt /> Class: {item.class}<br /><FaUser /> {search?.pax || "1 Adult"}</div>
                            <div className="dp-bc-divider" />
                            <div className="dp-bc-row"><span className="dp-bc-row-label">{t("ticketFare")}</span><span className="dp-bc-row-val"><CPrice myr={item.price} /></span></div>
                            <div className="dp-bc-row"><span className="dp-bc-row-label">{t("bookingFee")}</span><span className="dp-bc-row-val"><CPrice myr={1} /></span></div>
                            <div className="dp-bc-total"><span className="dp-bc-total-label">{t("total")}</span><span className="dp-bc-total-val"><CPrice myr={item.price + 1} /></span></div>
                            <button className="dp-bc-book">{t("bookTicket")}</button>
                            <div className="dp-bc-note">{t("freeCancel")}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TrainDetailPage
