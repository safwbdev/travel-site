import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useCurrency } from '../../i18n/index.js'
// Utils
import { disc, nights } from '../../utils/formatters.js';
// Components 
import { NavBar, Footer } from '../../components/layouts';
import { CPrice } from '../../components/ui';
// Data 
import { SAMPLE_REVIEWS_SHORT } from '../../data/reviews.js';
import { TRANSFER_DETAILS } from '../../data/transfer.js';
// Constants
import { TRANS_GRADS } from '../../constants/grad.js';
import {
    FaShuttleVan,
    FaUserFriends
} from 'react-icons/fa';
import {
    FaCircleInfo,
    FaClipboardList,
    FaClock,
    FaLocationDot,
    FaPlane,
    FaRegCalendarDays,
    FaRegClock,
    FaSuitcaseRolling,
    FaUserTie
} from 'react-icons/fa6';

function TransferDetailPage({ item, search, onBack, onBackToResults }) {
    const t = useT();
    const detail = TRANSFER_DETAILS[item.id] || DEFAULT_TRANSFER_DETAIL;
    return (
        <>
            <NavBar onBack={onBack} />
            <div className="dp-page">
                <div className="dp-breadcrumb">
                    <button onClick={onBack}>Home</button><span>›</span>
                    <button onClick={onBackToResults}>{t("airportTransfer")}</button><span>›</span>
                    <span>{item.vehicle}</span>
                </div>
                <div className="dp-body">
                    <div>
                        <div style={{ marginBottom: 20 }}>
                            <span className="chip chip-blue" style={{ marginBottom: 8, display: "inline-block" }}>{item.type}</span>
                            <div className="dp-name">{item.vehicle}</div>
                            <div className="dp-sub"><FaShuttleVan /> {item.provider} · ⏱️ ~{item.duration} · 👥 Max {item.maxPax} passengers</div>
                            <div className="dp-meta-row">
                                <span className="rating-pill">{item.rating}</span>
                                <span className="rc-reviews">{item.reviews} reviews</span>
                                <span className="chip chip-green">✓ Instant confirmation</span>
                            </div>
                        </div>
                        <div className="dp-section-title">🚐 Transfer Specifications</div>
                        <div className="dp-specs">
                            {[[<FaUserFriends />, "Capacity", detail.capacity], [<FaSuitcaseRolling />, "Luggage", detail.luggage], [<FaClock />, "Free Wait", detail.wait_time], [<FaLocationDot />, "Tracking", detail.tracking], [<FaUserTie />, "Driver", detail.driver], [<FaRegClock />, "Duration", item.duration]].map(([icon, label, val]) => (
                                <div key={label} className="dp-spec"><div className="dp-spec-icon">{icon}</div><div className="dp-spec-label">{label}</div><div className="dp-spec-val">{val}</div></div>
                            ))}
                        </div>
                        <div className="dp-section-title"><FaCircleInfo /> Inclusions</div>
                        <div className="dp-inclusions">{detail.inclusions.map((inc, i) => <div key={i} className="dp-inclusion"><span style={{ color: "var(--success)" }}>✓</span><span>{inc}</span></div>)}</div>
                        <div className="dp-section-title"><FaShuttleVan /> About {item.provider}</div>
                        <p className="dp-desc">{detail.provider_info}</p>
                        <div className="dp-section-title"><FaClipboardList /> Transfer Policies</div>
                        <div className="dp-policies">{detail.policies.map((p, i) => <div key={i} className="dp-policy"><FaCircleInfo /><span>{p}</span></div>)}</div>
                    </div>
                    <div>
                        <div className="dp-book-card">
                            <div className="dp-bc-title">{t("bookTransfer").replace(" →", "")}</div>
                            <div className="dp-bc-price-block">
                                <div className="dp-bc-orig"><CPrice myr={item.originalPrice} /></div>
                                <div className="dp-bc-price"><CPrice myr={item.price} /></div>
                                <div className="dp-bc-unit">per vehicle · {disc(item.price, item.originalPrice)}% off</div>
                            </div>
                            <div className="dp-bc-info"><FaPlane /> {search?.airport || "Airport"} → <FaLocationDot /> {search?.dest || "Destination"}<br /><FaRegCalendarDays /> {search?.date || "Selected date"} at {search?.time || "14:00"}<br /><FaUserFriends /> {search?.pax || "1-2 Pax"}</div>
                            <div className="dp-bc-divider" />
                            <div className="dp-bc-row"><span className="dp-bc-row-label">{t("bookTransfer").replace(" →", "")}</span><span className="dp-bc-row-val"><CPrice myr={item.price} /></span></div>
                            <div className="dp-bc-row"><span className="dp-bc-row-label">{t("tollFees")}</span><span className="dp-bc-row-val">{t("insuranceIncl")}</span></div>
                            <div className="dp-bc-total"><span className="dp-bc-total-label">{t("total")}</span><span className="dp-bc-total-val"><CPrice myr={item.price} /></span></div>
                            <button className="dp-bc-book">{t("bookTransfer")}</button>
                            <div className="dp-bc-note">{t("freeCancel")}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TransferDetailPage
