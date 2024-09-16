import Navbar from '@/layouts/modules/navbar';
import Sidenav from '@/layouts/modules/sidenav';
import AppFooter from '@/layouts/modules/app-footer';
import CardCalendar from './components/CardCalendar';
import CardToDo from './components/CardToDo';
import CardEmail from './components/CardEmail';
import CardPlayer from './components/CardPlayer';
import CardMessage from './components/CardMessage';
import { useDispatch, useSelector } from "react-redux";
import {
  navbarMinimize,
  setIsPinned,
  setIsTransparent,
  setLayout,
  setShowFooter,
  setShowNavbar,
  setShowSidenav,
  toggleConfigurator,
} from '@/stores/modules/theme'
import { RootState } from '@/stores'

export default function VirtualReality() {
  const {
    isNavFixed,
    isPinned,
    isTransparent,
    mcolor,
    navbarFixedClass,
  } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    dispatch(setLayout("vr"));
    dispatch(setShowNavbar(false));
    dispatch(setShowSidenav(false));
    dispatch(setShowFooter(false));
    body.classList.add("virtual-reality");
    dispatch(setIsTransparent("bg-white"));

    return () => {
      dispatch(setLayout("default"));
      dispatch(setShowNavbar(true));
      dispatch(setShowSidenav(true));
      dispatch(setShowFooter(true));
      body.classList.remove("virtual-reality");

      if (isPinned === false) {
        const sidenavShow = document.querySelector(".g-sidenav-show");
        sidenavShow?.classList.remove("g-sidenav-hidden");
        sidenavShow?.classList.add("g-sidenav-pinned");
        dispatch(setIsPinned(true));
      }

      dispatch(setIsTransparent("bg-transparent"));
    }
  }, [])

  return (
    <>
      <div className="mt-3">
        <Navbar
          minNav={(value) => dispatch(navbarMinimize(value))}
          toggle={() => dispatch(toggleConfigurator())}
          className={`${isNavFixed ? navbarFixedClass : ''} ${isNavFixed ? 'bg-white' : 'bg-success'}`}
        />
      </div>
      <div
        className="mx-3 mt-4 border-radius-xl position-relative"
        style={{
          backgroundImage: 'url(' + new URL('@/assets/img/vr-bg.jpg', import.meta.url).href + ')',
          backgroundSize: 'cover'
        }}
      >
        <Sidenav customClass={mcolor} className={`fixed-start ${isTransparent}`} />
        <main className="mt-1 main-content border-radius-lg">
          <div className="section min-vh-85 position-relative transform-scale-0 transform-scale-md-7">
            <div className="container-fluid">
              <div className="pt-10 row">
                <div className="pt-5 text-center col-lg-1 col-md-1 pt-lg-0 ms-lg-5">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="border-0 avatar avatar-md d-block"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="My Profile"
                  >
                    <img
                      className="border-radius-lg"
                      alt="Image placeholder"
                      src={new URL("@/assets/img/team-1.jpg", import.meta.url).href}
                    />
                  </a>
                  <button
                    className="p-2 mt-2 btn btn-white border-radius-lg d-block"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Home"
                  >
                    <i className="p-2 fas fa-home"></i>
                  </button>
                  <button
                    className="p-2 btn btn-white border-radius-lg d-block"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Search"
                  >
                    <i className="p-2 fas fa-search"></i>
                  </button>
                  <button
                    className="p-2 btn btn-white border-radius-lg d-block"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Minimize"
                  >
                    <i className="p-2 fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <div className="col-lg-8 col-md-11">
                  <div className="d-flex">
                    <div className="me-auto">
                      <h1 className="mb-0 display-1 font-weight-bold mt-n4">12°C</h1>
                      <h6 className="mb-0 text-uppercase ms-1">Cloudy</h6>
                    </div>
                    <div className="ms-auto">
                      <img
                        className="w-50 float-end mt-lg-n4"
                        src={new URL("@/assets/img/small-logos/icon-sun-cloud.png", import.meta.url).href}
                        alt="image sun"
                      />
                    </div>
                  </div>
                  <div className="mt-4 row">
                    <div className="col-lg-4 col-md-4">
                      <CardCalendar />
                    </div>
                    <div className="mt-4 col-lg-4 col-md-4 mt-sm-0">
                      <CardToDo />
                      <CardEmail />
                    </div>
                    <div className="mt-4 col-lg-4 col-md-4 mt-sm-0">
                      <CardPlayer />
                      <CardMessage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <AppFooter className="py-3 bg-white border-radius-lg" />
    </>
  )
}
