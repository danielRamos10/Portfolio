import { Container, Content} from "react-bulma-components";
import './footer.scss'
function FooterComponent() {
  return (
    <footer>
      <Container breakpoint={'fluid'} backgroundColor="gunmetal" alignContent="center" pt={2}>
        <Content textAlign={'center'} textColor="cyan">
          <p>
            &copy; Copyright 2023 Daniel Ramos.
          </p>
        </Content>
      </Container>
    </footer>
  )
}

export default FooterComponent;