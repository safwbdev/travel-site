// Format passenger count summary string

function paxLabel(values, rows) {
    return rows
        .filter(r => (values[r.field] || 0) > 0)
        .map(r => { const n = values[r.field]; return `${n} ${r.label}${n > 1 && !r.label.endsWith("s") && !r.label.endsWith("ren") ? "s" : ""}`; })
        .join(" · ") || "Select passengers";
}

export { paxLabel }
