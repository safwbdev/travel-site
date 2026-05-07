import hotel1 from '../assets/hotel/hotel01.jpg'
import hotel8 from '../assets/hotel/hotel08.jpg'
import hotel5 from '../assets/hotel/hotel05.jpg'
import hotel12 from '../assets/hotel/hotel12.jpg'
import plane from '../assets/flights/plane.jpg'
import cruise from '../assets/cruises/cruise.jpg'
import train from '../assets/train/train.jpg'
import bus from '../assets/bus/bus.jpg'
import transfer from '../assets/transfer/transfer.jpg'
import car from '../assets/car/car.jpg'


export const ALL_DEALS = [
    {
        id: 1,
        type: "Hotel",
        title: "Ritz-Carlton Bali",
        loc: "Bali, Indonesia",
        price: 680,
        orig: 850,
        img: hotel1,
        bg: "linear-gradient(135deg,#003d80,#0077cc)",
        badge: "60% OFF",
        expires: "2d 14h",
        tag: "Flash Sale"
    },
    {
        id: 2,
        type: "Flight",
        title: "Penang → Singapore",
        loc: "AirAsia · Economy",
        price: 89,
        orig: 149,
        img: plane,
        bg: "linear-gradient(135deg,#c0392b,#e74c3c)",
        badge: "40% OFF",
        expires: "1d 6h",
        tag: "Limited Seats"
    },
    {
        id: 3,
        type: "Cruise",
        title: "Penang Paradise Escape",
        loc: "Penang → Phuket · 3N",
        price: 380,
        orig: 520,
        img: cruise,
        bg: "linear-gradient(135deg,#1a6641,#27ae60)",
        badge: "27% OFF",
        expires: "5d 0h",
        tag: "Cruise Month"
    },
    {
        id: 4,
        type: "Hotel",
        title: "Marina Bay Sands",
        loc: "Singapore",
        price: 680,
        orig: 820,
        img: hotel8,
        bg: "linear-gradient(135deg,#2c3e50,#3498db)",
        badge: "17% OFF",
        expires: "3d 8h",
        tag: "Weekend Deal"
    },
    {
        id: 5,
        type: "Car",
        title: "Toyota Alphard",
        loc: "Kuala Lumpur · /day",
        price: 120,
        orig: 180,
        img: car,
        bg: "linear-gradient(135deg,#4a1942,#c0392b)",
        badge: "33% OFF",
        expires: "2d 0h",
        tag: "Early Bird"
    },
    {
        id: 6,
        type: "Flight",
        title: "KL → Tokyo",
        loc: "AirAsia X · Economy",
        price: 399,
        orig: 580,
        img: plane,
        bg: "linear-gradient(135deg,#003d80,#1565c0)",
        badge: "31% OFF",
        expires: "4d 12h",
        tag: "New Route"
    },
    {
        id: 7,
        type: "Hotel",
        title: "Eastern & Oriental",
        loc: "Penang, Malaysia",
        price: 480,
        orig: 600,
        img: hotel5, bg:
            "linear-gradient(135deg,#1a3a1a,#2e7d32)",
        badge: "20% OFF",
        expires: "6d 0h",
        tag: "Heritage Stay"
    },
    {
        id: 8,
        type: "Train",
        title: "KL Sentral → JB Sentral",
        loc: "KTM ETS Gold",
        price: 39,
        orig: 59,
        img: train,
        bg: "linear-gradient(135deg,#1a1a3a,#303f9f)",
        badge: "34% OFF",
        expires: "1d 0h",
        tag: "Rail Deal"
    },
    {
        id: 9,
        type: "Transfer",
        title: "KLIA Airport Transfer",
        loc: "KLIA → City Centre",
        price: 38, orig: 55,
        img: transfer,
        bg: "linear-gradient(135deg,#2a1a3a,#6a1b9a)",
        badge: "31% OFF",
        expires: "3d 0h",
        tag: "Arrival Deal"
    },
    {
        id: 10,
        type: "Hotel",
        title: "Park Hyatt Tokyo",
        loc: "Tokyo, Japan",
        price: 820,
        orig: 1020,
        img: hotel12,
        bg: "linear-gradient(135deg,#1a2a1a,#388e3c)",
        badge: "20% OFF",
        expires: "2d 18h",
        tag: "Luxury Deal"
    },
    {
        id: 11,
        type: "Bus",
        title: "Penang → KL Sleeper",
        loc: "Aeroline · 3h 30m",
        price: 55,
        orig: 80,
        img: bus,
        bg: "linear-gradient(135deg,#1a2a2a,#00695c)",
        badge: "31% OFF",
        expires: "7d 0h",
        tag: "Night Bus"
    },
    {
        id: 12,
        type: "Cruise",
        title: "Norwegian Prima Voyage",
        loc: "Singapore → Bangkok",
        price: 1250,
        orig: 1680,
        img: cruise,
        bg: "linear-gradient(135deg,#001f3f,#0077cc)",
        badge: "26% OFF",
        expires: "8d 0h",
        tag: "Cruise Month"
    },
];