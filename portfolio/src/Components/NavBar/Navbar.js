import "./NavBar.css";
import logo from './logo-hres.png'


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="togglerIcon">
          <i className="fa-solid fa-bars"></i>
          </span>
        </button>
        <div className="navbar-brand">
          <img src={logo} className="logo-img" alt="logo" />
        </div>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
