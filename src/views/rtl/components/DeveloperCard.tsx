export default function DeveloperCard() {
  return (
    <div className="card">
      <div className="card-body p-3">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="d-flex flex-column h-100">
              <p className="mb-1 pt-2 text-bold">بناها المطورون</p>
              <h5 className="font-weight-bolder">Argon Dashboard 2</h5>
              <p className="mb-5">
                من الألوان والبطاقات والطباعة إلى العناصر المعقدة ، ستجد الوثائق
                الكاملة.
              </p>
              <a
                className="text-dark font-weight-bold ps-1 mb-0 icon-move-left mt-auto"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                اقرأ المستندات <i className="fas fa-arrow-left text-sm ms-1" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 me-auto ms-0 text-center">
            <div className="bg-gradient-primary border-radius-lg min-height-200">
              <img
                src={new URL("@/assets/img/shapes/waves-white.svg", import.meta.url).href}
                className="position-absolute h-100 top-0 d-md-block d-none"
                alt="waves"
              />
              <div className="position-relative pt-5 pb-4">
                <img
                  className="max-width-500 w-100 position-relative z-index-2"
                  src={new URL("@/assets/img/illustrations/rocket-white.png", import.meta.url).href}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
