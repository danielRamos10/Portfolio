import { Section, Container, Heading, Button } from 'react-bulma-components'

interface ContentProps{
  title: string;
  description: string;

}
 const ContentSection:React.FC<ContentProps> = ({title, description})=> {
  return (
    <Section style={{zIndex: '1'}} >
      <Container>
        <Heading textColor='cyan' textAlign={'center'}>
          {title}
        </Heading>
        <Heading subtitle textColor='flash-white' mt={1}>
         {description}
        </Heading>
      </Container>
    </Section>
  )
}
export default ContentSection;