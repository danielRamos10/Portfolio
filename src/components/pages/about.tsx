import { Heading } from "react-bulma-components";
import { content } from "../../data/content";

import "./about.scss";
import ContentCard from "../content/card/content-card";
import ContentSection from "../content/section/content-section";

function About() {
  return (
    <div id="aboutComponent" className="about-container">
      <div className="headers">
        <Heading textColor="cyan">About</Heading>
        <Heading textColor="cyan" subtitle>
          Me
        </Heading>
      </div>

      <div className="background">
        <ContentCard>
          <ContentSection
            title={content[0].title}
            description={content[0].description}
          />
        </ContentCard>
      </div>
      <div className="education">
        <ContentCard>
          <ContentSection
            title={content[1].title}
            description={content[1].description}
          />
        </ContentCard>
      </div>
      <div className="hobbies">
        <ContentCard>
          <ContentSection
            title={content[2].title}
            description={content[1].description}
          />
        </ContentCard>
      </div>
    </div>
  );
}
export default About;
