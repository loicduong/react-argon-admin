import Navbar from "@/components/common/Navbar";
import ArgonInput from "@/components/ArgonInput";
import ArgonSwitch from "@/components/ArgonSwitch";
import ArgonButton from "@/components/base/ArgonButton";
import { useDispatch } from "react-redux";
import {
  setHideConfigButton,
  setShowFooter,
  setShowNavbar,
  setShowSidenav,
} from "@/stores/modules/theme";

export default function Signin() {
  const dispatch = useDispatch();
  const body = document.getElementsByTagName("body")[0];

  useEffect(() => {
    dispatch(setHideConfigButton(true));
    dispatch(setShowNavbar(false));
    dispatch(setShowSidenav(false));
    dispatch(setShowFooter(false));
    body.classList.remove("bg-gray-100")

    return () => {
      dispatch(setHideConfigButton(false));
      dispatch(setShowNavbar(true));
      dispatch(setShowSidenav(true));
      dispatch(setShowFooter(true));
      body.classList.add("bg-gray-100")
    }
  }, []);

  return (
    <>
      <div className="container top-0 position-sticky z-index-sticky">
        <div className="row">
          <div className="col-12">
            <Navbar
              isBlur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
              darkMode
              isBtn="bg-gradient-success"
            />
          </div>
        </div>
      </div>
      <main className="mt-0 main-content">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
                  <div className="card card-plain">
                    <div className="pb-0 card-header text-start">
                      <h4 className="font-weight-bolder">Sign In</h4>
                      <p className="mb-0">Enter your email and password to sign in</p>
                    </div>
                    <div className="card-body">
                      <form role="form">
                        <div className="mb-3">
                          <ArgonInput type="email" placeholder="Email" name="email" size="lg" />
                        </div>
                        <div className="mb-3">
                          <ArgonInput type="password" placeholder="Password" name="password" size="lg" />
                        </div>
                        <ArgonSwitch id="rememberMe" children="Remember me" />
                        <div className="text-center">
                          <ArgonButton
                            className="mt-4"
                            variant="gradient"
                            color="success"
                            fullWidth
                            size="lg"
                            children="Sign in"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="px-1 pt-0 text-center card-footer px-lg-2">
                      <p className="mx-auto mb-4 text-sm">
                        Don't have an account? <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="text-success text-gradient font-weight-bold"
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
                >
                  <div
                    className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                    style={{
                      backgroundImage: "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg')",
                      backgroundSize: "cover"
                    }}
                  >
                    <span className="mask bg-gradient-success opacity-6"></span>
                    <h4
                      className="mt-5 text-white font-weight-bolder position-relative"
                    >
                      "Attention is the new currency"
                    </h4>
                    <p
                      className="text-white position-relative"
                    >
                      The more effortless the writing looks, the more effort the writer actually put into the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
