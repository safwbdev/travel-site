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
import { CAR_DETAILS } from '../../data/cars.js';
// Constants
import { CAR_GRADS } from '../../constants/grad.js';
// Icons 
import {
    FaBaby,
    FaBuilding,
    FaCar,
    FaCircleInfo,
    FaClipboardList,
    FaComment,
    FaCompass,
    FaDoorClosed,
    FaGasPump,
    FaKey,
    FaLocationDot,
    FaRegCalendarDays,
    FaShield,
    FaSnowflake,
    FaSquareCheck,
    FaSuitcaseRolling,
    FaUser
} from 'react-icons/fa6';

function CarDetailPage({ item, search, onBack, onBackToResults }) {
    const t = useT();
    const detail = CAR_DETAILS[item.id] || DEFAULT_CAR_DETAIL;
    const rentalDays = nights(search?.pickDate || "2026-04-20", search?.retDate || "2026-04-25");
    return (
        <>
            <NavBar onBack={onBack} />
            <div className="dp-page">
                <div className="dp-breadcrumb">
                    <button onClick={onBack}>Home</button><span>›</span>
                    <button onClick={onBackToResults}>{t("carRental")}</button><span>›</span>
                    <span>{item.name}</span>
                </div>
                <div className="dp-body">
                    <div>
                        <div style={{ marginBottom: 20 }}>
                            <span className="chip chip-blue" style={{ marginBottom: 8, display: "inline-block" }}>{item.type}</span>
                            <div className="dp-name">{item.name}</div>
                            <div className="dp-sub"><FaBuilding /> {item.provider} · {detail.year} model · {detail.colour}</div>
                            <div className="dp-meta-row">
                                <span className="rating-pill">{item.rating}</span>
                                <span className="rc-reviews">{item.reviews} reviews</span>
                                <span className="chip"><FaUser /> {item.seats} seats</span>
                                <span className="chip"><FaSuitcaseRolling /> {item.bags} bags</span>
                                {item.freeCancel ? <span className="chip chip-green">✓ Free cancel</span> : <span className="chip chip-red">✗ Non-refundable</span>}
                            </div>
                        </div>
                        <div className="dp-section-title"><FaCar /> Vehicle Specifications</div>
                        <div className="dp-specs">
                            {[[<FaGasPump />, "Fuel", detail.fuel], [<FaDoorClosed />, "Doors", `${detail.doors} doors`], [<FaSnowflake />, "A/C", detail.ac ? "Yes" : "No"], [<FaCompass />, "GPS", detail.gps ? "Included" : "Not included"], [<FaBaby />, "Child Seat", detail.childSeat ? "Available" : "Not included"], [<FaShield />, "Insurance", detail.insurance]].map(([icon, label, val]) => (
                                <div key={label} className="dp-spec"><div className="dp-spec-icon">{icon}</div><div className="dp-spec-label">{label}</div><div className="dp-spec-val">{val}</div></div>
                            ))}
                        </div>
                        <div className="dp-section-title"><FaSquareCheck /> What's Included</div>
                        <div className="dp-inclusions">{detail.inclusions.map((inc, i) => <div key={i} className="dp-inclusion"><span style={{ color: "var(--success)" }}>✓</span><span>{inc}</span></div>)}</div>
                        <div className="dp-section-title"><FaCar /> About {item.provider}</div>
                        <p className="dp-desc">{detail.provider_info}</p>
                        <div className="dp-section-title"><FaClipboardList /> Rental Policies</div>
                        <div className="dp-policies">{detail.policies.map((p, i) => <div key={i} className="dp-policy"><span><FaCircleInfo /></span><span>{p}</span></div>)}</div>
                        <div className="dp-section-title"><FaComment /> Customer Reviews</div>
                        <div className="hd-reviews-grid" style={{ marginBottom: 20 }}>
                            {SAMPLE_REVIEWS_SHORT.map((r, i) => (
                                <div key={i} className="hd-review">
                                    <div className="hd-review-header"><span className="hd-reviewer">{r.country} {r.name}</span><span className="hd-review-stars">{"★".repeat(r.stars)}</span></div>
                                    <div className="hd-review-date">{r.date}</div>
                                    <div className="hd-review-text">"{r.text}"</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="dp-book-card">
                            <div className="dp-bc-title">{t("bookCar").replace(" →", "")}</div>
                            <div className="dp-bc-price-block">
                                <div className="dp-bc-orig"><CPrice myr={item.originalPrice} />/day</div>
                                <div className="dp-bc-price"><CPrice myr={item.price} /></div>
                                <div className="dp-bc-unit">per day · {disc(item.price, item.originalPrice)}% off</div>
                            </div>
                            <div className="dp-bc-info"><FaLocationDot /> {search?.pickup || "Pick-up location"}<br /><FaRegCalendarDays /> {rentalDays} day{rentalDays !== 1 ? "s" : ""} rental<br /><FaKey /> Deposit: {detail.deposit}</div>
                            <div className="dp-bc-divider" />
                            <div className="dp-bc-row"><span className="dp-bc-row-label"><CPrice myr={item.price} /> × {rentalDays} {t("rentalDays")}</span><span className="dp-bc-row-val"><CPrice myr={item.price * rentalDays} /></span></div>
                            <div className="dp-bc-row"><span className="dp-bc-row-label">Insurance</span><span className="dp-bc-row-val">{t("insuranceIncl")}</span></div>
                            <div className="dp-bc-total"><span className="dp-bc-total-label">{t("total")}</span><span className="dp-bc-total-val"><CPrice myr={item.price * rentalDays} /></span></div>
                            <button className="dp-bc-book">{t("bookCar")}</button>
                            {item.freeCancel && <div className="dp-bc-note">{t("freeCancel")}</div>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CarDetailPage
