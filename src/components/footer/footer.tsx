import { Content} from "react-bulma-components";
import './footer.scss'
import ContentCard from "../content/card/content-card";
function FooterComponent() {
  return (
    <footer className="footer-container">
      <ContentCard>
        <Content textAlign={'center'} textColor="cyan" backgroundColor="gunmetal" justifyContent="center" flexDirection="column">
          <p>
            &copy; Copyright 2023 Daniel Ramos.
          </p>
        </Content>
        </ContentCard>
    </footer>
  )
}

export default FooterComponent;