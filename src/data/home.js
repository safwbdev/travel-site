import hotel8 from '../assets/hotel/hotel08.jpg'
import plane from '../assets/flights/plane.jpg'
import cruise from '../assets/cruises/cruise.jpg'
import train from '../assets/train/train.jpg'
import bus from '../assets/bus/bus.jpg'
import transfer from '../assets/transfer/transfer.jpg'
import car from '../assets/car/car.jpg'

// Home page data: DEALS, POPULAR
export const DEALS = [
    {
        id: 1,
        title: "Marina Bay Sands",
        location: "Singapore",
        price: 450,
        originalPrice: 620,
        img: hotel8,
        rating: 4.9,
        tag: "Hotel",
        nights: "per night",
        bg: "linear-gradient(135deg,#003d80,#0055aa)",
        action: {
            type: "hotels",
            dest: "Singapore",
            checkin: "2026-04-20",
            checkout: "2026-04-25",
            rooms: "1 Room, 2 Guests"
        }
    },
    {
        id: 2,
        title: "KUL → BKK",
        location: "Bangkok, Thailand",
        price: 89,
        originalPrice: 145,
        img: plane,
        rating: 4.7,
        tag: "Flight",
        nights: "one way",
        bg: "linear-gradient(135deg,#c0392b,#e74c3c)",
        action: {
            type: "flights",
            from: "Kuala Lumpur (KUL)",
            to: "Bangkok (BKK)",
            dep: "2026-04-20",
            pax: "1 Adult",
            cls: "Economy",
            tripType: "oneway"
        }
    },
    {
        id: 3,
        title: "Penang Cruise Escape",
        location: "Penang → Phuket",
        price: 380,
        originalPrice: 520,
        img: cruise,
        rating: 4.8,
        tag: "Cruise",
        nights: "3 nights",
        bg: "linear-gradient(135deg,#001f3f,#0077cc)",
        action: {
            type: "cruises",
            port: "Penang",
            dest: "Phuket",
            date: "2026-05-10",
            duration: "2-3 Nights",
            guests: "2 Adults"
        }
    },
    {
        id: 4,
        title: "Toyota Alphard",
        location: "Kuala Lumpur",
        price: 120,
        originalPrice: 180,
        img: car,
        rating: 4.6,
        tag: "Car Rental",
        nights: "per day",
        bg: "linear-gradient(135deg,#4a1942,#c0392b)",
        action: {
            type: "cars",
            pickup: "Kuala Lumpur City Centre",
            dropoff: "Kuala Lumpur City Centre",
            pickDate: "2026-04-20",
            retDate: "2026-04-25",
            carType: "MPV"
        }
    },
    {
        id: 5,
        title: "KL Sentral → JB",
        location: "Johor Bahru",
        price: 35,
        originalPrice: 55,
        img: train,
        rating: 4.5,
        tag: "Train",
        nights: "one way",
        bg: "linear-gradient(135deg,#1a1a3a,#303f9f)",
        action: {
            type: "trains",
            from: "KL Sentral",
            to: "JB Sentral",
            date: "2026-04-20",
            pax: "1 Adult",
            cls: "Any"
        }
    },
    {
        id: 6,
        title: "KLIA Airport Transfer",
        location: "Kuala Lumpur",
        price: 48,
        originalPrice: 70,
        img: transfer,
        rating: 4.7,
        tag: "Transfer",
        nights: "per trip",
        bg: "linear-gradient(135deg,#1a3a1a,#2e7d32)",
        action: {
            type: "transfer",
            airport: "KLIA – Kuala Lumpur",
            dest: "Kuala Lumpur City Centre",
            date: "2026-04-20",
            time: "14:00",
            pax: "1-2 Pax"
        }
    },
];

export const POPULAR = [
    {
        city: "Bali",
        id: "bali",
        trips: "12,400 trips"
    },
    {
        city: "Bangkok",
        id: "bangkok",
        trips: "9,800 trips"
    },
    {
        city: "Tokyo",
        id: "tokyo",
        trips: "8,200 trips"
    },
    {
        city: "Singapore",
        img: "singapore",
        trips: "15,600 trips"
    },
    {
        city: "Phuket",
        id: "phuket",
        trips: "7,900 trips"
    },
    {
        city: "Seoul",
        id: "seoul",
        trips: "6,700 trips"
    },
];
