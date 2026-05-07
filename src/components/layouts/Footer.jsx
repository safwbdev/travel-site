import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useLang, useCurrency } from '../../i18n/index.js'
// Hooks 
import { globalNav } from '../../hooks/useGlobalNav.js';
// constants 
import { TABS } from '../../constants/tabs.js';
import { FaXTwitter, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa6";

function Footer({ onNav }) {
    const nav = (id) => { const fn = onNav || globalNav; fn(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
    const t = useT();
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo">Voya<span style={{ color: "#ff6b35" }}>qo</span></div>
                        <p>{t("footerDesc")}</p>
                    </div>
                    <div className="footer-col">
                        <h4>{t("travel")}</h4>
                        <ul>
                            {[["Hotels", "tab-hotels"], ["Flights", "tab-flights"], ["Car Rental", "tab-cars"], ["Airport Transfer", "tab-transfer"], ["Buses", "tab-buses"], ["Trains", "tab-trains"], ["Cruises", "tab-cruises"]].map(([l, id]) => (
                                <li key={l}><a href="#" onClick={e => { e.preventDefault(); nav(id); }}>{t(TABS.find(x => x.id === id.replace("tab-", ""))?.labelKey || "") || l}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>{t("company")}</h4>
                        <ul>
                            {[[t("aboutUs"), "about"], [t("careers"), "careers"], [t("press"), "press"], [t("blog"), "blog"], [t("partners"), "partners"]].map(([l, id]) => (
                                <li key={id}><a href="#" onClick={e => { e.preventDefault(); nav(id); }}>{l}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>{t("footerSupport")}</h4>
                        <ul>
                            {[[t("faq"), "support"], [t("helpCenter"), "help"], [t("contactUs"), "contact"], [t("cancellationPolicy"), "cancellation"], [t("privacyPolicy"), "privacy"], [t("termsOfService"), "terms"]].map(([l, id]) => (
                                <li key={id}><a href="#" onClick={e => { e.preventDefault(); nav(id); }}>{l}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>{t("copyright")}</span>
                    <div className="social-links">{[<FaFacebookF />, <FaInstagram />, <FaXTwitter />, <FaYoutube />].map((s, i) => <button key={i} className="social-btn">{s}</button>)}</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
