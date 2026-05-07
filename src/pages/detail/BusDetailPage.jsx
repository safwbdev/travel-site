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
import { BUS_DETAILS, DEFAULT_BUS_DETAIL } from '../../data/buses.js';
// Constants
import { BUS_GRADS } from '../../constants/grad.js';
// Icons 
import {
    FaBowlFood,
    FaBuilding,
    FaBus,
    FaBusSimple,
    FaChair,
    FaCircleInfo,
    FaClipboardList,
    FaLocationDot,
    FaRegCalendarDays,
    FaRegClock,
    FaSignHanging,
    FaUsb,
    FaUser,
    FaWifi
} from 'react-icons/fa6';

function BusDetailPage({ item, search, onBack, onBackToResults }) {
    const t = useT();
    const detail = BUS_DETAILS[item.id] || DEFAULT_BUS_DETAIL;
    return (
        <>
            <NavBar onBack={onBack} />
            <div className="dp-page">
                <div className="dp-breadcrumb">
                    <button onClick={onBack}>Home</button><span>›</span>
                    <button onClick={onBackToResults}>{t("buses")}</button><span>›</span>
                    <span>{item.from} → {item.to}</span>
                </div>
                <div className="dp-body">
                    <div>
                        <div style={{ marginBottom: 20 }}>
                            <span className="chip chip-blue" style={{ marginBottom: 8, display: "inline-block" }}>{item.type}</span>
                            <div className="dp-name">{item.from} → {item.to}</div>
                            <div className="dp-sub"><FaBusSimple /> {item.operator} · Departs {item.dep} · Arrives {item.arr} · {item.dur}</div>
                            <div className="dp-meta-row">
                                <span className="rating-pill">{item.rating}</span>
                                <span className="rc-reviews">{item.reviews} reviews</span>
                                <span className="chip"><FaChair /> {item.seats} seats</span>
                            </div>
                        </div>
                        <div className="dp-section-title"><FaBusSimple /> Coach Specifications</div>
                        <div className="dp-specs">
                            {[[<FaBus />, "Coach", detail.coach], [<FaRegCalendarDays />, "Year", detail.year.toString()], [<FaWifi />, "WiFi", detail.wifi ? "Yes" : "No"], [<FaUsb />, "USB Charging", detail.usb ? "Yes" : "No"], [<FaChair />, "Recliner", detail.recliner ? "Yes" : "No"], [<FaBowlFood />, "Meal", detail.meal ? "Included" : "Not included"]].map(([icon, label, val]) => (
                                <div key={label} className="dp-spec"><div className="dp-spec-icon">{icon}</div><div className="dp-spec-label">{label}</div><div className="dp-spec-val">{val}</div></div>
                            ))}
                        </div>
                        <div className="dp-section-title"><FaLocationDot /> Journey Details</div>
                        <div className="dp-inclusions">
                            <div className="dp-inclusion"><FaSignHanging /><span><strong>Boarding:</strong> {detail.boarding}</span></div>
                            <div className="dp-inclusion"><FaSignHanging /><span><strong>Alighting:</strong> {detail.alighting}</span></div>
                            <div className="dp-inclusion"><FaRegClock /><span><strong>Duration:</strong> {item.dur}</span></div>
                        </div>
                        <div className="dp-section-title"><FaBuilding /> About {item.operator}</div>
                        <p className="dp-desc">{detail.provider_info}</p>
                        <div className="dp-section-title"><FaClipboardList /> Travel Policies</div>
                        <div className="dp-policies">{detail.policies.map((p, i) => <div key={i} className="dp-policy"><FaCircleInfo /><span>{p}</span></div>)}</div>
                    </div>
                    <div>
                        <div className="dp-book-card">
                            <div className="dp-bc-title">{t("bookSeat").replace(" →", "")}</div>
                            <div className="dp-bc-price-block">
                                <div className="dp-bc-orig"><CPrice myr={item.originalPrice} /></div>
                                <div className="dp-bc-price"><CPrice myr={item.price} /></div>
                                <div className="dp-bc-unit">per seat · {disc(item.price, item.originalPrice)}% off</div>
                            </div>
                            <div className="dp-bc-info"><FaSignHanging /> {item.from} → {item.to}<br /><FaRegClock /> {item.dep} – {item.arr} ({item.dur})<br /><FaRegCalendarDays /> {search?.date || "Selected date"}<br /><FaUser /> {search?.pax || "1 Passenger"}</div>
                            <div className="dp-bc-divider" />
                            <div className="dp-bc-row"><span className="dp-bc-row-label">{t("seatFare")}</span><span className="dp-bc-row-val"><CPrice myr={item.price} /></span></div>
                            <div className="dp-bc-row"><span className="dp-bc-row-label">{t("bookingFee")}</span><span className="dp-bc-row-val"><CPrice myr={2} /></span></div>
                            <div className="dp-bc-total"><span className="dp-bc-total-label">{t("total")}</span><span className="dp-bc-total-val"><CPrice myr={item.price + 2} /></span></div>
                            <button className="dp-bc-book">{t("bookSeat")}</button>
                            <div className="dp-bc-note">{t("freeCancel")}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BusDetailPage
