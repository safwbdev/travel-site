import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency, LANGUAGES } from '../../i18n/index.js'
import LangCurrencySelector from '../ui/LangCurrencySelector.jsx';
import { AuthModal } from '../ui';

function NavBar({ onBack, onNav, activePage }) {
    const [authModal, setAuthModal] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const t = useT();

    const navLinks = [
        { id: "deals", key: "deals", icon: "🔥" },
        { id: "mytrips", key: "myTrips", icon: "🧳" },
        { id: "rewards", key: "rewards", icon: "⭐" },
        { id: "support", key: "support", icon: "💬" },
    ];

    const handleNavLink = (id) => {
        setMenuOpen(false);
        onNav && onNav(id);
    };

    // Close drawer on outside click / escape
    useEffect(() => {
        if (!menuOpen) return;
        const close = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        document.addEventListener("keydown", close);
        return () => document.removeEventListener("keydown", close);
    }, [menuOpen]);

    // Prevent body scroll when drawer open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            {authModal && <AuthModal initialTab={authModal} onClose={() => setAuthModal(null)} />}

            <nav>
                <div className="nav-inner">
                    {/* Logo */}
                    <div className="logo" onClick={() => { setMenuOpen(false); onBack(); }}>
                        Voya<span>qo</span>
                    </div>

                    {/* Desktop nav links */}
                    <ul className="nav-links">
                        {navLinks.map(({ id, key }) => (
                            <li key={id}>
                                <a
                                    href="#"
                                    className={activePage === id ? "nav-active" : ""}
                                    onClick={e => { e.preventDefault(); handleNavLink(id); }}
                                >
                                    {t(key)}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop actions */}
                    <div className="nav-actions">
                        <LangCurrencySelector />
                        <button className="btn-ghost" onClick={() => setAuthModal("login")}>{t("logIn")}</button>
                        <button className="btn-solid" onClick={() => setAuthModal("signup")}>{t("signUp")}</button>
                        {/* Hamburger — mobile only */}
                        <button
                            className={`hamburger ${menuOpen ? "open" : ""}`}
                            onClick={() => setMenuOpen(o => !o)}
                            aria-label="Menu"
                        >
                            <span /><span /><span />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile overlay backdrop */}
            <div
                className={`nav-overlay ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile drawer */}
            <div className={`nav-drawer ${menuOpen ? "open" : ""}`}>
                <div className="nav-drawer-inner">
                    {/* Nav page links */}
                    {navLinks.map(({ id, key, icon }) => (
                        <button
                            key={id}
                            className={`nav-drawer-link ${activePage === id ? "active" : ""}`}
                            onClick={() => handleNavLink(id)}
                        >
                            <span className="nav-drawer-icon">{icon}</span>
                            {t(key)}
                        </button>
                    ))}

                    <div className="nav-drawer-divider" />

                    {/* Auth buttons */}
                    <div className="nav-drawer-actions">
                        <button
                            className="btn-ghost"
                            onClick={() => { setMenuOpen(false); setAuthModal("login"); }}
                        >
                            {t("logIn")}
                        </button>
                        <button
                            className="btn-solid"
                            onClick={() => { setMenuOpen(false); setAuthModal("signup"); }}
                        >
                            {t("signUp")}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar
