import AuthorsTable from "./components/AuthorsTable";
import ProjectsTable from "./components/ProjectsTable";

export default function Table() {
  return (
    <div className="py-4 container-fluid">
      <div className=" row">
        <div className="col-12">
          <AuthorsTable />
        </div>
      </div>
      <div className="mt-4 row">
        <div className="col-12">
          <ProjectsTable />
        </div>
      </div>
    </div>
  );
}
