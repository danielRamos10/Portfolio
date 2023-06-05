import { Section, Container, Heading } from 'react-bulma-components'

export default function ContentSection() {
  return (
    <>
    <Section>
      <Container>
        <Heading textColor='flame'>
          Section
        </Heading>
        <Heading subtitle textColor='cyan'>
          A simple container to divide your page into sections
          , like the one you are currently reading
        </Heading>
      </Container>
    </Section>
  </>
  )
}
