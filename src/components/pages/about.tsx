import { Heading } from "react-bulma-components";
import { AboutContent } from "../../data/content";

import "./about.scss";
import ContentCard from "../content/card/content-card";
import ContentSection from "../content/section/content-section";

function About() {
  return (
    <div id="aboutComponent" className="about-container">

      <div className="about-grid-parent">
        <div className="headers">
          <Heading textColor="cyan">About</Heading>
          <Heading textColor="cyan" subtitle>
            Me
          </Heading>
        </div>

        <div className="background">
          <ContentCard>
            <ContentSection
              title={AboutContent[0].title}
              description={AboutContent[0].description} />
          </ContentCard>
        </div>
        <div className="education">
          <ContentCard>
            <ContentSection
              title={AboutContent[1].title}
              description={AboutContent[1].description}
            />
          </ContentCard>
        </div>
        <div className="hobbies">
          <ContentCard>
            <ContentSection
              title={AboutContent[2].title}
              description={AboutContent[1].description}
            />
          </ContentCard>
        </div>

      </div>

    </div>
  );
}
export default About;
