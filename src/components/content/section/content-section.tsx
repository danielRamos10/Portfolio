import { Section, Container, Heading } from 'react-bulma-components'

interface ContentProps{
  title: string;
  description: string;
}
 const ContentSection:React.FC<ContentProps> = ({title, description})=> {
  return (
    <Section style={{zIndex: '1'}} p={6}>
      <Container>
        <Heading textColor='cyan' textAlign={'center'} mt={5}>
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