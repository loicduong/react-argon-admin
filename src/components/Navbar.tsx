interface Props {
  isBlur?: string
  isBtn?: string
  darkMode?: boolean
}

export default function Navbar({ isBlur, isBtn = 'bg-gradient-light', darkMode = false }: Props) {
  const items = [
    {
      ariaCurrent: 'page',
      className: 'd-flex align-items-center active',
      iconClassName: 'fas fa-chart-pie',
      label: 'Dashboard',
      to: '/dashboard-default',
    },
    {
      label: 'Profile',
      iconClassName: 'fa-solid fa-user',
      to: '/profile'
    },
    {
      label: 'Sign Up',
      iconClassName: 'fas fa-user-circle',
      to: '/signup'
    },
    {
      label: 'Sign In',
      iconClassName: 'fas fa-key',
      to: '/signin'
    },
  ]

  return (
    <nav
      className={`navbar navbar-expand-lg top-0 z-index-3 position-absolute mt-4 ${
        isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'
      }`}
  >
    <div className="container ps-2 pe-0">
      <Link
        className={`navbar-brand font-weight-bolder ms-lg-0 ms-3 ${
          darkMode ? 'text-black' : 'text-white'
        }`}
        to="/"
        >
          Argon Dashboard 2
      </Link>
      <button
        className="shadow-none navbar-toggler ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="mt-2 navbar-toggler-icon">
          <span className="navbar-toggler-bar bar1"></span>
          <span className="navbar-toggler-bar bar2"></span>
          <span className="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav mx-auto">
          {
            items.map((item) => (
              <li className="nav-item">
                <Link
                  className={`nav-link me-2 ${item.className}`}
                  aria-current={item.ariaCurrent as React.AriaAttributes['aria-current']}
                  to={item.to}
                >
                  <i
                    className={`${item.iconClassName} opacity-6 me-1 ${isBlur ? 'text-dark' : 'text-white'}`}
                    aria-hidden="true"
                  ></i>
                  {` ${item.label} `}
                </Link>
              </li>
            ))
          }
        </ul >
        <ul className="navbar-nav d-lg-block d-none">
          <li className="nav-item">
              <a
                href="https://www.creative-tim.com/product/vue-argon-dashboard"
                className={`btn btn-sm mb-0 me-1 ${isBtn}`}
              >
                Free download
              </a>
            </li>
        </ul >
      </div >
    </div >
  </nav >
  )
}
