// Hotel Images
import hotel1 from '../assets/hotel/hotel01.jpg'
import hotel2 from '../assets/hotel/hotel02.jpg'
import hotel3 from '../assets/hotel/hotel03.jpg'
import hotel4 from '../assets/hotel/hotel04.jpg'
import hotel5 from '../assets/hotel/hotel05.jpg'
import hotel6 from '../assets/hotel/hotel06.jpg'
import hotel7 from '../assets/hotel/hotel07.jpg'
import hotel8 from '../assets/hotel/hotel08.jpg'
import hotel9 from '../assets/hotel/hotel09.jpg'
import hotel10 from '../assets/hotel/hotel10.jpg'
import hotel11 from '../assets/hotel/hotel11.jpg'
import hotel12 from '../assets/hotel/hotel12.jpg'
import hotel13 from '../assets/hotel/hotel13.jpg'
import hotel14 from '../assets/hotel/hotel14.jpg'
import hotel15 from '../assets/hotel/hotel15.jpg'
import hotel16 from '../assets/hotel/hotel16.jpg'
import hotel17 from '../assets/hotel/hotel17.jpg'
import hotel18 from '../assets/hotel/hotel18.jpg'
import hotel19 from '../assets/hotel/hotel19.jpg'
import hotel20 from '../assets/hotel/hotel20.jpg'
import hotel21 from '../assets/hotel/hotel21.jpg'
import hotel22 from '../assets/hotel/hotel22.jpg'
import hotel23 from '../assets/hotel/hotel23.jpg'
import hotel24 from '../assets/hotel/hotel24.jpg'
import hotel25 from '../assets/hotel/hotel25.jpg'
import hotel26 from '../assets/hotel/hotel26.jpg'
import hotel27 from '../assets/hotel/hotel27.jpg'
import hotel28 from '../assets/hotel/hotel28.jpg'
import hotel29 from '../assets/hotel/hotel29.jpg'

// Room Images
import room1 from '../assets/hotel/room1.jpg'
import room2 from '../assets/hotel/room2.jpg'
import room3 from '../assets/hotel/room3.jpg'
import room4 from '../assets/hotel/room4.jpg'
import room5 from '../assets/hotel/room5.jpg'
import room6 from '../assets/hotel/room6.jpg'
import room7 from '../assets/hotel/room7.jpg'
import room8 from '../assets/hotel/room8.jpg'

// Hotel data
export const HOTEL_DB = [
    {
        id: 1,
        name: "The Ritz-Carlton",
        city: "bali",
        stars: 5,
        rating: 4.9,
        reviews: 2341,
        price: 680,
        originalPrice: 850,
        amenities: ["Pool", "Spa", "WiFi", "Gym", "Restaurant", "Bar"],
        thumb: hotel1,
        tag: "Luxury",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 2,
        name: "Aloft Bali Seminyak",
        city: "bali",
        stars: 4,
        rating: 4.6,
        reviews: 1120,
        price: 210,
        originalPrice: 280,
        amenities: ["Pool", "WiFi", "Gym", "Restaurant"],
        thumb: hotel2,
        tag: "Lifestyle",
        breakfast: false,
        cancellation: "Free cancellation"
    },
    {
        id: 3,
        name: "Ubud Village Resort",
        city: "bali",
        stars: 4,
        rating: 4.7,
        reviews: 890,
        price: 185,
        originalPrice: 240,
        amenities: ["Pool", "WiFi", "Spa", "Restaurant"],
        thumb: hotel3,
        tag: "Resort",
        breakfast: true,
        cancellation: "Non-refundable"
    },
    {
        id: 4,
        name: "Kuta Seaview Boutique",
        city: "bali",
        stars: 3,
        rating: 4.3,
        reviews: 560,
        price: 95,
        originalPrice: 130,
        amenities: ["Pool", "WiFi", "Restaurant"],
        thumb: hotel4,
        tag: "Boutique",
        breakfast: false,
        cancellation: "Free cancellation"
    },
    {
        id: 5,
        name: "Padma Resort Legian",
        city: "bali",
        stars: 5,
        rating: 4.8,
        reviews: 1780,
        price: 520,
        originalPrice: 650,
        amenities: ["Pool", "Spa", "WiFi", "Gym", "Restaurant", "Bar", "Beach"],
        thumb: hotel5,
        tag: "Luxury",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 6,
        name: "Budget Inn Kuta",
        city: "bali",
        stars: 2,
        rating: 3.9,
        reviews: 340,
        price: 45,
        originalPrice: 60,
        amenities: ["WiFi"],
        thumb: hotel6,
        tag: "Budget",
        breakfast: false,
        cancellation: "Non-refundable"
    },
    {
        id: 7,
        name: "Mandarin Oriental",
        city: "singapore",
        stars: 5,
        rating: 4.9,
        reviews: 3210,
        price: 750,
        originalPrice: 920,
        amenities: ["Pool", "Spa", "WiFi", "Gym", "Restaurant", "Bar"],
        thumb: hotel7,
        tag: "Luxury",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 8,
        name: "Marina Bay Sands",
        city: "singapore",
        stars: 5,
        rating: 4.8,
        reviews: 4100,
        price: 680,
        originalPrice: 820,
        amenities: ["Pool", "Spa", "WiFi", "Gym", "Restaurant", "Bar"],
        thumb: hotel8,
        tag: "Iconic",
        breakfast: false,
        cancellation: "Free cancellation"
    },
    {
        id: 9,
        name: "Hotel Jen Orchardgateway",
        city: "singapore",
        stars: 4,
        rating: 4.5,
        reviews: 1560,
        price: 240,
        originalPrice: 310,
        amenities: ["Pool", "WiFi", "Gym", "Restaurant"],
        thumb: hotel9,
        tag: "City",
        breakfast: false,
        cancellation: "Free cancellation"
    },
    {
        id: 10,
        name: "ibis Budget Singapore",
        city: "singapore",
        stars: 2,
        rating: 4.0,
        reviews: 780,
        price: 75,
        originalPrice: 100,
        amenities: ["WiFi", "Restaurant"],
        thumb: hotel10,
        tag: "Budget",
        breakfast: false,
        cancellation: "Non-refundable"
    },
    {
        id: 11,
        name: "Naumi Hotel Singapore",
        city: "singapore",
        stars: 4,
        rating: 4.6,
        reviews: 990,
        price: 295,
        originalPrice: 380,
        amenities: ["Pool", "WiFi", "Bar", "Restaurant", "Gym"],
        thumb: hotel11,
        tag: "Boutique",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 12,
        name: "Park Hyatt Tokyo",
        city: "tokyo",
        stars: 5,
        rating: 4.9,
        reviews: 2890,
        price: 820,
        originalPrice: 1020,
        amenities: ["Pool", "Spa", "WiFi", "Gym", "Restaurant", "Bar"],
        thumb: hotel12,
        tag: "Luxury",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 13,
        name: "Shinjuku Granbell Hotel",
        city: "tokyo",
        stars: 4,
        rating: 4.6,
        reviews: 1340,
        price: 195,
        originalPrice: 260,
        amenities: ["WiFi", "Restaurant", "Bar"],
        thumb: hotel13,
        tag: "Boutique",
        breakfast: false,
        cancellation: "Free cancellation"
    },
    {
        id: 14,
        name: "APA Hotel Shinjuku",
        city: "tokyo",
        stars: 3,
        rating: 4.2,
        reviews: 920,
        price: 110,
        originalPrice: 145,
        amenities: ["WiFi", "Restaurant"],
        thumb: hotel14,
        tag: "Business",
        breakfast: false,
        cancellation: "Non-refundable"
    },
    {
        id: 15,
        name: "The Prince Akatoki",
        city: "tokyo",
        stars: 5,
        rating: 4.7,
        reviews: 1100,
        price: 590,
        originalPrice: 740,
        amenities: ["Pool", "Spa", "WiFi", "Restaurant", "Bar"],
        thumb: hotel15,
        tag: "Luxury",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 16,
        name: "Mandarin Oriental Bangkok",
        city: "bangkok",
        stars: 5,
        rating: 4.9,
        reviews: 2650,
        price: 560,
        originalPrice: 700,
        amenities: ["Pool", "Spa", "WiFi", "Gym", "Restaurant", "Bar"],
        thumb: hotel16,
        tag: "Luxury",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 17,
        name: "Novotel Bangkok Sukhumvit",
        city: "bangkok",
        stars: 4,
        rating: 4.4,
        reviews: 1230,
        price: 160,
        originalPrice: 210,
        amenities: ["Pool", "WiFi", "Gym", "Restaurant"],
        thumb: hotel17,
        tag: "City",
        breakfast: false,
        cancellation: "Free cancellation"
    },
    {
        id: 18,
        name: "Lub d Bangkok Silom",
        city: "bangkok",
        stars: 3,
        rating: 4.3,
        reviews: 670,
        price: 88,
        originalPrice: 115,
        amenities: ["Pool", "WiFi", "Restaurant", "Bar"],
        thumb: hotel18,
        tag: "Lifestyle",
        breakfast: false,
        cancellation: "Free cancellation"
    },
    {
        id: 19,
        name: "Eastern & Oriental Hotel",
        city: "penang",
        stars: 5,
        rating: 4.8,
        reviews: 1450,
        price: 480,
        originalPrice: 600,
        amenities: ["Pool", "Spa", "WiFi", "Restaurant", "Bar"],
        thumb: hotel19,
        tag: "Heritage",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 20,
        name: "Hard Rock Hotel Penang",
        city: "penang",
        stars: 4,
        rating: 4.6,
        reviews: 1890,
        price: 280,
        originalPrice: 360,
        amenities: ["Pool", "WiFi", "Gym", "Restaurant", "Bar", "Beach"],
        thumb: hotel20,
        tag: "Resort",
        breakfast: false,
        cancellation: "Free cancellation"
    },
    {
        id: 21,
        name: "Bayview Hotel Georgetown",
        city: "penang",
        stars: 3,
        rating: 4.1,
        reviews: 560,
        price: 110,
        originalPrice: 145,
        amenities: ["Pool", "WiFi", "Restaurant"],
        thumb: hotel21,
        tag: "City",
        breakfast: false,
        cancellation: "Non-refundable"
    },
    {
        id: 22,
        name: "The Wembley Penang",
        city: "penang",
        stars: 5,
        rating: 4.7,
        reviews: 980,
        price: 360,
        originalPrice: 450,
        amenities: ["Pool", "Spa", "WiFi", "Gym", "Restaurant", "Bar"],
        thumb: hotel22,
        tag: "Luxury",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 23,
        name: "Jen Penang Georgetown",
        city: "penang",
        stars: 4,
        rating: 4.5,
        reviews: 1020,
        price: 195,
        originalPrice: 250,
        amenities: ["Pool", "WiFi", "Restaurant", "Gym"],
        thumb: hotel23,
        tag: "City",
        breakfast: false,
        cancellation: "Free cancellation"
    },
    {
        id: 24,
        name: "Hyatt Regency Phuket",
        city: "phuket",
        stars: 5,
        rating: 4.8,
        reviews: 1760,
        price: 490,
        originalPrice: 620,
        amenities: ["Pool", "Spa", "WiFi", "Gym", "Restaurant", "Bar", "Beach"],
        thumb: hotel24,
        tag: "Luxury",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 25,
        name: "Holiday Inn Phuket",
        city: "phuket",
        stars: 4,
        rating: 4.4,
        reviews: 1100,
        price: 195,
        originalPrice: 260,
        amenities: ["Pool", "WiFi", "Restaurant", "Bar"],
        thumb: hotel25,
        tag: "Resort",
        breakfast: false,
        cancellation: "Free cancellation"
    },
    {
        id: 26,
        name: "Novotel Phuket Vintage",
        city: "phuket",
        stars: 4,
        rating: 4.3,
        reviews: 870,
        price: 175,
        originalPrice: 230,
        amenities: ["Pool", "WiFi", "Restaurant"],
        thumb: hotel26,
        tag: "City",
        breakfast: false,
        cancellation: "Non-refundable"
    },
    {
        id: 27,
        name: "Park Hyatt Seoul",
        city: "seoul",
        stars: 5,
        rating: 4.8,
        reviews: 2100,
        price: 600,
        originalPrice: 760,
        amenities: ["Pool", "Spa", "WiFi", "Gym", "Restaurant", "Bar"],
        thumb: hotel27,
        tag: "Luxury",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 28,
        name: "Lotte Hotel Seoul",
        city: "seoul",
        stars: 5,
        rating: 4.7,
        reviews: 1900,
        price: 480,
        originalPrice: 600,
        amenities: ["Pool", "Spa", "WiFi", "Gym", "Restaurant"],
        thumb: hotel28,
        tag: "Luxury",
        breakfast: true,
        cancellation: "Free cancellation"
    },
    {
        id: 29,
        name: "ibis Styles Seoul",
        city: "seoul",
        stars: 3,
        rating: 4.1,
        reviews: 650,
        price: 95,
        originalPrice: 125,
        amenities: ["WiFi", "Restaurant"],
        thumb: hotel29,
        tag: "Budget",
        breakfast: false,
        cancellation: "Non-refundable"
    },
];

// ── HOTEL DETAIL EXTENSIONS ─────────────────────────────────
// Keyed by hotel id — rich content for the detail page
export const HOTEL_DETAILS = {
    1: {
        address: "Jl. Karang Mas Sejahtera, Jimbaran, Bali 80364",
        phone: "+62 361 702222",
        email: "bali@ritzcarlton.com",
        description: "Perched on a cliff above the Indian Ocean, The Ritz-Carlton Bali is a serene luxury sanctuary. Each villa features a private pool, butler service, and sweeping ocean views. Awarded Asia's Leading Resort five years running.",
        highlights: ["Clifftop infinity pool", "In-villa butler service", "Private beach access", "Award-winning spa", "Sunset cocktail bar"], rooms: [{ type: "Deluxe Ocean View", size: "65 sqm", beds: "King", price: 680, features: ["Ocean view", "Rain shower", "Soaking tub", "Minibar"] }, { type: "Premier Pool Villa", size: "120 sqm", beds: "King", price: 1100, features: ["Private pool", "Butler", "Outdoor shower", "Terrace"] }, { type: "Family Ocean Suite", size: "180 sqm", beds: "King + Twin", price: 1650, features: ["2 bedrooms", "Private pool", "Living room", "Kids amenities"] }], policies: ["Check-in: 3:00 PM · Check-out: 12:00 PM", "Cancellation: Free up to 48 hrs before arrival", "Pets: Not allowed", "Smoking: Outdoor areas only"], nearby: ["10 min to Garuda Wisnu Kencana", "15 min to Jimbaran Bay seafood", "25 min to Uluwatu Temple", "40 min to Ngurah Rai Airport"],
        photos: [room1, room2, room3, room4, room5, room6, room7, room8]
    },
    2: {
        address: "Jl. Camplung Tanduk No.88, Seminyak, Bali 80361",
        phone: "+62 361 3008888",
        email: "aloftbali@alofthotels.com",
        description: "Aloft Bali Seminyak is the bold, stylish choice for the modern traveller. Located steps from Seminyak Beach and the island's trendiest shops and clubs, this hotel fuses Balinese culture with contemporary energy.",
        highlights: ["Rooftop pool with DJ nights", "Complimentary yoga classes", "Walk to Seminyak Beach", "Pet-friendly policy", "Free high-speed WiFi"], rooms: [{ type: "Superior Room", size: "35 sqm", beds: "Queen", price: 210, features: ["City view", "Rainfall shower", "Smart TV", "Work desk"] }, { type: "Deluxe Pool View", size: "42 sqm", beds: "King", price: 280, features: ["Pool view", "Soaking tub", "Minibar", "Balcony"] }, { type: "Studio Suite", size: "58 sqm", beds: "King", price: 380, features: ["Separate lounge", "Kitchenette", "Pool access", "Nespresso"] }], policies: ["Check-in: 2:00 PM · Check-out: 11:00 AM", "Cancellation: Free up to 24 hrs before arrival", "Pets: Allowed (fee applies)", "Smoking: Designated areas"], nearby: ["2 min walk to Seminyak Square", "5 min walk to Seminyak Beach", "10 min to Petitenget Temple", "30 min to Ngurah Rai Airport"],
        photos: [room1, room2, room3, room4, room5, room6, room7, room8]
    },
    3: {
        address: "Jl. Monkey Forest, Ubud, Gianyar, Bali 80571",
        phone: "+62 361 975571",
        email: "reservations@ubudvillage.com",
        description: "Nestled in the lush jungle of central Ubud, Ubud Village Resort & Spa offers traditional Balinese architecture amid tropical gardens. Immerse in arts, rice-terrace walks, and daily spiritual ceremonies.",
        highlights: [
            "Rice terrace sunrise views",
            "Traditional Balinese spa",
            "Cultural dance performances",
            "Cooking classes",
            "Yoga pavilion"

        ],
        rooms: [
            {
                type: "Garden Bungalow",
                size: "45 sqm",
                beds: "Queen",
                price: 185,
                features: [
                    "Garden view",
                    "Outdoor bathroom",
                    "Wooden bathtub",
                    "Balcony"

                ]
            },
            {
                type: "Pool Bungalow",
                size: "65 sqm",
                beds: "King",
                price: 320,
                features: [
                    "Private plunge pool",
                    "Rice view",
                    "Open-air shower",
                    "Daybed"

                ]
            },
            {
                type: "Villa",
                size: "150 sqm",
                beds: "King + Twin",
                price: 580,
                features: [
                    "2-bedroom",
                    "Private pool",
                    "Living pavilion",
                    "Kitchen"

                ]
            }
        ],
        policies: [
            "Check-in: 2:00 PM · Check-out: 11:00 AM",
            "Cancellation: Non-refundable rate",
            "Breakfast: Included daily",
            "Smoking: Not permitted"
        ],
        nearby: [
            "5 min walk to Monkey Forest",
            "10 min to Ubud Palace",
            "15 min to Tegalalang Rice Terraces",
            "1 hr to Ngurah Rai Airport"
        ],
        photos: [room1, room2, room3, room4, room5, room6, room7, room8]
    },
    7: {
        address: "5 Raffles Avenue, Marina Square, Singapore 039797",
        phone: "+65 6338 0066",
        email: "mosin-reservations@mohg.com",
        description: "The Mandarin Oriental Singapore epitomises Asian luxury on the Marina Bay waterfront. An iconic fan-shaped tower overlooking the stunning bay, it has been a landmark of Singapore hospitality since 1987.",
        highlights: [
            "Stunning Marina Bay views",
            "Award-winning spa & wellness",
            "5 dining concepts",
            "Rooftop infinity pool",
            "24-hour butler service"
        ],
        rooms: [
            {
                type: "Deluxe Room",
                size: "52 sqm",
                beds: "King",
                price: 750,
                features: [
                    "Marina view",
                    "Marble bathroom",
                    "Nespresso",
                    "Turndown service"
                ]
            },
            {
                type: "Club Room",
                size: "52 sqm",
                beds: "King", price: 980,
                features: [
                    "Club Lounge access",
                    "All-day F&B",
                    "Evening cocktails",
                    "Butler"
                ]
            },
            {
                type: "Junior Suite",
                size: "88 sqm",
                beds: "King",
                price: 1450,
                features: [
                    "Panoramic bay view",
                    "Lounge",
                    "Separate bath & shower",
                    "Pillow menu"
                ]
            }],
        policies: [
            "Check-in: 3:00 PM · Check-out: 12:00 PM",
            "Cancellation: Free up to 48 hrs before arrival",
            "Pets: Not allowed",
            "Non-smoking throughout"
        ],
        nearby: [
            "5 min walk to Marina Bay Sands",
            "10 min to Gardens by the Bay",
            "15 min to Chinatown",
            "25 min to Changi Airport"
        ],
        photos: [room1, room2, room3, room4, room5, room6, room7, room8]
    },
    8: {
        address: "10 Bayfront Avenue, Marina Bay, Singapore 018956",
        phone: "+65 6688 8888",
        email: "marina@marinabaysands.com",
        description: "Marina Bay Sands is the world's most photographed hotel and Singapore's most iconic landmark. Crowned by the legendary SkyPark with the world's largest rooftop infinity pool, it defines the Singapore skyline.",
        highlights: ["Iconic infinity SkyPark pool", "World's largest rooftop pool", "ArtScience Museum on-site", "Celebrity chef restaurants", "Integrated casino & shows"],
        rooms: [
            {
                type: "Deluxe Room",
                size: "48 sqm",
                beds: "King",
                price: 680,
                features: ["City view", "Rain shower", "42\" TV", "Nespresso"]
            },
            {
                type: "Premier Bay Room",
                size: "55 sqm",
                beds: "King", price: 920,
                features: ["Marina Bay view", "Soaking tub", "Butler on call", "Nespresso"]
            },
            {
                type: "Sands Suite",
                size: "130 sqm",
                beds: "King",
                price: 2200,
                features: [
                    "Panoramic bay view",
                    "Living room", "Jacuzzi",
                    "Priority SkyPark access"
                ]
            }
        ],
        policies: [
            "Check-in: 3:00 PM · Check-out: 11:00 AM",
            "Cancellation: Free up to 24 hrs before arrival",
            "Pets: Not allowed",
            "Non-smoking throughout"
        ],
        nearby: [
            "2 min walk to Gardens by the Bay",
            "5 min to Helix Bridge",
            "10 min to Merlion Park",
            "30 min to Changi Airport"
        ],
        photos: [room1, room2, room3, room4, room5, room6, room7, room8]
    },
    12: {
        address: "3-7-1-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo 163-1055",
        phone: "+81 3 5322 1234",
        email: "tokyo.park@hyatt.com",
        description: "The Park Hyatt Tokyo occupies the top 14 floors of the Shinjuku Park Tower and served as the setting for the film 'Lost in Translation'. Floor-to-ceiling windows offer unparalleled views of Mt. Fuji and the Tokyo skyline.",
        highlights: ["Mt. Fuji views on clear days", "Lost in Translation film location", "World-class New York Bar", "Stunning city skyline views", "Signature Japanese spa"],
        rooms: [
            {
                type: "Park Room",
                size: "47 sqm",
                beds: "King",
                price: 820,
                features: [
                    "City view",
                    "Deep soaking tub",
                    "Bose sound system",
                    "Floor-to-ceiling windows"
                ]
            },
            {

                type: "Park Deluxe Room",
                size: "55 sqm",
                beds: "King",
                price: 1100,
                features: [
                    "Panoramic view",
                    "Marble bath",
                    "Walk-in wardrobe",
                    "Nespresso"
                ]
            },
            {
                type: "Park Suite",
                size: "110 sqm",
                beds: "King",
                price: 2400,
                features: [
                    "360° views",
                    "Living room",
                    "Separate dining",
                    "Complimentary minibar"

                ]
            }
        ],
        policies: [
            "Check-in: 3:00 PM · Check-out: 12:00 PM",
            "Cancellation: Free up to 72 hrs before arrival",
            "Breakfast: Included in some rates",
            "Pets: Not allowed"],
        nearby: [
            "2 min to Shinjuku Station",
            "5 min to Shinjuku Gyoen",
            "10 min to Golden Gai",
            "45 min to Narita Airport"
        ],
        photos: [room1, room2, room3, room4, room5, room6, room7, room8]
    },
    19: {
        address: "10 Farquhar Street, George Town, Penang 10200",
        phone: "+60 4 222 2000",
        email: "eando@e-o-hotel.com",
        description: "The Eastern & Oriental Hotel is Penang's grandest colonial landmark, built in 1885 by the Sarkies Brothers. Lovingly restored to its former glory, it blends Victorian heritage architecture with modern luxury along the Penang seafront.",
        highlights: ["UNESCO Heritage city location", "Seafront Victory Annexe", "Heritage colonial architecture", "Award-winning Sarkies restaurant", "Outdoor seafront pool"],
        rooms: [
            {
                type: "Superior Courtyard",
                size: "44 sqm",
                beds: "King",
                price: 480,
                features: ["Courtyard view", "Clawfoot bathtub", "Heritage decor", "Nespresso"]
            },
            {
                type: "Deluxe Sea View",
                size: "44 sqm",
                beds: "King",
                price: 620,
                features: [
                    "Sea view",
                    "Bathtub",
                    "Heritage furniture",
                    "Balcony"
                ]
            },
            {

                type: "Victory Suite",
                size: "130 sqm",
                beds: "King",
                price: 1200,
                features: [
                    "Panoramic sea view",
                    "Living room",
                    "Antique furniture",
                    "Butler service"
                ]
            }
        ],
        policies: [
            "Check-in: 3:00 PM · Check-out: 12:00 PM",
            "Cancellation: Free up to 48 hrs before arrival",
            "Breakfast: Included",
            "Pets: Not allowed"]
        ,
        nearby: [
            "2 min walk to Esplanade",
            "10 min to Clan Jetties",
            "15 min to Little India",
            "30 min to Penang Airport"],
        photos: [room1, room2, room3, room4, room5, room6, room7, room8]
    },
    24: {
        address: "60 Prabaramee Road, Patong, Phuket 83150",
        phone: "+66 76 231234",
        email: "phuket.regency@hyatt.com",
        description: "The Hyatt Regency Phuket Resort cascades down a hillside above Kamala Beach, offering breathtaking Andaman Sea panoramas. With 200 luxurious rooms and villas, a world-class spa, and exceptional dining, it is Phuket's premier resort destination.",
        highlights: ["Andaman Sea panoramic views", "200m free-form lagoon pool", "Award-winning Andaman Spa", "Private beach club access", "7 dining & bar venues"],
        rooms: [
            {
                type: "King Room",
                size: "52 sqm",
                beds: "King",
                price: 490,
                features: [
                    "Sea view",
                    "Rain shower",
                    "Private balcony",
                    "Nespresso"]
            }, {
                type: "King Pool Access",
                size: "58 sqm",
                beds: "King",
                price: 680,
                features: [
                    "Direct pool access",
                    "Outdoor shower",
                    "Lounge chairs",
                    "Sea view"
                ]
            },
            {
                type: "Pool Villa",
                size: "175 sqm",
                beds: "King",
                price: 1800,
                features: [
                    "Private pool",
                    "Outdoor pavilion",
                    "Full butler",
                    "2 bedrooms option"
                ]
            }
        ],
        policies: [
            "Check-in: 3:00 PM · Check-out: 12:00 PM",
            "Cancellation: Free up to 48 hrs before arrival",
            "Breakfast: Included",
            "Pets: Not allowed"],
        nearby: [
            "5 min drive to Kamala Beach",
            "15 min to Patong Beach",
            "20 min to Phuket Old Town",
            "35 min to Phuket Airport"]
        ,
        photos: [room1, room2, room3, room4, room5, room6, room7, room8]
    },
};
// Fallback detail for hotels without specific data
export const DEFAULT_DETAIL = {
    address: "City Centre, Main District",
    phone: "+60 3 0000 0000",
    email: "reservations@hotel.com",
    description: "A premium hotel offering exceptional comfort and service in a prime city location. Guests enjoy spacious rooms, world-class dining, and comprehensive facilities designed for both leisure and business travellers.",
    highlights: [
        "Central city location",
        "Outdoor swimming pool",
        "Full-service spa",
        "Multiple dining outlets",
        "Express check-in/out"
    ],
    rooms: [
        {

            type: "Standard Room",
            size: "32 sqm",
            beds: "Queen",
            price: null,
            features: [
                "City view",
                "WiFi",
                "Smart TV",
                "Work desk"
            ]
        }, {
            type: "Deluxe Room",
            size: "42 sqm",
            beds: "King",
            price: null,
            features: [
                "Premium view",
                "Soaking tub",
                "Minibar",
                "Nespresso"
            ]
        },
        {

            type: "Suite",
            size: "80 sqm",
            beds: "King",
            price: null,
            features: [
                "Living area",
                "Panoramic view",
                "Butler service",
                "Lounge access"
            ]
        }
    ],
    policies: [
        "Check-in: 3:00 PM · Check-out: 12:00 PM",
        "Cancellation: See rate conditions",
        "Breakfast: Available (may be included)",
        "Pets: Please enquire"],
    nearby: [
        "City attractions within walking distance",
        "Airport transfer available",
        "Shopping & dining nearby",
        "Public transport connections"],
    photos: [room1, room2, room3, room4, room5, room6, room7, room8]
};
