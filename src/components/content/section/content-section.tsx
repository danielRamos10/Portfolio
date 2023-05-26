import { Section, Container, Heading } from 'react-bulma-components'

export default function ContentSection() {
  return (
    <>
    <Section>
      <Container>
        <Heading>
          Section
        </Heading>
        <Heading subtitle>
          A simple container to divide your page into{' '}
          <strong>
            sections
          </strong>
          , like the one you are currently reading
        </Heading>
      </Container>
    </Section>
  </>
  )
}
