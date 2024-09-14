import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/stores'
import Sidenav from './modules/sidenav'
import AppFooter from './modules/app-footer'
import Configurator from './modules/configurator'
import { toggleConfigurator } from '@/stores/modules/theme'

export default function RootLayout() {
  const {
    layout,
    mcolor,
    isTransparent,
    isRTL,
    showSidenav,
    showFooter,
    showConfig,
    hideConfigButton
  } = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

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
