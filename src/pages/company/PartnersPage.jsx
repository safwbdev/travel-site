import { useState, useEffect, useMemo } from 'react'
// Lang
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { ContentPage } from '../../components/layouts';
// Data 
import { PARTNERS_LIST } from '../../data/partners.js';
// Icons 
import {
    FaAnchor,
    FaBullseye,
    FaCar,
    FaCcMastercard,
    FaCcVisa,
    FaChartColumn,
    FaChartLine,
    FaDove,
    FaHandshakeAngle,
    FaHotel,
    FaLightbulb,
    FaMoneyBill1Wave,
    FaPlane,
    FaShip,
    FaTrophy
} from 'react-icons/fa6';

function PartnersPage({ onBack, onNav }) {
    const t = useT();
    const [type, setType] = useState("All");
    const types = ["All", ...new Set(PARTNERS_LIST.map(p => p.type))];
    const filtered = type === "All" ? PARTNERS_LIST : PARTNERS_LIST.filter(p => p.type === type);
    const tierColor = t => t === "Platinum" ? "linear-gradient(135deg,#c0c0c0,#e8e8e8)" : t === "Gold" ? "linear-gradient(135deg,#d4a017,#f0c040)" : "linear-gradient(135deg,#cd7f32,#e8a060)";

    function PartnerLogo({ id }) {
        switch (true) {
            case id === "airasia":
                return <FaPlane style={{ color: "red" }} />
                break;
            case id === "mas":
                return <FaPlane style={{ color: "#0c1755" }} />
                break;
            case id === "sa":
                return <FaPlane style={{ color: "gold" }} />
                break;
            case id === "ja":
                return <FaDove style={{ color: "red" }} />
                break;
            case id === "marriot":
                return <FaHotel style={{ color: "#f79a67" }} />
                break;
            case id === "hilton":
                return <FaHotel style={{ color: "#083755" }} />
                break;
            case id === "ihg":
                return <FaHotel style={{ color: "#e2642d" }} />
                break;
            case id === "accor":
                return <FaHotel style={{ color: "gold" }} />
                break;
            case id === "hertz":
                return <FaCar style={{ color: "#fff408" }} />
                break;
            case id === "avis":
                return <FaCar style={{ color: "#e41737" }} />
                break;
            case id === "royal":
                return <FaAnchor style={{ color: "#0e1b5a" }} />
                break;
            case id === "nor":
                return <FaShip style={{ color: "#0887bd" }} />
                break;
            case id === "visa":
                return <FaCcVisa style={{ color: "#000" }} />
                break;
            case id === "mastercard":
                return <FaCcMastercard style={{ color: "#000" }} />
                break;
            case id === "grab":
                return <FaMoneyBill1Wave style={{ color: "#09b355" }} />
                break;
            case id === "tng":
                return <FaMoneyBill1Wave style={{ color: "#30336e" }} />
                break;

            default:
                break;
        }
    }
    return (
        <ContentPage title={t("partnersHeroTitle")} subtitle={t("partnersHeroSub")} tag={<><FaHandshakeAngle /> {t("partnersTag")}</>} onBack={onBack} onNav={onNav} activePage="partners">
            <div className="cp-section">
                <h2>{t("becomePartner")}</h2>
                <p>Voyaqo connects millions of travellers with the best travel providers in the world. If you're an airline, hotel, car rental company, cruise line, or travel-related business, we'd love to explore how we can grow together.</p>
                <div className="info-card-grid">
                    {[[<FaChartLine />, "Distribution", "Reach 12M+ active travellers across Southeast Asia and beyond."], [<FaBullseye />, "Targeted Reach", "Segment campaigns by destination, traveller profile, and booking behaviour."], [<FaLightbulb />, "Technology API", "Integrate seamlessly via our RESTful API with real-time inventory sync."], [<FaChartColumn />, "Analytics Dashboard", "Live performance data, booking analytics, and revenue reporting."], [<FaTrophy />, "Co-Marketing", "Co-branded campaigns, featured placement, and exclusive deal promotions."], [<FaHandshakeAngle />, "Dedicated Support", "A dedicated partner success manager from day one."]].map(([ic, ti, de]) => (
                        <div key={ti} className="info-card"><div className="ic-icon">{ic}</div><div className="ic-title">{ti}</div><div className="ic-text">{de}</div></div>
                    ))}
                </div>
                <div style={{ textAlign: "center", marginTop: 8 }}>
                    <button style={{ background: "var(--brand)", color: "#fff", border: "none", borderRadius: 10, padding: "12px 32px", fontSize: "1rem", fontWeight: 700, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{t("applyPartnerBtn")}</button>
                </div>
            </div>
            <div className="cp-section">
                <h2>{t("currentPartners")}</h2>
                <div className="deals-filter-bar" style={{ marginBottom: 20 }}>
                    {types.map(tp => <button key={tp} className={`df-btn ${type === tp ? "active" : ""}`} onClick={() => setType(tp)}>{tp}</button>)}
                </div>
                <div className="partner-grid">
                    {filtered.map((p, i) => (
                        <div key={i} className="partner-card">
                            <div className="pc-logo"><PartnerLogo id={p.logo} /></div>
                            <div className="pc-name">{p.name}</div>
                            <div className="pc-type">{p.type}</div>
                            <div style={{ display: "inline-block", marginTop: 8, padding: "3px 10px", borderRadius: 20, fontSize: ".7rem", fontWeight: 700, background: tierColor(p.tier), color: "#fff" }}>{p.tier}</div>
                        </div>
                    ))}
                </div>
            </div>
        </ContentPage>
    );
}

export default PartnersPage
