// Currency options and conversion rates (base: MYR)
export const CURRENCIES = [
    { code: "MYR", symbol: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾", rate: 1 },
    { code: "SGD", symbol: "SGD", name: "Singapore Dollar", flag: "🇸🇬", rate: 0.30 },
    { code: "USD", symbol: "USD", name: "US Dollar", flag: "🇺🇸", rate: 0.21 },
    { code: "GBP", symbol: "GBP", name: "British Pound", flag: "🇬🇧", rate: 0.17 },
    { code: "EUR", symbol: "EUR", name: "Euro", flag: "🇪🇺", rate: 0.20 },
    { code: "AUD", symbol: "AUD", name: "Australian Dollar", flag: "🇦🇺", rate: 0.32 },
    { code: "JPY", symbol: "JPY", name: "Japanese Yen", flag: "🇯🇵", rate: 32.4 },
    { code: "KRW", symbol: "KRW", name: "South Korean Won", flag: "🇰🇷", rate: 290 },
    { code: "THB", symbol: "THB", name: "Thai Baht", flag: "🇹🇭", rate: 7.5 },
    { code: "IDR", symbol: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩", rate: 3380 },
    { code: "CNY", symbol: "CNY", name: "Chinese Yuan", flag: "🇨🇳", rate: 1.52 },
    { code: "AED", symbol: "AED", name: "UAE Dirham", flag: "🇦🇪", rate: 0.77 },
    { code: "INR", symbol: "INR", name: "Indian Rupee", flag: "🇮🇳", rate: 17.5 },
    { code: "HKD", symbol: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰", rate: 1.64 },
];

// Global state for lang/currency — module-level so any component can read it
