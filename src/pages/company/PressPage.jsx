import { useState, useEffect, useMemo } from 'react'
// Lang
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { ContentPage } from '../../components/layouts';
// Data 
import { PRESS_ITEMS } from '../../data/press.js';
// Icons 
import { FaNewspaper, FaRegCalendarDays } from "react-icons/fa6";
import { FaTrophy, FaFileLines, FaCamera, FaFilm, FaPaintbrush, FaRectangleList } from "react-icons/fa6";

function PressPage({ onBack, onNav }) {
    const t = useT();
    return (
        <ContentPage title={t("pressHeroTitle")} subtitle={t("pressHeroSub")} tag={<><FaNewspaper /> {t("pressTag")}</>} onBack={onBack} onNav={onNav} activePage="press">
            <div className="cp-section">
                <h2>{t("mediaEnquiries")}</h2>
                <p>For press enquiries, interview requests, or to receive our latest press releases, please contact our communications team at <strong>press@voyaqo.com</strong> or call <strong>+60 4-222 8891</strong>. We aim to respond to all media requests within 4 business hours.</p>
            </div>
            <div className="cp-section">
                <h2>{t("latestCoverage")}</h2>
                <div className="press-grid">
                    {PRESS_ITEMS.map((p, i) => (
                        <div key={i} className="press-card">
                            <div className="pc-outlet">{p.outlet}</div>
                            <div className="pc-headline">{p.headline}</div>
                            <div className="pc-date"><FaRegCalendarDays /> {p.date}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cp-section">
                <h2>{t("brandAssets")}</h2>
                <div className="info-card-grid">
                    {[[<FaPaintbrush />, "Logo Pack", "Primary, secondary and monochrome versions in SVG, PNG, and EPS formats."], [<FaRectangleList />, "Brand Guidelines", "Typography, colour palette, tone of voice, and usage guidelines."], [<FaCamera />, "Photography", "High-resolution product screenshots and lifestyle images cleared for editorial use."], [<FaFilm />, "Video B-Roll", "Footage of the Voyaqo app, team, and offices for broadcast use."], [<FaFileLines />, "Fact Sheet", "Key statistics, company milestones, and leadership bios in PDF format."], [<FaTrophy />, "Awards & Logos", "Official award badges and certification logos."]].map(([ic, ti, de]) => (
                        <div key={ti} className="info-card" style={{ cursor: "pointer" }}>
                            <div className="ic-icon">{ic}</div><div className="ic-title">{ti}</div><div className="ic-text">{de}</div>
                            <div style={{ color: "var(--brand)", fontSize: ".8rem", fontWeight: 700, marginTop: 10 }}>{t("downloadArrow")}</div>
                        </div>
                    ))}
                </div>
            </div>
        </ContentPage>
    );
}

export default PressPage
