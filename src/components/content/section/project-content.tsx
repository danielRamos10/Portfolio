import { Button, Container, Heading, Section } from "react-bulma-components";
import "./project-section.scss";
interface ContentProps {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
}
const ProjectSection: React.FC<ContentProps> = ({
  title,
  description,
  image,
  techStack,
}) => {
  return (
    <Section style={{ zIndex: "1" }}>
      <Container>
        <Heading textColor='flame' textAlign={"center"}>
          {title}
        </Heading>
      
        <Heading subtitle textColor='flash-white' mt={1}>
          {description}
        </Heading>
        <div className='tech-group'>
          {techStack.map((tech) => (
            <Button
              size={"small"}
              key={tech}
              className='tech-btn'
              color={tech}
              textColor='white'
            >
              {tech}
            </Button>
          ))}
        </div>
        <img className='project-image' src={image} alt='image' />
       
      </Container>
    </Section>
  );
};
export default ProjectSection;
