import { useState, useEffect, useMemo } from 'react'
// Lang
import { useCurrency, useT } from '../i18n';
// Utils
import { disc } from '../utils/formatters';
// Components
import { NavBar, Footer } from '../components/layouts';
import { PromoBanner, LangCurrencySelector } from '../components/ui';
import {
    HotelForm, CarForm,
    FlightForm,
    TransferForm,
    CruiseForm,
    TrainForm,
    BusForm,
} from '../components/search';
import CPrice from '../components/ui/CPrice';
// Data 
import { DEALS, POPULAR } from '../data/home';
// constants
import { TABS } from '../constants/tabs';
import { FaRegCreditCard, FaLock, FaPhone, FaBoltLightning, FaFire, FaGifts, FaLocationDot, FaGooglePlay, FaApple } from 'react-icons/fa6';
import { FaGlobeAsia } from 'react-icons/fa';
import { GiBigWave, GiGiantSquid, GiLion, GiPalmTree, GiSushis } from "react-icons/gi";
import { MdOutlinePhoneIphone, MdTempleBuddhist } from "react-icons/md";
import TabIcon from '../components/search/TabIcon';


function HomePage({ onSearch, onNav }) {
    const [activeTab, setActiveTab] = useState("hotels");
    const t = useT();
    const tlabels = Object.fromEntries(TABS.map(tab => [tab.id, t(tab.labelKey)]));
    const formMap = {
        hotels: <HotelForm onSearch={onSearch} />,
        flights: <FlightForm onSearch={onSearch} />,
        cars: <CarForm onSearch={onSearch} />,
        transfer: <TransferForm onSearch={onSearch} />,
        buses: <BusForm onSearch={onSearch} />,
        trains: <TrainForm onSearch={onSearch} />,
        cruises: <CruiseForm onSearch={onSearch} />,
    };


    function PopularDestIcon({ id }) {
        switch (true) {
            case id == "Bali":
                return <GiPalmTree />
                break;
            case id == "Bangkok":
                return <MdTempleBuddhist />
                break;
            case id == "Tokyo":
                return <GiSushis />
                break;
            case id == "Singapore":
                return <GiLion />
                break;
            case id == "Phuket":
                return <GiBigWave />
                break;
            case id == "Seoul":
                return <GiGiantSquid />
                break;

            default:
                break;
        }
    }

    return (
        <>
            <NavBar onBack={() => { }} onNav={onNav} />
            <div className="hero">
                <div className="hero-content">
                    <h1>{t("heroTitle")} <em>{t("heroTitleEm")}</em></h1>
                    <p>{t("heroSub")}</p>
                </div>
            </div>
            <div className="search-section">
                <div className="search-card">
                    <div className="tab-bar">
                        {TABS.map((tab, index) => <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? "active" : ""}`} onClick={() => setActiveTab(tab.id)}><span className="tab-icon">{<TabIcon id={index} />}</span>{tlabels[tab.id]}</button>)}
                    </div>
                    <div className="form-area">{formMap[activeTab]}</div>
                </div>
            </div>
            <div className="page-body">
                <div className="section"><PromoBanner onSearch={onSearch} /></div>
                <div className="section">
                    <div className="section-header">
                        <h2 className="section-title"><FaFire /> {t("hotDeals")}</h2>
                        <span className="see-all" onClick={() => onNav("deals")}>{t("seeAllDeals")}</span>
                    </div>
                    <div className="deals-carousel-wrap">
                        <button className="deals-carousel-arrow prev" onClick={() => { const el = document.getElementById("deals-scroll"); if (el) el.scrollBy({ left: -290, behavior: "smooth" }); }}>‹</button>
                        <div className="deals-carousel" id="deals-scroll">
                            {DEALS.map(d => (
                                <div key={d.id} className="deal-card" onClick={() => onSearch(d.action)}>
                                    <div className="deal-thumb" style={{ background: d.bg }}>
                                        {/* <span style={{ fontSize: "3.2rem" }}> */}
                                        <img src={d.img} alt="" />
                                        {/* </span> */}
                                        <span className="deal-tag">{d.tag}</span>
                                        <span className="deal-badge">-{disc(d.price, d.originalPrice)}% OFF</span>
                                    </div>
                                    <div className="deal-body">
                                        <div className="deal-title">{d.title}</div>
                                        <div className="deal-loc"><FaLocationDot /> {d.location}</div>
                                        <div className="deal-footer">
                                            <div><div className="deal-original">
                                                <CPrice myr={d.originalPrice} />
                                            </div><div className="deal-current">
                                                    <CPrice myr={d.price} />
                                                </div><div className="deal-nights">{d.nights}</div></div>
                                            <div className="deal-rating"><span className="star">★</span><span className="rating-num">{d.rating}</span></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="deal-card" style={{ background: "linear-gradient(135deg,#003d80,#0077cc)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, color: "#fff", minHeight: 200 }} onClick={() => onNav("deals")}>
                                <span style={{ fontSize: "2.5rem" }}><FaGifts /></span>
                                <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: ".95rem", textAlign: "center", padding: "0 16px" }}>{t("seeAllDeals")}</span>
                                <span style={{ fontSize: "1.5rem", opacity: .8 }}>→</span>
                            </div>
                        </div>
                        <button className="deals-carousel-arrow next" onClick={() => { const el = document.getElementById("deals-scroll"); if (el) el.scrollBy({ left: 290, behavior: "smooth" }); }}>›</button>
                    </div>
                </div>
                <div className="section">
                    <div className="section-header"><h2 className="section-title"><FaGlobeAsia /> {t("popularDest")}</h2><span className="see-all" onClick={() => onNav("deals")}>{t("exploreAll")}</span></div>
                    <div className="popular-grid">
                        {POPULAR.map(c => (
                            <div key={c.city} className="city-card" onClick={() => onSearch({ type: "hotels", dest: c.city, checkin: "2026-04-20", checkout: "2026-04-25", rooms: "1 Room, 2 Guests" })}>
                                <div className="city-icon"><PopularDestIcon id={c.city} /></div>
                                <div className="city-name">{c.city}</div>
                                <div className="city-trips">{c.trips}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section">
                    <div className="section-header"><h2 className="section-title">{t("whyVoyago")}</h2></div>
                    <div className="features-grid">
                        {[
                            { icon: <FaRegCreditCard />, titleKey: "bestPrice", descKey: "bestPriceDesc" },
                            { icon: <FaLock />, titleKey: "securePayments", descKey: "secureDesc" },
                            { icon: <FaPhone />, titleKey: "support247", descKey: "supportDesc" },
                            { icon: <FaBoltLightning />, titleKey: "instantConfirm", descKey: "instantDesc" },
                        ].map(f => (
                            <div key={f.titleKey} className="feature-card">
                                <div className="feature-icon">{f.icon}</div>
                                <div className="feature-title">{t(f.titleKey)}</div>
                                <div className="feature-desc">{t(f.descKey)}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="app-section">
                    <div className="app-text">
                        <h2>{t("appTitle")}</h2>
                        <p>{t("appSub")}</p>
                        <div className="app-btns"><button className="app-btn"><FaApple /> {t("appStore")}</button><button className="app-btn"><FaGooglePlay /> {t("googlePlay")}</button></div>
                    </div>
                    <div className="app-phones"><MdOutlinePhoneIphone /></div>
                </div>
            </div>
            <Footer onNav={onNav} />
        </>
    );
}

export default HomePage
