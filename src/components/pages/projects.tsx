import ProjectCard from "../content/card/project-card";
import ProjectSection from "../content/section/project-content";
import "./projects.scss";
import { ProjectContent } from "../../data/project-content";
import { Heading } from "react-bulma-components";
import leafybuddy from "/src/assets/leafybuddy.png";
import pixelgram from "/src/assets/pixelgram.png";
import riovax from "/src/assets/riovax.png";
import jbook from "/src/assets/jbook-img.png";
import Slide from "react-reveal/Slide";

function Project() {
  return (
    <div id="projectsComponent" className="project-container">
      <Heading textColor="flame">Projects</Heading>

      <div className="project-grid-parent">
        <Slide bottom>
          <div className="leafybuddy">
            <ProjectCard>
              <ProjectSection
                title={ProjectContent[0].title}
                description={ProjectContent[0].description}
                image={leafybuddy}
              />
            </ProjectCard>
          </div>
        </Slide>
        <Slide bottom>
          <div className="riovax">
            <ProjectCard>
              <ProjectSection
                title={ProjectContent[1].title}
                description={ProjectContent[1].description}
                image={riovax}
              />
            </ProjectCard>
          </div>
        </Slide>
        <Slide bottom>
          <div className="pixelgram">
            <ProjectCard>
              <ProjectSection
                title={ProjectContent[2].title}
                description={ProjectContent[2].description}
                image={pixelgram}
              />
            </ProjectCard>
          </div>
        </Slide>
        <Slide bottom>
          <div className="jbook">
            <ProjectCard>
              <ProjectSection
                title={ProjectContent[3].title}
                description={ProjectContent[3].description}
                image={jbook}
              />
            </ProjectCard>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Project;
