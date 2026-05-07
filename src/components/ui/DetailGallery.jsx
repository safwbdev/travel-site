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
            <div className="dp-hero" onClick={() => setLbOpen(true)}>
                <div className="dp-hero-main" style={{ background: bg(0) }}>
                    {/* <span>{photos[0]}</span> */}
                    <span>
                        <img src={photos[0]} alt="" />

                    </span>
                </div>
                <div className="dp-hero-thumbs">
                    {photos.slice(1, 5).map((p, i) => (
                        <div key={i} className="dp-hero-thumb" style={{ background: bg(i + 1), border: "1px solid lime" }}>
                            <span>
                                <img src={p} alt="" />
                            </span>
                            {i === 3 && photos.length > 5 && (
                                <div className="dp-more-overlay"><span>+{photos.length - 5}</span><span>more photos</span></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {lbOpen && (
                <div className="lb-overlay" onClick={() => setLbOpen(false)}>
                    <div className="lb-inner" onClick={e => e.stopPropagation()}>
                        <button className="lb-close" onClick={() => setLbOpen(false)}>✕</button>
                        <button className="lb-arrow prev" onClick={prev}>‹</button>
                        <button className="lb-arrow next" onClick={next}>›</button>
                        <div className="lb-main" style={{ background: bg(lbIdx) }}><img src={photos[lbIdx]} alt="" /></div>
                        <div className="lb-caption">{photoLabels[lbIdx] || `Photo ${lbIdx + 1}`} · {lbIdx + 1} / {photos.length}</div>
                        <div className="lb-thumbs">
                            {photos.map((p, i) => (
                                <div key={i} className={`lb-t ${i === lbIdx ? "active" : ""}`} style={{ background: bg(i) }} onClick={() => setLbIdx(i)}><img src={p} alt="" /></div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DetailGallery
