// import logo from './logo.svg';
import "./App.css";
import About from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="component-container">
      <NavBar />
      <Landing />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
