export default function BillingCard() {
  const billings = [
    {
      name: "Oliver Liam",
      company: "Viking Burrito",
      email: "oliver@burrito.com",
    },
    {
      name: "Lucas Harper",
      company: "Stone Tech Zone",
      email: "lucas@stone-tech.com",
    },
    {
      name: "Ethan James",
      company: "Fiber Notion",
      email: "ethan@fiber.com",
    },
  ]

  return (
    <div className="card">
      <div className="card-header pb-0 px-3">
        <h6 className="mb-0">Billing Information</h6>
      </div>
      <div className="card-body pt-4 p-3">
        <ul className="list-group">
          {billings.map((billing, index) => (
            <li
              className={`list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg ${index ? "mt-3" : ""}`}
              key={billing.name}
            >
              <div className="d-flex flex-column">
                <h6 className="mb-3 text-sm">{billing.name}</h6>
                <span className="mb-2 text-xs">
                  Company Name: <span className="text-dark font-weight-bold ms-sm-2">{billing.company}</span>
                </span>
                <span className="mb-2 text-xs">
                  Email Address: <span className="text-dark ms-sm-2 font-weight-bold">{billing.email}</span>
                </span>
                <span className="text-xs">
                  VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span>
                </span>
              </div>
              <div className="ms-auto text-end">
                <a
                  className="btn btn-link text-danger text-gradient px-3 mb-0"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
                </a>
                <a
                  className="btn btn-link text-dark px-3 mb-0"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
