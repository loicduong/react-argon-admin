export default function AppFooter() {
  const pages = [
    {
      label: 'Company',
    },
    {
      label: 'About Us',
    },
    {
      label: 'Team',
    },
    {
      label: 'Products',
    },
    {
      label: 'Blog',
    },
    {
      label: 'Pricing',
    }
  ]

  const socials = [
    {
      icon: 'fab fa-dribbble',
    },
    {
      icon: 'fab fa-twitter',
    },
    {
      icon: 'fab fa-instagram',
    },
    {
      icon: 'fab fa-pinterest',
    },
    {
      icon: 'fab fa-github',
    }
  ]

  return (
    <footer className="py-5 footer">
      <div className="container">
        <div className="row">
          <div className="mx-auto mb-4 text-center col-lg-8">
            {
              pages.map((page) => (
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  key={page.label}
                  target="_blank"
                  className="mb-2 text-secondary me-xl-5 me-3 mb-sm-0"
                >
                  {` ${page.label} `}
                </a>
              ))
            }
          </div>
          <div className="mx-auto mt-2 mb-4 text-center col-lg-8">
            {
              socials.map((social) => (
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  target="_blank"
                  key={social.icon}
                  className="text-secondary me-xl-4 me-4"
                >
                  <span className={`text-lg ${social.icon}`}></span>
                </a>
              ))
            }
          </div>
        </div>
        <div className="row">
          <div className="mx-auto mt-1 text-center col-8">
            <p className="mb-0 text-secondary">
              Copyright © { new Date().getFullYear() } Soft by Creative Tim.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
