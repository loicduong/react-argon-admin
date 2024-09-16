import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/stores'
import Sidenav from './modules/sidenav'
import Navbar from './modules/navbar'
import AppFooter from './modules/app-footer'
import Configurator from './modules/configurator'
import { toggleConfigurator, navbarMinimize } from '@/stores/modules/theme'

export default function RootLayout() {
  const {
    layout,
    mcolor,
    isTransparent,
    isRTL,
    showSidenav,
    showFooter,
    showConfig,
    hideConfigButton,
    isNavFixed,
    darkMode,
    isAbsolute,
    showNavbar
  } = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  const navClasses = Object.entries({
    "position-sticky bg-white left-auto top-2 z-index-sticky":
      isNavFixed && !darkMode,
    "position-sticky bg-default left-auto top-2 z-index-sticky":
      isNavFixed && darkMode,
    "position-absolute px-4 mx-0 w-100 z-index-2": isAbsolute,
    "px-0 mx-4": !isAbsolute
  }).filter(([_, value]) => value)
    .map(([key, _]) => key)
    .join(' ');

  return (
    <>
      <div
        style={{ display: layout === 'landing' ? 'block' : 'none' }}
        className="landing-bg h-100 bg-gradient-primary position-fixed w-100"
      />

      {showSidenav && <Sidenav customClass={mcolor}
        className={`${isTransparent}, ${isRTL ? 'fixed-end' : 'fixed-start'}`}
      />}

      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        {showNavbar && <Navbar className={navClasses} minNav={() => dispatch(navbarMinimize())} />}
        <Outlet />
        <AppFooter className={showFooter ? 'd-block' : 'd-none'} />
        <Configurator
          toggle={() => dispatch(toggleConfigurator())}
          className={`${showConfig ? 'show' : ''} ${hideConfigButton ? 'd-none' : ''}`}
        />
      </main>
    </>
  )
}
