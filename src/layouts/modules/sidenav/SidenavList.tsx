
import SidenavCard from './SidenavCard'
import SidenavItem from './SidenavItem'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores'

interface Props {
  cardBg: string
}

export default function SidenavList({ cardBg }: Props) {
  const location = useLocation()
  const { isRTL } = useSelector((state: RootState) => state.theme)

  function getRoute() {
    const routeArr = location.pathname.split("/");
    return routeArr[1];
  }

  const topItems = [
    {
      url: '/dashboard-default',
      className: getRoute() === 'dashboard-default' ? 'active' : '',
      navText: isRTL ? 'لوحة القيادة' : 'Dashboard',
      icon: <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>,
    },
    {
      url: '/table',
      className: getRoute() === 'table' ? 'active' : '',
      navText: isRTL ? 'الجداول': 'Tables',
      icon: <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>,
    },
    {
      url: '/billing',
      className: getRoute() === 'billing' ? 'active' : '',
      navText: isRTL ? 'الفواتیر' : 'Billing',
      icon: <i className="ni ni-credit-card text-success text-sm opacity-10"></i>,
    },
    {
      url: '/virtual-reality',
      className: getRoute() === 'virtual-reality' ? 'active' : '',
      navText: isRTL ? 'الواقع الافتراضي' : 'Virtual Reality',
      icon: <i className="ni ni-app text-info text-sm opacity-10"></i>,
    },
    {
      url: "/rtl-page",
      className: getRoute() === 'rtl-page' ? 'active' : '',
      navText: "RTL",
      icon: <i className="ni ni-world-2 text-danger text-sm opacity-10"></i>,
    },
  ]

  const bottomItems = [
    {
      url: '/profile',
      className: getRoute() === 'profile' ? 'active' : '',
      navText: isRTL ? 'حساب تعريفي' : 'Profile',
      icon: <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>,
    },
    {
      url: '/signin',
      className: getRoute() === 'signin' ? 'active' : '',
      navText: isRTL ? 'تسجيل الدخول' : 'Sign In',
      icon: <i className="ni ni-single-copy-04 text-danger text-sm opacity-10"></i>,
    },
    {
      url: '/signup',
      className: getRoute() === 'signup' ? 'active' : '',
      navText: isRTL ? 'اشتراك' : 'Sign Up',
      icon: <i className="ni ni-collection text-info text-sm opacity-10"></i>,
    },
  ]

  return (
    <>
      <div
        className="collapse navbar-collapse w-auto h-auto h-100"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          {topItems.map((item) => (
            <li className="nav-item" key={item.url}>
              <SidenavItem
                url={item.url}
                className={item.className}
                navText={item.navText}
                icon={item.icon}
              />
            </li>
          ))}
          <li className="mt-3 nav-item">
            <h6
              className={`text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ${isRTL ? 'me-4' : 'ms-2'}`}
            >
              {isRTL ? 'صفحات المرافق' : 'ACCOUNT PAGES'}
            </h6>
          </li>
          {bottomItems.map((item) => (
            <li className="nav-item" key={item.url}>
              <SidenavItem
                url={item.url}
                className={item.className}
                navText={item.navText}
                icon={item.icon}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-3 mx-3 mt-3 sidenav-footer">
        <SidenavCard
          className={`${cardBg}`}
        />
      </div>
    </>
  )
}
