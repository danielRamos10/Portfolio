
import './mystyles.scss'
import logo from '../assets/log_svg.svg'
import { useState } from 'react';
import { Navbar } from 'react-bulma-components';
function NavBar() {

  const [toggle, setToggle] = useState(false);
  return (

    <Navbar backgroundColor='gunmetal'>
      <Navbar.Brand>
        <Navbar.Burger className={` ${toggle ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => { setToggle(!toggle) }} backgroundColor='gunmetal' id='navbarBurger'>
        </Navbar.Burger>

        <img src={logo} alt="logo" className='nav-logo' />

      </Navbar.Brand>

      <Navbar.Menu className={`navbar-menu ${toggle ? "is-active" : ""}`} alignContent='center' backgroundColor='gunmetal'>
        <Navbar.Container align='right' backgroundColor='gunmetal'>
          <Navbar.Item >
            Home
          </Navbar.Item>
          <Navbar.Item>
            About
          </Navbar.Item>
          <Navbar.Item>
            Skills
          </Navbar.Item>
          <Navbar.Item>
            Contact
          </Navbar.Item>
        </Navbar.Container>

      </Navbar.Menu>
    </Navbar>
  );
}

export default NavBar;
