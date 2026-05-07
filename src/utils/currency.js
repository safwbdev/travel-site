import { useCurrency } from '../i18n/index.js'

// Currency conversion and display helpers

function cvt(myr, cur) {
    if (!cur || myr == null) return "—";
    const v = myr * cur.rate;
    if (cur.code === "JPY" || cur.code === "KRW" || cur.code === "IDR")
        return Math.round(v).toLocaleString();
    return v < 10
        ? v.toFixed(2)
        : Math.round(v).toLocaleString();
}

export { cvt }
