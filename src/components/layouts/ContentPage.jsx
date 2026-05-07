import { useState, useEffect, useMemo } from 'react'
import { useT, useCurrency } from '../../i18n/index.js'
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

function ContentPage({ title, subtitle, tag, onBack, onNav, activePage, children }) {
    return (
        <>
            {/* <style>{PAGES_CSS}</style> */}
            {/* <style>{FOOTER_PAGES_CSS}</style> */}
            <NavBar
                onBack={onBack}
                onNav={onNav}
                activePage={activePage} />
            <div className="pg-hero">
                <div className="pg-hero-inner">
                    {tag && <span className="pg-hero-tag">{tag}</span>}
                    <h1 className="pg-hero-title">{title}</h1>
                    {subtitle && <p className="pg-hero-sub">{subtitle}</p>}
                </div>
            </div>
            <div className="cp-page">{children}</div>
            <Footer onNav={onNav} />
        </>
    );
}

export default ContentPage
