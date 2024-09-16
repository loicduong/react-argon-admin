export default function CardToDo() {
  return (
    <div className="card bg-gradient-dark move-on-hover">
      <div className="card-body">
        <div className="d-flex">
          <h5 className="mb-0 text-white">To Do</h5>
          <div className="ms-auto">
            <h1 className="mb-0 text-white text-end mt-n2">7</h1>
            <p className="mb-0 text-sm text-white">items</p>
          </div>
        </div>
        <p className="mb-0 text-white">Shopping</p>
        <p className="mb-0 text-white">Meeting</p>
      </div>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="py-1 text-center w-100"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Show More"
      >
        <i className="text-white fas fa-chevron-down"></i>
      </a>
    </div>
  )
}
