import { useState, useEffect, useMemo } from 'react'
// Lang 
import { useT, useCurrency } from '../../i18n/index.js'
// Components 
import { ContentPage } from '../../components/layouts';
import { FaClipboardList } from "react-icons/fa6";

function CancellationPage({ onBack, onNav }) {
    const t = useT();
    return (
        <ContentPage title={t("cancelHeroTitle")} subtitle={t("cancelHeroSub")} tag={<><FaClipboardList /> {t("cancelTag")}</>} onBack={onBack} onNav={onNav} activePage="cancellation">
            <div className="legal-updated">{t("lastUpdated")} 1 March 2026</div>
            <div className="cp-section">
                <h2>1. General Principles</h2>
                <p>Voyaqo acts as an intermediary between you and travel suppliers (hotels, airlines, car rental companies, cruise lines, etc.). Cancellation policies are primarily set by individual suppliers and reflected in your booking confirmation. Voyaqo honours all supplier policies and additionally provides platform-level protections outlined below.</p>
                <p>Where a booking is marked <strong>"Free Cancellation"</strong>, you may cancel at no charge up to the deadline shown on your booking confirmation. The deadline is always displayed in local time at the destination.</p>
            </div>
            <div className="cp-section">
                <h2>2. Hotels</h2>
                <ul>
                    <li><strong>Free Cancellation rates:</strong> Cancel before the deadline (typically 24–48 hours before check-in) for a full refund.</li>
                    <li><strong>Non-refundable rates:</strong> No refund on cancellation. These rates are discounted in exchange for this restriction.</li>
                    <li><strong>Partial cancellation:</strong> If you shorten your stay after check-in, the hotel's own policy applies — Voyaqo cannot guarantee a refund for unused nights.</li>
                    <li><strong>No-shows:</strong> Treated as a cancellation under the booked rate's policy. Non-refundable rates will be charged in full.</li>
                </ul>
            </div>
            <div className="cp-section">
                <h2>3. Flights</h2>
                <ul>
                    <li><strong>Refundable fares:</strong> Cancel up to 2 hours before departure for a full refund of the base fare. Taxes and fees refund timeline varies by airline.</li>
                    <li><strong>Non-refundable fares:</strong> The base fare is forfeited. Airport taxes and government-imposed surcharges may be refundable — we'll automatically process the eligible portion.</li>
                    <li><strong>Flight changes:</strong> Date and route changes are subject to the airline's change fee plus any fare difference. Use Manage Booking or contact us.</li>
                    <li><strong>Airline-initiated cancellations:</strong> If your airline cancels the flight, you are entitled to a full refund or free rebooking, regardless of your fare type.</li>
                </ul>
            </div>
            <div className="cp-section">
                <h2>4. Car Rental</h2>
                <ul>
                    <li>Most car rentals include free cancellation up to 24–48 hours before pick-up.</li>
                    <li>No-show or late cancellation may incur a fee of up to 1 day's rental charge.</li>
                    <li>Security deposits are released within 5–10 business days after vehicle return, subject to no damage claims.</li>
                </ul>
            </div>
            <div className="cp-section">
                <h2>5. Buses & Trains</h2>
                <ul>
                    <li>Standard tickets: Cancel up to 4 hours before departure for a 80% refund (20% admin fee).</li>
                    <li>Same-day cancellations: 50% refund.</li>
                    <li>No-shows: No refund.</li>
                    <li>Premium Sleeper tickets: Free cancellation up to 48 hours before departure.</li>
                </ul>
            </div>
            <div className="cp-section">
                <h2>6. Cruises</h2>
                <ul>
                    <li><strong>90+ days before departure:</strong> Full refund minus a MYR 100 processing fee.</li>
                    <li><strong>60–89 days before departure:</strong> 75% refund.</li>
                    <li><strong>30–59 days before departure:</strong> 50% refund.</li>
                    <li><strong>Less than 30 days:</strong> No refund.</li>
                    <li>Cruise line-specific policies may offer better terms — always review your booking confirmation.</li>
                </ul>
            </div>
            <div className="cp-section">
                <h2>7. Refund Processing Times</h2>
                <ul>
                    <li><strong>Credit/Debit cards:</strong> 5–10 business days</li>
                    <li><strong>E-wallets (GrabPay, TNG):</strong> 1–3 business days</li>
                    <li><strong>Bank transfer (FPX):</strong> 3–7 business days</li>
                    <li><strong>Voyaqo Miles credit:</strong> Within 24 hours</li>
                </ul>
                <p>You will receive an email confirmation when your refund is initiated. If you have not received your refund after the stated period, please contact our support team with your booking reference.</p>
            </div>
            <div className="cp-section">
                <h2>8. Force Majeure</h2>
                <p>In cases of natural disasters, pandemics, government-imposed travel restrictions, or other extraordinary events beyond either party's control, Voyaqo will work with suppliers to offer the most flexible options available, including free rebooking, travel credits, or full refunds where possible.</p>
            </div>
        </ContentPage>
    );
}

export default CancellationPage
