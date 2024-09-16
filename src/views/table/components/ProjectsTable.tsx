export default function ProjectsTable() {
  const headers = [
    { label: "Project", className: "" },
    { label: "Budget", className: "ps-2" },
    { label: "Status", className: "ps-2" },
    { label: "Completion", className: "text-center ps-2" },
    { label: "", className: "" }
  ];

  const projects = [
    {
      name: "Spotify",
      logo: new URL("@/assets/img/small-logos/logo-spotify.svg", import.meta.url).href,
      budget: "$2,500",
      status: "working",
      completion: 60,
    },
    {
      name: "Invision",
      logo: new URL("@/assets/img/small-logos/logo-invision.svg", import.meta.url).href,
      budget: "$5,000",
      status: "done",
      completion: 100,
    },
    {
      name: "Jira",
      logo: new URL("@/assets/img/small-logos/logo-jira.svg", import.meta.url).href,
      budget: "$3,400",
      status: "canceled",
      completion: 30,
    },
    {
      name: "Slack",
      logo: new URL("@/assets/img/small-logos/logo-slack.svg", import.meta.url).href,
      budget: "$1,000",
      status: "canceled",
      completion: 0,
    },
    {
      name: "Webdev",
      logo: "https://demos.creative-tim.com/argon-dashboard/assets/img/small-logos/logo-webdev.svg",
      budget: "$14,000",
      status: "working",
      completion: 80,
    },
    {
      name: "Adobe XD",
      logo: new URL("@/assets/img/small-logos/logo-xd.svg", import.meta.url).href,
      budget: "$2,300",
      status: "done",
      completion: 100,
    }
  ];

  return (
    <div className="card mb-4">
      <div className="card-header pb-0">
        <h6>Projects table</h6>
      </div>
      <div className="card-body px-0 pt-0 pb-2">
        <div className="table-responsive p-0">
          <table className="table align-items-center justify-content-center mb-0">
            <thead>
              <tr>
                {headers.map((header) => (
                  <th
                    key={header.label}
                    className={`text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ${header.className}`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex px-2">
                      <div>
                        <img
                          src={project.logo}
                          className="avatar avatar-sm rounded-circle me-2"
                          alt={project.name}
                        />
                      </div>
                      <div className="my-auto">
                        <h6 className="mb-0 text-sm">{project.name}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-sm font-weight-bold mb-0">{project.budget}</p>
                  </td>
                  <td>
                    <span className="text-xs font-weight-bold">{project.status}</span>
                  </td>
                  <td className="align-middle text-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="me-2 text-xs font-weight-bold">{project.completion}%</span>
                      <div>
                        <div className="progress">
                          <div
                            className={`progress-bar bg-gradient-${project.completion === 100 ? 'success' : project.completion === 0 ? 'secondary' : 'info'}`}
                            role="progressbar"
                            aria-valuenow={project.completion}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: `${project.completion}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">
                    <button
                      className="btn btn-link text-secondary mb-0"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                    </button>
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
