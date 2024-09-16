import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/stores'
import {
  setMcolor,
  setSidebarType,
  toggleNavbarFixed,
  toggleDarkMode
} from '@/stores/modules/theme'

interface Props {
  toggle: () => void
  className?: string
}

export default function Configurator({ toggle, className }: Props) {
  const { isRTL, sidebarType, isNavFixed, darkMode } = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  function sidebarColor(color = "success") {
    document.querySelector("#sidenav-main")?.setAttribute("data-color", color);
    dispatch(setMcolor(`card-background-mask-${color}`))
  }

  return (
    <div className={`fixed-plugin ${className}`}>
      <a
        className="px-3 py-2 fixed-plugin-button text-dark position-fixed"
        onClick={toggle}
      >
        <i className="py-2 fas fa-cog"></i>
      </a>
      <div className="shadow-lg card">
        <div className="pt-3 pb-0 bg-transparent card-header">
          <div
            className={`${isRTL ? 'float-end' : 'float-start'}`}
          >
            <h5 className="mt-3 mb-0">Argon Configurator</h5>
            <p>See our dashboard options.</p>
          </div>
          <div
          className={`mt-4 ${isRTL ? 'float-start' : 'float-end'}`}
            onClick={toggle}
          >
            <button className="p-0 btn btn-link text-dark fixed-plugin-close-button">
              <i className="fa fa-close"></i>
            </button>
          </div>
        </div >
        <hr className="my-1 horizontal dark" />
        <div className="pt-0 card-body pt-sm-3">
          <div>
            <h6 className="mb-0">Sidebar Colors</h6>
          </div>
          <a href="#" className="switch-trigger background-color">
            <div
              className={`my-2 badge-colors ${isRTL ? 'text-end' : ' text-start'}`}
            >
              <span
                  className="badge filter bg-gradient-primary active"
                  data-color="primary"
                  onClick={() => sidebarColor('primary')}
              ></span>
              <span
                className="badge filter bg-gradient-dark"
                data-color="dark"
                onClick={() => sidebarColor('dark')}
              ></span>
              <span
                className="badge filter bg-gradient-info"
                data-color="info"
                onClick={() => sidebarColor('info')}
      ></span >
        <span
          className="badge filter bg-gradient-success"
          data-color="success"
                onClick={() => sidebarColor('success')}
      ></span >
        <span
          className="badge filter bg-gradient-warning"
          data-color="warning"
                onClick={() => sidebarColor('warning')}
      ></span >
        <span
          className="badge filter bg-gradient-danger"
          data-color="danger"
                onClick={() => sidebarColor('danger')}
      ></span >
            </div >
          </a >
          <div className="mt-3">
            <h6 className="mb-0">Sidenav Type</h6>
            <p className="text-sm">Choose between 2 different sidenav types.</p>
          </div>
          <div className="d-flex gap-2">
            <button
              id="btn-white"
              className={`btn w-100 px-3 mb-2 ${sidebarType === 'bg-white'
                  ? 'bg-gradient-success'
                  : 'btn-outline-success'}`}
                onClick={() => dispatch(setSidebarType('bg-white'))}
            >
              White
            </button>
            <button
              id="btn-dark"
              className={`btn w-100 px-3 mb-2 ${sidebarType === 'bg-default'
                  ? 'bg-gradient-success'
                  : 'btn-outline-success'}`}
                onClick={() => dispatch(setSidebarType('bg-default'))}
      >
      Dark
            </button >
          </div >
          <p className="mt-2 text-sm d-xl-none d-block">
            You can change the sidenav type just on desktop view.
          </p>
          <div className="mt-3 d-flex">
            <h6 className="mb-0">Navbar Fixed</h6>
            <div className="form-check form-switch ps-0 ms-auto my-auto">
                <input
                  className={`mt-1 form-check-input ${isRTL ? 'float-end  me-auto' : ' ms-auto'}`}
                  type="checkbox"
                  id="navbarFixed"
                  checked={isNavFixed}
                  onClick={() => dispatch(toggleNavbarFixed())}
              />
            </div>
          </div>

          <hr className="horizontal dark my-4" />
          <div className="mt-2 mb-5 d-flex">
              <h6 className={`mb-0 ${isRTL ? 'ms-2' : ''}`}>
              Light / Dark
            </h6>
            <div className="form-check form-switch ps-0 ms-auto my-auto">
                <input
                  className="form-check-input mt-1 ms-auto"
                  type="checkbox"
                  checked={darkMode}
                  onClick={() => dispatch(toggleDarkMode())}
              />
            </div>
          </div >
          <a
            className="btn bg-gradient-dark w-100"
            href="https://www.creative-tim.com/product/vue-argon-dashboard"
          >
            Free Download
          </a>
          <a
            className="btn btn-outline-dark w-100"
            href="https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/"
          >
            View documentation
          </a>
          <div className="text-center w-100">
            <a
              className="github-button"
              href="https://github.com/creativetimofficial/vue-argon-dashboard"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star creativetimofficial/vue-argon-dashboard on GitHub"
            >
              Star
            </a>
            <h6 className="mt-3">Thank you for sharing!</h6>
            <a
              href="https://twitter.com/intent/tweet?text=Check%20Vue%20Argon%20Dashboard%202%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%vuejs3&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%vue-argon-dashboard"
              className="mb-0 btn btn-dark me-2"
              target="_blank"
            >
              <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/vue-argon-dashboard"
              className="mb-0 btn btn-dark me-2"
              target="_blank"
            >
              <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
