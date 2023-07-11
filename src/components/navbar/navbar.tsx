import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "/src/assets/log_svg.svg";
import { useEffect, useState } from "react";
import { Navbar, Button } from "react-bulma-components";
import {
  faAddressCard,
  faHouse,
  faPhone,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

import resumePDF from "/src/JDRP-RESUME-d.pdf";

function NavBar() {
  const [toggle, setToggle] = useState(false);


  const scrollToTop = () => {
    setToggle(!toggle);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Navbar className="navbar-container">
      <Navbar.Brand>
        <Navbar.Burger
          className={` ${toggle ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => {
            setToggle(!toggle);
          }}
          id="navbarBurger"
        ></Navbar.Burger>

        <a href="/" className="logo-container">
          <img src={logo} alt="logo" className="nav-logo" />
        </a>
      </Navbar.Brand>

      <Navbar.Menu

        className={`navbar-menu ${toggle ? "is-active" : ""}`}
        alignContent="center"
      >
        <Navbar.Container align="right">
          <Navbar.Item onClick={
            scrollToTop
          }>
            <span>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            Home
          </Navbar.Item>
          <Navbar.Item href="#aboutComponent" onClick={() => { setToggle(!toggle) }}>
            <span>
              <FontAwesomeIcon icon={faAddressCard} />
            </span>
            About
          </Navbar.Item>
          <Navbar.Item href="#projectsComponent" onClick={() => { setToggle(!toggle) }}>
            <span>
              <FontAwesomeIcon icon={faLaptop} />
            </span>
            Projects
          </Navbar.Item>
          <Navbar.Item href="#contactComponent" onClick={() => { setToggle(!toggle) }}>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            Contact
          </Navbar.Item>

          <Navbar.Item renderAs="span">
            <Button
              textWeight="semibold"
              renderAs="a"
              href={resumePDF}
              target="_blank"
            >
              Resume
            </Button>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default NavBar;
