import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency, LANGUAGES, CURRENCIES, setLang, setCurrency } from '../../i18n/index.js'
import { FaGlobe } from "react-icons/fa6";
import { MdCurrencyExchange } from "react-icons/md";

function LangCurrencySelector() {
    const [open, setOpen] = useState(false);
    const [panel, setPanel] = useState("lang");
    const lang = useLang();
    const currency = useCurrency();
    const t = useT();
    const ref = { current: null };

    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const activeLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

    const triggerLabel = panel === "lang"
        ? `${activeLang.flag} ${activeLang.code.toUpperCase()}`
        : `${currency.flag} ${currency.code}`;

    return (
        <div className="lc-wrap" ref={el => ref.current = el}>
            <button
                className={`lc-trigger ${open ? "open" : ""}`}
                onClick={() => setOpen(o => !o)}
            >
                {/* Show both lang flag and currency code */}
                <span>{activeLang.flag}</span>
                <span style={{ color: "var(--muted)", fontWeight: 400 }}>|</span>
                <span>{currency.flag} {currency.code}</span>
                <span className={`lc-arrow ${open ? "open" : ""}`}>▼</span>
            </button>

            {open && (
                <div className="lc-dropdown">
                    {/* Panel toggle tabs */}
                    <div className="lc-divider" style={{ borderTop: "none", borderBottom: "1px solid var(--border)" }}>
                        <button className={`lc-tab ${panel === "lang" ? "active" : ""}`} onClick={() => setPanel("lang")}><FaGlobe /> {t("language")}</button>
                        <button className={`lc-tab ${panel === "currency" ? "active" : ""}`} onClick={() => setPanel("currency")}><MdCurrencyExchange /> {t("currency")}</button>
                    </div>

                    {panel === "lang" ? (
                        <>
                            <div className="lc-header">{t("selectLanguage")}</div>
                            <div className="lc-list">
                                {LANGUAGES.map(l => (
                                    <div
                                        key={l.code}
                                        className={`lc-item ${lang === l.code ? "active" : ""}`}
                                        onClick={() => { setLang(l.code); setOpen(false); }}
                                    >
                                        <span className="lc-item-flag">{l.flag}</span>
                                        <span className="lc-item-label">{l.label}</span>
                                        <span className="lc-item-code">{l.code.toUpperCase()}</span>
                                        {lang === l.code && <span className="lc-item-check">✓</span>}
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="lc-header">{t("selectCurrency")}</div>
                            <div className="lc-list">
                                {CURRENCIES.map(c => (
                                    <div
                                        key={c.code}
                                        className={`lc-item ${currency.code === c.code ? "active" : ""}`}
                                        onClick={() => { setCurrency(c); setOpen(false); }}
                                    >
                                        <span className="lc-item-flag">{c.flag}</span>
                                        <span className="lc-item-label">{c.name}</span>
                                        <span className="lc-item-code">{c.code}</span>
                                        {currency.code === c.code && <span className="lc-item-check">✓</span>}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default LangCurrencySelector
