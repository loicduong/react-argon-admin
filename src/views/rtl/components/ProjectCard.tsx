interface Props {
  action?: string
  anotherAction?: string
  data1?: string
  data2?: string
  data3?: string
  data4?: string
  data5?: string
  data6?: string
  desc?: string
  descBold?: string
  empty?: string
  somethingElse?: string
  th1?: string
  th2?: string
  th3?: string
  th4?: string
  title?: string
}

export default function ProjectCard({
  action = "Action",
  anotherAction = "Another Action",
  data1 = "Material XD Version",
  data2 = "Add Progress Track",
  data3 = "Fix Platform Errors",
  data4 = "Launch our Mobile App",
  data5 = "Add the New Pricing Page",
  data6 = "Redesign New Online Shop",
  desc = "this month",
  descBold = "30 done",
  empty = "Not set",
  somethingElse = "Something else here",
  th1 = "COMPANIES",
  th2 = "MEMBERS",
  th3 = "BUDGET",
  th4 = "COMPLETION",
  title = "Projects table",
}: Props) {
  return (
    <div className="card">
      <div className="card-header pb-0">
        <div className="row">
          <div className="col-lg-6 col-7">
            <h6>{ title }</h6>
            <p className="text-sm mb-0">
              <i className="fa fa-check text-info" aria-hidden="true"></i>
              <span className="font-weight-bold ms-1">{ descBold }</span>
              { desc }
            </p>
          </div>
          <div className="col-lg-6 col-5 my-auto text-end">
            <div className="dropdown float-lg-end pe-4">
              <a
                className="cursor-pointer"
                id="dropdownTable"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i>
              </a>
              <ul
                className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                aria-labelledby="dropdownTable"
              >
                <li>
                  <a
                    className="dropdown-item border-radius-md"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    {action}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item border-radius-md"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    {anotherAction}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item border-radius-md"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    {somethingElse}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body px-0 pb-2">
        <div className="table-responsive">
          <table className="table align-items-center mb-0">
            <thead>
              <tr>
                <th
                  className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  {th1}
                </th>
                <th
                  className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                >
                  {th2}
                </th>
                <th
                  className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  {th3}
                </th>
                <th
                  className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  {th4}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex py-1">
                    <div>
                      <img
                        src={new URL("@/assets/img/small-logos/logo-xd.svg", import.meta.url).href}
                        className="avatar avatar-sm me-3"
                        alt="xd"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="mb-0 text-sm me-3">Material XD { data1 }</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="avatar-group mt-2">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Ryan Tompson"
                    >
                      <img
                        src={new URL("@/assets/img/team-1.jpg", import.meta.url).href}
                        alt="team1"
                      />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Romina Hadid"
                    >
                      <img
                        src={new URL("@/assets/img/team-2.jpg", import.meta.url).href}
                        alt="team2"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Alexander Smith"
                    >
                      <img
                        src={new URL("@/assets/img/team-3.jpg", import.meta.url).href}
                        alt="team3"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Jessica Doe"
                    >
                      <img
                        src={new URL("@/assets/img/team-4.jpg", import.meta.url).href}
                        alt="team4"
                      />
                    </a>
                  </div>
                </td>
                <td className="align-middle text-center text-sm">
                  <span className="text-xs font-weight-bold">$14,000</span>
                </td>
                <td className="align-middle">
                  <div className="progress-wrapper w-75 mx-auto">
                    <div className="progress-info">
                      <div className="progress-percentage">
                        <span className="text-xs font-weight-bold">60%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-gradient-info w-60"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex py-1">
                    <div>
                      <img
                        src={new URL("@/assets/img/small-logos/logo-atlassian.svg", import.meta.url).href}
                        className="avatar avatar-sm me-3"
                        alt="atlassian"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="mb-0 text-sm me-3">{ data2 }</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="avatar-group mt-2">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Romina Hadid"
                    >
                      <img
                        src={new URL("@/assets/img/team-2.jpg", import.meta.url).href}
                        alt="team5"
                      />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Jessica Doe"
                    >
                      <img src={new URL("@/assets/img/team-4.jpg", import.meta.url).href} alt="team6" />
                    </a>
                  </div>
                </td>
                <td className="align-middle text-center text-sm">
                  <span className="text-xs font-weight-bold">$3,000</span>
                </td>
                <td className="align-middle">
                  <div className="progress-wrapper w-75 mx-auto">
                    <div className="progress-info">
                      <div className="progress-percentage">
                        <span className="text-xs font-weight-bold">10%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-gradient-info w-10"
                        role="progressbar"
                        aria-valuenow={10}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex py-1">
                    <div>
                      <img
                        src={new URL("@/assets/img/small-logos/logo-slack.svg", import.meta.url).href}
                        className="avatar avatar-sm me-3"
                        alt="team7"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="mb-0 text-sm me-3">{ data3 }</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="avatar-group mt-2">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Romina Hadid"
                    >
                      <img
                        src={new URL("@/assets/img/team-3.jpg", import.meta.url).href}
                        alt="team8"
                      />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Jessica Doe"
                    >
                      <img
                        src={new URL("@/assets/img/team-1.jpg", import.meta.url).href}
                        alt="team9"
                      />
                    </a>
                  </div>
                </td>
                <td className="align-middle text-center text-sm">
                  <span className="text-xs font-weight-bold">{ empty }</span>
                </td>
                <td className="align-middle">
                  <div className="progress-wrapper w-75 mx-auto">
                    <div className="progress-info">
                      <div className="progress-percentage">
                        <span className="text-xs font-weight-bold">100%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-gradient-success w-100"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex py-1">
                    <div>
                      <img
                        src={new URL("@/assets/img/small-logos/logo-spotify.svg", import.meta.url).href}
                        className="avatar avatar-sm me-3"
                        alt="spotify"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="mb-0 text-sm me-3">{ data4 }</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="avatar-group mt-2">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Ryan Tompson"
                    >
                      <img
                        src={new URL("@/assets/img/team-4.jpg", import.meta.url).href}
                        alt="user1"
                      />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Romina Hadid"
                    >
                      <img
                        src={new URL("@/assets/img/team-3.jpg", import.meta.url).href}
                        alt="user2"
                      />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Alexander Smith"
                    >
                      <img
                        src={new URL("@/assets/img/team-4.jpg", import.meta.url).href}
                        alt="user3"
                      />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Jessica Doe"
                    >
                      <img
                        src={new URL("@/assets/img/team-1.jpg", import.meta.url).href}
                        alt="user4"
                      />
                    </a>
                  </div>
                </td>
                <td className="align-middle text-center text-sm">
                  <span className="text-xs font-weight-bold">$20,500</span>
                </td>
                <td className="align-middle">
                  <div className="progress-wrapper w-75 mx-auto">
                    <div className="progress-info">
                      <div className="progress-percentage">
                        <span className="text-xs font-weight-bold">100%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-gradient-success w-100"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex py-1">
                    <div>
                      <img
                        src={new URL("@/assets/img/small-logos/logo-jira.svg", import.meta.url).href}
                        className="avatar avatar-sm me-3"
                        alt="jira"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="mb-0 text-sm me-3">{ data5 }</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="avatar-group mt-2">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Ryan Tompson"
                    >
                      <img
                        src={new URL("@/assets/img/team-4.jpg", import.meta.url).href}
                        alt="user5"
                      />
                    </a>
                  </div>
                </td>
                <td className="align-middle text-center text-sm">
                  <span className="text-xs font-weight-bold">$500</span>
                </td>
                <td className="align-middle">
                  <div className="progress-wrapper w-75 mx-auto">
                    <div className="progress-info">
                      <div className="progress-percentage">
                        <span className="text-xs font-weight-bold">25%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-gradient-info w-25"
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={25}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex py-1">
                    <div>
                      <img
                        src={new URL("@/assets/img/small-logos/logo-invision.svg", import.meta.url).href}
                        className="avatar avatar-sm me-3"
                        alt="invision"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="mb-0 text-sm me-3">{ data6 }</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="avatar-group mt-2">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Ryan Tompson"
                    >
                      <img
                        src={new URL("@/assets/img/team-1.jpg", import.meta.url).href}
                        alt="user6"
                      />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Jessica Doe"
                    >
                      <img
                        src={new URL("@/assets/img/team-4.jpg", import.meta.url).href}
                        alt="user7"
                      />
                    </a>
                  </div>
                </td>
                <td className="align-middle text-center text-sm">
                  <span className="text-xs font-weight-bold">$2,000</span>
                </td>
                <td className="align-middle">
                  <div className="progress-wrapper w-75 mx-auto">
                    <div className="progress-info">
                      <div className="progress-percentage">
                        <span className="text-xs font-weight-bold">40%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-gradient-info w-40"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={40}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
