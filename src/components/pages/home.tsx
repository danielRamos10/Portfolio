import "./home.scss";
import { Heading } from "react-bulma-components";

function Home() {
  return (
    <div className="home-container" id="homeComponent">
      <Heading className="intro">Hello, my name is</Heading>
      <Heading className="name anim-typewriter">Daniel Ramos</Heading>
      <Heading className="occupation">Frontend Developer</Heading>
      <div className="img-container">
        <div className="my-image"></div>
      </div>
    </div>
  );
}

export default Home;
