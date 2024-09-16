export default function CardPlayer() {
  return (
    <div className="card card-background card-background-mask-primary move-on-hover align-items-start">
      <div className="cursor-pointer">
        <div
          className="full-background"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80")',
          }}
        ></div>
        <div className="card-body">
          <h5 className="mb-0 text-white">Some Kind Of Blues</h5>
          <p className="text-sm text-white">Deftones</p>
          <div className="mt-5 d-flex">
            <button
              className="p-2 mb-0 btn btn-outline-white rounded-circle"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Prev"
            >
              <i className="p-2 fas fa-backward"></i>
            </button>
            <button
              className="p-2 mx-2 mb-0 btn btn-outline-white rounded-circle"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Pause"
            >
              <i className="p-2 fas fa-play"></i>
            </button>
            <button
              className="p-2 mb-0 btn btn-outline-white rounded-circle"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Next"
            >
              <i className="p-2 fas fa-forward"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
