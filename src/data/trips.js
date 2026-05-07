// My Trips and Rewards page data

export const DUMMY_TRIPS = {
    upcoming: [
        { id: "VG-2847301", type: "Hotel", iconBg: "linear-gradient(135deg,#003d80,#0077cc)", title: "The Ritz-Carlton Bali", details: "Bali, Indonesia · 20 Apr – 25 Apr 2026 · 1 Room, 2 Guests", status: "upcoming", price: "MYR 3,400" },
        { id: "VG-2847302", type: "Flight", iconBg: "linear-gradient(135deg,#c0392b,#e74c3c)", title: "Penang → Singapore", details: "AirAsia FY 303 · 28 Apr 2026 · 07:30 – 08:40 · 1 Adult", status: "upcoming", price: "MYR 149" },
        { id: "VG-2847303", type: "Transfer", iconBg: "linear-gradient(135deg,#1a6641,#27ae60)", title: "KLIA Airport Transfer", details: "KLIA → Bukit Bintang · 20 Apr 2026 · 14:00 · Toyota Camry", status: "upcoming", price: "MYR 75" },
    ],
    completed: [
        { id: "VG-2194820", type: "Hotel", iconBg: "linear-gradient(135deg,#003d80,#0077cc)", title: "Marina Bay Sands", details: "Singapore · 10 Jan – 14 Jan 2026 · 2 Adults", status: "completed", price: "MYR 2,720" },
        { id: "VG-2194821", type: "Flight", iconBg: "linear-gradient(135deg,#c0392b,#e74c3c)", title: "KL → Tokyo", details: "Japan Airlines JL 724 · 10 Jan 2026 · Economy", status: "completed", price: "MYR 780" },
        { id: "VG-2194822", type: "Car", iconBg: "linear-gradient(135deg,#4a1942,#c0392b)", title: "Toyota Camry Rental", details: "Kuala Lumpur · 5 days · Hertz · Auto", status: "completed", price: "MYR 650" },
        { id: "VG-2011543", type: "Train", iconBg: "linear-gradient(135deg,#1a1a3a,#303f9f)", title: "KL Sentral → JB Sentral", details: "KTM ETS Gold · 15 Dec 2025 · 07:00 · 1 Adult", status: "completed", price: "MYR 59" },
        { id: "VG-2011544", type: "Cruise", iconBg: "linear-gradient(135deg,#001f3f,#0077cc)", title: "Penang Paradise Escape", details: "Penang → Phuket · 3 Nights · Interior Cabin", status: "completed", price: "MYR 380" },
    ],
    cancelled: [
        { id: "VG-1983411", type: "Bus", iconBg: "linear-gradient(135deg,#1a3a1a,#388e3c)", title: "Penang → KL Sleeper", details: "Aeroline · 5 Mar 2026 · 22:30 · 1 Passenger", status: "cancelled", price: "MYR 80" },
    ],
};

export const HISTORY = [
    { date: "12 Apr 2026", desc: "Hotel booking – Ritz-Carlton Bali", pts: "+680", type: "earn" },
    { date: "28 Mar 2026", desc: "Flight booking – Penang → Singapore", pts: "+149", type: "earn" },
    { date: "20 Mar 2026", desc: "Redeemed – Flight Discount Voucher", pts: "−1,500", type: "redeem" },
    { date: "10 Jan 2026", desc: "Hotel booking – Marina Bay Sands", pts: "+680", type: "earn" },
    { date: "10 Jan 2026", desc: "Flight booking – KL → Tokyo", pts: "+390", type: "earn" },
    { date: "15 Dec 2025", desc: "Train booking – KL Sentral → JB", pts: "+30", type: "earn" },
    { date: "01 Dec 2025", desc: "Bonus – Year-End Double Points Promo", pts: "+500", type: "earn" },
    { date: "20 Nov 2025", desc: "Redeemed – Hotel Night Credit", pts: "−3,000", type: "redeem" },
];



