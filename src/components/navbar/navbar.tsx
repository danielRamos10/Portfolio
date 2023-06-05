import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '/src/assets/log_svg.svg'
import { useState } from 'react';
import { Navbar, Button } from 'react-bulma-components';
import { faAddressCard, faHouse, faPhone, faLaptop } from '@fortawesome/free-solid-svg-icons';

import resumePDF from '/src/Resume-JDRP.pdf';

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const scrollToTop= ()=>{
    window.scrollTo({top: 0, behavior:'smooth'});
}
  return (
    <Navbar fixed='top' backgroundColor='gunmetal'>
      <Navbar.Brand>
        <Navbar.Burger className={` ${toggle ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => { setToggle(!toggle) }} backgroundColor='gunmetal' id='navbarBurger'>
        </Navbar.Burger>

        <a href="/" className='logo-container'>
          <img src={logo} alt="logo" className='nav-logo' />
        </a>

      </Navbar.Brand>

      <Navbar.Menu className={`navbar-menu ${toggle ? "is-active" : ""}`} alignContent='center' backgroundColor='gunmetal'>
        <Navbar.Container align='right' backgroundColor='gunmetal'>
          <Navbar.Item onClick={scrollToTop}>
            <span><FontAwesomeIcon icon={faHouse} /></span>
            Home
          </Navbar.Item>
          <Navbar.Item href='#aboutComponent'>
            <span><FontAwesomeIcon icon={faAddressCard} /></span>
            About
          </Navbar.Item>
          <Navbar.Item href='#projectsComponent'>
            <span><FontAwesomeIcon icon={faLaptop} /></span>
            Projects
          </Navbar.Item>
          <Navbar.Item href='#contactComponent'>
            <span>
              <FontAwesomeIcon icon={faPhone}/>
            </span>
            Contact
          </Navbar.Item>

          <Navbar.Item renderAs='span'>
            <Button color='flame' textColor='flash-white' textWeight='semibold' renderAs='a' href={resumePDF} target='_blank'>
              Resume
            </Button>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default NavBar;
