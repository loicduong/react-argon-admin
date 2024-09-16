import ArgonButton from '@/components/base/ArgonButton'

export default function PaymentCard() {
  return (
    <div className="card mt-4">
      <div className="card-header pb-0 p-3">
        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <h6 className="mb-0">Payment Method</h6>
          </div>
          <div className="col-6 text-end">
            <ArgonButton color="dark" variant="gradient">
              <i className="fas fa-plus me-2"></i>
              Add New Card
            </ArgonButton>
          </div>
        </div>
      </div>
      <div className="card-body p-3">
        <div className="row">
          <div className="col-md-6 mb-md-0 mb-4">
            <div
              className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
            >
              <img
                className="w-10 me-3 mb-0"
                src={new URL('@/assets/img/logos/mastercard.png', import.meta.url).href}
                alt="logo"
              />
              <h6
                className="mb-0"
              >
                ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852
              </h6>
              <i
                className="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-hidden="true"
                data-bs-original-title="Edit Card"
                aria-label="Edit Card"
              ></i>
              <span className="sr-only">Edit Card</span>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
            >
              <img
                className="w-10 me-3 mb-0"
                src={new URL('@/assets/img/logos/visa.png', import.meta.url).href}
                alt="logo"
              />
              <h6
                className="mb-0"
              >
                ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248
              </h6>
              <i
                className="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-hidden="true"
                data-bs-original-title="Edit Card"
                aria-label="Edit Card"
              ></i>
              <span className="sr-only">Edit Card</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
