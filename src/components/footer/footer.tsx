import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function FooterComponent() {
  return (
    <div className="footer-container">
      <div className="inside__footer">
        <p className="copyright">&copy; Daniel Ramos. All Rights Reserved.</p>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/jorgedramosposadas/"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="icon linkedin" />
          </a>
          <a
            href="https://github.com/danielRamos10"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faGithub} className="icon github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
