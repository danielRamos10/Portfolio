import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Content, Heading } from "react-bulma-components";
function FooterComponent() {
  return (
    <footer className="footer-container">
      <div className="copyright">
        <Heading size={6} textColor="cyan" alignContent="center">&copy; Copyright 2023 Daniel Ramos.</Heading>
      </div>
      <div className="brands">
        <Content
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          textColor="cyan"
        >
          <p>
            <a href="https://www.linkedin.com/">LinkedIn</a>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </p>
          <p>
            <a href="https://github.com/">GitHub</a>
            <FontAwesomeIcon icon={faGithub} />
          </p>
        </Content>
      </div>
    </footer>
  );
}

export default FooterComponent;
