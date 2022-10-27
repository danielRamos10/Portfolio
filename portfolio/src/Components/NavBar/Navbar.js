import "./NavBar.css";
import logo from "./logo-hres.png";

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
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link " href="#home">
                <i className="list-icon fa-solid fa-house-laptop "></i>
                <span className="list-item">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <i className="list-icon fa-regular fa-address-card "></i>
                <span className="list-item">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                <i className="list-icon fa-solid fa-person-chalkboard "></i>
                <span className="list-item">Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#contact">
                <i className="list-icon fa-solid fa-blender-phone "></i>
                <span className="list-item">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
