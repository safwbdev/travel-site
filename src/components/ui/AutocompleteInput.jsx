import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'// autocomplete 
import '../../styles/autocomplete.scss'
import AutocompleteLogo from './AutocompleteLogo.jsx';

function AutocompleteInput({ value, onChange, options, placeholder, icon, onSelect }) {
    const [open, setOpen] = useState(false);
    const [cursor, setCursor] = useState(-1);
    const wrapRef = useState(null);
    const ref = { current: null };

    const filtered = useMemo(() => {
        if (!value.trim()) return options.slice(0, 8);
        const q = value.toLowerCase();
        return options.filter(o =>
            o.label.toLowerCase().includes(q) || (o.sub || "").toLowerCase().includes(q)
        ).slice(0, 8);
    }, [value, options]);

    useEffect(() => { setCursor(-1); }, [filtered]);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const select = (item) => {
        onChange(item.label);
        onSelect && onSelect(item.label);
        setOpen(false);
        setCursor(-1);
    };

    const handleKey = (e) => {
        if (!open) { if (e.key === "ArrowDown") setOpen(true); return; }
        if (e.key === "ArrowDown") { e.preventDefault(); setCursor(c => Math.min(c + 1, filtered.length - 1)); }
        else if (e.key === "ArrowUp") { e.preventDefault(); setCursor(c => Math.max(c - 1, -1)); }
        else if (e.key === "Enter") { e.preventDefault(); if (cursor >= 0 && filtered[cursor]) select(filtered[cursor]); else setOpen(false); }
        else if (e.key === "Escape") setOpen(false);
    };

    return (
        <div className="ac-wrap" ref={el => ref.current = el}>
            <span className="ac-icon-left">{icon}</span>
            <input
                className="ac-input"
                value={value}
                placeholder={placeholder}
                onChange={e => { onChange(e.target.value); setOpen(true); }}
                onFocus={() => setOpen(true)}
                onKeyDown={handleKey}
                autoComplete="off"
            />
            {value && (
                <button className="ac-clear" onClick={() => { onChange(""); setOpen(false); }}>✕</button>
            )}
            {open && (
                <div className="ac-dropdown">
                    {filtered.length === 0
                        ? <div className="ac-no-results">No results for "{value}"</div>
                        : filtered.map((item, i) => (
                            <div key={i} className={`ac-item ${i === cursor ? "active" : ""}`}
                                onMouseDown={e => { e.preventDefault(); select(item); }}>
                                <span className="ac-item-icon"><AutocompleteLogo id={item.icon} /></span>
                                <div className="ac-item-text">
                                    <span className="ac-item-label">{item.label}</span>
                                    {item.sub && <span className="ac-item-sub">{item.sub}</span>}
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
}

export default AutocompleteInput
