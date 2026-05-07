export const PROMOS = [
    { bg: "linear-gradient(135deg,#0f4c9e,#1a73e8)", title: "Flash Sale", sub: "Up to 60% off hotels this weekend", cta: "Grab Deal", action: { type: "search", params: { type: "hotels", dest: "Bali", checkin: "2026-04-20", checkout: "2026-04-25", rooms: "1 Room, 2 Guests" } } },
    { bg: "linear-gradient(135deg,#c0392b,#e74c3c)", title: "New Route Alert", sub: "Direct flights to Osaka from RM299", cta: "Book Now", action: { type: "search", params: { type: "flights", from: "Kuala Lumpur (KUL)", to: "Osaka (KIX)", dep: "2026-04-20", pax: "1 Adult", cls: "Economy", tripType: "oneway" } } },
    { bg: "linear-gradient(135deg,#1a6641,#27ae60)", title: "Cruise Month", sub: "Set sail from Penang from RM380", cta: "Explore", action: { type: "search", params: { type: "cruises", port: "Penang", dest: "", date: "2026-05-10", duration: "Any", guests: "2 Adults" } } },
];

export const PROMOS_T = [
    { bg: "linear-gradient(135deg,#0f4c9e,#1a73e8)", titleKey: "flashSale", subKey: "flashSaleSub", ctaKey: "grabDeal", action: { type: "search", params: { type: "hotels", dest: "Bali", checkin: "2026-04-20", checkout: "2026-04-25", rooms: "1 Room, 2 Guests" } } },
    { bg: "linear-gradient(135deg,#c0392b,#e74c3c)", titleKey: "newRoute", subKey: "newRouteSub", ctaKey: "bookNow", action: { type: "search", params: { type: "flights", from: "Kuala Lumpur (KUL)", to: "Osaka (KIX)", dep: "2026-04-20", pax: "1 Adult", cls: "Economy", tripType: "oneway" } } },
    { bg: "linear-gradient(135deg,#1a6641,#27ae60)", titleKey: "cruiseMonth", subKey: "cruiseMonthSub", ctaKey: "explore", action: { type: "search", params: { type: "cruises", port: "Penang", dest: "", date: "2026-05-10", duration: "Any", guests: "2 Adults" } } },
];