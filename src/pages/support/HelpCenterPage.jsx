import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { ContentPage } from '../../components/layouts';
import { FAQ_ALL, FAQ_DATA } from '../../data/support.js';
import { FaRegClock } from "react-icons/fa6";
import { FaPhone, FaQuestion, FaRegComment, FaRegEnvelope } from "react-icons/fa6";

function HelpCenterPage({ onBack, onNav }) {
    const t = useT();
    const [q, setQ] = useState("");
    const cats = ["All", ...new Set(FAQ_ALL.map(f => f.cat))];
    const [cat, setCat] = useState("All");
    const [openIdx, setOpenIdx] = useState(null);
    const filtered = FAQ_ALL.filter(f => (cat === "All" || f.cat === cat) && (!q.trim() || f.q.toLowerCase().includes(q.toLowerCase()) || f.a.toLowerCase().includes(q.toLowerCase())));

    return (
        <ContentPage title={t("helpHeroTitle")} subtitle={t("helpHeroSub")} tag={<><FaQuestion /> {t("helpTag")}</>} onBack={onBack} onNav={onNav} activePage="support">
            <div className="support-search" style={{ marginBottom: 28 }}>
                <input type="text" placeholder={t("searchHelp")} value={q} onChange={e => setQ(e.target.value)} />
                <button>Search</button>
            </div>
            {!q && <div className="deals-filter-bar" style={{ marginBottom: 20 }}>{cats.map(c => <button key={c} className={`df-btn ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}</div>}
            <div className="cp-section">
                <h2>{t("articlesFound")} ({filtered.length})</h2>
                <div className="faq-list">
                    {filtered.length === 0 ? <p style={{ color: "var(--muted)", padding: "16px 0" }}>{t("noArticles")}</p> :
                        filtered.map((f, i) => (
                            <div key={i} className="faq-item">
                                <div className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                                    <span>{f.q} <span style={{ fontSize: ".72rem", fontWeight: 400, color: "var(--muted)" }}> — {f.cat}</span></span>
                                    <span className={`faq-chevron ${openIdx === i ? "open" : ""}`}>▼</span>
                                </div>
                                {openIdx === i && <div className="faq-a">{f.a}</div>}
                            </div>
                        ))}
                </div>
            </div>
            <div className="contact-cards" style={{ marginTop: 16 }}>
                {[{ icon: <FaRegComment />, title: "Live Chat", desc: "Instant help from a real agent.", btn: t("startChat"), avail: t("availableNow"), color: "var(--brand)" }, { icon: <FaPhone />, title: "Call Us", desc: "+60 4-222 8888 · 24/7", btn: t("callNow"), avail: t("available247"), color: "var(--success)" }, { icon: <FaRegEnvelope />, title: "Email", desc: "support@voyaqo.com", btn: t("sendEmail"), avail: t("response24h"), color: "var(--accent)" }].map(c => (
                    <div key={c.title} className="contact-card"><div className="cc-icon">{c.icon}</div><div className="cc-title">{c.title}</div><div className="cc-desc">{c.desc}</div><button className="cc-btn" style={{ background: c.color }}>{c.btn}</button><div className="cc-avail">{c.avail}</div></div>
                ))}
            </div>
        </ContentPage>
    );
}

export default HelpCenterPage
