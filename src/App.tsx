import FooterComponent from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Skills from "./components/pages/skills";

function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
    <FooterComponent/>
    </div>
  
  )
}

export default App;
