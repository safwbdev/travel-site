// Images 
import room1 from '../assets/hotel/room1.jpg'
import room2 from '../assets/hotel/room2.jpg'
import room3 from '../assets/hotel/room3.jpg'
import room4 from '../assets/hotel/room4.jpg'
import room5 from '../assets/hotel/room5.jpg'
import room6 from '../assets/hotel/room6.jpg'
import room7 from '../assets/hotel/room7.jpg'
import room8 from '../assets/hotel/room8.jpg'
// CRUISE_DB
export const CRUISE_DB = [
    {
        id: 1,
        name: "Penang Paradise Escape",
        line: "Royal Caribbean",
        ship: "Spectrum",
        from: "Penang",
        to: "Phuket", nights: 3,
        dep: "2026-05-10",
        price: 380,
        originalPrice: 520,
        type: "Short Cruise",
        rating: 4.7, reviews: 890,
        amenities: ["Pool", "Spa", "Casino", "Dining", "Shows"],
        cabins: ["Interior", "Ocean View", "Balcony"]
    },
    {
        id: 2,
        name: "Andaman Sea Discovery",
        line: "Costa Cruises",
        ship: "Costa Serena",
        from: "Penang",
        to: "Langkawi",
        nights: 2,
        dep: "2026-05-14",
        price: 220,
        originalPrice: 300,
        type: "Weekend Cruise",
        rating: 4.5,
        reviews: 620,
        amenities: ["Pool", "Bar", "Dining", "Entertainment"],
        cabins: ["Interior", "Ocean View"]
    },
    {
        id: 3,
        name: "Southeast Asia Explorer",
        line: "Norwegian Cruise",
        ship: "Norwegian Prima",
        from: "Singapore",
        to: "Bangkok",
        nights: 7,
        dep: "2026-05-18",
        price: 1250,
        originalPrice: 1680,
        type: "Island Hopping",
        rating: 4.8, reviews: 1240,
        amenities: ["Pool", "Spa", "Casino", "Dining", "Shows", "Gym"],
        cabins: ["Interior", "Ocean View", "Balcony", "Suite"]
    },
    {
        id: 4,
        name: "Singapore–Bali Grand Voyage",
        line: "Celebrity Cruises",
        ship: "Celebrity Beyond",
        from: "Singapore",
        to: "Bali",
        nights: 10,
        dep: "2026-06-01",
        price: 2100,
        originalPrice: 2800,
        type: "Grand Voyage",
        rating: 4.9, reviews: 760,
        amenities: ["Pool", "Spa", "Fine Dining", "Casino", "Shows", "Gym"],
        cabins: ["Interior", "Ocean View", "Balcony", "Suite", "Penthouse"]
    },
    {
        id: 5,
        name: "Malacca Straits Getaway",
        line: "Star Cruises",
        ship: "SuperStar Libra",
        from: "Penang",
        to: "Langkawi",
        nights: 2,
        dep: "2026-05-07",
        price: 180,
        originalPrice: 250,
        type: "Weekend Cruise",
        rating: 4.3,
        reviews: 450,
        amenities: ["Pool", "Bar", "Dining"],
        cabins: ["Interior", "Ocean View"]
    },
    {
        id: 6,
        name: "Japan Cherry Blossom Cruise",
        line: "Princess Cruises",
        ship: "Diamond Princess",
        from: "Singapore",
        to: "Tokyo",
        nights: 14,
        dep: "2026-06-15",
        price: 3800,
        originalPrice: 5100,
        type: "Signature Voyage",
        rating: 4.9,
        reviews: 580,
        amenities: ["Pool", "Spa", "Fine Dining", "Casino", "Shows", "Gym", "Excursions"],
        cabins: ["Interior", "Ocean View", "Balcony", "Suite"]
    },
    {
        id: 7,
        name: "Gulf of Thailand Cruiser",
        line: "MSC Cruises",
        ship: "MSC Splendida",
        from: "Singapore",
        to: "Phuket",
        nights: 5,
        dep: "2026-05-22",
        price: 680,
        originalPrice: 900,
        type: "Short Cruise",
        rating: 4.6,
        reviews: 710,
        amenities: ["Pool", "Spa", "Casino", "Dining", "Shows"],
        cabins: ["Interior", "Ocean View", "Balcony"]
    },
    {
        id: 8,
        name: "Malaysian Coast Heritage",
        line: "Coral Expeditions",
        ship: "Coral Adventurer",
        from: "Penang",
        to: "Sabah",
        nights: 8,
        dep: "2026-06-05",
        price: 2400,
        originalPrice: 3200,
        type: "Expedition",
        rating: 4.8,
        reviews: 290,
        amenities: ["Pool", "Spa", "Dining", "Lectures", "Excursions"],
        cabins: ["Interior", "Ocean View", "Balcony"]
    },
];

// ── HOME PAGE DEALS & PROMOS ─────────────────────────────────

// CRUISE_DETAILS
export const CRUISE_DETAILS = {
    1: {
        shipLength: "348m",
        grossTonnage: "168,666 GT",
        passengerCapacity: 4905,
        crew: 1551,
        decks: 18,
        yearBuilt: 2019,
        homePort: "Penang",
        photos: [room1, room2, room3, room4, room5, room6, room7, room8],
        overview: "Spectrum of the Seas is Royal Caribbean's quantum-class flagship for Asia, offering next-generation features including skydiving, bumper cars, and the North Star observation capsule. Sail from Penang to the idyllic islands of Thailand.",
        highlights: ["RipCord by iFLY indoor skydiving", "North Star observation capsule", "Bumper cars & roller skating", "15+ dining venues", "Broadway-style shows"],
        dining: ["Windjammer Marketplace (buffet)", "Main Dining Room", "Izumi Japanese", "Chops Grille steakhouse", "Jamie's Italian", "Café Promenade"],
        activities: ["Rock climbing wall", "Two surf simulators", "Escape Room", "Casino Royale", "Aqua Park with slides"],
        cabins: [{
            type: "Interior",
            size: "18 sqm",
            price: 380,
            originalPrice: 520,
            features: ["Virtual balcony", "2 twin beds convertible", "En-suite", "A/C"]
        },
        {
            type: "Ocean View",
            size: "22 sqm",
            price: 520,
            originalPrice: 700,
            features: ["Ocean porthole", "Sitting area", "En-suite", "Extra storage"]
        },
        {
            type: "Balcony",
            size: "27 sqm",
            price: 780,
            originalPrice: 1020,
            features: ["Private balcony", "Seating area", "En-suite", "Ocean view"]
        },
        {
            type: "Suite",
            size: "55 sqm",
            price: 1650,
            originalPrice: 2100,
            features: ["Separate living room", "Concierge access", "Suite lounge", "Priority boarding"]
        }
        ],
        itinerary: [{
            day: 1,
            port: "Penang",
            activity: "Embarkation"
        },
        {
            day: 2,
            port: "At Sea",
            activity: "Fun Day at Sea"
        },
        {
            day: 3,
            port: "Phuket, Thailand",
            activity: "Shore excursions available"
        },
        {
            day: 4,
            port: "Penang",
            activity: "Disembarkation"
        }
        ],
        policies: ["Boarding: 3 hours before departure", "Valid passport required (6 months validity)", "All-inclusive drinks package available", "Dress code: Smart casual for main dining", "No personal drones allowed onboard"]
    },
    3: {
        shipLength: "294m",
        grossTonnage: "144,017 GT",
        passengerCapacity: 4248,
        crew: 1735,
        decks: 16,
        yearBuilt: 2022,
        homePort: "Singapore",
        photos: [room1, room2, room3, room4, room5, room6, room7, room8],
        overview: "Norwegian Prima is the newest and most innovative ship in the Norwegian fleet, homeporting in Singapore for Southeast Asian voyages. Experience the extraordinary dual dry-slide Thrill Island and over 20 dining concepts.",
        highlights: ["Thrill Island with slides & race track", "Galaxy Pavilion VR experiences", "Concierge-level Haven suites", "20+ dining venues", "Three-level oceanfront promenade"],
        dining: ["The Local Bar & Grill", "Ocean Blue seafood", "Teppanyaki", "Cagney's Steakhouse", "Los Lobos Mexican", "Food Republic hawker"],
        activities: ["Go-kart race track", "Laser tag", "Mini golf", "Aqua park", "Mandara Spa"],
        cabins: [{
            type: "Interior Studio",
            size: "14 sqm",
            price: 850,
            originalPrice: 1200,
            features: ["Solo traveller design", "Studio Lounge access", "En-suite", "Queen bed"]
        },
        {
            type: "Ocean View",
            size: "24 sqm",
            price: 1100,
            originalPrice: 1480,
            features: ["Picture window", "2 lower beds", "En-suite", "Wardrobe"]
        }, {
            type: "Balcony",
            size: "28 sqm",
            price: 1500,
            originalPrice: 2000,
            features: ["Private balcony", "Seating area", "Premium bedding", "Bathtub"]
        },
        {
            type: "Haven Suite",
            size: "60 sqm",
            price: 3800,
            originalPrice: 5000,
            features: ["Concierge service", "Haven restaurant & pool", "Priority access", "Butler"]
        }], itinerary: [
            {
                day: 1,
                port: "Singapore",
                activity: "Embarkation"
            },
            {
                day: 2,
                port: "Phuket",
                activity: "Shore excursions"
            },
            {
                day: 3,
                port: "Penang",
                activity: "Heritage city tour"
            },
            {
                day: 4,
                port: "At Sea",
                activity: "Sea day"
            },
            {
                day: 5,
                port: "Bangkok (Laem Chabang)",
                activity: "Shore excursions"
            },
            {
                day: 6,
                port: "At Sea",
                activity: "Sea day"
            },
            {
                day: 7, port: "Singapore",
                activity: "Disembarkation"
            }
        ],
        policies: ["Check-in opens 4 hours before departure", "Passport validity: 6 months minimum", "Drinks package available at booking", "Gratuities: USD 20/day added automatically", "No outside alcohol policy"]
    },
    7: {
        shipLength: "333m",
        grossTonnage: "154,000 GT",
        passengerCapacity: 4363,
        crew: 1536,
        decks: 18,
        yearBuilt: 2017,
        homePort: "Singapore",
        photos: [room1, room2, room3, room4, room5, room6, room7, room8],
        overview: "MSC Splendida homeports in Singapore for Gulf of Thailand and Andaman Sea voyages. One of the world's most beautiful ships, featuring stunning architecture, world-class entertainment, and Mediterranean-inspired dining.",
        highlights: ["MSC Aurea Spa — largest at sea", "Bowling alleys & F1 simulators", "Kids Club with 5 age groups", "Cirque du Soleil at Sea partnership", "Panoramic observation lounge"],
        dining: ["Il Palato (main dining)", "Black Crab Steakhouse", "Asian Wok", "L'Atelier Bistro", "Venchi Chocolate", "24h buffet"],
        activities: ["Water park & slides", "Zip line", "Tennis & basketball courts", "4D cinema", "Casino MSC"],
        cabins: [{
            type: "Interior",
            size: "16 sqm",
            price: 680,
            originalPrice: 900,
            features: ["Bunk or twin option", "En-suite", "Climate control", "In-cabin safe"]
        },
        {
            type: "Ocean View",
            size: "20 sqm",
            price: 880,
            originalPrice: 1150,
            features: ["Porthole window", "2 lower beds", "En-suite", "Wardrobe"]
        },
        {
            type: "Balcony",
            size: "26 sqm",
            price: 1200,
            originalPrice: 1580,
            features: ["Furnished balcony", "Sitting area", "Premium toiletries", "Bathrobe & slippers"]
        },
        {
            type: "Suite",
            size: "48 sqm",
            price: 2400,
            originalPrice: 3100,
            features: ["Living area", "Jacuzzi tub", "Butler", "MSC Yacht Club access"]
        }
        ],
        itinerary: [
            {
                day: 1, port: "Singapore",
                activity: "Embarkation"
            },
            {
                day: 2, port: "At Sea",
                activity: "Sea day"
            },
            {
                day: 3, port: "Phuket",
                activity: "Shore excursions"
            },
            {
                day: 4, port: "Krabi",
                activity: "Kayaking & beach"
            },
            {
                day: 5, port: "At Sea",
                activity: "Sea day"
            },
            {
                day: 6, port: "Singapore",
                activity: "Disembarkation"
            }],
        policies: ["Embarkation: 3 hours before departure", "Passport required", "Dress code: Smart casual evenings", "No smoking inside ship", "Shore excursion cancellations: 48h notice"]
    },
};

export const DEFAULT_CRUISE_DETAIL = {
    shipLength: "280m",
    grossTonnage: "120,000 GT",
    passengerCapacity: 3200,
    crew: 1200,
    decks: 15,
    yearBuilt: 2018,
    homePort: "TBA",
    photos: ["<FaShip/>", "🌊", "🏊", "🍽️", "🎭", "🌅", "🛁", "🗺️"],
    overview: "A modern cruise ship offering an unforgettable voyage through Southeast Asia's most beautiful waterways and islands, with world-class dining, entertainment, and amenities.",
    highlights: ["Multiple pool decks", "Spa & wellness centre", "Live entertainment nightly", "Multiple dining venues", "Casino and bars"],
    dining: ["Main dining room", "Buffet restaurant", "Specialty restaurants", "Pool bar", "24h room service"],
    activities: ["Swimming pools", "Fitness centre", "Sports deck", "Kids club", "Casino"],
    cabins: [
        {
            type: "Interior",
            size: "16 sqm",
            price: null,
            originalPrice: null,
            features: ["Queen or twin beds", "En-suite", "A/C", "In-cabin TV"]
        },
        {
            type: "Balcony",
            size: "24 sqm",
            price: null,
            originalPrice: null,
            features: ["Private balcony", "Ocean view", "Sitting area", "En-suite"]
        },
        {
            type: "Suite",
            size: "45 sqm",
            price: null,
            originalPrice: null,
            features: ["Living area", "Butler", "Priority boarding", "Suite lounge"]
        }
    ],
    itinerary: [
        {
            day: 1,
            port: "Home Port",
            activity: "Embarkation"
        },
        {
            day: 2,
            port: "At Sea",
            activity: "Sea day"
        },
        {
            day: 3,
            port: "Destination",
            activity: "Shore excursions"
        },
        {
            day: 4,
            port: "Home Port",
            activity: "Disembarkation"
        }
    ],
    policies: ["Board 3 hours before departure", "Valid passport required", "All-inclusive options available", "Gratuities may be added", "Health declaration required"]
};

