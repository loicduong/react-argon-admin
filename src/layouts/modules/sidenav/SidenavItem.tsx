import { useSelector } from 'react-redux'
import { RootState } from '@/stores'

interface Props {
  url: string
  navText: string
  className?: string
  icon?: React.ReactNode
}

export default function SidenavItem({ url, navText, className, icon }: Props) {
  const { isRTL } = useSelector((state: RootState) => state.theme)

  return (
    <Link to={url} className={`nav-link ${className}`}>
      <div
        className="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
      >
        {icon}
      </div>
      <span
        className={`nav-link-text ${isRTL ? " me-1" : "ms-1"}`}
      >
        {navText}
      </span>
    </Link>
  )
}
