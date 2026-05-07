import { useRef } from 'react'
// Router 
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from 'react-router-dom'

// Hooks
import { setGlobalNav } from './hooks/useGlobalNav.js'

// Home Page
import HomePage from './pages/HomePage.jsx'

// Result Pages
import {
  HotelResults,
  FlightResults,
  CarResults,
  TransferResults,
  BusResults,
  TrainResults,
  CruiseResults,
} from './pages/results'

// Detail Pages
import {
  HotelDetailPage,
  FlightDetailPage,
  CarDetailPage,
  TransferDetailPage,
  BusDetailPage,
  TrainDetailPage,
  CruiseDetailPage,
} from './pages/detail'

// Company Pages
import {
  AboutPage,
  CareersPage,
  PressPage,
  BlogPage,
  PartnersPage,
} from './pages/company'

// Support Pages
import {
  HelpCenterPage,
  ContactPage,
  CancellationPage,
  PrivacyPage,
  TermsPage,
} from './pages/support'

// Nav Pages
import {
  DealsPage,
  MyTripsPage,
  RewardsPage,
  SupportPage,
} from './pages/nav'
import { ROUTES } from './constants/routes.js'
import { DB_MAP } from './constants/dbmap.js'

let _search = null
let _selected = null // { type, item }

const getSearch = () => _search
const setSearch_ = (s) => { _search = s }
const getSelected = () => _selected
const setSelected_ = (s) => { _selected = s }

function RouteGuard({ type, children }) {
  const search = getSearch()
  if (!search || search.type !== type) {
    return <Navigate to={ROUTES.home} replace />
  }
  return children
}

function DetailRoute({ type, children }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const selected = getSelected()

  // Use stored item if it matches, otherwise fall back to DB lookup
  const item =
    selected?.type === type && String(selected.item?.id) === String(id)
      ? selected.item
      : DB_MAP[type]?.find((x) => String(x.id) === String(id))

  if (!item) return <Navigate to={`/${type}`} replace />
  return children(item)
}

function AppInner() {
  const navigate = useNavigate()

  const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleNav = (id) => {
    // Footer "Travel" column links → go home (tab selection handled by HomePage)
    const TAB_IDS = ['tab-hotels', 'tab-flights', 'tab-cars', 'tab-transfer', 'tab-buses', 'tab-trains', 'tab-cruises']
    if (TAB_IDS.includes(id)) { navigate(ROUTES.home); scroll(); return }

    const NAV_MAP = {
      deals: ROUTES.deals,
      mytrips: ROUTES.mytrips,
      rewards: ROUTES.rewards,
      support: ROUTES.support,
      about: ROUTES.about,
      careers: ROUTES.careers,
      press: ROUTES.press,
      blog: ROUTES.blog,
      partners: ROUTES.partners,
      helpcenter: ROUTES.helpcenter,
      contact: ROUTES.contact,
      cancellation: ROUTES.cancellation,
      privacy: ROUTES.privacy,
      terms: ROUTES.terms,
      help: ROUTES.helpcenter
    }

    const path = NAV_MAP[id]
    if (path) { navigate(path); scroll() }
  }

  // Register globally so Footer can navigate without prop drilling
  setGlobalNav(handleNav)

  const handleSearch = (params) => {
    setSearch_(params)
    setSelected_(null)

    const TYPE_ROUTE = {
      hotels: ROUTES.hotels,
      flights: ROUTES.flights,
      cars: ROUTES.cars,
      transfer: ROUTES.transfer,
      buses: ROUTES.buses,
      trains: ROUTES.trains,
      cruises: ROUTES.cruises,
    }
    navigate(TYPE_ROUTE[params.type] || ROUTES.home)
    scroll()
  }

  const handleSelectItem = (type, item) => {
    setSelected_({ type, item })
    navigate(`/${type}/${item.id}`)
    scroll()
  }

  const goHome = () => { navigate(ROUTES.home); scroll() }
  const goBack = () => navigate(-1)
  const navProps = { onBack: goHome, onNav: handleNav }

  return (
    <Routes>
      <Route
        path={ROUTES.home}
        element={<HomePage onSearch={handleSearch} onNav={handleNav} />}
      />
      <Route
        path={ROUTES.hotels}
        element={
          <RouteGuard type="hotels">
            <HotelResults
              search={getSearch()}
              onBack={goHome}
              onNewSearch={handleSearch}
              onSelectItem={(item) => handleSelectItem('hotels', item)}
            />
          </RouteGuard>
        } />
      <Route
        path={ROUTES.flights}
        element={
          <RouteGuard type="flights">
            <FlightResults
              search={getSearch()}
              onBack={goHome}
              onNewSearch={handleSearch}
              onSelectItem={(item) => handleSelectItem('flights', item)}
            />
          </RouteGuard>
        } />
      <Route
        path={ROUTES.cars}
        element={
          <RouteGuard type="cars">
            <CarResults
              search={getSearch()}
              onBack={goHome}
              onNewSearch={handleSearch}
              onSelectItem={(item) => handleSelectItem('cars', item)}
            />
          </RouteGuard>
        } />
      <Route
        path={ROUTES.transfer}
        element={
          <RouteGuard type="transfer">
            <TransferResults
              search={getSearch()}
              onBack={goHome}
              onNewSearch={handleSearch}
              onSelectItem={(item) => handleSelectItem('transfer', item)}
            />
          </RouteGuard>
        } />
      <Route
        path={ROUTES.buses}
        element={
          <RouteGuard type="buses">
            <BusResults
              search={getSearch()}
              onBack={goHome}
              onNewSearch={handleSearch}
              onSelectItem={(item) => handleSelectItem('buses', item)}
            />
          </RouteGuard>
        } />
      <Route
        path={ROUTES.trains}
        element={
          <RouteGuard type="trains">
            <TrainResults
              search={getSearch()}
              onBack={goHome}
              onNewSearch={handleSearch}
              onSelectItem={(item) => handleSelectItem('trains', item)}
            />
          </RouteGuard>
        } />
      <Route
        path={ROUTES.cruises}
        element={
          <RouteGuard type="cruises">
            <CruiseResults
              search={getSearch()}
              onBack={goHome}
              onNewSearch={handleSearch}
              onSelectItem={(item) => handleSelectItem('cruises', item)}
            />
          </RouteGuard>
        } />
      <Route
        path={ROUTES.hotelDetail}
        element={
          <DetailRoute type="hotels">
            {(item) => (
              <HotelDetailPage
                hotel={item}
                search={getSearch()}
                onBack={goHome}
                onBackToResults={goBack}
              />
            )}
          </DetailRoute>
        } />
      <Route
        path={ROUTES.flightDetail}
        element={
          <DetailRoute type="flights">
            {(item) => (
              <FlightDetailPage
                item={item}
                search={getSearch()}
                onBack={goHome}
                onBackToResults={goBack}
              />
            )}
          </DetailRoute>
        } />
      <Route
        path={ROUTES.carDetail}
        element={
          <DetailRoute type="cars">
            {(item) => (
              <CarDetailPage
                item={item}
                search={getSearch()}
                onBack={goHome}
                onBackToResults={goBack}
              />
            )}
          </DetailRoute>
        } />
      <Route
        path={ROUTES.transferDetail}
        element={
          <DetailRoute type="transfer">
            {(item) => (
              <TransferDetailPage
                item={item}
                search={getSearch()}
                onBack={goHome}
                onBackToResults={goBack}
              />
            )}
          </DetailRoute>
        } />
      <Route
        path={ROUTES.busDetail}
        element={
          <DetailRoute type="buses">
            {(item) => (
              <BusDetailPage
                item={item}
                search={getSearch()}
                onBack={goHome}
                onBackToResults={goBack}
              />
            )}
          </DetailRoute>
        } />
      <Route
        path={ROUTES.trainDetail}
        element={
          <DetailRoute type="trains">
            {(item) => (
              <TrainDetailPage
                item={item}
                search={getSearch()}
                onBack={goHome}
                onBackToResults={goBack}
              />
            )}
          </DetailRoute>
        } />
      <Route
        path={ROUTES.cruiseDetail}
        element={
          <DetailRoute type="cruises">
            {(item) => (
              <CruiseDetailPage
                item={item}
                search={getSearch()}
                onBack={goHome}
                onBackToResults={goBack}
              />
            )}
          </DetailRoute>
        } />

      {/* NAV PAGES  */}
      <Route
        path={ROUTES.deals}
        element={<DealsPage {...navProps} onSearch={handleSearch} />} />
      <Route
        path={ROUTES.mytrips}
        element={<MyTripsPage {...navProps} />} />
      <Route
        path={ROUTES.rewards}
        element={<RewardsPage {...navProps} />} />
      <Route
        path={ROUTES.support}
        element={<SupportPage {...navProps} />} />

      {/* COMPANY PAGES  */}
      <Route
        path={ROUTES.about}
        element={<AboutPage {...navProps} />} />
      <Route
        path={ROUTES.careers}
        element={<CareersPage {...navProps} />} />
      <Route
        path={ROUTES.press}
        element={<PressPage {...navProps} />} />
      <Route
        path={ROUTES.blog}
        element={<BlogPage {...navProps} />} />
      <Route
        path={ROUTES.partners}
        element={<PartnersPage {...navProps} />} />

      {/* SUPPORT PAGES  */}
      <Route
        path={ROUTES.helpcenter}
        element={<HelpCenterPage {...navProps} />} />
      <Route
        path={ROUTES.contact}
        element={<ContactPage {...navProps} />} />
      <Route
        path={ROUTES.cancellation}
        element={<CancellationPage {...navProps} />} />
      <Route
        path={ROUTES.privacy}
        element={<PrivacyPage {...navProps} />} />
      <Route
        path={ROUTES.terms}
        element={<TermsPage {...navProps} />} />

      {/* 404 — catch-all → Home  */}
      <Route
        path="*"
        element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppInner />
    </HashRouter>
  )
}
