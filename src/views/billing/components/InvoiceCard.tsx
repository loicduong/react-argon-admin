import ArgonButton from '@/components/base/ArgonButton'

interface Props {
  className?: string
}

export default function InvoiceCard({ className }: Props) {
  const invoices = [
    { id: 1, date: 'March, 01, 2020', code: '#MS-415646', amount: 180 },
    { id: 2, date: 'February, 10, 2021', code: '#RV-126749', amount: 250 },
    { id: 3, date: 'April, 05, 2020', code: '#FB-212562', amount: 560 },
    { id: 4, date: 'June, 25, 2019', code: '#QW-103578', amount: 120 },
    { id: 5, date: 'March, 01, 2019', code: '#AR-803481', amount: 300 },
  ];

  return (
    <div className={`card pb-4 ${className}`}>
      <div className="card-header pb-0 p-3">
        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <h6 className="mb-0">Invoices</h6>
          </div>
          <div className="col-6 text-end">
            <ArgonButton color="success" size="sm" variant="outline">View All</ArgonButton>
          </div>
        </div>
      </div>
      <div className="card-body p-3 pb-0 mb-0">
        <ul className="list-group">
          {invoices.map((invoice, index) => (
            <li
              key={invoice.id}
              className={`list-group-item border-0 d-flex justify-content-between ps-0 ${index !== invoices.length - 1 ? 'mb-2' : ''
                } border-radius-lg`}
            >
              <div className="d-flex flex-column">
                <h6 className="text-dark mb-1 font-weight-bold text-sm">{invoice.date}</h6>
                <span className="text-xs">{invoice.code}</span>
              </div>
              <div className="d-flex align-items-center text-sm">
                ${invoice.amount}
                <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                  <i className="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i> PDF
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
