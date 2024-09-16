export default function CardEmail() {
  return (
    <div className="mt-4 card move-on-hover">
      <div className="card-body">
        <div className="d-flex">
          <p className="mb-0">Emails (21)</p>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="ms-auto"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Check your emails"
          >
            Check
          </a>
        </div>
      </div>
    </div>
  )
}
