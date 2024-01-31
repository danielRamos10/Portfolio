import { Heading } from "react-bulma-components";
import { AboutContent } from "../../data/content";
import "./about.scss";
import ContentCard from "../content/card/content-card";
import ContentSection from "../content/section/content-section";
import vaqueroslogo from "/src/assets/vaqueros.png";
import fcb from "/src/assets/fcb.jpg";



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
                description={AboutContent[0].description}
              />
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
       
        <div className="vaqueros">
         
            <img className="vaq-img" src={vaqueroslogo} alt="vaqueros" />
         
        </div>
        
          <div className="fcb">
            <img className="img-1" src={fcb} alt="fcb" />
            <img className="img-2" src={fcb} alt="fcb" />
            <img className="img-3" src={fcb} alt="fcb" />
            <img className="img-4" src={fcb} alt="fcb" />
          </div>
       
        <div className="hobbies">
         
            <ContentCard>
              <ContentSection
                title={AboutContent[2].title}
                description={AboutContent[2].description}
              />
            </ContentCard>
        
        </div>
      </div>
    </div>
  );
}
export default About;
