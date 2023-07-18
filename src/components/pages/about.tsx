import { Heading } from "react-bulma-components";
import { AboutContent } from "../../data/content";
import "./about.scss";
import ContentCard from "../content/card/content-card";
import ContentSection from "../content/section/content-section";
import vaqueroslogo from "/src/assets/vaqueros.png";
import fcb from "/src/assets/fcb.jpg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";


function About() {
  
  return (
    <div id="aboutComponent" className="about-container">
      <div className="about-grid-parent">
        <Fade bottom delay={500}>
          <div className="headers">
            <Heading textColor="cyan">About</Heading>
            <Heading textColor="cyan" subtitle>
              Me
            </Heading>
          </div>
        </Fade>

        <Fade bottom delay={500}>
          <div className="background">
            <ContentCard>
              <ContentSection
                title={AboutContent[0].title}
                description={AboutContent[0].description}
              />
            </ContentCard>
            Fade
          </div>
        </Fade>
        <Fade bottom delay={500}>
          <div className="education">
            <ContentCard>
              <ContentSection
                title={AboutContent[1].title}
                description={AboutContent[1].description}
              />
            </ContentCard>
          </div>
        </Fade>
        <div className="vaqueros">
          <Zoom delay={500}>
            <img className="vaq-img" src={vaqueroslogo} alt="vaqueros" />
          </Zoom>
        </div>
        <Fade bottom delay={500}>
          <div className="fcb">
            <img className="img-1" src={fcb} alt="fcb" />
            <img className="img-2" src={fcb} alt="fcb" />
            <img className="img-3" src={fcb} alt="fcb" />
            <img className="img-4" src={fcb} alt="fcb" />
          </div>
        </Fade>
        <div className="hobbies">
          <Fade bottom delay={500}>
            <ContentCard>
              <ContentSection
                title={AboutContent[2].title}
                description={AboutContent[2].description}
              />
            </ContentCard>
          </Fade>
        </div>
      </div>
    </div>
  );
}
export default About;
