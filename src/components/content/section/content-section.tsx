import { Section, Container, Heading, Image } from 'react-bulma-components'

interface ContentProps{
  title: string;
  description: string;
  image?: string;
}
 const ContentSection:React.FC<ContentProps> = ({title, description, image})=> {
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
export default ContentSection;