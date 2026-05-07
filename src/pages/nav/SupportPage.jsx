import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { NavBar, Footer } from '../../components/layouts';
// Data 
import { FAQ_DATA } from '../../data/support.js';
import { FaComment, FaPlane, FaRegCreditCard, FaTicket, FaRegStar, FaHotel, FaLock, FaRegComment, FaPhone, FaRegFolderOpen, FaRegEnvelope, FaCookie, FaCircle, FaClipboardList, FaQuestion, FaRegClock, FaBoltLightning, FaMagnifyingGlass } from "react-icons/fa6";

function SupportPage({ onBack, onNav }) {
    const t = useT();
    const [openFaq, setOpenFaq] = useState(null);
    const [query, setQuery] = useState("");

    // TODO : Think about what to do with this
    const topics = [
        { icon: <FaTicket />, title: "Manage Booking", desc: "Cancel, modify, or check the status of your booking.", arrow: "→" },
        { icon: <FaRegCreditCard />, title: "Payments & Refunds", desc: "Refund status, payment issues, and billing questions.", arrow: "→" },
        { icon: <FaPlane />, title: "Flight Issues", desc: "Delays, cancellations, seat selection, and baggage.", arrow: "→" },
        { icon: <FaHotel />, title: "Hotel Issues", desc: "Check-in problems, room issues, and special requests.", arrow: "→" },
        { icon: <FaRegStar />, title: "Rewards & Miles", desc: "Earn, redeem, and manage your Voyago Miles.", arrow: "→" },
        { icon: <FaLock />, title: "Account & Security", desc: "Login issues, password reset, and account settings.", arrow: "→" },
    ];

    const filteredFaq = query.trim()
        ? FAQ_DATA.filter(f => f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase()))
        : FAQ_DATA;

    return (
        <>
            {/* <style>{PAGES_CSS}</style> */}
            <NavBar onBack={onBack} onNav={onNav} activePage="support" />
            <div className="pg-hero">
                <div className="pg-hero-inner">
                    <span className="pg-hero-tag">{<><FaComment /> {t("supportTag")}</>}</span>
                    <h1 className="pg-hero-title">{t("supportHeroTitle")}</h1>
                    <p className="pg-hero-sub">{t("supportHeroSub")}</p>
                </div >
            </div >

            <div className="pg-body">
                {/* Search bar */}
                <div className="support-search">
                    <input type="text" placeholder={t("searchPlaceholder")} value={query} onChange={e => setQuery(e.target.value)} />
                    <button>Search</button>
                </div>

                {/* Help topics */}
                {!query && (
                    <div className="pg-section">
                        <div className="pg-section-title"><FaRegFolderOpen />{t("helpTopics")}</div>
                        <div className="topics-grid">
                            {topics.map(topic => (
                                <div key={topic.title} className="topic-card">
                                    <div className="topic-icon">{topic.icon}</div>
                                    <div className="topic-title">{topic.title}</div>
                                    <div className="topic-desc">{topic.desc}</div>
                                    <div className="topic-arrow">{t("browseArticles")}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* FAQ */}
                <div className="pg-section">
                    <div className="pg-section-title"><FaQuestion />{t("faqTitle")}</div>
                    {query && filteredFaq.length === 0 && (
                        <div className="empty-state" style={{ padding: "32px 20px" }}>
                            <div className="empty-icon"><FaMagnifyingGlass /></div>
                            <div className="empty-title">{t("noResults")}</div>
                            <div className="empty-sub">{t("noResultsSub")}</div>
                        </div>
                    )}
                    <div className="faq-list">
                        {filteredFaq.map((f, i) => (
                            <div key={i} className="faq-item">
                                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    <span>{f.q}</span>
                                    <span className={`faq-chevron ${openFaq === i ? "open" : ""}`}>▼</span>
                                </div>
                                {openFaq === i && <div className="faq-a">{f.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact options */}
                <div className="pg-section">
                    <div className="pg-section-title"><FaPhone /> {t("contactTitle")}</div>
                    <div className="contact-cards">
                        {[
                            { icon: <FaRegComment />, title: "Live Chat", desc: "Chat with a support agent in real time. Fastest response for urgent issues.", btnKey: "startChat", availKey: "availableNow", color: "var(--brand)", miniIcon: <FaCircle /> },
                            { icon: <FaPhone />, title: "Phone Support", desc: "Speak directly with our team. Available in English, Bahasa Malaysia, and Mandarin.", btnKey: "callNow", availKey: "available247", color: "var(--success)", miniIcon: <FaCircle /> },
                            { icon: <FaRegEnvelope />, title: "Email Support", desc: "Send us a detailed message. We'll respond within 24 hours on business days.", btnKey: "sendEmail", availKey: "response24h", color: "var(--accent)", miniIcon: <FaRegClock /> },
                        ].map(c => (
                            <div key={c.title} className="contact-card">
                                <div className="cc-icon">{c.icon}</div>
                                <div className="cc-title">{c.title}</div>
                                <div className="cc-desc">{c.desc}</div>
                                <button className="cc-btn" style={{ background: c.color }}>{t(c.btnKey)}</button>
                                <div className="cc-avail">{c.miniIcon} {t(c.availKey)}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom links */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                    {[
                        { icon: <FaClipboardList />, title: "Terms of Service", desc: "Read our full terms and conditions" },
                        { icon: <FaLock />, title: "Privacy Policy", desc: "How we handle your personal data" },
                        { icon: <FaCookie />, title: "Cookie Policy", desc: "Information about cookies we use" },
                    ].map(l => (
                        <div key={l.title} style={{ background: "#fff", borderRadius: 12, boxShadow: "var(--shadow)", padding: "16px 18px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer", transition: "box-shadow .2s" }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = "var(--shadow-lg)"}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = "var(--shadow)"}>
                            <span style={{ fontSize: "1.6rem" }}>{l.icon}</span>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: ".875rem", color: "var(--text)" }}>{l.title}</div>
                                <div style={{ fontSize: ".75rem", color: "var(--muted)" }}>{l.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SupportPage
