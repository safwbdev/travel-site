import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'

function SkeletonList({ count = 3, height = 160 }) {
    return (
        <div className="result-list">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} style={{ borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow)", display: "grid", gridTemplateColumns: "160px 1fr", minHeight: height }}>
                    <div className="skeleton" style={{ minHeight: height }} />
                    <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
                        <div className="skeleton" style={{ height: 20, width: "55%" }} />
                        <div className="skeleton" style={{ height: 14, width: "35%" }} />
                        <div className="skeleton" style={{ height: 14, width: "75%" }} />
                        <div className="skeleton" style={{ height: 14, width: "45%" }} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkeletonList
