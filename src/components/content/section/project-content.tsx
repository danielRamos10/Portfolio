import { Container, Heading, Section } from "react-bulma-components";

interface ContentProps {
  title: string;
  description: string;
  image?: string;
}
const ProjectSection: React.FC<ContentProps> = ({ title, description }) => {
  return (
    <Section style={{ zIndex: "1" }}>
      <Container>
        <Heading textColor="cyan">{title}</Heading>
        <Heading subtitle textColor="flash-white">
          {description}
        </Heading>
      </Container>
    </Section>
  );
};
export default ProjectSection;
