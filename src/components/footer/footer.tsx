import { Container, Content, Footer } from "react-bulma-components";
import './footer.scss'
function FooterComponent() {
  return (
    <footer>
      <Container breakpoint={'fluid'} backgroundColor="gunmetal" alignContent="center" mt={2} pt={2}>
        <Content textAlign={'center'} textColor="cyan">
          <p>
            <strong>Bulma</strong> by{' '}
            <a href="http://jgthms.com">Jeremy Thomas</a>. The source code
            is licensed under
            <a href="http://opensource.org/licenses/mit-license.php">
              {' '}
              MIT
            </a>
            . The website content is licensed{' '}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </Content>
      </Container>
    </footer>
  )
}

export default FooterComponent;