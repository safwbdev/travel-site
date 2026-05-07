import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'

function GuestPicker({ rooms, adults, children, infants, onChange }) {
    const [open, setOpen] = useState(false);
    const t = useT();
    const ref = { current: null };

    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const adj = (field, delta) => {
        const vals = { rooms, adults, children, infants };
        vals[field] = Math.max(field === "rooms" ? 1 : field === "adults" ? 1 : 0, vals[field] + delta);
        // rooms can't exceed 9, guests per category cap at 9
        if (field === "rooms" && vals.rooms > 9) vals.rooms = 9;
        if (vals[field] > 9) vals[field] = 9;
        // adults must be >= rooms
        if (vals.adults < vals.rooms) vals.adults = vals.rooms;
        onChange(vals);
    };

    const totalGuests = adults + children + infants;
    const label = `${rooms} Room${rooms > 1 ? "s" : ""} · ${adults} Adult${adults > 1 ? "s" : ""}${children > 0 ? ` · ${children} Child${children > 1 ? "ren" : ""}` : ""}${infants > 0 ? ` · ${infants} Infant${infants > 1 ? "s" : ""}` : ""}`;

    const rows = [
        { field: "rooms", label: t("rooms"), sub: t("perBooking"), min: 1 },
        { field: "adults", label: t("adults"), sub: t("age18plus"), min: 1 },
        { field: "children", label: t("children"), sub: t("age217"), min: 0 },
        { field: "infants", label: t("infants"), sub: t("under2lap"), min: 0 },
    ];
    const vals = { rooms, adults, children, infants };

    return (
        <div className="gp-wrap" ref={el => ref.current = el}>
            <button
                type="button"
                className={`gp-trigger ${open ? "open" : ""}`}
                onClick={() => setOpen(o => !o)}
            >
                <span>{label}</span>
                <span className={`gp-arrow ${open ? "open" : ""}`}>▼</span>
            </button>

            {open && (
                <div className="gp-panel">
                    {rows.map(r => (
                        <div key={r.field} className="gp-row">
                            <div className="gp-label">
                                <span className="gp-label-name">{r.label}</span>
                                <span className="gp-label-sub">{r.sub}</span>
                            </div>
                            <div className="gp-controls">
                                <button className="gp-btn" disabled={vals[r.field] <= r.min} onClick={() => adj(r.field, -1)}>−</button>
                                <span className="gp-count">{vals[r.field]}</span>
                                <button className="gp-btn" disabled={vals[r.field] >= 9} onClick={() => adj(r.field, +1)}>+</button>
                            </div>
                        </div>
                    ))}
                    <div className="gp-footer">
                        <button className="gp-done" onClick={() => setOpen(false)}>{t("done")}</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GuestPicker
