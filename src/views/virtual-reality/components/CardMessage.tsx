export default function CardMessage() {
  return (
    <div className="mt-4 card move-on-hover">
      <div className="card-body">
        <div className="d-flex">
          <p className="my-auto">Messages</p>
          <div className="ms-auto">
            <div className="avatar-group">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="border-0 avatar avatar-sm rounded-circle"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="2 New Messages"
              >
                <img
                  alt="Image placeholder"
                  src={new URL("@/assets/img/team-1.jpg", import.meta.url).href}
                />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="border-0 avatar avatar-sm rounded-circle"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="1 New Message"
              >
                <img
                  alt="Image placeholder"
                  src={new URL("@/assets/img/team-2.jpg", import.meta.url).href}
                />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="border-0 avatar avatar-sm rounded-circle"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="13 New Messages"
              >
                <img
                  alt="Image placeholder"
                  src={new URL("@/assets/img/team-3.jpg", import.meta.url).href}
                />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="border-0 avatar avatar-sm rounded-circle"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="7 New Messages"
              >
                <img
                  alt="Image placeholder"
                  src={new URL("@/assets/img/team-4.jpg", import.meta.url).href}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
