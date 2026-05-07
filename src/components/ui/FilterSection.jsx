import { useCurrency } from "../../i18n";
import { cvt } from "../../utils/currency";

function PriceFilterSection({ label, min, max, value, onChange }) {
    const cur = useCurrency();

    return (
        <div className="filter-section">
            <div className="filter-section-title">{label} ({cur.symbol})</div>
            <div className="price-range">
                <input type="range" min={min} max={max} step={max > 1000 ? 50 : max > 200 ? 5 : 5}
                    value={value} onChange={e => onChange(+e.target.value)} />
                <div className="price-labels">
                    <span>{cur.symbol} {cvt(min, cur)}</span>
                    <span style={{ color: "var(--brand)", fontWeight: 700 }}>{cur.symbol} {cvt(value, cur)}</span>
                </div>
            </div>
        </div>
    );
}

export default PriceFilterSection