import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { ContentPage } from '../../components/layouts';
import { FaFileLines } from "react-icons/fa6";

function TermsPage({ onBack, onNav }) {
    const t = useT();
    return (
        <ContentPage title={t("termsHeroTitle")} subtitle={t("termsHeroSub")} tag={<><FaFileLines /> {t("termsTag")}</>} onBack={onBack} onNav={onNav} activePage="terms">
            <div className="legal-updated">{t("lastUpdated")} 1 March 2026 · Effective: 1 April 2026</div>
            <div className="legal-toc">
                <p>{t("tableOfContents")}</p>
                <ol>{["Acceptance of Terms", "Platform Description", "Account Registration", "Booking & Payments", "Cancellations & Refunds", "User Conduct", "Intellectual Property", "Limitation of Liability", "Indemnification", "Governing Law", "Changes to Terms", "Contact"].map((s, i) => <li key={i}>{s}</li>)}</ol>
            </div>
            {[
                ["1. Acceptance of Terms", "By accessing or using Voyaqo's website, mobile application, or any related services (collectively, the 'Platform'), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use the Platform. These Terms form a legally binding agreement between you and Voyaqo Sdn. Bhd. (Company No. 202018001234 (K)), a company incorporated in Malaysia."],
                ["2. Platform Description", "Voyaqo is an online travel marketplace that enables users to search, compare, and book travel products including hotels, flights, car rentals, airport transfers, bus and train tickets, and cruise packages. Voyaqo acts as an agent connecting travellers with third-party travel suppliers. Voyaqo is not itself a hotel, airline, car rental company, or cruise line."],
                ["3. Account Registration", "You must be at least 18 years old to create a Voyaqo account. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must provide accurate, current, and complete information during registration and keep it updated. Voyaqo reserves the right to suspend or terminate accounts that violate these Terms."],
                ["4. Booking & Payments", "All prices displayed are in Malaysian Ringgit (MYR) unless otherwise stated, inclusive of applicable taxes and fees shown at checkout. Payment is processed at the time of booking. Voyaqo uses third-party payment processors and does not store your full card details. Booking confirmation is subject to availability and supplier confirmation. In rare cases of pricing errors, Voyaqo reserves the right to cancel bookings and offer a full refund."],
                ["5. Cancellations & Refunds", "Cancellation and refund policies vary by product and supplier rate type. Please refer to our Cancellation Policy for full details. Refunds are processed to the original payment method. Voyaqo's processing times are stated in the Cancellation Policy, but bank processing times may vary."],
                ["6. User Conduct", "You agree not to use the Platform for any unlawful purpose, to submit false or misleading information, to attempt to access other users' accounts, to use automated systems to scrape or extract data, to interfere with the Platform's operation, or to use the Platform to book travel on behalf of third parties for commercial resale without written authorisation from Voyaqo."],
                ["7. Intellectual Property", "All content on the Platform, including text, graphics, logos, software, and data compilations, is owned by or licensed to Voyaqo and protected by Malaysian and international intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission from Voyaqo."],
                ["8. Limitation of Liability", "To the maximum extent permitted by law, Voyaqo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform or any bookings made through it. Voyaqo's total liability for any claim shall not exceed the amount paid for the specific booking giving rise to the claim. Voyaqo is not liable for the acts or omissions of third-party travel suppliers."],
                ["9. Indemnification", "You agree to indemnify and hold harmless Voyaqo, its directors, employees, and partners from any claims, damages, losses, or expenses (including legal fees) arising from your breach of these Terms, your use of the Platform, or your violation of any third party's rights."],
                ["10. Governing Law", "These Terms are governed by the laws of Malaysia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Penang, Malaysia, without regard to conflict of law principles. For consumer disputes, you may also utilise Malaysia's Tribunal for Consumer Claims (Tribunal Tuntutan Pengguna Malaysia)."],
                ["11. Changes to Terms", "Voyaqo reserves the right to modify these Terms at any time. Material changes will be communicated via email or in-app notification at least 30 days before taking effect. Your continued use of the Platform after the effective date constitutes acceptance."],
                ["12. Contact", "For questions about these Terms, contact our Legal team: Legal Department, Voyaqo Sdn. Bhd., 1 Jalan Sultan Ahmad Shah, George Town, 10050 Penang · legal@voyaqo.com"],
            ].map(([h, t]) => <div key={h} className="cp-section"><h2>{h}</h2><p>{t}</p></div>)}
        </ContentPage>
    );
}

export default TermsPage
