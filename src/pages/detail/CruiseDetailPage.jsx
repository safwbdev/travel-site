import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useCurrency } from '../../i18n/index.js'
// Utils
import { disc, nights } from '../../utils/formatters.js';
// Components 
import { NavBar, Footer } from '../../components/layouts';
import { DetailGallery, CPrice } from '../../components/ui';
// Data 
import { SAMPLE_REVIEWS_SHORT } from '../../data/reviews.js';
import { CRUISE_DETAILS, DEFAULT_CRUISE_DETAIL } from '../../data/cruises.js';
// Constants
import { CRUISE_GRADS } from '../../constants/grad.js';
// Icons 
import {
    FaAnchor,
    FaBed,
    FaBullseye,
    FaBurst,
    FaCircleInfo,
    FaClipboardList,
    FaComment,
    FaMoon,
    FaRegCalendar,
    FaRegCalendarDays,
    FaRulerCombined,
    FaShip,
    FaStar,
    FaUsers,
    FaUtensils
} from 'react-icons/fa6';
import {
    FaBuilding,
    FaGlobeAsia,
    FaUserFriends
} from 'react-icons/fa';

function CruiseDetailPage({ item, search, onBack, onBackToResults }) {
    const t = useT();
    const detail = CRUISE_DETAILS[item.id] || DEFAULT_CRUISE_DETAIL;
    return (
        <>
            <NavBar onBack={onBack} />
            <div className="dp-page">
                <div className="dp-breadcrumb">
                    <button onClick={onBack}>Home</button><span>›</span>
                    <button onClick={onBackToResults}>{t("cruises")}</button><span>›</span>
                    <span>{item.name}</span>
                </div>
                <DetailGallery photos={detail.photos} gradients={CRUISE_GRADS} />
                <div className="dp-body">
                    <div>
                        <div style={{ marginBottom: 20 }}>
                            <span className="chip chip-blue" style={{ marginBottom: 8, display: "inline-block" }}>{item.type}</span>
                            <div className="dp-name">{item.name}</div>
                            <div className="dp-sub"><FaShip /> {item.line} · {item.ship} · {item.nights} nights · {item.from} → {item.to}</div>
                            <div className="dp-meta-row">
                                <span className="rating-pill">{item.rating}</span>
                                <span className="rc-reviews">{item.reviews} reviews</span>
                                <span className="chip chip-green">✓ Free cancellation</span>
                            </div>
                        </div>
                        <div className="dp-section-title"><FaShip /> About This Cruise</div>
                        <p className="dp-desc">{detail.overview}</p>
                        <div className="dp-section-title"><FaStar /> Highlights</div>
                        <div className="dp-highlights">{detail.highlights.map(h => <span key={h} className="dp-highlight">✓ {h}</span>)}</div>
                        <div className="dp-section-title"><FaShip /> Ship Specifications</div>
                        <div className="dp-specs">
                            {[[<FaRulerCombined />, "Length", detail.shipLength], [<FaAnchor />, "Gross Tonnage", detail.grossTonnage], [<FaUserFriends />, "Capacity", detail.passengerCapacity.toLocaleString() + " pax"], [<FaUsers />, "Crew", detail.crew.toLocaleString() + " crew"], [<FaBuilding />, "Decks", `${detail.decks} decks`], [<FaRegCalendarDays />, "Built", detail.yearBuilt.toString()]].map(([icon, label, val]) => (
                                <div key={label} className="dp-spec"><div className="dp-spec-icon">{icon}</div><div className="dp-spec-label">{label}</div><div className="dp-spec-val">{val}</div></div>
                            ))}
                        </div>
                        <div className="dp-section-title"><FaRegCalendarDays /> Itinerary</div>
                        <div className="dp-itinerary">
                            {detail.itinerary.map((it, i) => (
                                <div key={i} className="dp-itin-item">
                                    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 14 }}>
                                        <div className="dp-itin-dot" />
                                        {i < detail.itinerary.length - 1 && <div className="dp-itin-line" />}
                                    </div>
                                    <div className="dp-itin-content">
                                        <div className="dp-itin-day">Day {it.day}</div>
                                        <div className="dp-itin-port">{it.port}</div>
                                        <div className="dp-itin-act">{it.activity}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="dp-section-title"><FaUtensils /> Dining Options</div>
                        <div className="dp-inclusions">{detail.dining.map((d, i) => <div key={i} className="dp-inclusion"><span><FaUtensils /></span><span>{d}</span></div>)}</div>
                        <div className="dp-section-title"><FaBurst /> Onboard Activities</div>
                        <div className="dp-inclusions">{detail.activities.map((a, i) => <div key={i} className="dp-inclusion"><span><FaBullseye /></span><span>{a}</span></div>)}</div>
                        <div className="dp-section-title"><FaBed /> Cabin Types</div>
                        <div className="dp-options">
                            {detail.cabins.map((c, i) => {
                                const price = c.price ?? item.price;
                                const orig = c.originalPrice ?? item.originalPrice;
                                return (
                                    <div key={i} className="dp-option">
                                        <div>
                                            <div className="dp-opt-name">{c.type} Cabin</div>
                                            <div className="dp-opt-sub"><FaRulerCombined /> {c.size}</div>
                                            <div className="dp-opt-features">{c.features.map(f => <span key={f} className="chip">{f}</span>)}</div>
                                        </div>
                                        <div className="dp-opt-price-col">
                                            <div className="dp-opt-orig"><CPrice myr={orig} /></div>
                                            <div className="dp-opt-price"><CPrice myr={price} /></div>
                                            <div className="dp-opt-unit">per person</div>
                                            <button className="dp-opt-btn">Select</button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="dp-section-title"><FaClipboardList /> Cruise Policies</div>
                        <div className="dp-policies">{detail.policies.map((p, i) => <div key={i} className="dp-policy"><span><FaCircleInfo /></span><span>{p}</span></div>)}</div>
                        <div className="dp-section-title"><FaComment /> Guest Reviews</div>
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
                            <div className="dp-bc-title">{t("viewCabins").replace(" →", "")}</div>
                            <div className="dp-bc-price-block">
                                <div className="dp-bc-orig"><CPrice myr={item.originalPrice} /></div>
                                <div className="dp-bc-price"><CPrice myr={item.price} /></div>
                                <div className="dp-bc-unit">from · per person · {disc(item.price, item.originalPrice)}% off</div>
                            </div>
                            <div className="dp-bc-info"><FaAnchor /> {item.from} → <FaGlobeAsia /> {item.to}<br /><FaMoon /> {item.nights} nights<br /><FaRegCalendar /> Departs {new Date(item.dep).toLocaleDateString("en-MY", { day: "numeric", month: "short", year: "numeric" })}<br /><FaUserFriends /> {search?.guests || "2 Adults"}</div>
                            <div className="dp-bc-divider" />
                            <div className="dp-bc-row"><span className="dp-bc-row-label">{t("cabinFrom")}</span><span className="dp-bc-row-val"><CPrice myr={item.price} /></span></div>
                            <div className="dp-bc-row"><span className="dp-bc-row-label">{t("portTaxes")}</span><span className="dp-bc-row-val"><CPrice myr={Math.round(item.price * 0.08)} /></span></div>
                            <div className="dp-bc-total"><span className="dp-bc-total-label">{t("totalFrom")}</span><span className="dp-bc-total-val"><CPrice myr={Math.round(item.price * 1.08)} /></span></div>
                            <button className="dp-bc-book">{t("viewCabins")}</button>
                            <div className="dp-bc-note">{t("freeCancel")}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CruiseDetailPage
