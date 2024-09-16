interface Props {
  date?: string
  newCard?: string
  newCardDate?: string
  newOrder?: string
  newOrder2?: string
  newOrder2Date?: string
  order?: string
  orderDate?: string
  payment?: string
  paymentDate?: string
  text?: string
  title?: string
  unlockPackages?: string
  unlockPackagesDate?: string
}

export default function OrdersCard({
  date = "22 DEC 7:20 PM",
  newCard = "New card added for order #4395133",
  newCardDate = "20 DEC 2:20 AM",
  newOrder = "New order #1832412",
  newOrder2,
  newOrder2Date,
  order = "$2400, Design changes",
  orderDate = "21 DEC 11 PM",
  payment = "Server payments for April",
  paymentDate = "21 DEC 9:34 PM",
  text = "24%",
  title = "Orders overview",
  unlockPackages = "Unlock packages for development",
  unlockPackagesDate = "18 DEC 4:54 AM",
}: Props) {
  return (
    <div className="card h-100">
      <div className="card-header pb-0">
        <h6>{ title }</h6>
        <p className="text-sm">
          <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
          <span className="font-weight-bold">24%</span> { text }
        </p>
      </div>
      <div className="card-body p-3">
        <div className="timeline timeline-one-side">
          <div className="timeline-block mb-3">
            <span className="timeline-step">
              <i className="ni ni-bell-55 text-success text-gradient"></i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">{ order }</h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                { date }
              </p>
            </div>
          </div>
          <div className="timeline-block mb-3">
            <span className="timeline-step">
              <i className="ni ni-html5 text-danger text-gradient"></i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">
                { newOrder }
              </h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                { orderDate }
              </p>
            </div>
          </div>
          <div className="timeline-block mb-3">
            <span className="timeline-step">
              <i className="ni ni-cart text-info text-gradient"></i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">
                { payment }
              </h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                { paymentDate }
              </p>
            </div>
          </div>
          <div className="timeline-block mb-3">
            <span className="timeline-step">
              <i className="ni ni-credit-card text-warning text-gradient"></i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">
                { newCard }
              </h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                { newCardDate }
              </p>
            </div>
          </div>
          <div className="timeline-block mb-3">
            <span className="timeline-step">
              <i className="ni ni-key-25 text-primary text-gradient"></i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">
                { unlockPackages }
              </h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                { unlockPackagesDate }
              </p>
            </div>
          </div>
          {newOrder2 && <div className="timeline-block">
            <span className="timeline-step">
              <i className="ni ni-money-coins text-dark text-gradient"></i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">
                {newOrder2}
              </h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                {newOrder2Date}
              </p>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}
