import { useSelector } from 'react-redux'
import { RootState } from '@/stores'

interface Props {
  className?: string
}

export default function SidenavCard({ className }: Props) {
  const { layout, isRTL } = useSelector((state: RootState) => state.theme)

  return (
    <div
      style={{ display: layout !== 'landing' ? 'block' : 'none' }}
      className={`card card-plain shadow-none ${className}`}
      id="sidenavCard"
    >
      <div className="p-3 card-body text-center w-100 pt-0">
        <img
          className="w-50 mx-auto"
          src={ new URL('@/assets/img/illustrations/icon-documentation.svg', import.meta.url).href }
          alt="sidebar_illustration"
        />

        {
          isRTL
          ? <h6 className="mb-0 text-dark up">تحتاج مساعدة ؟</h6>
          : <h6 className="mb-0 text-dark up">Need Help ?</h6>
        }

        {
          isRTL
            ? <p className="text-xs font-weight-bold">يرجى التحقق من مستنداتنا</p>
            : <p className="text-xs font-weight-bold">Please check our docs</p>
        }
      </div>

      {
        isRTL
          ? <a
            href="https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/"
            target="_blank"
            className="mb-3 btn btn-dark btn-sm w-100"
          >
            توثيق
          </a>
          : <a
            href="https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/"
            target="_blank"
            className="mb-3 btn btn-dark btn-sm w-100"
          >
            Documentation
          </a>
      }

      {
        isRTL
          ? <a
            href="https://www.creative-tim.com/product/vue-argon-dashboard-pro"
            target="_blank"
            className="mb-3 btn btn-success btn-sm w-100"
          >
            التطور للاحترافية
          </a>
          : <a
            href="https://www.creative-tim.com/product/vue-argon-dashboard-pro"
            target="_blank"
            className="mb-3 btn btn-success btn-sm w-100"
          >
            Upgrade to pro
          </a>
      }
    </div>
  )
}
