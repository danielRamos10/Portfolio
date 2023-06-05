import FooterComponent from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Project from "./components/pages/projects";

function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    <FooterComponent/>
    </div>
  
  )
}

export default App;
