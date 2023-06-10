import "./home.scss";
import { Heading, Button, Image } from "react-bulma-components";

function Home() {
  return (
    <div className="home-container">
      <Heading className="intro">Hello, my name is</Heading>
      <Heading className="name anim-typewriter">Daniel Ramos</Heading>
      <Heading className="ocupation">Frontend Developer</Heading>
      <div className="img-container">
        <div className="my-image"></div>
      </div>
    </div>
  );
}

export default Home;
