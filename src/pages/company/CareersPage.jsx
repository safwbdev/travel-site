import { useState, useEffect, useMemo } from 'react'
// Lang
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { ContentPage } from '../../components/layouts';
// Data 
import { JOBS } from '../../data/jobs.js';
// Icons 
import { FaSuitcase } from "react-icons/fa6";
import {
    FaLocationDot,
    FaPlane,
    FaSackDollar,
    FaBullseye,
    FaUmbrellaBeach,
    FaHandHoldingMedical,
    FaMoneyBills
} from "react-icons/fa6";

const BENEFITS = [
    [<FaUmbrellaBeach />, "Flexible Work", "Hybrid & remote options, flexible hours, and unlimited annual leave for senior roles."],
    [<FaSackDollar />, "Competitive Pay", "Market-rate salaries + equity for early-stage hires. Annual performance bonuses."],
    [<FaPlane />, "Free Travel Credits", "MYR 3,000 annual travel credits to use on the Voyaqo platform. Because we walk the talk."],
    [<FaMoneyBills />, "L&D Budget", "MYR 5,000/year for courses, conferences, and books. We invest heavily in your growth."],
    [<FaHandHoldingMedical />, "Great Benefits", "Medical, dental, vision. Mental wellness stipend. Parental leave for all genders."],
    [<FaBullseye />, "Real Impact", "Work on products used by 12M+ people. Your code ships to millions within weeks of joining."]
];

function CareersPage({ onBack, onNav }) {
    const t = useT();
    const [dept, setDept] = useState("All");
    const depts = ["All", ...new Set(JOBS.map(j => j.dept))];
    const filtered = dept === "All" ? JOBS : JOBS.filter(j => j.dept === dept);
    return (
        <ContentPage title={t("careersHeroTitle")} subtitle={t("careersHeroSub")} tag={<><FaSuitcase /> {t("careersTag")}</>} onBack={onBack} onNav={onNav} activePage="careers">
            <div className="stat-bar" style={{ marginBottom: 32 }}>
                {[["800+", "Team Members"], ["5", "Office Locations"], ["28", "Nationalities"], ["4.7★", "Glassdoor Rating"]].map(([n, l]) => (
                    <div key={l} className="stat-item"><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
                ))}
            </div>
            <div className="cp-section">
                <h2>{t("whyCareers")}</h2>
                <div className="info-card-grid">
                    {BENEFITS.map(([ic, ti, de]) => (
                        <div key={ti} className="info-card"><div className="ic-icon">{ic}</div><div className="ic-title">{ti}</div><div className="ic-text">{de}</div></div>
                    ))}
                </div>
            </div>
            <div className="cp-section">
                <h2>{t("openPositions")}</h2>
                <div className="deals-filter-bar" style={{ marginBottom: 20 }}>
                    {depts.map(d => <button key={d} className={`df-btn ${dept === d ? "active" : ""}`} onClick={() => setDept(d)}>{d}</button>)}
                </div>
                {filtered.map((j, i) => (
                    <div key={i} className="job-card">
                        <div className="jc-info">
                            <div className="jc-title">{j.title}</div>
                            <div className="jc-meta">
                                <span className="jc-tag">{j.dept}</span>
                                <span className="jc-tag"><FaLocationDot /> {j.loc}</span>
                                <span className="jc-tag">{j.type}</span>
                            </div>
                        </div>
                        <button className="jc-apply">{t("applyNow")}</button>
                    </div>
                ))}
            </div>
            <div className="cp-section">
                <h2>{t("noRoleTitle")}</h2>
                <p>We're always on the lookout for exceptional talent. Send your CV and a short note about what you'd bring to Voyaqo to <strong>careers@voyaqo.com</strong> — we read every application.</p>
            </div>
        </ContentPage>
    );
}

export default CareersPage
