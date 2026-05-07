import { useState, useEffect, useMemo } from 'react'
// Lang
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { ContentPage } from '../../components/layouts';
// Data 
import { BLOG_POSTS } from '../../data/blog.js';
// Icons 
import {
    FaRegClock,
    FaRegCalendarDays,
    FaNewspaper
} from "react-icons/fa6";

function BlogPage({ onBack, onNav }) {
    const t = useT();
    const [cat, setCat] = useState("All");
    const cats = ["All", ...new Set(BLOG_POSTS.map(b => b.cat))];
    const filtered = cat === "All" ? BLOG_POSTS : BLOG_POSTS.filter(b => b.cat === cat);
    return (
        <ContentPage title={t("blogHeroTitle")} subtitle={t("blogHeroSub")} tag={<><FaNewspaper /> {t("blogTag")}</>} onBack={onBack} onNav={onNav} activePage="blog">
            <div className="deals-filter-bar" style={{ marginBottom: 24 }}>
                {cats.map(c => <button key={c} className={`df-btn ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}
            </div>
            <div className="blog-grid">
                {filtered.map((b, i) => (
                    <div key={i} className="blog-card">
                        <div className="bc-img">
                            <img src={b.img} alt="" /></div>
                        <div className="bc-body">
                            <div className="bc-cat">{b.cat}</div>
                            <div className="bc-title">{b.title}</div>
                            <div className="bc-meta"><FaRegCalendarDays /> {b.date} · <FaRegClock /> {b.read} read</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cp-section" style={{ marginTop: 40 }}>
                <h2>{t("subscribeTo")}</h2>
                <p>{t("subscribeSub")}</p>
                <div style={{ display: "flex", gap: 0, maxWidth: 480, borderRadius: 10, overflow: "hidden", border: "2px solid var(--brand)" }}>
                    <input type="email" placeholder={t("emailPlaceholder")} style={{ flex: 1, padding: "12px 16px", border: "none", outline: "none", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: ".9rem" }} />
                    <button style={{ background: "var(--brand)", color: "#fff", border: "none", padding: "12px 20px", fontWeight: 700, fontSize: ".875rem", cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{t("subscribe")}</button>
                </div>
            </div>
        </ContentPage>
    );
}

export default BlogPage
