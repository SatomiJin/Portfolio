import Card from "../Card/Card";
import "./Project.scss";
import * as dataProject from "../../dataProject";
function Project() {
  let data = dataProject.projects;
  return (
    <div id="project" className="project-container">
      <div className="project-content grid wide">
        <div className="row">
          <div className="project-title col l-o-1 m-4 m-o-4 c-4 c-o-4">Project</div>
          <div className="project-body col l-10 l-o-1 m-10 m-o-1 c-12">
            {data && data.length > 0 ? (
              data.map((item, index) => {
                return <Card key={index} data={item} count={index + 1} />;
              })
            ) : (
              <div className="notification col l-10 l-o-1 m-10 m-o-1 c-12">Coming soon</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
