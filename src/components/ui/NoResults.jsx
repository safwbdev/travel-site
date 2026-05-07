import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'
import { FaMagnifyingGlass } from 'react-icons/fa6';

function NoResults({ label = "No results found", tip = "" }) {
    return (
        <div className="no-results">
            <div className="no-results-icon"><FaMagnifyingGlass /></div>
            <h3>{label}</h3>
            <p>Try adjusting your filters or modifying your search.<br /><small>{tip}</small></p>
        </div>
    );
}

export default NoResults
