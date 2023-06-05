import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function FooterComponent() {
  return (
    <footer className="footer-container">
      <div className="inside__footer">
        <p className="copyright">&copy; Daniel Ramos. All Rights Reserved.</p>
        <div className="social">
          <a
            href="https://linkedin.com/in/danielramos"
            target="_blank"
            rel="noopener"
          ><FontAwesomeIcon icon={faLinkedinIn} className="icon linkedin"/></a>
          <a href="https://github.com/" target="_blank" rel="noopener" ><FontAwesomeIcon icon={faGithub} className="icon github"/></a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
