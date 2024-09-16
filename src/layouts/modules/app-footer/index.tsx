import { useSelector } from 'react-redux'
import { RootState } from '@/stores'

interface Props {
  className?: string
}

export default function AppFooter({ className }: Props) {
  const { isRTL } = useSelector((state: RootState) => state.theme)

  const links = [
    { href: "https://www.creative-tim.com", text: "Creative Tim" },
    { href: "https://www.creative-tim.com/presentation", text: "About Us" },
    { href: "https://www.creative-tim.com/blog", text: "Blog" },
    { href: "https://www.creative-tim.com/license", text: "License", className: "pe-0" }
  ];

  return (
    <footer className={`py-3 footer ${className}`}>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">
          <div className="mb-4 col-lg-6 mb-lg-0">
            <div
              className={`text-sm text-center copyright text-muted ${isRTL ? 'text-lg-end' : 'text-lg-start'}`}
            >
              © { new Date().getFullYear() }, made with <i className="fa fa-heart"></i> by <a
                href="https://www.creative-tim.com"
                className="font-weight-bold"
                target="_blank"
              >
                Creative Tim
              </a> for a better web.
            </div>
          </div>
          <div className="col-lg-6">
            <ul
              className="nav nav-footer justify-content-center justify-content-lg-end"
            >
              {links.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link text-muted ${link.className}`}
                    target="_blank"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
