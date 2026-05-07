// i18n — language & currency reactive state + useT hook
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from 'react'
import { TRANSLATIONS } from './translations.js'
import { LANGUAGES } from './languages.js'
import { CURRENCIES } from './currencies.js'

export { LANGUAGES, CURRENCIES }

// ── Global reactive state ────────────────────────────────────────────────────
let _lang = 'en'
let _currency = CURRENCIES[0] // MYR default
let _langListeners = []
let _currListeners = []

export const getLang = () => _lang
export const getCurrency = () => _currency

export const setLang = (code) => {
    _lang = code
    _langListeners.forEach(fn => fn(code))
}

export const setCurrency = (cur) => {
    _currency = cur
    _currListeners.forEach(fn => fn(cur))
}

export const useLang = () => {
    const [l, setL] = useState(_lang)
    useEffect(() => {
        _langListeners.push(setL)
        return () => { _langListeners = _langListeners.filter(f => f !== setL) }
    }, [])
    return l
}

export const useCurrency = () => {
    const [c, setC] = useState(_currency)
    useEffect(() => {
        _currListeners.push(setC)
        return () => { _currListeners = _currListeners.filter(f => f !== setC) }
    }, [])
    return c
}

// ── useT — translation hook ───────────────────────────────────────────────────
export function useT() {
    const lang = useLang()
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en
    return (key) => dict[key] ?? TRANSLATIONS.en[key] ?? key
}
