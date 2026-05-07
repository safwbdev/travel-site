import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'

function DetailGallery({ photos, gradients }) {
    const [lbOpen, setLbOpen] = useState(false);
    const [lbIdx, setLbIdx] = useState(0);
    const photoLabels = ["Overview", "Exterior", "Interior", "Dining", "Entertainment", "Sunset View", "Facilities", "Map"];

    const prev = () => setLbIdx(i => (i - 1 + photos.length) % photos.length);
    const next = () => setLbIdx(i => (i + 1) % photos.length);

    useEffect(() => {
        if (!lbOpen) return;
        const h = (e) => { if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); if (e.key === "Escape") setLbOpen(false); };
        document.addEventListener("keydown", h);
        return () => document.removeEventListener("keydown", h);
    }, [lbOpen]);

    useEffect(() => {
        document.body.style.overflow = lbOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [lbOpen]);

    const bg = (i) => gradients[i % gradients.length];
    return (
        <>
            <div className="hd-gallery" onClick={() => setLbOpen(true)}>
                <div className="hd-gallery-main">
                    <img src={photos[0]} alt="Main view" loading="eager" />
                </div>
                <div className="hd-gallery-thumbs">
                    {photos.slice(1, 5).map((p, i) => (
                        <div key={i} className="hd-gallery-thumb">
                            <img src={p} alt={`View ${i + 2}`} loading="lazy" />
                            {i === 3 && photos.length > 5 && (
                                <div className="hd-gallery-more">
                                    <span>+{photos.length - 5}</span>
                                    <span>more photos</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX */}
            {lbOpen && (
                <div className="lb-overlay" onClick={() => setLbOpen(false)}>
                    <div className="lb-inner" onClick={e => e.stopPropagation()}>
                        <button className="lb-close" onClick={() => setLbOpen(false)}>✕</button>
                        <button className="lb-arrow prev" onClick={prev}>‹</button>
                        <button className="lb-arrow next" onClick={next}>›</button>
                        <div className="lb-main">
                            <img src={photos[lbIdx]} alt={photoLabels[lbIdx] || `Photo ${lbIdx + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 8 }} />
                        </div>
                        <div className="lb-caption">{photoLabels[lbIdx] || `Photo ${lbIdx + 1}`} · {lbIdx + 1} / {photos.length}</div>
                        <div className="lb-thumbs">
                            {photos.map((p, i) => (
                                <div key={i} className={`lb-t ${i === lbIdx ? "active" : ""}`} onClick={() => setLbIdx(i)}>
                                    <img src={p} alt={`Thumb ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 4 }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DetailGallery
