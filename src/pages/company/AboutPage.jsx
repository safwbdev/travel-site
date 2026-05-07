import { useState, useEffect, useMemo } from 'react'
// Lang
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { ContentPage } from '../../components/layouts';
// Constants 
import { TEAM } from '../../constants/team.js';
// Icons 
import { LuBicepsFlexed } from "react-icons/lu";
import {
    FaEarthAsia,
    FaRegStar,
    FaLock,
    FaBoltLightning,
    FaHandshakeAngle,
    FaLeaf,
    FaEnvelope
} from "react-icons/fa6";

function AboutPage({ onBack, onNav }) {
    const t = useT();
    return (
        <ContentPage title={t("aboutHeroTitle")} subtitle={t("aboutHeroSub")} tag={<><FaEarthAsia /> {t("aboutTag")}</>} onBack={onBack} onNav={onNav} activePage="about">
            <div className="stat-bar">
                {[["12M+", "Happy Travellers"], ["50+", "Countries Served"], ["200+", "Airline Partners"], ["4.8★", "App Store Rating"]].map(([n, l]) => (
                    <div key={l} className="stat-item"><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
                ))}
            </div>

            <div className="cp-section">
                <h2>{t("whoWeAre")}</h2>
                <p>Voyago was founded in 2018 with a simple belief: booking travel should be as exciting as the trip itself. Born in Penang, Malaysia, we set out to build Southeast Asia's most comprehensive travel super-app — one that handles every element of your journey from the moment you decide to go until you return home.</p>
                <p>Today, Voyago serves over 12 million travellers across 50 countries, offering hotels, flights, car rentals, airport transfers, buses, trains, and cruises — all in a single, seamlessly integrated platform. We're powered by a passionate team of 800+ across Penang, Kuala Lumpur, Singapore, Jakarta, and Bangkok.</p>
            </div>

            <div className="cp-section">
                <h2>{t("ourJourney")}</h2>
                <div className="timeline">
                    {[
                        ["2018", "Founded in George Town, Penang with a team of 12 and a vision to simplify travel booking in Southeast Asia."],
                        ["2019", "Launched hotel and flight booking. Reached 100,000 registered users within the first year."],
                        ["2020", "Pivoted to support travel recovery during the pandemic. Introduced flexible booking and free cancellation guarantees."],
                        ["2021", "Expanded to car rental and airport transfers. Series B funding of MYR 45M closed."],
                        ["2022", "Added buses, trains, and cruises. Launched the Voyago Miles loyalty programme."],
                        ["2023", "Crossed 5 million registered users. Expanded to Indonesia, Thailand, and the Philippines."],
                        ["2024", "Launched AI-powered trip planning assistant. Partnered with 200+ airlines and 50,000+ hotels."],
                        ["2025", "Hit 12 million users. Named Southeast Asia's Best Travel Platform at the Asia Travel Awards."],
                        ["2026", "Launching Voyago for Business — corporate travel management for teams of all sizes."],
                    ].map(([y, t], i) => (
                        <div key={i} className="tl-item">
                            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 14 }}>
                                <div className="tl-dot" />{i < 8 && <div className="tl-line" />}
                            </div>
                            <div><span className="tl-year">{y}</span><div className="tl-text">{t}</div></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cp-section">
                <h2>{t("ourValues")}</h2>
                <div className="info-card-grid">
                    {[
                        [<FaRegStar />, "Customer First", "Every decision starts with how it serves our travellers. Your experience is our north star."],
                        [<FaLock />, "Trust & Transparency", "No hidden fees. No fine print surprises. What you see is what you pay."],
                        [<FaLeaf />, "Sustainable Travel", "We're committed to carbon-neutral operations by 2028 and partner with eco-certified properties."],
                        [<FaBoltLightning />, "Innovation", "We reinvest 20% of revenue into technology to make booking faster, smarter, and more personalised."],
                        [<FaHandshakeAngle />, "Inclusivity", "Travel should be for everyone. We offer in 12 languages and support for travellers with accessibility needs."],
                        [<LuBicepsFlexed />, "Reliability", "24/7 human support, real-time booking confirmation, and a Best Price Guarantee on every product."],
                    ].map(([ic, ti, de]) => (
                        <div key={ti} className="info-card"><div className="ic-icon">{ic}</div><div className="ic-title">{ti}</div><div className="ic-text">{de}</div></div>
                    ))}
                </div>
            </div>

            <div className="cp-section">
                <h2>{t("leadershipTeam")}</h2>
                <div className="team-grid">
                    {TEAM.map(({ image, name, role, bg, index }) => (
                        <div key={index} className="team-card">
                            <div className="team-avatar" style={{ background: bg }}>
                                <img src={image} alt={name} /></div>
                            <div className="team-name">{name}</div><div className="team-role">{role}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cp-section">
                <h2>{t("ourOffices")}</h2>
                <div className="info-card-grid">
                    {[["🇲🇾", "Penang HQ", "1 Jalan Sultan Ahmad Shah, George Town, 10050 Penang"], ["🇲🇾", "Kuala Lumpur", "Level 28, Menara KLCC, KLCC, 50088 Kuala Lumpur"], ["🇸🇬", "Singapore", "1 Marina Boulevard, #28-00, 018989 Singapore"], ["🇮🇩", "Jakarta", "Jl. Jend. Sudirman Kav. 54, Jakarta 12190"], ["🇹🇭", "Bangkok", "87/2 CRC Tower, All Seasons Place, Bangkok 10330"], [<FaEnvelope />, "Global", "contact@voyago.com · +60 4-222 8888"]].map(([ic, ci, ad]) => (
                        <div key={ci} className="info-card"><div className="ic-icon">{ic}</div><div className="ic-title">{ci}</div><div className="ic-text">{ad}</div></div>
                    ))}
                </div>
            </div>
        </ContentPage>
    );
}

export default AboutPage
