import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { ContentPage } from '../../components/layouts';
import { FaEnvelope, FaPhone, FaRegClock, FaLocationDot, FaRegPaperPlane } from "react-icons/fa6";

const CONTACT_DETAILS = [
    {
        icon: <FaPhone />,
        title: "Phone",
        lines: [
            "Customer Support: +60 4-222 8888",
            "Corporate: +60 4-222 8889",
            "Press: +60 4-222 8891"
        ]
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        lines: [
            "Support: support@voyaqo.com",
            "Corporate: hello@voyaqo.com",
            "Press: press@Voyaqo.com",
            "Partners: partners@voyaqo.com"
        ]
    },
    {
        icon: <FaRegClock />,
        title: "Hours",
        lines: [
            "Customer Support: 24/7",
            "Corporate Office: Mon–Fri 9AM–6PM",
            "Emergency Line: 24/7"
        ]
    },
    {
        icon: <FaLocationDot />,
        title: "Head Office",
        lines: [
            "1 Jalan Sultan Ahmad Shah",
            "George Town, 10050 Penang",
            "Malaysia"]
    },
]

function ContactPage({ onBack, onNav }) {
    const t = useT();
    const [form, setForm] = useState({ name: "", email: "", subject: "General Enquiry", msg: "" });
    const [sent, setSent] = useState(false);
    const upd = (k, v) => setForm(p => ({ ...p, [k]: v }));
    const handleSend = () => { if (!form.name || !form.email || !form.msg) { alert("Please fill in all fields."); return; } setSent(true); };
    const fieldStyle = { width: "100%", border: "2px solid var(--border)", borderRadius: 8, padding: "10px 14px", fontSize: ".9rem", fontFamily: "'Plus Jakarta Sans',sans-serif", color: "var(--text)", outline: "none", transition: "border-color .2s" };
    return (
        <ContentPage title={t("contactHeroTitle")} subtitle={t("contactHeroSub")} tag={<><FaPhone /> {t("contactTag")}</>} onBack={onBack} onNav={onNav} activePage="contact">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
                <div>
                    {sent ? (
                        <div style={{ textAlign: "center", padding: "48px 24px", background: "#fff", borderRadius: 16, boxShadow: "var(--shadow)" }}>
                            <div style={{ fontSize: "3rem", marginBottom: 14 }}><FaRegPaperPlane /></div>
                            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>{t("messageSent")}</div>
                            <div style={{ fontSize: ".875rem", color: "var(--muted)", marginBottom: 20 }}>{t("thankYou")} {form.email} {t("within24h")}</div>
                            <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "General Enquiry", msg: "" }); }} style={{ background: "var(--brand)", color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{t("sendAnother")}</button>
                        </div>
                    ) : (
                        <div style={{ background: "#fff", borderRadius: 16, boxShadow: "var(--shadow)", padding: 28 }}>
                            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: 20 }}>{t("sendMessage")}</div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                <div className="field-group"><label>{t("fullName")}</label><input style={fieldStyle} value={form.name} onChange={e => upd("name", e.target.value)} placeholder={t("fullNamePlaceholder")} onFocus={e => e.target.style.borderColor = "var(--brand)"} onBlur={e => e.target.style.borderColor = "var(--border)"} /></div>
                                <div className="field-group"><label>{t("emailAddress")}</label><input style={fieldStyle} value={form.email} onChange={e => upd("email", e.target.value)} placeholder={t("emailPlaceholder2")} type="email" onFocus={e => e.target.style.borderColor = "var(--brand)"} onBlur={e => e.target.style.borderColor = "var(--border)"} /></div>
                                <div className="field-group"><label>{t("subject")}</label>
                                    <select style={fieldStyle} value={form.subject} onChange={e => upd("subject", e.target.value)}>
                                        {["General Enquiry", "Booking Issue", "Refund Request", "Technical Problem", "Partnership", "Press Enquiry", "Feedback"].map(o => <option key={o}>{o}</option>)}
                                    </select>
                                </div>
                                <div className="field-group"><label>{t("message")}</label><textarea style={{ ...fieldStyle, minHeight: 140, resize: "vertical" }} value={form.msg} onChange={e => upd("msg", e.target.value)} placeholder={t("messagePlaceholder")} onFocus={e => e.target.style.borderColor = "var(--brand)"} onBlur={e => e.target.style.borderColor = "var(--border)"} /></div>
                                <button onClick={handleSend} style={{ background: "var(--accent)", color: "#fff", border: "none", borderRadius: 10, padding: "13px", fontSize: "1rem", fontWeight: 700, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 4px 14px rgba(255,107,53,.35)" }}>{t("sendMessageBtn")}</button>
                            </div>
                        </div>
                    )}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {CONTACT_DETAILS.map(c => (
                        <div key={c.title} style={{ background: "#fff", borderRadius: 12, boxShadow: "var(--shadow)", padding: "18px 20px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                                <span style={{ fontSize: "1.4rem" }}>{c.icon}</span>
                                <span style={{ fontWeight: 700, fontSize: ".95rem", color: "var(--text)" }}>{c.title}</span>
                            </div>
                            {c.lines.map((l, i) => <div key={i} style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.8 }}>{l}</div>)}
                        </div>
                    ))}
                </div>
            </div>
        </ContentPage>
    );
}

export default ContactPage
