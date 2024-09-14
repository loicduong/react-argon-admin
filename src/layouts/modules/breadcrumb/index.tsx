import { useSelector } from "react-redux"
import { RootState } from "@/stores"

interface Props {
  currentPage: string
}

export default function Breadcrumb({ currentPage }: Props) {
  const { isRTL, isNavFixed } = useSelector((state: RootState) => state.theme)
  return (
    <nav aria-label="breadcrumb">
      <ol
        className={`px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb ${isRTL ? '' : ' me-sm-6'} ${isNavFixed ? 'text-dark' : 'text-white' }`}
      >
        <li className="text-sm breadcrumb-item">
          <a
            className={`${isRTL ? "opacity-5 ps-2" : "opacity-8"} ${isNavFixed ? 'text-dark' : 'text-white'}`}
            href="#"
          >
            {isRTL ? 'لوحات القيادة' : 'Pages'}
          </a>
        </li>
        <li
          className={`text-sm breadcrumb-item active ${isNavFixed ? 'text-dark' : 'text-white'}`}
          aria-current="page"
        >
          { currentPage }
        </li>
      </ol>
      <h6 className={`mb-0 font-weight-bolder ${isNavFixed ? 'text-dark' : 'text-white'}`}>
        { currentPage }
      </h6>
    </nav>
  )
}
