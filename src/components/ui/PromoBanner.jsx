import { useState, useEffect, useMemo } from 'react'
// Lang
import { useT, useLang, useCurrency } from '../../i18n/index.js'
// Constants 
import { PROMOS, PROMOS_T } from '../../constants/promos.js';

function PromoBanner({ onSearch }) {
    const [idx, setIdx] = useState(0);
    const t = useT();
    useEffect(() => { const t = setInterval(() => setIdx(i => (i + 1) % PROMOS.length), 4000); return () => clearInterval(t); }, []);

    const p = PROMOS_T[idx];
    const handleCta = () => { if (onSearch && p.action?.params) onSearch(p.action.params); };
    return (
        <div className="promo-banner" style={{ background: p.bg }}>
            <div className="promo-text">
                <span className="promo-tag">{t(p.titleKey)}</span>
                <p>{t(p.subKey)}</p>
                <button className="promo-cta" onClick={handleCta}>{t(p.ctaKey)} →</button>
            </div>
            <div className="promo-dots">
                {PROMOS_T.map((_, i) => <span key={i} className={`dot ${i === idx ? "active" : ""}`} onClick={() => setIdx(i)} />)}
            </div>
        </div>
    );
}

export default PromoBanner
