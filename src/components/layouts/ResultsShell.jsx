import { useState, useEffect, useMemo } from 'react'
import { useT, useLang, useCurrency } from '../../i18n/index.js'
import HotelForm from '../search/HotelForm.jsx';
import FlightForm from '../search/FlightForm.jsx';
import TransferForm from '../search/TransferForm.jsx';
import TrainForm from '../search/TrainForm.jsx';
import BusForm from '../search/BusForm.jsx';
import CarForm from '../search/CarForm.jsx';
import CruiseForm from '../search/CruiseForm.jsx';
// Components
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { PriceFilterSection } from '../ui';
// Constants 
import { TABS } from '../../constants/tabs.js';
import TabIcon from '../search/TabIcon.jsx';

function ResultsShell({ search, onBack, onNewSearch, children, breadcrumb, summaryChips, count, label }) {
    const [activeTab, setActiveTab] = useState(search.type);
    const t = useT();
    const tlabels = Object.fromEntries(TABS.map(tab => [tab.id, t(tab.labelKey)]));
    const formMap = {
        hotels: <HotelForm onSearch={onNewSearch} initial={search} />,
        flights: <FlightForm onSearch={onNewSearch} initial={search} />,
        cars: <CarForm onSearch={onNewSearch} initial={search} />,
        transfer: <TransferForm onSearch={onNewSearch} initial={search} />,
        buses: <BusForm onSearch={onNewSearch} initial={search} />,
        trains: <TrainForm onSearch={onNewSearch} initial={search} />,
        cruises: <CruiseForm onSearch={onNewSearch} initial={search} />,
    };
    return (
        <>
            <NavBar onBack={onBack} />
            <div className="results-hero">
                <div className="results-search-wrap">
                    <div className="search-card" style={{ borderRadius: 14 }}>
                        <div className="tab-bar">
                            {TABS.map((tab, index) => <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? "active" : ""}`} onClick={() => setActiveTab(tab.id)}><span className="tab-icon"><TabIcon id={index} /></span>{tlabels[tab.id]}</button>)}
                        </div>
                        <div className="form-area">{formMap[activeTab]}</div>
                    </div>
                </div>
            </div>
            <div style={{ paddingBottom: 60 }}>
                <div className="results-page">
                    <div className="breadcrumb">
                        <button onClick={onBack}>Home</button>
                        {breadcrumb.map((b, i) => <span key={i}>› {b}</span>)}
                    </div>
                    <div className="results-summary-bar">
                        {summaryChips.map((c, i) => <div key={i} className="summary-chip">{c}</div>)}
                        {count != null && <div className="results-count">{count} {label} found</div>}
                    </div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ResultsShell
