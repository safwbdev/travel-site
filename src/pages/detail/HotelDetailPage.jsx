import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useCurrency } from '../../i18n/index.js'
// Utils
import { disc, nights } from '../../utils/formatters.js';
// Components 
import { NavBar, Footer } from '../../components/layouts';
import { CPrice, DetailGallery } from '../../components/ui';
// Data 
import { DEFAULT_DETAIL, HOTEL_DETAILS } from '../../data/hotel.js';
import { SAMPLE_REVIEWS } from '../../data/reviews.js';
// Constants 
import { CRUISE_GRADS } from '../../constants/grad.js';
// Icons 
import { FaSquare } from 'react-icons/fa';
import {
    FaBed,
    FaBellConcierge,
    FaCircleInfo,
    FaClipboardList,
    FaComment,
    FaDice,
    FaDog,
    FaDumbbell,
    FaEnvelope,
    FaHotel,
    FaLocationDot,
    FaMapLocationDot,
    FaMartiniGlass,
    FaPenFancy,
    FaPersonSwimming,
    FaPhone,
    FaRulerCombined,
    FaShirt,
    FaSpa,
    FaSquareParking,
    FaStar,
    FaSuitcase,
    FaUmbrellaBeach,
    FaUtensils,
    FaWifi
} from 'react-icons/fa6';

const AMENITY_ICONS = {
    Pool: <FaPersonSwimming />,
    Spa: <FaSpa />,
    WiFi: <FaWifi />,
    Gym: <FaDumbbell />,
    Restaurant: <FaUtensils />,
    Bar: <FaMartiniGlass />,
    Beach: <FaUmbrellaBeach />,
    Casino: <FaDice />,
    Concierge: <FaPenFancy />,
    Parking: <FaSquareParking />,
    "Room Service": <FaBellConcierge />,
    Laundry: <FaShirt />,
    Conference: <FaSuitcase />,
    "Pet-Friendly": <FaDog />
};

function HotelDetailPage({ hotel, search, onBack, onBackToResults }) {
    const t = useT();
    const detail = HOTEL_DETAILS[hotel.id] || { ...DEFAULT_DETAIL, rooms: DEFAULT_DETAIL.rooms.map(r => ({ ...r, price: r.price ?? hotel.price })) };
    const n = nights(search?.checkin || "2026-04-20", search?.checkout || "2026-04-25");
    const [checkin, setCheckin] = useState(search?.checkin || "2026-04-20");
    const [checkout, setCheckout] = useState(search?.checkout || "2026-04-25");
    const dynN = nights(checkin, checkout);

    // Lightbox state
    const [lbOpen, setLbOpen] = useState(false);
    const [lbIdx, setLbIdx] = useState(0);
    const photos = detail.photos || [];
    const lbPrev = () => setLbIdx(i => (i - 1 + photos.length) % photos.length);
    const lbNext = () => setLbIdx(i => (i + 1) % photos.length);

    // Keyboard for lightbox
    useEffect(() => {
        if (!lbOpen) return;
        const h = (e) => { if (e.key === "ArrowLeft") lbPrev(); if (e.key === "ArrowRight") lbNext(); if (e.key === "Escape") setLbOpen(false); };
        document.addEventListener("keydown", h);
        return () => document.removeEventListener("keydown", h);
    }, [lbOpen]);

    // Lock body scroll when lightbox open
    useEffect(() => { document.body.style.overflow = lbOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [lbOpen]);

    const photoLabels = ["Exterior", "Pool Area", "Dining", "Lobby", "Guest Room", "View", "Gardens", "Spa & Wellness"];

    return (
        <>
            <NavBar onBack={onBack} />
            <div className="hd-page">
                {/* BREADCRUMB */}
                <div className="hd-breadcrumb">
                    <button onClick={onBack}>{t("hotels")}</button>
                    <span>›</span>
                    <button onClick={onBackToResults}>{t("hotels")} in {search?.dest || hotel.city}</button>
                    <span>›</span>
                    <span style={{ color: "" }}>{hotel.name}</span>
                </div>

                {/* GALLERY */}
                <DetailGallery photos={photos} gradients={CRUISE_GRADS} />

                {/* BODY */}
                <div className="hd-body">
                    {/* LEFT COLUMN */}
                    <div className="hd-left">
                        {/* HEADER */}
                        <div className="hd-header">
                            <div className="hd-tag">{hotel.tag}</div>
                            <div className="hd-name">{hotel.name}</div>
                            <div className="hd-stars">{"★".repeat(hotel.stars)}{"☆".repeat(5 - hotel.stars)}</div>
                            <div className="hd-meta-row">
                                <span className="hd-rating-big">{hotel.rating}</span>
                                <span className="hd-reviews">{hotel.reviews.toLocaleString()} guest reviews</span>
                                <span className={`chip ${hotel.cancellation === "Free cancellation" ? "chip-green" : "chip-red"}`}>
                                    {hotel.cancellation === "Free cancellation" ? "✓ Free cancellation" : "✗ Non-refundable"}
                                </span>
                                {hotel.breakfast && <span className="chip chip-yellow"><FaUtensils /> Breakfast included</span>}
                            </div>
                            <div className="hd-address"><FaLocationDot /> {detail.address}</div>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="hd-desc">{detail.description}</p>

                        {/* HIGHLIGHTS */}
                        <div className="hd-section-title"><FaStar /> Hotel Highlights</div>
                        <div className="hd-highlights">
                            {detail.highlights.map(h => <span key={h} className="hd-highlight">✓ {h}</span>)}
                        </div>

                        {/* AMENITIES */}
                        <div className="hd-section-title"><FaHotel /> Facilities & Amenities</div>
                        <div className="hd-amenities" style={{ marginBottom: 28 }}>
                            {hotel.amenities.map(a => (
                                <div key={a} className="hd-amenity">
                                    <div className="hd-amenity-icon">{AMENITY_ICONS[a] || "✅"}</div>
                                    <div>{a}</div>
                                </div>
                            ))}
                        </div>

                        {/* ROOM TYPES */}
                        <div className="hd-section-title"><FaBed /> Room Types</div>
                        <div className="hd-rooms">
                            {detail.rooms.map((r, i) => {
                                const roomPrice = r.price ?? hotel.price;
                                const roomOrig = Math.round(roomPrice * (hotel.originalPrice / hotel.price));
                                return (
                                    <div key={i} className="hd-room">
                                        <div>
                                            <div className="hd-room-name">{r.type}</div>
                                            <div className="hd-room-size"><FaRulerCombined /> {r.size} · <FaBed /> {r.beds}</div>
                                            <div className="hd-room-features">
                                                {r.features.map(f => <span key={f} className="chip">{f}</span>)}
                                            </div>
                                        </div>
                                        <div className="hd-room-price-col">
                                            <div className="hd-room-orig"><CPrice myr={roomOrig} /></div>
                                            <div className="hd-room-price"><CPrice myr={roomPrice} /></div>
                                            <div className="hd-room-unit">/ room / night</div>
                                            <button className="hd-room-btn">Reserve</button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* REVIEWS */}
                        <div className="hd-section-title"><FaComment /> Guest Reviews</div>
                        <div className="hd-reviews-grid" style={{ marginBottom: 28 }}>
                            {SAMPLE_REVIEWS.map((r, i) => (
                                <div key={i} className="hd-review">
                                    <div className="hd-review-header">
                                        <span className="hd-reviewer">{r.country} {r.name}</span>
                                        <span className="hd-review-stars">{"★".repeat(r.stars)}</span>
                                    </div>
                                    <div className="hd-review-date">{r.date}</div>
                                    <div className="hd-review-text">"{r.text}"</div>
                                </div>
                            ))}
                        </div>

                        {/* POLICIES */}
                        <div className="hd-section-title"><FaClipboardList /> Hotel Policies</div>
                        <div className="hd-policies">
                            {detail.policies.map((p, i) => <div key={i} className="hd-policy"><span><FaCircleInfo /></span><span>{p}</span></div>)}
                        </div>

                        {/* NEARBY */}
                        <div className="hd-section-title"><FaLocationDot /> Nearby Attractions</div>
                        <div className="hd-nearby">
                            {detail.nearby.map((nb, i) => <div key={i} className="hd-nearby-item"><span><FaMapLocationDot /></span><span>{nb}</span></div>)}
                        </div>

                        {/* CONTACT */}
                        <div className="hd-section-title"><FaPhone /> Contact</div>
                        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 28 }}>
                            <span style={{ fontSize: ".875rem", color: "var(--muted)" }}><FaPhone /> {detail.phone}</span>
                            <span style={{ fontSize: ".875rem", color: "var(--muted)" }}><FaEnvelope /> {detail.email}</span>
                        </div>
                    </div>

                    {/* RIGHT — STICKY BOOKING CARD */}
                    <div>
                        <div className="hd-booking-card">
                            <div className="hd-bc-title">{t("bookThisHotel")}</div>
                            <div className="hd-bc-orig"><CPrice myr={hotel.originalPrice} /> / night</div>
                            <div className="hd-bc-price"><CPrice myr={hotel.price} /></div>
                            <div className="hd-bc-unit">{t("perRoomNight")} · {disc(hotel.price, hotel.originalPrice)}% off</div>
                            <div className="hd-bc-row">
                                <div className="hd-bc-field">
                                    <label>{t("checkInLabel")}</label>
                                    <input type="date" value={checkin} onChange={e => setCheckin(e.target.value)} />
                                </div>
                                <div className="hd-bc-field">
                                    <label>{t("checkOutLabel")}</label>
                                    <input type="date" value={checkout} onChange={e => setCheckout(e.target.value)} />
                                </div>
                            </div>
                            <div className="hd-bc-field" style={{ marginBottom: 8 }}>
                                <label>Guests</label>
                                <input type="text" value={search?.rooms || "1 Room, 2 Guests"} readOnly style={{ cursor: "default" }} />
                            </div>
                            <div className="hd-bc-divider" />
                            <div className="hd-bc-total-row"><span className="hd-bc-total-label"><CPrice myr={hotel.price} /> × {dynN} {dynN !== 1 ? t("nightsLabel") : t("nightLabel")}</span><span className="hd-bc-total-val"><CPrice myr={hotel.price * dynN} /></span></div>
                            <div className="hd-bc-total-row"><span className="hd-bc-total-label">{t("taxesFees")}</span><span className="hd-bc-total-val"><CPrice myr={Math.round(hotel.price * dynN * 0.12)} /></span></div>
                            <div className="hd-bc-total-row" style={{ borderTop: "2px solid var(--border)", paddingTop: 10, marginTop: 4 }}>
                                <span style={{ fontWeight: 700, color: "var(--text)" }}>{t("total")}</span>
                                <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--brand)" }}><CPrice myr={Math.round(hotel.price * dynN * 1.12)} /></span>
                            </div>
                            <button className="hd-bc-book">{t("reserveNow")}</button>
                            {hotel.cancellation === "Free cancellation" && <div className="hd-bc-cancel">{t("freeCancel")}</div>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HotelDetailPage
