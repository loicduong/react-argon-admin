export default function AuthorsTable() {
  const headers = [
    { label: "Author", className: "" },
    { label: "Function", className: "ps-2" },
    { label: "Status", className: "text-center" },
    { label: "Employed", className: "text-center" },
    { label: "", className: "" }
  ];

  const authors = [
    {
      name: "John Michael",
      email: "john@creative-tim.com",
      function: "Manager",
      department: "Organization",
      status: "Online",
      employed: "23/04/18",
      image: new URL("@/assets/img/team-2.jpg", import.meta.url).href
    },
    {
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      function: "Programator",
      department: "Developer",
      status: "Offline",
      employed: "11/01/19",
      image: new URL("@/assets/img/team-3.jpg", import.meta.url).href
    },
    {
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      function: "Executive",
      department: "Projects",
      status: "Online",
      employed: "19/09/17",
      image: new URL("@/assets/img/team-4.jpg", import.meta.url).href
    },
    {
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      function: "Programator",
      department: "Developer",
      status: "Online",
      employed: "24/12/08",
      image: new URL("@/assets/img/team-3.jpg", import.meta.url).href
    },
    {
      name: "Richard Gran",
      email: "richard@creative-tim.com",
      function: "Manager",
      department: "Executive",
      status: "Offline",
      employed: "04/10/21",
      image: new URL("@/assets/img/team-2.jpg", import.meta.url).href
    },
    {
      name: "Miriam Eric",
      email: "miriam@creative-tim.com",
      function: "Programator",
      department: "Developer",
      status: "Offline",
      employed: "14/09/20",
      image: new URL("@/assets/img/team-4.jpg", import.meta.url).href
    }
  ];

  return (
    <div className="card">
      <div className="card-header pb-0">
        <h6>Authors table</h6>
      </div>
      <div className="card-body px-0 pt-0 pb-2">
        <div className="table-responsive p-0">
          <table className="table align-items-center mb-0">
            <thead>
              <tr>
                {
                  headers.map((header) => (
                    <th
                      key={header.label}
                      className={`text-secondary text-uppercase text-xxs font-weight-bolder opacity-7 ${header.className}`}
                    >
                      {header.label}
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {authors.map((author, index) => (
                <tr key={author.name}>
                  <td>
                    <div className="d-flex px-2 py-1">
                      <div>
                        <img
                          src={author.image}
                          className="avatar avatar-sm me-3"
                          alt={`user${index + 1}`}
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-sm">{author.name}</h6>
                        <p className="text-xs text-secondary mb-0">{author.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-xs font-weight-bold mb-0">{author.function}</p>
                    <p className="text-xs text-secondary mb-0">{author.department}</p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span className={`badge badge-sm bg-gradient-${author.status === 'Online' ? 'success' : 'secondary'}`}>
                      {author.status}
                    </span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">
                      {author.employed}
                    </span>
                  </td>
                  <td className="align-middle">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-secondary font-weight-bold text-xs"
                      data-toggle="tooltip"
                      data-original-title="Edit user"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
