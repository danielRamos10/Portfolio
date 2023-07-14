import { Container, Heading, Section } from "react-bulma-components";
import './project-section.scss'
interface ContentProps {
  title: string;
  description: string;
  image?: string;
}
const ProjectSection: React.FC<ContentProps> = ({ title, description, image}) => {
  return (
    <Section style={{ zIndex: "1" }}>
      <Container>
        <Heading textColor="flame" textAlign={'center'}>{title}</Heading>
        <Heading subtitle textColor="flash-white">
          {description}
        </Heading>
        <img className='project-image' src={image} alt="image"/>
      </Container>
    </Section>
  );
};
export default ProjectSection;
