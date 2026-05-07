// Smart city matching with aliases (KUL↔KL, NRT↔Tokyo, etc.)

import { CITY_ALIASES } from "../constants/city";
import { norm } from "./formatters";

// Returns true if searchInput matches dbCity (handles aliases, partial matches, IATA codes)
function matchCity(searchInput, dbCity) {
    if (!searchInput || searchInput.trim() === "") return true; // empty = show all
    const s = norm(searchInput);
    const d = norm(dbCity);
    if (!s) return true;
    // Direct match
    if (d.includes(s) || s.includes(d)) return true;
    // Alias lookup
    const sAliases = CITY_ALIASES[s] || [];
    if (sAliases.some(a => d.includes(a) || a.includes(d))) return true;
    // Check if any alias of dbCity matches the search
    const dAliases = CITY_ALIASES[d] || [];
    if (dAliases.some(a => s.includes(a) || a.includes(s))) return true;
    // Token-by-token: "Penang (PEN)" → ["penang","pen"] — try each token
    const sTokens = searchInput.toLowerCase().split(/[\s,()\/→]+/).filter(t => t.length > 1).map(t => t.replace(/[^a-z]/g, ""));
    return sTokens.some(token => {
        if (!token) return false;
        if (d.includes(token) || token.includes(d)) return true;
        const tAliases = CITY_ALIASES[token] || [];
        return tAliases.some(a => d.includes(a) || a.includes(d));
    });
}

export { matchCity }
