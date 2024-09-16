export default function CardCalendar() {
  return (
    <div className="overflow-hidden card move-on-hover">
      <div className="card-body">
        <div className="d-flex">
          <h6 className="mb-0 me-3">08:00</h6>
          <h6 className="mb-0">
            Synk up with Mark
            <small className="text-secondary font-weight-normal">Hangouts</small>
          </h6>
        </div>
        <hr className="horizontal dark" />
        <div className="d-flex">
          <h6 className="mb-0 me-3">09:30</h6>
          <h6 className="mb-0">
            Gym <br />
            <small className="text-secondary font-weight-normal">World Class</small>
          </h6>
        </div>
        <hr className="horizontal dark" />
        <div className="d-flex">
          <h6 className="mb-0 me-3">11:00</h6>
          <h6 className="mb-0">
            Design Review<br />
            <small className="text-secondary font-weight-normal">Zoom</small>
          </h6>
        </div>
      </div>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="py-1 text-center bg-gray-100 w-100"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Show More"
      >
        <i className="fas fa-chevron-down text-primary"></i>
      </a>
    </div>
  )
}
