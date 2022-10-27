// import logo from './logo.svg';
import './App.css';
import About from './Components/AboutMe/AboutMe';
import Landing from './Components/Landing/Landing';
//import Carousel from './Components/Carousel/Carousel';
import NavBar from './Components/NavBar/Navbar';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Landing/>
      <About/>
    </div>
  );
}

export default App;
