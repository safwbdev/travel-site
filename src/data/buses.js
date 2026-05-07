import bus from '../assets/bus/bus.jpg';

// BUS_DB
export const BUS_DB = [
    {
        id: 1,
        from: "Penang",
        to: "KL",
        dep: "07:00",
        arr: "10:30",
        dur: "3h 30m",
        operator: "Konsortium",
        type: "Express",
        seats: 40,
        price: 35,
        originalPrice: 50,
        thumb: bus,
        amenities: ["A/C", "WiFi", "USB"],
        rating: 4.5,
        reviews: 890

    },
    {
        id: 2,
        from: "Penang",
        to: "KL",
        dep: "09:30",
        arr: "13:00",
        dur: "3h 30m",
        operator: "Transnational",
        type: "Deluxe",
        seats: 40,
        price: 45,
        originalPrice: 62,
        thumb: bus,
        amenities: ["A/C", "WiFi", "Recliner", "USB"],
        rating: 4.6,
        reviews: 760

    },
    {
        id: 3,
        from: "Penang",
        to: "KL",
        dep: "14:00",
        arr: "17:45",
        dur: "3h 45m",
        operator: "KKKL",
        type: "Premium",
        seats: 28,
        price: 65,
        originalPrice: 88,
        thumb: bus,
        amenities: ["A/C", "WiFi", "Recliner", "Meal", "USB"],
        rating: 4.8,
        reviews: 420

    },
    {
        id: 4,
        from: "Penang",
        to: "KL",
        dep: "22:30",
        arr: "02:00",
        dur: "3h 30m",
        operator: "Aeroline",
        type: "Sleeper",
        seats: 20,
        price: 80,
        originalPrice: 110,
        thumb: bus,
        amenities: ["A/C", "WiFi", "Flat-Bed", "Pillow"],
        rating: 4.7,
        reviews: 310

    },
    {
        id: 5,
        from: "KL",
        to: "Singapore",
        dep: "08:00",
        arr: "14:00",
        dur: "6h 00m",
        operator: "Transnational",
        type: "Express",
        seats: 40,
        price: 55,
        originalPrice: 80,
        thumb: bus,
        amenities: ["A/C", "WiFi", "USB"],
        rating: 4.4,
        reviews: 650

    },
    {
        id: 6,
        from: "KL",
        to: "Singapore",
        dep: "22:00",
        arr: "04:00",
        dur: "6h 00m",
        operator: "Aeroline",
        type: "Sleeper",
        seats: 20,
        price: 100,
        originalPrice: 140,
        thumb: bus,
        amenities: ["A/C", "WiFi", "Flat-Bed", "Pillow", "Meal"],
        rating: 4.8,
        reviews: 290

    },
    {
        id: 7,
        from: "KL",
        to: "Johor Bahru",
        dep: "10:00",
        arr: "13: 30",
        dur: "3h 30m",
        operator: "Konsortium",
        type: "Express",
        seats: 40, price: 28,
        originalPrice: 40,
        thumb: bus,
        amenities: ["A / C", "USB"],
        rating: 4.3,
        reviews: 520

    },
    {
        id: 8,
        from: "KL",
        to: "Johor Bahru",
        dep: "23:00",
        arr: "02: 30",
        dur: "3h 30m",
        operator: "KKKL",
        type: "Premium",
        seats: 28,
        price: 55,
        originalPrice: 75,
        thumb: bus,
        amenities: ["A / C", "WiFi", "Recliner", "USB"],
        rating: 4.6,
        reviews: 310

    },
    {
        id: 9,
        from: "Penang",
        to: "Singapore",
        dep: "21:00",
        arr: "05:30",
        dur: "8h 30m",
        operator: "Aeroline",
        type: "Sleeper",
        seats: 20,
        price: 120,
        originalPrice: 165,
        thumb: bus,
        amenities: ["A/C", "WiFi", "Flat-Bed", "Pillow", "Meal"],
        rating: 4.9,
        reviews: 180

    },
    {
        id: 10,
        from: "Singapore",
        to: "Bangkok",
        dep: "08:00",
        arr: "32:00",
        dur: "24h 00m",
        operator: "Grasshopper",
        type: "Tourist",
        seats: 40,
        price: 150,
        originalPrice: 200,
        thumb: bus,
        amenities: ["A/C", "WiFi", "USB", "2 Stops"],
        rating: 4.3,
        reviews: 140

    },
];

// BUS_DETAILS
export const BUS_DETAILS = {
    1: { coach: "Yutong ZK6122H9", year: 2023, wifi: true, usb: true, recliner: false, meal: false, toilet: true, boarding: "Komtar Bus Terminal, Penang", alighting: "TBS Terminal, KL", provider_info: "Konsortium Bas Ekspres is Malaysia's largest intercity bus operator, running over 200 daily routes with a modern fleet.", policies: ["Boarding: 15 min before departure", "No standing passengers", "Baggage: 1 bag in hold (max 20kg)", "Rescheduling: MYR 5 fee", "No refund day of travel"], inclusions: ["Reserved seat", "Hold baggage", "A/C throughout", "USB charging port", "Onboard toilet"] },
    3: { coach: "King Long XMQ6127Y", year: 2024, wifi: true, usb: true, recliner: true, meal: true, toilet: true, boarding: "Komtar Bus Terminal, Penang", alighting: "TBS Terminal, KL", provider_info: "KKKL Travel & Tours operates premium coaches with superior comfort, serving major routes in Malaysia and Singapore.", policies: ["Boarding: 20 min before departure", "Strictly no food (meal provided)", "Baggage: 1 bag max 25kg", "Free reschedule once", "No refund within 24h"], inclusions: ["Wide recliner seats", "Packaged meal", "Blanket & pillow", "A/C with personal vents", "WiFi + USB charging"] },
    4: { coach: "Scania Touring HD", year: 2024, wifi: true, usb: true, recliner: true, meal: false, toilet: true, sleeper: true, boarding: "Komtar Bus Terminal, Penang", alighting: "TBS Terminal, KL", provider_info: "Aeroline operates the most premium overnight coaches in Malaysia, with fully flat-bed seats for overnight comfort.", policies: ["Boarding: 30 min before departure", "Flat-bed seats — no seat sharing", "Baggage: 1 bag max 25kg", "Free change up to 48h", "Refund: 80% up to 24h"], inclusions: ["Fully flat-bed sleeper", "Pillow, blanket & eye mask", "WiFi", "USB charging", "Personal reading light"] },
    6: { coach: "Volvo 9900", year: 2023, wifi: true, usb: true, recliner: true, meal: true, toilet: true, sleeper: true, boarding: "TBS Terminal, KL", alighting: "Golden Mile Tower, Singapore", provider_info: "Aeroline's KL–Singapore route is the gold standard in cross-border coach travel, with flat-bed comfort and border immigration assistance.", policies: ["Boarding: 45 min before departure", "Passport required — valid for 6 months", "Border stop at Johor Bahru", "Baggage: 1 bag max 25kg", "Refund: 80% up to 24h"], inclusions: ["Flat-bed sleeper seat", "Full meal service", "Pillow & blanket", "WiFi + USB", "Border assistance"] },
};

export const DEFAULT_BUS_DETAIL = { coach: "Modern Express Coach", year: 2023, wifi: true, usb: true, recliner: false, meal: false, toilet: true, boarding: "Main Terminal", alighting: "Destination Terminal", provider_info: "A reputable intercity bus operator offering comfortable and affordable travel between cities.", policies: ["Board 15 min before departure", "1 hold bag per passenger", "Reschedule fee applies", "No refund on day of travel"], inclusions: ["Reserved seat", "A/C throughout", "USB charging", "Hold baggage"] };
