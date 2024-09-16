import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/stores'
import { toggleSidebarColor, navbarMinimize, toggleConfigurator } from '@/stores/modules/theme'
import Breadcrumb from '@/layouts/modules/breadcrumb'

interface Props {
  className?: string
  minNav: () => void
}

export default function Navbar({ className, minNav }: Props) {
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(true)
  const { isRTL } = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  const currentRouteName = location.pathname

  function toggleSidebar() {
    toggleSidebarColor("bg-white")
    dispatch(navbarMinimize())
  }

  useEffect(() => {
    minNav()
  }, [])

  return (
    <nav
      className={`navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl ${isRTL ? 'top-0 position-sticky z-index-sticky' : ''} ${className}`}
      id="navbarBlur"
      data-scroll="true"
    >
      <div className="px-3 py-1 container-fluid">
        <Breadcrumb currentPage={currentRouteName} />

        <div
          className={`mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4 ${isRTL ? 'px-0' : 'me-sm-4'}`}
          id="navbar"
        >
          <div
            className={`pe-md-3 d-flex align-items-center ${isRTL ? 'me-md-auto' : 'ms-md-auto'}`}
          >
            <div className="input-group">
              <span className="input-group-text text-body">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder={isRTL ? 'أكتب هنا...' : 'Type here...'}
              />
            </div>
          </div>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <Link
                to={'/signin'}
                className="px-0 nav-link font-weight-bold text-white"
                target="_blank"
              >
                <i className={"fa fa-user" + (isRTL ? 'ms-sm-2' : 'me-sm-2')}></i>
                <span className="d-sm-inline d-none">{isRTL ? 'يسجل دخول' : 'Sign In'}</span>
              </Link>
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a
                href="#"
                onClick={toggleSidebar}
                className="p-0 nav-link text-white"
                id="iconNavbarSidenav"
              >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line bg-white"></i>
                  <i className="sidenav-toggler-line bg-white"></i>
                  <i className="sidenav-toggler-line bg-white"></i>
                </div>
              </a>
            </li>
            <li className="px-3 nav-item d-flex align-items-center">
              <a className="p-0 nav-link text-white" onClick={() => dispatch(toggleConfigurator())}>
                <i className="cursor-pointer fa fa-cog fixed-plugin-button-nav"></i>
              </a>
            </li>
            <li
              className={`nav-item dropdown d-flex align-items-center ${isRTL ? 'ps-2' : 'pe-2'}`}
            >
              <a
                href="#"
                className={"p-0 nav-link text-white" + (showMenu ? 'show' : '')}
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setShowMenu(!showMenu)}
              >
                <i className="cursor-pointer fa fa-bell"></i>
              </a>
              <ul
                className={"px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4" + (showMenu ? 'show' : '')}
                aria-labelledby="dropdownMenuButton"
              >
                <li className="mb-2">
                  <a
                    className="dropdown-item border-radius-md"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="py-1 d-flex">
                      <div className="my-auto">
                        <img
                          src={new URL("@/assets/img/team-2.jpg", import.meta.url).href}
                          className="avatar avatar-sm me-3"
                          alt="user image"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-1 text-sm font-weight-normal">
                          <span className="font-weight-bold">New message</span> from
                          Laur
                        </h6>
                        <p className="mb-0 text-xs text-secondary">
                          <i className="fa fa-clock me-1"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="dropdown-item border-radius-md"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="py-1 d-flex">
                      <div className="my-auto">
                        <img
                          src={new URL("@/assets/img/small-logos/logo-spotify.svg", import.meta.url).href}
                          className="avatar avatar-sm bg-gradient-dark me-3"
                          alt="logo spotify"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-1 text-sm font-weight-normal">
                          <span className="font-weight-bold">New album</span> by
                          Travis Scott
                        </h6>
                        <p className="mb-0 text-xs text-secondary">
                          <i className="fa fa-clock me-1"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item border-radius-md"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="py-1 d-flex">
                      <div
                        className="my-auto avatar avatar-sm bg-gradient-secondary me-3"
                      >
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 43 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>credit-card</title>
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              transform="translate(-2169.000000, -745.000000)"
                              fill="#FFFFFF"
                              fillRule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path
                                    className="color-background"
                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                    opacity="0.593633743"
                                  />
                                  <path
                                    className="color-background"
                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-1 text-sm font-weight-normal">
                          Payment successfully completed
                        </h6>
                        <p className="mb-0 text-xs text-secondary">
                          <i className="fa fa-clock me-1"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
