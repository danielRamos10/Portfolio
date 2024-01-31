import { Section, Container, Heading } from 'react-bulma-components'

interface ContentProps{
  title: string;
  description: string;

}
 const ContentSection:React.FC<ContentProps> = ({title, description})=> {
  return (
    <Section style={{zIndex: '1'}} >
      <Container>
        <Heading textColor='caribbean-current' textAlign={'center'}>
          {title}
        </Heading>
        <Heading subtitle textColor='oldlace' mt={1}>
         {description}
        </Heading>
      </Container>
    </Section>
  )
}
export default ContentSection;