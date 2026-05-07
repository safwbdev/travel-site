import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'

function PaxPicker({ rows, values, onChange, triggerLabel }) {
    const [open, setOpen] = useState(false);
    const t = useT();
    const ref = { current: null };

    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const adj = (field, delta, min, max) => {
        const next = Math.min(max, Math.max(min, (values[field] || 0) + delta));
        onChange({ ...values, [field]: next });
    };

    return (
        <div className="pp-wrap" ref={el => ref.current = el}>
            <button type="button" className={`pp-trigger ${open ? "open" : ""}`} onClick={() => setOpen(o => !o)}>
                <span>{triggerLabel}</span>
                <span className={`pp-arrow ${open ? "open" : ""}`}>▼</span>
            </button>
            {open && (
                <div className="pp-panel">
                    {rows.map(r => (
                        <div key={r.field} className="pp-row">
                            <div>
                                <div className="pp-label-name">{r.label}</div>
                                {r.sub && <div className="pp-label-sub">{r.sub}</div>}
                            </div>
                            <div className="pp-controls">
                                <button
                                    className="pp-btn"
                                    disabled={(values[r.field] || 0) <= r.min}
                                    onClick={() => adj(r.field, -1, r.min, r.max || 9)}>−</button>
                                <span className="pp-count">{values[r.field] ?? r.min}</span>
                                <button
                                    className="pp-btn"
                                    disabled={(values[r.field] || 0) >= (r.max || 9)}
                                    onClick={() => adj(r.field, +1, r.min, r.max || 9)}>+</button>
                            </div>
                        </div>
                    ))}
                    <div className="pp-footer">
                        <button className="pp-done" onClick={() => setOpen(false)}>{t("done")}</button>
                    </div>
                </div>
            )}
        </div>
    );
}

// helper: build a readable label from pax values

export default PaxPicker
