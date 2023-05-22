
import './mystyles.scss'
import { useState } from 'react';
import { Navbar } from 'react-bulma-components';
import logo from '../assets/logo_dr_hr.png'
function NavBar() {

  const [toggle, setToggle] = useState(false);
  return (

    <Navbar backgroundColor='blue-grey'>
      <Navbar.Brand>
        <Navbar.Item>
          <img src={logo} width="100%" />
        </Navbar.Item>

        <Navbar.Burger className={` ${toggle ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => { setToggle(!toggle) }} backgroundColor='blue-grey'>
        </Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu className={`navbar-menu ${toggle ? "is-active" : ""}`} alignContent='center' backgroundColor='blue-grey'>
        <Navbar.Container align='right' backgroundColor='blue-grey'>
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
