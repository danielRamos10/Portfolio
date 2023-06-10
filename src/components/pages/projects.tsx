import ProjectCard from "../content/card/project-card";
import ProjectSection from "../content/section/project-content";
import "./projects.scss";
import { ProjectContent } from "../../data/project-content";
import { Heading } from "react-bulma-components";
function Project() {
  return (
    <div id="projectsComponent" className="project-container">
      <Heading textColor="cyan">Projects</Heading>
      <div className="project-parent">
        <div className="leafybuddy">
          <ProjectCard image={ProjectContent[0].image || ''}>
            <ProjectSection
              title={ProjectContent[0].title}
              description={ProjectContent[0].description}
            />
          </ProjectCard>
        </div>
        <div className="riovax">
          <ProjectCard image={ProjectContent[1].image || ''}>
            <ProjectSection
                          title={ProjectContent[1].title}
                          description={ProjectContent[1].description}          />
          </ProjectCard>
        </div>
        <div className="pixelgram">
          <ProjectCard  image={ProjectContent[2].image || ''}>
            <ProjectSection
    
              title={ProjectContent[2].title}
              description={ProjectContent[2].description}
            />
          </ProjectCard>
        </div>
        <div className="jbook">
          <ProjectCard image={ProjectContent[3].image || ''}>
            <ProjectSection
              title={ProjectContent[3].title}
              description={ProjectContent[3].description}
            />
          </ProjectCard>
        </div>
      </div>
    </div>
  );
}

export default Project;
