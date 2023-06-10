import { Section, Container, Heading, Image } from 'react-bulma-components'

interface ContentProps{
  title: string;
  description: string;
}
 const ProjectSection:React.FC<ContentProps> = ({title, description})=> {
  return (
    <Section style={{zIndex:"1"}}>
      <Container>
        <Heading textColor='cyan'>
          {title}
        </Heading>
        <Heading subtitle textColor='flash-white'>
         {description}
        </Heading>
      </Container>
    </Section>
  )
}
export default ProjectSection;