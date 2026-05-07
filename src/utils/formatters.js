// Shared formatting helpers

import { TRANSLATIONS } from "../i18n/translations";

const norm = s => (s || "").toLowerCase().replace(/[^a-z]/g, "");
const fmtD = d => d ? new Date(d).toLocaleDateString("en-MY", { day: "numeric", month: "short", year: "numeric" }) : "";
const nights = (a, b) => { const d = Math.round((new Date(b) - new Date(a)) / 86400000); return d > 0 ? d : 1; };
const disc = (p, o) => Math.round((1 - p / o) * 100);

// Global navigation handler — set once from App, used by Footer everywhere
let _globalNav = () => { };
const setGlobalNav = fn => { _globalNav = fn; };
const globalNav = (...args) => _globalNav(...args);

// Fallback: for languages without full translation, use English
["zh-TW", "vi", "ar", "fr", "de"].forEach(code => { TRANSLATIONS[code] = TRANSLATIONS.en; });

// useT() — returns a translation function for the current language
function useT() {
    const lang = useLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return (key) => dict[key] ?? TRANSLATIONS.en[key] ?? key;
}

export { norm, fmtD, nights, disc }
