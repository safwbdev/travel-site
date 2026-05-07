import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'
import { pwStrength } from '../../utils/pwStrength.js';
import { FaSquareFacebook, FaGoogle, FaApple, FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaTriangleExclamation, FaRocket } from "react-icons/fa6";
import { LuPartyPopper } from "react-icons/lu";

function AuthModal({ initialTab, onClose }) {
    const [tab, setTab] = useState(initialTab || "login");
    const [showPw, setShowPw] = useState(false);
    const [showPw2, setShowPw2] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const t = useT();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPw, setLoginPw] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPw, setSignupPw] = useState("");
    const [signupPw2, setSignupPw2] = useState("");
    const [agree, setAgree] = useState(false);

    const strength = pwStrength(signupPw);
    const strengthLabel = ["", t("weakPw"), t("fairPw"), t("goodPw"), t("strongPw")][strength] || "";
    const strengthColor = ["", "weak", "fair", "good", "good"][strength] || "";

    // Close on Escape
    useEffect(() => {
        const h = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", h);
        document.body.style.overflow = "hidden";
        return () => { document.removeEventListener("keydown", h); document.body.style.overflow = ""; };
    }, []);

    const switchTab = (t) => { setTab(t); setError(""); setSuccess(false); };

    const handleLogin = () => {
        if (!loginEmail.trim()) { setError("Please enter your email address."); return; }
        if (!loginPw) { setError("Please enter your password."); return; }
        if (!/\S+@\S+\.\S+/.test(loginEmail)) { setError("Please enter a valid email address."); return; }
        setError(""); setLoading(true);
        setTimeout(() => { setLoading(false); setSuccess(true); setTimeout(onClose, 2000); }, 1400);
    };

    const handleSignup = () => {
        if (!firstName.trim()) { setError("Please enter your first name."); return; }
        if (!signupEmail.trim() || !/\S+@\S+\.\S+/.test(signupEmail)) { setError("Please enter a valid email address."); return; }
        if (signupPw.length < 8) { setError("Password must be at least 8 characters."); return; }
        if (signupPw !== signupPw2) { setError("Passwords do not match."); return; }
        if (!agree) { setError("Please agree to the Terms of Service and Privacy Policy."); return; }
        setError(""); setLoading(true);
        setTimeout(() => { setLoading(false); setSuccess(true); setTimeout(onClose, 2200); }, 1600);
    };

    return (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
            <div className="modal-box">
                <div className="modal-header">
                    <div className="modal-logo">Voya<span>go</span></div>
                    <div className="modal-title">{tab === "login" ? t("welcomeBack") : t("createAccount")}</div>
                    <div className="modal-sub">{tab === "login" ? t("signInAccess") : t("join12m")}</div>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>
                <div className="modal-tabs">
                    <button className={`modal-tab ${tab === "login" ? "active" : ""}`} onClick={() => switchTab("login")}>{t("logIn")}</button>
                    <button className={`modal-tab ${tab === "signup" ? "active" : ""}`} onClick={() => switchTab("signup")}>{t("signUp")}</button>
                </div>
                <div className="modal-body">
                    {success ? (
                        <div className="auth-success">
                            <div className="auth-success-icon">{tab === "login" ? <LuPartyPopper /> : <FaRocket />}</div>
                            <div className="auth-success-title">{tab === "login" ? t("successLogin") : t("successSignup")}</div>
                            <div className="auth-success-sub">{tab === "login" ? t("successLoginSub") : t("successSignupSub")}</div>
                            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand)", animation: "pulse 1s infinite" }} />
                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand)", animation: "pulse 1s .2s infinite", opacity: .7 }} />
                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand)", animation: "pulse 1s .4s infinite", opacity: .4 }} />
                            </div>
                        </div>
                    ) : tab === "login" ? (
                        <>
                            {error && <div className="auth-error"><span><FaTriangleExclamation /></span>{error}</div>}
                            <div className="auth-social">
                                <button className="auth-social-btn"><span><FaGoogle /></span> Google</button>
                                <button className="auth-social-btn"><span><FaSquareFacebook /></span> Facebook</button>
                                <button className="auth-social-btn"><span><FaApple /></span> Apple</button>
                            </div>
                            <div className="auth-divider"><span>or {t("logIn").toLowerCase()} with email</span></div>
                            <div className="auth-field">
                                <label>{t("emailAddress")}</label>
                                <div className="auth-input-wrap">
                                    <span className="auth-input-icon"><FaEnvelope /></span>
                                    <input className="auth-input has-icon" type="email" placeholder="your@email.com"
                                        value={loginEmail} onChange={e => setLoginEmail(e.target.value)}
                                        onKeyDown={e => e.key === "Enter" && handleLogin()} />
                                </div>
                            </div>
                            <div className="auth-field">
                                <label>{t("password")}</label>
                                <div className="auth-input-wrap">
                                    <span className="auth-input-icon"><FaLock /></span>
                                    <input className="auth-input has-icon" type={showPw ? "text" : "password"} placeholder={t("password")}
                                        value={loginPw} onChange={e => setLoginPw(e.target.value)}
                                        onKeyDown={e => e.key === "Enter" && handleLogin()} style={{ paddingRight: 40 }} />
                                    <button className="auth-input-toggle" onClick={() => setShowPw(v => !v)}>{showPw ? <FaEyeSlash /> : <FaEye />}</button>
                                </div>
                            </div>
                            <div style={{ textAlign: "right", marginTop: -10, marginBottom: 16 }}>
                                <a style={{ fontSize: ".8rem", color: "var(--brand)", fontWeight: 600, cursor: "pointer" }}>{t("forgotPassword")}</a>
                            </div>
                            <button className="auth-submit" onClick={handleLogin} disabled={loading}>
                                {loading ? t("signingIn") : t("signInBtn")}
                            </button>
                            <div className="auth-footer">
                                {t("noAccount")} <a onClick={() => switchTab("signup")}>{t("signUpFree")}</a>
                            </div>
                        </>
                    ) : (
                        <>
                            {error && <div className="auth-error"><span><FaTriangleExclamation /></span>{error}</div>}
                            <div className="auth-social">
                                <button className="auth-social-btn"><span><FaGoogle /></span> Google</button>
                                <button className="auth-social-btn"><span><FaSquareFacebook /></span> Facebook</button>
                                <button className="auth-social-btn"><span><FaApple /></span> Apple</button>
                            </div>
                            <div className="auth-divider"><span>or {t("signUp").toLowerCase()} with email</span></div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                <div className="auth-field">
                                    <label>{t("firstName")}</label>
                                    <div className="auth-input-wrap">
                                        <span className="auth-input-icon"><FaUser /></span>
                                        <input className="auth-input has-icon" type="text" placeholder="Ahmad"
                                            value={firstName} onChange={e => setFirstName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="auth-field">
                                    <label>{t("lastName")}</label>
                                    <div className="auth-input-wrap">
                                        <span className="auth-input-icon"><FaUser /></span>
                                        <input className="auth-input has-icon" type="text" placeholder="Razif"
                                            value={lastName} onChange={e => setLastName(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="auth-field">
                                <label>{t("emailAddress")}</label>
                                <div className="auth-input-wrap">
                                    <span className="auth-input-icon"><FaEnvelope /></span>
                                    <input className="auth-input has-icon" type="email" placeholder="your@email.com"
                                        value={signupEmail} onChange={e => setSignupEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="auth-field">
                                <label>{t("password")}</label>
                                <div className="auth-input-wrap">
                                    <span className="auth-input-icon"><FaLock /></span>
                                    <input className="auth-input has-icon" type={showPw ? "text" : "password"} placeholder="Min. 8 characters"
                                        value={signupPw} onChange={e => setSignupPw(e.target.value)} style={{ paddingRight: 40 }} />
                                    <button className="auth-input-toggle" onClick={() => setShowPw(v => !v)}>{showPw ? <FaEyeSlash /> : <FaEye />}</button>
                                </div>
                                {signupPw && (
                                    <>
                                        <div className="pw-strength">
                                            {[1, 2, 3, 4].map(i => <div key={i} className={`pw-bar ${strength >= i ? strengthColor : ""}`} />)}
                                        </div>
                                        <div className="pw-label">{strengthLabel} {t("pwLabel")}</div>
                                    </>
                                )}
                            </div>
                            <div className="auth-field">
                                <label>{t("confirmPassword")}</label>
                                <div className="auth-input-wrap">
                                    <span className="auth-input-icon"><FaLock /></span>
                                    <input className="auth-input has-icon" type={showPw2 ? "text" : "password"} placeholder={t("confirmPassword")}
                                        value={signupPw2} onChange={e => setSignupPw2(e.target.value)} style={{ paddingRight: 40 }} />
                                    <button className="auth-input-toggle" onClick={() => setShowPw2(v => !v)}>{showPw2 ? <FaEyeSlash /> : <FaEye />}</button>
                                </div>
                                {signupPw2 && signupPw !== signupPw2 && <div style={{ fontSize: ".72rem", color: "#ef4444", marginTop: 4 }}>Passwords do not match</div>}
                                {signupPw2 && signupPw === signupPw2 && signupPw.length >= 8 && <div style={{ fontSize: ".72rem", color: "var(--success)", marginTop: 4 }}>✓ Passwords match</div>}
                            </div>
                            <label className="auth-checkbox">
                                <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} />
                                <span>{t("agreeTerms")} <a style={{ color: "var(--brand)", cursor: "pointer", fontWeight: 600 }}>{t("termsLink")}</a> {t("andText")} <a style={{ color: "var(--brand)", cursor: "pointer", fontWeight: 600 }}>{t("privacyLink")}</a>. {t("dealsEmail")}</span>
                            </label>
                            <button className="auth-submit" onClick={handleSignup} disabled={loading}>
                                {loading ? t("creatingAccount") : t("createAccountBtn")}
                            </button>
                            <div className="auth-footer">
                                {t("alreadyAccount")} <a onClick={() => switchTab("login")}>{t("signInLink")}</a>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <style>{`@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}`}</style>
        </div>
    );
}

export default AuthModal
