import { Section, Container, Heading } from 'react-bulma-components'

export default function ContentSection() {
  return (
    <>
    <Section mb={1} mt={1}>
      <Container>
        <Heading textColor='flame'>
          Section
        </Heading>
        <Heading subtitle textColor='flash-white'>
          A simple container to divide your page into sections
          , like the one you are currently reading
        </Heading>
      </Container>
    </Section>
  </>
  )
}
