import { useSelector } from 'react-redux'
import { RootState } from '@/stores'
import SidenavList from './SidenavList'

interface Props {
  customClass: string
  className?: string
}

export default function Sidenav({ customClass, className }: Props) {
  const { layout, darkMode, isRTL, sidebarType } = useSelector((state: RootState) => state.theme)
  const logoWhite = new URL('@/assets/img/logo-ct.png', import.meta.url).href
  const logo = new URL('@/assets/img/logo-ct-dark.png', import.meta.url).href

  return (
    <>
      <div
        style={{ display: layout === 'default' ? 'block' : 'none' }}
        className={`min-height-300 position-absolute w-100 ${darkMode ? 'bg-transparent' : 'bg-success'} ${className}`}
      />
      <aside
        className={`my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl ${isRTL ? 'me-3 rotate-caret fixed-end' : 'fixed-start ms-3'} ${layout === 'landing' ? 'bg-transparent shadow-none' : ' '} ${sidebarType}`}
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <Link className="m-0 navbar-brand" to="/">
            <img
              src={darkMode || sidebarType === 'bg-default' ? logoWhite : logo}
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span className="ms-2 font-weight-bold me-2">Argon Dashboard 2</span>
          </Link>
        </div>
        <hr className="mt-0 horizontal dark" />
        <SidenavList cardBg={customClass} />
      </aside>
    </>
  )
}
