import { Heading } from "react-bulma-components";

import "./about.scss";
import ContentCard from "../content/card/content-card";
import ContentSection from "../content/section/content-section";
function About() {
  return (
      
    <div id="aboutComponent" className="about-container">
        <Heading textColor="cyan" textAlign={"center"}>
          About
        </Heading>
        <ContentCard>
          <ContentSection/>
        </ContentCard>
        <ContentCard>
          <ContentSection/>
        </ContentCard>
        <ContentCard>
          <ContentSection/>
        </ContentCard>
    </div>
  );
}
export default About;
