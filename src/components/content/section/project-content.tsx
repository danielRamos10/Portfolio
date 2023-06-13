import { Section, Container, Heading, Image } from 'react-bulma-components'

interface ContentProps{
  title: string;
  description: string;
  image?: string
}
 const ProjectSection:React.FC<ContentProps> = ({title, description})=> {
  return (
    <div>
      <Section>
      <Container>
        <Heading textColor='cyan'>
          {title}
        </Heading>
        <Heading subtitle textColor='flash-white'>
         {description}
        </Heading>
      </Container>
    </Section>
    </div>
    
  )
}
export default ProjectSection;